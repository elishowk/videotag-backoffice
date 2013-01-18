define(
    ['backbone', 'modules/widget/templates/addwidget.tpl', 'jquery-validation'],
    function(Backbone, tplAddWidget) {
        'use strict';
        return Backbone.View.extend({
            tagName: 'div',
            className: 'span9',
            events : {
                'keyup #url': 'checkvideo',
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

            checkvideo: function(e){
                /*this.$('#type').addClass('alert-success');
                  this.$('#type').text('La vidéo à bien été reconnue comme appartenant à Youtube');

                  this.$('#type').addClass('alert-error');
                  this.$('#type').text("La vidéo n'as pas été reconnu !");
                  */
            },
            render : function() {
                /*$.validator.addMethod('youtubeVideo', function(value, element) {
                  var id= parseUri(that.$el.find('#curl').val()).queryKey.v;
                  var test;
                  $.getJSON('http://gdata.youtube.com/feeds/api/videos/'+id+'?v=2&alt=json', function(data) {
                  that.$el.find('#ctitle').val(data.entry.title.$t);
                  that.$el.find('.modal-body').html('<iframe id="ytplayer" type="text/html" width="450" height="253.125" src="https://www.youtube.com/embed/'+id+'"frameborder="0" >');
                  test = true;
                  })
                  .error(function() { test = false;  return this.optional(element)}.bind(this));
                  return test;
                  }, 'Vidéo youtube non reconnue');
                  */
                var that = this;
                this.$el.html(_.template(tplAddWidget, { widgets : this.collection.toJSON()}));
                this.$el.find('#addWidgetForm').validate({
                    rules: {
                        url: {
                            minlength: 2,
                            required: true,
                            url: true
                            //youtubeVideo: true
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
                        var id= parseUri(that.$el.find('#curl').val()).queryKey.v;
                        $.getJSON('http://gdata.youtube.com/feeds/api/videos/'+id+'?v=2&alt=json', function(data) {
                            if(!that.$el.find('#ctitle').val())
                            that.$el.find('#ctitle').val(data.entry.title.$t);
                            that.$el.find('.modal-body').html('<iframe id="ytplayer" type="text/html" width="450" height="253.125" src="https://www.youtube.com/embed/'+id+'"frameborder="0" >');
                            that.$el.find('#videoModal').modal();
                        })
                        .error(function() {alert('Vidéo youtube non reconnue')});
                    }
                });
                return this;
            }
        });
    }
);
