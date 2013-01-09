define(['backbone', 'text!modules/base/templates/main.tpl', 'jquery-gravatar'], function(Backbone, mainTpl) {
    return Backbone.View.extend({
        'id': 'main',
        'tagName': 'div',
        'initialize': function() {
            this.$el.html(_.template(mainTpl));
            $(document.body).append(this.$el);
            this.$el.find('.gravatar').html( $.gravatar( require.appUser.email , {size : 30 ,secure: true, rating: 'r'}));
            this.$el.find('.gravatar').append(' Hi, '+ require.appUser.username );
        },
        render: function(content, target){
            if (content instanceof Backbone.View) {
                content = content.$el;
            }
            this.$el.find(target).empty();
            this.$el.find(target).append(content);
            return this;
        },
        empty: function () {
            $('.externalTemplate').hide();
            this.$el.find('.data-div ').empty();
            return this;
        }
    });
});
