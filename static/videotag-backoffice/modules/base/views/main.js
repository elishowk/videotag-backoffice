define(['backbone', 'text!modules/base/templates/main.tpl', 'jquery-gravatar'], function(Backbone, mainTpl) {
    return Backbone.View.extend({
        'id': 'main',
        'tagName': 'div',
        'initialize': function() {
            this.$el.html(_.template(mainTpl));
            $(document.body).append(this.$el);
            this.$el.find('.gravatar').append( $.gravatar( require.appUser.email , {size : 30 ,secure: true, rating: 'r'}));
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
            this.$el.find('.data-div ').empty();
            return this;
        }
    });
});
