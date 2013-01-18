define(
    ['backbone', 'modules/widget/templates/addwidget.tpl', 'jquery-validation'],
    function(Backbone, tplAddWidget) {
        'use strict';
        return Backbone.View.extend({
            tagName: 'div',
            className: 'span9',
            initialize: function(){ this.validVideo = false; },
            events : {
                'change #curl': 'checkVideo',
                'click #btn-creation': 'addWidget'
            },
            addWidget: function(e) {
                e.preventDefault();
                this.collection.filters= null;
                this.collection.add({
                    title: this.$el.find('#ctitle').val(),
                    video: this.$el.find('#curl').val(),
                    permalink: this.$el.find('#cpermalink').val(),
                    published: true,
                });
            },

            checkVideo: function(){
                var id= parseUri(this.$el.find('#curl').val()).queryKey.v;
                $.getJSON('http://gdata.youtube.com/feeds/api/videos/'+id+'?v=2&alt=json', function(data) {
                    if(!this.$el.find('#ctitle').val())
                        this.$el.find('#ctitle').val(data.entry.title.$t);
                    this.$el.find('.modal-body').html('<iframe id="ytplayer" type="text/html" width="450" height="253.125" src="https://www.youtube.com/embed/'+id+'"frameborder="0" >');
                    this.validVideo=true;
                    this.$el.find('#addWidgetForm').valid();
                }.bind(this)).error(function() {
                    this.validVideo=false;
                    this.$el.find('#addWidgetForm').valid();
                }.bind(this));
            },

            render : function() {
                var testVideo = false;
                $.validator.addMethod('youtubeVideo', function(value, element) {
                    return this.validVideo;
                }.bind(this), 'Vidéo youtube non reconnue');

                var that = this;
                this.$el.html(_.template(tplAddWidget, { widgets : this.collection.toJSON()}));
                this.$el.find('#addWidgetForm').validate({
                    rules: {
                        url: {
                            minlength: 2,
                            required: true,
                            url: true,
                            youtubeVideo: true
                        },
                        permalink: {
                            required: true,
                            url: true
                        }
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
                        that.checkVideo();
                        that.$el.find('#videoModal').modal();
                    }
                });
                return this;
            }
        });
    }
);
