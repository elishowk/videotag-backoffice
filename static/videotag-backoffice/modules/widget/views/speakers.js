define(
    ['backbone', 'modules/widget/templates/speakers.tpl', 'jquery-gravatar', 'jquery-validation'],
    function(Backbone, tplSpeakers) {
        'use strict';
        return Backbone.View.extend({
            tagName: 'div',
            className: 'span4',
            events : {
                'click #btn-addspeaker': 'addspeaker'
                //'click #btn-delspeaker': 'delspeaker',
            },
            addspeaker : function(e) {
                e.preventDefault();
            },
            delspeaker : function(e) {
                e.preventDefault();
                alerte("La suppréssion est en cour d'implementation");
                //this.collection.remove(this.collection.get(this.$()));
            },
            render : function() {
                var that = this;
                this.$el.html(_.template(tplSpeakers, { speakers : this.collection.toJSON(), inviteUrl: require.appConfig.inviteUrl, csrf: require.appUser.csrf}));
                this.$el.find('.td-speaker').each( function(i){
                    $(this).append( $.gravatar( $(this).attr('title') , {size : 20 ,secure: true, rating: 'r'}) );
                });

                this.$el.find('#formAddSpeaker').validate({
                    rules: {
                        email: {
                            required: true,
                            email: true
                        },
                    },
                    highlight: function(label) {
                        that.$el.find(label).closest('.control-group').addClass('error');
                    },
                    success: function(label) {
                        label
                        .text('OK!').addClass('valid')
                        .closest('.control-group').addClass('success');
                    },
                    submitHandler: function(form) {
                        that.collection.add({email : that.$el.find('#cemail').val() });
                        that.$el.find('#speakerModal').modal('hide');
                        alert("Le process d'invitation est en cour d'implementation");
                    }
                });
                return this;
            }
        });
    }
);
