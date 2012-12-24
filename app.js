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
            initialize: function (){
                this.MainView = new MainView();
            }
        };



        app.Router = Backbone.Router.extend({
            routes: {
                ''                    : 'dashboard',
                'dashboard'           : 'dashboard',
                'widget/:key/:value'  : 'widget',
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

            widget: function(key, value) {
                app.MainView.empty();
                app.Spinner.spin(document.getElementById('main'));


                require(
                    ['modules/widget/views/widget', 'modules/widget/views/lives', 'modules/widget/views/speakers', 'modules/widget/views/moderators'],
                    function(WidgetView, LivesView, SpeakersView, ModeratorsView){
                        var widgetView = new WidgetView({/* Model/Collection  */});
                        var livesView = new LivesView({/* Model/Collection  */});
                        var speakersView = new SpeakersView({/* Model/Collection  */});
                        var moderatorsView = new ModeratorsView({/* Model/Collection  */});
                        app.MainView
                        .empty()
                        .render(widgetView.render(), '.commonplay-row1-col1')
                        .render(livesView.render(), '.commonplay-row2-col1')
                        .render(speakersView.render(), '.commonplay-row2-col2')
                        .render(moderatorsView.render(), '.commonplay-row2-col3');
                    }
                );
            }
        });

        app.Router = new app.Router();
        Backbone.history.start(/*{pushState: true}*/);
        return app;
    }
);
