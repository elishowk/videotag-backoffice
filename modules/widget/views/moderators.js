define(
    ['backbonetastypie', 'text!modules/widget/templates/moderators.tpl'],
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
            },
            render : function() {
                this.$el.html(_.template(tplModerators).template({ moderators : this.collection.toJSON()}));
                return this;
                /* $('.td-moderator').each( function(i){
                   $(this).append( $.gravatar( $(this).attr('title') , {size : 20 ,secure: true, rating: 'r'}));
                   });*/
            }
        });
    }
);
