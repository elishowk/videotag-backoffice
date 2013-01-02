<form  class="form-horizontal" action="/" >
    <fieldset>
        <legend>Créez un widget</legend>

        <div class=" alert-info" id="type"> Veillez entrer une url youtube ou vimeo </div>
        <br/>
        <div class="control-group" id ="control-url">
            <label class="control-label" for="url">Url de la vidéo: </label>                            
            <div class="controls">
                <input type="text" class="url "id="url">
                <span class="help-inline"></span>
            </div>
        </div>

        <div class="control-group" id ="control-permalink">
            <label class="control-label" for="permalink">Permalien: </label>                            
            <div class="controls">
                <input type="text" class="url "id="permalink">
                <span class="help-inline"></span>
            </div>
        </div>


        <div class="control-group" id ="control-title">
            <label class="control-label" for="title">Titre: </label>                            
            <div class="controls">
                <input type="text" id="title">
                <span class="help-inline"></span>
            </div>
        </div>



        <div class="control-group">
            <div class="controls">
                <a href="#preview" role="button" class="btn btn-primary" id="btn-preview" data-toggle="modal">Creation !</a> 
            </div>
        </div>
    <fieldset>
</form>

        <!-- Button to trigger modal -->
        <!-- Modal -->
        <div id="preview" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    <h3 id="myModalLabel">Attention !</h3>
                    <p> 
                        ??? BONNE VIDEO ???
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
