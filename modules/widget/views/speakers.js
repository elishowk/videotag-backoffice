define(
    ['backbone', 'text!modules/widget/templates/speakers.tpl'],
    function(Backbone, tplSpeakers) {
        'use strict';
        /*TODO: gravata*/
        return Backbone.View.extend({
            tagName: 'div',
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
                this.$el.html(_.template(tplSpeakers).template({ speakers : this.collection.toJSON()}));
                return  this;
                /* $('.td-speaker').each( function(i){
                   $(this).append( $.gravatar( $(this).attr('title') , {size : 20 ,secure: true, rating: 'r'}) );
                   });
                   $('button[speaker-id]').each(function(i){
                   $(this).click(function(){
                   this.collection.remove(this.collection.get($(this).attr('speaker-id')));
                   });
                   });*/
            }
        });
    }
);
