<form  class="form-horizontal" id="addWidgetForm" action="/" >
    <fieldset>
        <legend>Créez un widget</legend>
        <div class="control-group">
            <label class="control-label" for="curl">Url de la vidéo: </label>
            <div class="controls">
                <input type="text" name="url" id="curl">
            </div>
        </div>

        <div class="control-group">
            <label class="control-label" for="cpermalink">Permalien: </label>
            <div class="controls">
                <input type="text" name="permalink" id="cpermalink">
            </div>
        </div>

        <div class="control-group">
            <label class="control-label" for="ctitle">Titre: </label>
            <div class="controls">
                <input type="text" name="title" id="ctitle">
            </div>
        </div>

         <input class="submit btn btn-primary" type="submit" value="Creation"/>

<fieldset>
</form>

        <!-- Button to trigger modal -->
        <!-- Modal -->
        <div id="videoModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    <h3 id="myModalLabel">Attention !</h3>
                    <p>
                        Bonne video ?
                    </p>
                </div>
                <div class="modal-body">
                    <p>Aucune preview disponible pour votre vidéo</p>
                </div>
                <div class="modal-footer">
            <button class="btn" data-dismiss="modal" aria-hidden="true">Modifier vidéo</button>
            <button class="btn btn-primary" id="btn-creation" data-dismiss="modal" aria-hidden="true">Creer Widget</button>
            </div>
        </div> 
