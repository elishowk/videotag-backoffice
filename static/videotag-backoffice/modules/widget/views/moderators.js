define(
    ['backbone', 'text!modules/widget/templates/moderators.tpl', 'jquery-gravatar'],
    function(Backbone, tplModerators) {
        'use strict';
        /* TODO: gravatar */
        return Backbone.View.extend({
            events : {
                'click #btn-addmoderator': 'addmoderator',
                'click #btn-delmoderator': 'delmoderator'
            },
            delmoderator : function(e) {
                e.preventDefault();
            },
            addmoderator : function(e) {
                e.preventDefault();
                this.collection.add({email : this.$('#email-moderator').val() });
            },
            render : function() {
                this.$el.html(_.template(tplModerators, { moderators : this.collection.toJSON()}));
                this.$el.find('.td-moderator').each( function(i){
                    $(this).append( $.gravatar( $(this).attr('title') , {size : 20 ,secure: true, rating: 'r'}));
                });
                return this;
            }
        });
    }
);
