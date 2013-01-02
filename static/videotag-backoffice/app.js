define(
    [ 'backbone', 'spin', 'modules/base/views/main', 'page/collection'],
    function(Backbone, Spinner, MainView, PageCollection) {

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
            MainView: new MainView()
        };



        app.Router = Backbone.Router.extend({
            routes: {
                ''                    : 'dashboard',
                'dashboard'           : 'dashboard',
                'widget/:widgetId'    : 'widget',
                'addwidget'           : 'addwidget',
                'account/:userId'     : 'account'
            },
            dashboard: function() {
                app.Spinner.spin(document.getElementById('main'));
                /**
                 * Test range of Collection
                 * If > 0 load widget route
                 */
            },

            account: function(userId) {
                app.MainView.empty();
                app.Spinner.spin(document.getElementById('main'));
                require(
                    ['modules/user/views/user', 'modules/widget/views/widgetslist', 'user/model'],
                    function (UserView, WidgetsListView, UserModel) {
                        var user = new UserModel();
                        user.urlRoot =user.url() + userId;
                        user.fetch({
                            success: function(){
                                app.Spinner.stop();
                                var userView = new UserView({model: user})
                                app.MainView.render(userView.render(), '.commonplay-row1-col1');
                            }.bind(this)
                        });
                        var pages = new PageCollection();
                        pages.filters['username'] = 'admin';
                        pages.fetch({
                            success: function(){
                                var widgetsList = new WidgetsListView({collection: pages});
                                app.MainView
                                .render(widgetsList.render(), '.widgetslist')
                            }.bind(this)
                        });
                    }
                );
            },

            addwidget: function() {
                app.MainView.empty();
                app.Spinner.spin(document.getElementById('main'));
                require(
                    ['modules/widget/views/addwidget', 'modules/widget/views/widgetslist'],
                    function (AddWidgetView, WidgetsListView) {
                        var pages = new PageCollection();
                        pages.filters['username'] = 'admin';
                        pages.fetch({
                            success: function(){
                                app.Spinner.stop();
                                var widgetsList = new WidgetsListView({collection: pages});
                                var addWidgetView = new AddWidgetView({collection: pages, model: pages.at(0)});
                                app.MainView
                                .render(widgetsList.render(), '.widgetslist')
                                .render(addWidgetView.render(), '.commonplay-row1-col1');
                            }.bind(this)
                        });
                    }
                );
            },

            widget: function(widgetId) {
                app.MainView.empty();
                app.Spinner.spin(document.getElementById('main'));
                require(
                    ['modules/widget/views/widget',
                        'modules/widget/views/lives',
                        'modules/widget/views/speakers',
                        'modules/widget/views/moderators',
                        'modules/widget/views/widgetslist',
                        'page/collection',
                        'live/collection',
                        'user/collection'],
                        function(WidgetView, LivesView, SpeakersView, ModeratorsView, WidgetsListView, PageCollection, LivesCollection, UsersCollection){
                            var pages = new PageCollection();
                            pages.filters['username'] = 'admin';
                            pages.fetch({
                                success: function(){
                                    app.Spinner.stop();
                                    var widgetsList = new WidgetsListView({collection: pages});
                                    var widget = pages.getById(widgetId);
                                    var widgetView = new WidgetView({model: widget});
                                    var speakers = new UsersCollection(widget.get('speakers'));
                                    var speakersView = new SpeakersView({collection: speakers});
                                    var moderators = new UsersCollection(widget.get('moderators'));
                                    var moderatorsView = new ModeratorsView({collection: moderators});
                                    app.MainView
                                        .render(widgetsList.render(), '.widgetslist')
                                        .render(widgetView.render(), '.commonplay-row1-col1')
                                        .render(speakersView.render(), '.commonplay-row2-col3')
                                        .render(moderatorsView.render(), '.commonplay-row2-col2');
                                }
                            });

                            var lives = new LivesCollection();
                            lives.filters['created_by'] = 'admin';
                            lives.filters['widget'] = widgetId;
                            lives.fetch({
                                success: function(){
                                    var livesView = new LivesView({collection: lives});
                                    app.MainView.render(livesView.render(), '.commonplay-row2-col1');
                                }.bind(this)
                            });
                        }
                );
            }
        });

        app.Router = new app.Router();
        Backbone.history.start(/*{pushState: true}*/);
        return app;
    }
);
