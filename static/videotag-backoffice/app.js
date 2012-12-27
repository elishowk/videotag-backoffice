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
            MainView: new MainView()
        };



        app.Router = Backbone.Router.extend({
            routes: {
                ''                    : 'dashboard',
                'dashboard'           : 'dashboard',
                'widget/:widgetId'    : 'widget',
                'addwidget'           : 'addwidget'
            },
            dashboard: function() {
                app.Spinner.spin(document.getElementById('main'));
                /**
                 * Test range of Collection
                 * If > 0 load widget route
                 */
            },

            addwidget: function() {
                app.MainView.empty();
                app.Spinner.spin(document.getElementById('main'));
                require(
                    ['modules/widget/views/addwidget', 'modules/widget/views/widgetslist', 'page/collection'],
                    function (AddWidgetView, WidgetsListView, PageCollection) {
                        var pages = new PageCollection();
                        pages.filters['username'] = 'admin';
                        pages.fetch({
                            success: function(){
                                app.Spinner.stop();
                                var widgetsList = new WidgetsListView({collection: pages});
                                var addWidgetView = new AddWidgetView({collection: pages});
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
                            var widget;
                            var pages = new PageCollection();
                            pages.filters['username'] = 'admin';

                            pages.fetch({
                                success: function(){
                                    app.Spinner.stop();
                                    widget = pages.getById(widgetId);
                                    var widgetsList = new WidgetsListView({collection: pages});
                                    var widgetView = new WidgetView({model: widget});
                                    app.MainView
                                    .render(widgetsList.render(), '.widgetslist')
                                    .render(widgetView.render(), '.commonplay-row1-col1');

                                    var speakers = new UsersCollection();
                                    if (widget.get('application').speakers.length < 1){
                                        var speakersView = new SpeakersView({collection: speakers});
                                        app.MainView.render(speakersView.render(), '.commonplay-row2-col3');
                                    }
                                    else{
                                        speakers.setIds(widget.get('application').speakers).fetch({
                                            success: function(){
                                                app.Spinner.stop();
                                                var speakersView = new SpeakersView({collection: speakers});
                                                app.MainView.render(speakersView.render(), '.commonplay-row2-col3');
                                            }.bind(this)
                                        });
                                    }

                                    var moderators = new UsersCollection();
                                    if(widget.get('application').moderators.length < 1){
                                        var moderatorsView = new ModeratorsView({collection: moderators});
                                        app.MainView.render(moderatorsView.render(), '.commonplay-row2-col2');
                                    }
                                    else{}
                                    moderators.setIds(widget.get('application').moderators).fetch({
                                        success: function(){
                                            app.Spinner.stop();
                                            var moderatorsView = new ModeratorsView({collection: moderators});
                                            app.MainView.render(moderatorsView.render(), '.commonplay-row2-col2');
                                        }.bind(this)
                                    });
                                }.bind(this)
                            });

                            var lives = new LivesCollection();
                            lives.filters['created_by'] = 'admin';
                            /*TODO: filters widget Id*/
                            lives.fetch({
                                success: function(){
                                    app.Spinner.stop();
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
