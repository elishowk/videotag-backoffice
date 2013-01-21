<form class="form-horizontal" id="formMelomaniac" action="/" >
    <fieldset>
        <legend>Informations</legend>

        <div class="control-group">
            <label class="control-label" for="address">Adresse: </label>
            <div class="controls">
                <input type="text" name="address" id="address" value='<%= address1 %>' placeholder='<%= address1 %>'>
            </div>
        </div>

        <div class="control-group">
            <label class="control-label" for="city">Ville: </label>
            <div class="controls">
                <input type="text" name="city" id="city" value='<%= city %>' placeholder='<%= city %>'>
            </div>
        </div>

        <div class="control-group">
            <label class="control-label" for="zipcode">Code postal: </label>
            <div class="controls">
                <input type="text" name="zipcode" id="zipcode" value='<%= zipcode %>' placeholder='<%= zipcode %>'>
            </div>
        </div>

        <div class="control-group">
            <label class="control-label" for="country">Pays: </label>
            <div class="controls">
                <input type="text" name="country" id="country" value='<%= country %>' placeholder='<%= country %>'>
            </div>
        </div>


        <div class="control-group">
            <label class="control-label" for="website">Site web: </label>
            <div class="controls">
                <input type="text" name="website" class="url"id="website" value='<%= website %>' placeholder='<%= website %>'>
            </div>
        </div>

        <div class="control-group">
            <label class="control-label" for="tel">Téléphone: </label>
            <div class="controls">
                <input type="text" id="tel" name="tel" value='<%= tel %>' placeholder='<%= tel %>'>
            </div>
        </div>

        <div class="control-group">
            <label class="control-label" for="about_me">A Propos: </label>
            <div class="controls">
                <input type="text" id="about_me" name="aboutMe" value='<%= about_me %>' placeholder='<%= about_me %>'rows="3">
            </div>
        </div>

        <div class="control-group">
            <label class="control-label" for="facebook">ID facebook: </label>
            <div class="controls">
                <input type="text" name="facebook" id="facebook" value='<%= facebook %>' placeholder='<%= facebook %>'>
            </div>
        </div>

        <div class="control-group">
            <label class="control-label" for="twitter">ID twitter: </label>
            <div class="controls">
                <input type="text" name="twitter" id="twitter" value='<%= twitter %>' placeholder='<%= twitter %>'>
            </div>
        </div>

        <button type="submit" class="btn">Modifier</button>
    </fieldset>
</form>
