define(
    [ 'modules/baseview/main', 'modules/widget/views/widgetslist' ],
    function(MainView, WidgetsListView) {

        var app = {
            MainView: new MainView(),
            initialize: function (){
                var widgetsList = new WidgetsListView({collection: window.Poser});
                this.instance.MainView.render(widgetsList.render(), '.widgetslist');
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
                /**
                 * Test range of Collection
                 * If > 0 load widget route
                 */
            },


            addwidget: function() {
                require(
                    ['view/addwidget'],
                    function (AddWidgetView) {
                        var addWidgetView = new AddWidgetView({/* Model/Collection  */});
                        app.instance.MainView
                        .empty()
                        .render(addWidgetView.render(), '.commonplay-row1-col1');
                    }
                );
            },

            /* TODO: arguments */
            widget: function(key, value) {
                require(
                    ['views/widget', 'views/lives', 'views/speakers', 'views/moderators'],
                    function(WidgetView, LivesView, SpeakersView, ModeratorsView){
                        var widgetView = new WidgetView({/* Model/Collection  */});
                        var livesView = new LivesView({/* Model/Collection  */});
                        var speakersView = new SpeakersView({/* Model/Collection  */});
                        var moderatorsView = new ModeratorsView({/* Model/Collection  */});
                        app.instance.MainView
                        .empty()
                        .render(widgetView.render(), '.commonplay-row1-col1')
                        .render(livesView.render(), '.commonplay-row2-col1')
                        .render(speakersView.render(), '.commonplay-row2-col2')
                        .render(moderatorsView.render(), '.commonplay-row2-col3');
                    }
                );
            }
        });

        app.instance.router = new app.Router();
        Backbone.history.start(/*{pushState: true}*/);
        return app;
    });
