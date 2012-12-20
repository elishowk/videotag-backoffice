define(['backbone', 'app','text!modules/base/templates/main.tpl'], function(Backbone, App, mainTpl) {
    console.log(App)
    return Backbone.View.extend({
        id: 'main',
        tagName: 'div',
        initialize: function() {
            this.$el.html(_.template(mainTpl));
            $(document.body).append(this.$el);
        },
        render: function(content, target){
            App.Spinner.stop();
            this.$el.find(target).append(content);
            return this;
        },
        empty: function () {
            this.$el.find('.data-div').empty();
            return this;
        }
    });
});
