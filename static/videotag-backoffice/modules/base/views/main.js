define(['backbone', 'modules/base/templates/main.tpl'], function(Backbone, mainTpl) {
    return Backbone.View.extend({
        'id': 'main',
        'tagName': 'div',
        'initialize': function() {
            this.$el.html(_.template(mainTpl));
            $(document.getElementById('mainDiv')).append(this.$el);
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
            $('#mainDiv').show();
            this.$el.find('.data-div ').empty();
            return this;
        }
    });
});
