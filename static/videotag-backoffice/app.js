define(
    [ 'backbone', 'spin', 'modules/base/views/main', 'modules/widget/views/widgetslist', 'page/collection'],
    function(Backbone, Spinner, MainView, WidgetsListView, PageCollection) {

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
            Pages: new PageCollection(),
            WidgetsList: null,
            initialize: function(){

                app.Pages.filters['created_by'] = require.appUser.id;
                app.WidgetsList = new WidgetsListView({collection: app.Pages});
                app.Pages.fetch({
                    success: function(){app.WidgetsList.render();}
                });
                app.Pages.on('add', function(page){
                    page.save();
                    app.Pages.fetch({
                        success: function(){
                            app.WidgetsList.render();
                            // app.Router.navigate("widget/" + pages.getpage.get('id'), {trigger: true});
                        }
                    });
                });
            }
        };

        app.Router = Backbone.Router.extend({
            routes: {
                ''              : 'dashboard',
                'addwidget'     : 'addwidget',
                'widget/:pageId': 'widget',
                'account'     : 'account',
            },

            dashboard: function() {
                if( window.location.href !== 'http://localhost:9000/')
                    return;
                else
                    $('.commonplay-row1-col1').html('<div class="hero-unit"><h1>Välkommen, '+require.appUser.username+'!</h1></div>');
            },

            addwidget: function() {
                app.MainView.empty();
                app.Spinner.spin(document.getElementById('main'));
                require(
                    ['modules/widget/views/addwidget'],
                    function (AddWidgetView) {
                        app.Pages.fetch({
                            success: function(){
                                app.Spinner.stop();
                                var addWidgetView = new AddWidgetView({collection: app.Pages, model: app.Pages.at(0)});
                                app.MainView.render(addWidgetView.render(), '.commonplay-row1-col1');
                            }.bind(this)
                        });
                    }
                );
            },

            account: function() {
                app.MainView.empty();
                app.Spinner.spin(document.getElementById('main'));
                require(
                    ['modules/user/views/user',  'user/model'],
                    function (UserView, UserModel) {
                        var user = new UserModel();
                        user.urlRoot = user.url() + require.appUser.id;
                        user.fetch({
                            success: function(){
                                app.Spinner.stop();
                                var userView = new UserView({model: user})
                                app.MainView.render(userView.render(), '.commonplay-row1-col1');
                            }
                        });
                    }
                );
            },

            widget: function(pageId) {
                app.MainView.empty();
                app.Spinner.spin(document.getElementById('main'));
                require(['modules/widget/views/widget', 'modules/widget/views/lives', 'modules/widget/views/speakers',
                        'modules/widget/views/moderators', 'page/model', 'live/collection', 'user/collection'],
                        function(WidgetView, LivesView, SpeakersView, ModeratorsView, PageModel, LivesCollection, UsersCollection){
                            var  page = new PageModel({id: pageId });
                            page.fetch({
                                success: function(){
                                    app.Spinner.stop();
                                    var widgetView = new WidgetView({model: page});
                                    var speakers = new UsersCollection(page.get('speakers'));
                                    speakers.on('add', function(speaker){});
                                    var speakersView = new SpeakersView({collection: speakers});
                                    var moderators = new UsersCollection(page.get('moderators'));
                                    moderators.on('add', function(moderator){});
                                    var moderatorsView = new ModeratorsView({collection: moderators});
                                    app.MainView
                                    .render(widgetView.render(), '.commonplay-row1-col1')
                                    .render(speakersView.render(), '.commonplay-row2-col3')
                                    .render(moderatorsView.render(), '.commonplay-row2-col2');

                                    var lives = new LivesCollection();
                                    lives.on('add', function(live){
                                        live.set('page', page.get('resource_uri'));
                                        live.save({},{success: function(){
                                                var livesView = new LivesView({collection: lives});
                                                app.MainView.render(livesView.render(), '.commonplay-row2-col1');
                                        }});
                                    });
                                    lives.filters['page'] = pageId;
                                    lives.fetch({
                                        success: function(){
                                            var livesView = new LivesView({collection: lives});
                                            app.MainView.render(livesView.render(), '.commonplay-row2-col1');
                                        }
                                    });
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
