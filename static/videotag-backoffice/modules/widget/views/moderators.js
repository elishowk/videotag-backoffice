define(
    ['backbone', 'modules/widget/templates/moderators.tpl', 'jquery-validation'],
    function(Backbone, tplModerators) {
        'use strict';
        return Backbone.View.extend({
            tagName: 'div',
            className: 'span4',
            events : {
                'click #btn-delmoderator': 'delmoderator'
            },
            delmoderator : function(e) {
                e.preventDefault();
                alert("La suppression est en cours d'implémentation.");
            },
            render : function() {
                var that = this;
                this.$el.html(_.template(tplModerators, { moderators : this.collection.toJSON(), inviteUrl: require.appConfig.inviteUrl, csrf: require.appUser.csrf}));
                this.$el.find('#formAddModerator').validate({
                    rules: {
                        email: {
                            required: true,
                            email: true
                        }
                    },
                    highlight: function(label) {
                        that.$el.find(label).closest('.control-group').removeClass('success');
                        that.$el.find(label).closest('.control-group').addClass('error');
                    },
                    success: function(label) {
                        that.$el.find(label).closest('.control-group').removeClass('error');
                        label
                        .text('OK!').addClass('valid')
                        .closest('.control-group').addClass('success');
                    },
                    submitHandler: function(form) {
                        that.collection.add({email : that.$el.find('#cemail').val() });
                        that.$el.find('#moderatorModal').modal('hide');
                        alert("Le processus d'invitation est en cours de création.");
                    }
                });

                return this;
            }
        });
    }
);
