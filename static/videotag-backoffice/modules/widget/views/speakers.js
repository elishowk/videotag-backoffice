define(
    ['backbone', 'text!modules/widget/templates/speakers.tpl', 'jquery-gravatar'],
    function(Backbone, tplSpeakers) {
        'use strict';
        /*TODO: gravata*/
        return Backbone.View.extend({
            tagName: 'div',
            className: 'span4',
            events : {
                'click #btn-addspeaker': 'addspeaker'
                //'click #btn-delspeaker': 'delspeaker',
            },
            addspeaker : function(e) {
                e.preventDefault();
                this.collection.add({email : this.$('#email-speaker').val() });
            },
            delspeaker : function(e) {
                e.preventDefault();
                console.log('del speaker');
                this.collection.remove(this.collection.get(this.$()));
            },
            render : function() {
                this.$el.html(_.template(tplSpeakers, { speakers : this.collection.toJSON(), inviteUrl: require.appConfig.inviteUrl, csrf: require.appUser.csrf}));
                this.$el.find('.td-speaker').each( function(i){
                    $(this).append( $.gravatar( $(this).attr('title') , {size : 20 ,secure: true, rating: 'r'}) );
                });
                return this;
            }
        });
    }
);
