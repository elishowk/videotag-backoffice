<div id='avatar'></div>
<form  class="form-horizontal" action="/" >
    <fieldset>
    <legend>Profile</legend>

    <div class="control-group">
        <label class="control-label" for="last_name">Nom: </label>
        <div class="controls">
            <input type="text" name="lastName" id="last_name" value ="<%= last_name %>" placeholder="<%= last_name %>">
        </div>
    </div>

    <div class="control-group">
        <label class="control-label" for="first_name">Prénom: </label>
        <div class="controls">
            <input type="text" name="firstName" id="first_name" value="<%= first_name %>" placeholder="<%= first_name %>">
        </div>
    </div>

    <div class="control-group">
        <label class="control-label" for="username">Pseudo: </label>
        <div class="controls">
            <input type="text" name="userName" id="username" value="<%= username %>" placeholder="<%= username %>">
        </div>
    </div>

    <button type="submit" class="btn">Modifier</button>

<fieldset>
</form>

