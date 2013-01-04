define(
    [ 'backbone', 'spin', 'modules/base/views/main'],
    function(Backbone, Spinner, MainView) {

        var opts = {
            lines: 13, // The number of lines to draw
            length: 30, // The length of each line
            width: 9, // The line thickness
            radius: 40, // The radius of the inner circle
            corners: 1, // Corner roundness (0..1)
            rotate: 45, // The rotation offset
            color: '#000', // #rgb or #rrggbb
            speed: 2.2, // Rounds per second
            trail: 100, // Afterglow percentage
            shadow: false, // Whether to render a shadow
            hwaccel: false, // Whether to use hardware acceleration
            className: 'spinner', // The CSS class to assign to the spinner
            zIndex: 2e9, // The z-index (defaults to 2000000000)
            top: 150, // Top position relative to parent in px
            left: 'auto' // Left position relative to parent in px
        };

        var app = {
            Router: null,
            Spinner: new Spinner(opts),
            MainView: new MainView(),
            UserId: '0',
            UserName: 'admin',
            Routine : function(){
                if (app.UserId === undefined)
                    app.Router.navigate("signin", {trigger: true});
                else{
                    require(
                        [ 'modules/widget/views/widgetslist', 'page/collection'],
                        function (WidgetsListView, PageCollection) {
                            var pages = new PageCollection();
                            pages.filters['created_by'] = app.UserId;
                            pages.fetch({
                                success: function(){
                                    var widgetsList = new WidgetsListView({collection: pages});
                                    app.MainView.render(widgetsList.render(), '.widgetslist');
                                }
                            });
                        }
                    );
                }
            }
        };

        app.Router = Backbone.Router.extend({
            routes: {
                ''                    : 'dashboard',
                'dashboard'           : 'dashboard',
                'widget/:pageId'    : 'widget',
                'addwidget'           : 'addwidget',
                'account'     : 'account',
                'signin': 'signin',
                'signout': 'signout'
            },
            dashboard: function() {
                /**
                 * Test range of Collection
                 * If > 0 load widget route
                 */
            },

            account: function() {
                app.MainView.empty();
                app.Spinner.spin(document.getElementById('main'));
                require(
                    ['modules/user/views/user',  'user/model'],
                    function (UserView, UserModel) {
                        var user = new UserModel();
                        user.urlRoot = user.url() + app.UserId;
                        user.fetch({
                            success: function(){
                                app.Spinner.stop();
                                app.Routine();
                                var userView = new UserView({model: user})
                                app.MainView.render(userView.render(), '.commonplay-row1-col1');
                            }
                        });
                    }
                );
            },

            addwidget: function() {
                app.MainView.empty();
                app.Spinner.spin(document.getElementById('main'));
                require(
                    ['modules/widget/views/addwidget', 'page/collection'],
                    function (AddWidgetView, PageCollection) {
                        var pages = new PageCollection();
                        pages.on('add', function(page){
                            page.save({
                                success: function(){
                                    app.Router.navigate("widget/" + page.get('id'), {trigger: true});
                                }
                            });
                        });
                        pages.filters['username'] = app.UserName;
                        pages.fetch({
                            success: function(){
                                app.Spinner.stop();
                                app.Routine();
                                var addWidgetView = new AddWidgetView({collection: pages, model: pages.at(0)});
                                app.MainView.render(addWidgetView.render(), '.commonplay-row1-col1');
                            }.bind(this)
                        });
                    }
                );
            },

            signin: function(){
                app.MainView.empty();
                app.Spinner.spin(document.getElementById('main'));
                require(
                    ['modules/user/views/signin', 'user/model'],
                    function(SigninView, UserModel){
                        app.Spinner.stop();
                        app.Routine();
                        var signinView = new SigninView( app.User );
                        app.MainView.empty();
                        app.MainView.render(signinView.render(), '.commonplay-row1-col1');
                    });
            },

            widget: function(pageId) {
                app.MainView.empty();
                app.Spinner.spin(document.getElementById('main'));
                require(['modules/widget/views/widget', 'modules/widget/views/lives', 'modules/widget/views/speakers',
                        'modules/widget/views/moderators', 'page/model', 'live/collection', 'user/collection'],
                        function(WidgetView, LivesView, SpeakersView, ModeratorsView, PageModel, LivesCollection, UsersCollection){
                            var  page = new PageModel({id: pageId });
                            var lives = new LivesCollection();
                            page.fetch({
                                success: function(){
                                    app.Spinner.stop();
                                    app.Routine();
                                    var widgetView = new WidgetView({model: page});
                                    var speakers = new UsersCollection(page.get('speakers'));
                                    speakers.on('add', function(speaker){
                                        page.get('speakers').push(speaker.get('email'));
                                        page.set('speakers', page.get('speakers'));
                                        page.save();
                                    });
                                    var speakersView = new SpeakersView({collection: speakers});
                                    var moderators = new UsersCollection(page.get('moderators'));
                                    moderators.on('add', function(moderator){moderator.save();});
                                    var moderatorsView = new ModeratorsView({collection: moderators});
                                    app.MainView
                                    .render(widgetView.render(), '.commonplay-row1-col1')
                                    .render(speakersView.render(), '.commonplay-row2-col3')
                                    .render(moderatorsView.render(), '.commonplay-row2-col2');
                                }
                            });
                            lives.filters['page'] = pageId;
                            lives.fetch({
                                success: function(){
                                    var livesView = new LivesView({collection: lives});
                                    app.MainView.render(livesView.render(), '.commonplay-row2-col1');
                                }
                            });
                        });
            }
        });

        app.Router = new app.Router();
        Backbone.history.start(/*{pushState: true}*/);
        return app;
    }
);
