
Backbone.View.prototype.validate = function(){
    /*The form validation*/
    var valid = 1;
    $.each(this.model.attributes, function(attribute){
        var error = this.model.preValidate(attribute, this.$('#'+attribute).val() );
        var control = this.$('#control-'+attribute).closest('.control-group');
        if(error){
            control.removeClass('success');
            control.addClass('error');
            control.find('.help-inline').text(error);
            valid = 0;
        }
        else{
            control.removeClass('error');
            control.addClass('success');
            control.find('.help-inline').text('');
        }
    }.bind(this));

    if(valid === 0)
        this.$('button').addClass('disabled');
    else
        this.$('button').removeClass('disabled');
};


