define(['backbone', 'text!modules/base/templates/main.tpl'], function(Backbone, mainTpl) {
    return Backbone.View.extend({
        id: 'main',
        tagName: 'div',
        initialize: function() {
            this.$el.html(_.template(mainTpl));
            $(document.body).append(this.$el);
        },
        render: function(content, target){
            this.$el.find(target).append(content);
            return this;
        },
        empty: function () {
            this.$el.find('.data-div').empty();
            return this;
        }
    });
});
