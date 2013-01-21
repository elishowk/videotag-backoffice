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
            WidgetsList: function(){
                require(
                    ['modules/widget/views/widgetslist', 'page/collection'],
                    function (WidgetsListView, PageCollection) {
                        var widgetsListView = new WidgetsListView({collection: new PageCollection()});
                        widgetsListView.collection.filters['created_by'] = require.appUser.id;
                        widgetsListView.collection.filters['limit'] = '5';
                        widgetsListView.collection.fetch({
                            success: function(){widgetsListView.render();}.bind()
                        });
                    }
                );
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
                if( window.location.href !== 'http://commonplay.eu/'){
                    $('.externalTemplate').show();
                    $('#mainDiv').hide();
                }
                else{
                    app.MainView.empty();
                    $('.commonplay-row1-col1').html('<div class="hero-unit"><h1>Välkommen, '+require.appUser.username+'!</h1></div>');
                }
            },

            addwidget: function() {
                require(
                    ['modules/widget/views/addwidget', 'page/collection', 'page/model'],
                    function (AddWidgetView, PageCollection, PageModel) {
                        var addWidgetView = new AddWidgetView({collection: new PageCollection(), model: new PageModel()});
                        addWidgetView.collection.on('add', function(page){
                            page.save({},{ success: function(model, response){
                            app.WidgetsList();
                            app.Router.navigate("widget/" + model.get('id'), {trigger: true});
                            }});
                        });
                        app.Spinner.stop();
                        app.MainView
                            .empty()
                            .render(addWidgetView.render(), '.commonplay-row1-col1');
                    }
                );
            },

            account: function() {
                app.MainView.empty();
                app.Spinner.spin(document.getElementById('main'));
                require(
                    ['modules/user/views/user', 'user/model', 'modules/user/views/melomaniac', 'melomaniac/collection'],
                    function (UserView, UserModel, MelomaniacView, MelomaniacsCollection) {
                        var userView = new UserView({model: new UserModel()})
                        userView.model.urlRoot = userView.model.url() + require.appUser.id;
                        userView.model.fetch({
                            success: function(){
                                app.Spinner.stop();
                                app.MainView.empty();
                                app.MainView.render(userView.render(), '.commonplay-row1-col1');
                            }
                        });
                        var melomaniacs = new MelomaniacsCollection();
                        melomaniacs.filters['user'] = require.appUser.id;
                        melomaniacs.fetch({
                            success: function(){
                                app.Spinner.stop();
                                var melomaniacView = new MelomaniacView({model: melomaniacs.at(0)})
                                app.MainView.render(melomaniacView.render(), '.commonplay-row1-col2');
                            }
                        });
                    }
                );
            },

            widget: function(pageId) {
                app.MainView.empty();
                app.Spinner.spin(document.getElementById('main'));
                require(
                    ['modules/widget/views/widget', 'modules/widget/views/lives', 'modules/widget/views/speakers',
                        'modules/widget/views/moderators', 'page/model', 'live/collection', 'user/collection'],
                        function(WidgetView, LivesView, SpeakersView, ModeratorsView, PageModel, LivesCollection, UsersCollection){
                            var  page = new PageModel({id: pageId });
                            page.fetch({success: function(){
                                var widgetView = new WidgetView({model: page});
                                var moderatorsView = new ModeratorsView({collection: new UsersCollection(page.get('moderators'))});
                                var speakersView = new SpeakersView({collection: new UsersCollection(page.get('speakers'))});
                                app.Spinner.stop();
                                app.MainView
                                .empty()
                                .render(widgetView.render(), '.commonplay-row1-col1')
                                .render(speakersView.render(), '.commonplay-row2-col3')
                                .render(moderatorsView.render(), '.commonplay-row2-col2');


                                var livesView = new LivesView({collection: new LivesCollection()});
                                livesView.collection.on('add', function(live){
                                    live.set('page', page.get('resource_uri'));
                                    live.save({},{success: function(){
                                        window.location.reload();
                                    }});
                                });
                                livesView.collection.on('remove', function(){ app.MainView.render(livesView.render(), '.commonplay-row2-col1');})
                                livesView.collection.filters['page'] = pageId;
                                livesView.collection.fetch({success: function(){
                                    app.MainView.render(livesView.render(), '.commonplay-row2-col1');
                                }});
                            }});
                        }
                );
            }
        });

        app.Router = new app.Router();
        Backbone.history.start(/*{pushState: true}*/);
        return app;
    }
);
