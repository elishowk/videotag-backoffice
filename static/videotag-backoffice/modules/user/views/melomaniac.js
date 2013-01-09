define(
    ['backbone', 'text!modules/user/templates/melomaniac.tpl', 'backbone-validation'],
    function(Backbone, tplMelomaniac) {
        'use strict';
        return Backbone.View.extend({
            tagName: 'div',
            events: {
                'submit form' : 'updateMelomaniac',
                'keyup' : 'validate'
            },
            updateMelomaniac: function(e) {
                e.preventDefault();
                this.model.set({
                    phone: this.$('#phone').val(),
                    website: this.$('#website').val(),
                    about_me: this.$('#about_me').val(),
                    city: this.$('#city').val(),
                    country: this.$('#country').val(),
                    gender: this.$('#gender').val()
                },
                {error : _.bind(this.error, this) });
                this.model.save();
            },
            error : function(model, error) {
                console.log(model, error);
                return this;
            },
            render : function() {
                this.$el.html(_.template(tplMelomaniac,  this.model.toJSON()));
                Backbone.Validation.bind(this);
                return this;
            }
        });
    }
);
