<form  class="form" id="addWidgetForm" action="/" >
    <fieldset>
        <legend>Créer un widget</legend>
        
        Complétez ces trois paramètres pour configurer votre vidéo :
    
        <div class="control-group">
            <label class="control-label" for="curl">Adresse web de votre vidéo youtube : </label>
            <div class="controls">
                <input class="input-xxlarge" type="text" name="url" id="curl">
            </div>
        </div>

        <div class="control-group">
            <label class="control-label" for="cpermalink">Adresse web du site sur lequel vous souhaitez intégrer votre widget : </label>
            <div class="controls">
                <input class="input-xxlarge" type="text" name="permalink" id="cpermalink">
            </div>
        </div>

        <div class="control-group">
            <label class="control-label" for="ctitle">Titre de votre widget : </label>
            <div class="controls">
                <input class="input-xxlarge" type="text" name="title" id="ctitle"></br>
                <span class="help-inline">Par défaut le titre de la video youtube.</span>
            </div>
        </div>

        <div class="control-group">
            <div class="controls">
                 <input class="submit btn btn-primary"  type="submit" value="Valider"/>
            </div>
        </div>

    <fieldset>
</form>

        <!-- Button to trigger modal -->
        <!-- Modal -->
        <div id="videoModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    <h3 id="myModalLabel">S'agit-il bien de la vidéo pour laquelle vous voulez créer un widget ?</h3>
                    <p>
                        Si ce n'est pas le cas cliquez sur modifier.</br>
                        <em> Attention : une fois validée, la vidéo ne pourra plus etre modifiée </em>
                    </p>
                </div>
                <div class="modal-body"></div>
                <div class="modal-footer">
            <button class="btn" data-dismiss="modal" aria-hidden="true">Modifier</button>
            <button class="btn btn-primary" id="btn-creation" data-dismiss="modal" aria-hidden="true">Ok</button>
            </div>
        </div> 
