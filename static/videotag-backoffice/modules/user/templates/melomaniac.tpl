<form class="form-horizontal" action="/" >
    <fieldset>
        <legend>Informations</legend>

        <div class="control-group" id ="control-birth_date">
            <label class="control-label" for="birth_date">Date de naissance: </label>
            <div class="controls">
                <input type="text" id="birth_date" value='<%= birth_date %>'  placeholder='<%= birth_date %>'>
                <span class="help-inline"></span>
            </div>
        </div>

        <div class="control-group" id ="control-address">
            <label class="control-label" for="address">Adresse: </label>
            <div class="controls">
            <input type="text" id="address" value='<%= address %>' placeholder='<%= address %>'>
                <span class="help-inline"></span>
            </div>
        </div>

        <div class="control-group" id ="control-">
            <label class="control-label" for="">Code Postal: </label>
            <div class="controls">
                <input type="text" id="address" value='<%= address %>' placeholder='<%= address %>'>
                <span class="help-inline"></span>
            </div>
        </div>

        <div class="control-group" id ="control-city">
            <label class="control-label" for="city">Ville: </label>
            <div class="controls">
                <input type="text" id="city" value='<%= city %>' placeholder='<%= city %>'>
                <span class="help-inline"></span>
            </div>
        </div>


        <div class="control-group" id ="control-country">
            <label class="control-label" for="country">Pays: </label>
            <div class="controls">
                <input type="text" id="country" value='<%= country %>' placeholder='<%= country %>'>
                <span class="help-inline"></span>
            </div>
        </div>


        <div class="control-group" id ="control-website">
            <label class="control-label" for="website">Site web: </label>
            <div class="controls">
                <input type="text" class="url "id="website" value='<%= website %> ' placeholder='<%= website %>'>
                <span class="help-inline"></span>
            </div>
        </div>

        <div class="control-group" id ="control-tel">
            <label class="control-label" for="tel">Téléphone: </label>
            <div class="controls">
                <input type="text" id="tel" value='<%= tel %>' placeholder='<%= tel %>'>
                <span class="help-inline"></span>
            </div>
        </div>

        <div class="control-group" id ="control-about_me">
            <label class="control-label" for="about_me">A Propos: </label>
            <div class="controls">
                <textarea type="text" id="about_me" value='<%= about_me %> ' placeholder='<%= about_me %>'rows="3"></textarea>
                <span class="help-inline"></span>
            </div>
        </div>
        <div class="control-group">
            <div class="controls">
                <button type="submit" class="btn">Modifier</button>
            </div>
        </div>

    </fieldset>
</form>
