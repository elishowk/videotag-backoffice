define(
    ['backbone', 'text!modules/widget/templates/addwidget.tpl'  ],
    function(Backbone, tplAddWidget) {
        'use strict';
        return Backbone.View.extend({
            tagName: 'div',
            events : {
                //'keyup': 'validate',
                'keyup #url': 'checkvideo',
                'click #btn-creation': 'addWidget'
            },
            addWidget: function(e) {
                e.preventDefault();
                this.collection.filters= null;
                this.collection.add({
                    title: this.$('#title').val(),
                    apphook: 'Videotag',
                    published: true,
                    created_by: 'admin'
                });
            },

            checkvideo: function(e){
                this.$('#type').removeClass('alert-success alert-error alert-info');
                var url = this.$('#url').val();
                var tmpidyoutube = url.split('v=')[1];
                var id;

                if( url.indexOf('youtube') !== -1 && tmpidyoutube !== undefined){
                    if( tmpidyoutube.indexOf('&')  !== -1)
                        id = tmpidyoutube.substring(0, tmpidyoutube.indexOf('&'));
                    else
                        id = tmpidyoutube;
                    this.$('.modal-body').html('<iframe id="ytplayer" type="text/html" width="450" height="253.125" src="https://www.youtube.com/embed/'+id+'"frameborder="0" >');
                    $.getJSON('http://gdata.youtube.com/feeds/api/videos/'+id+'?v=2&alt=json', function(data) {
                        this.$('#title').val(data.entry.title.$t);
                    }.bind(this));
                    this.$('#type').addClass('alert-success');
                    this.$('#type').text('La vidéo à bien été reconnue comme appartenant à Youtube');
                }
                else{
                    this.$('#type').addClass('alert-error');
                    this.$('#type').text("La vidéo n'as pas été reconnu !");
                }
            },
            render : function() {
                this.$el.html(_.template(tplAddWidget, { widgets : this.collection.toJSON()}));
                return this;
            }
        });
    }
);
