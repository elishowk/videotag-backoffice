<div id='avatar'></div>
<form  class="form-horizontal" action="/" >
<fieldset>
<legend>Profile</legend>

<div class="control-group" id ="control-last_name">
<label class="control-label" for="last_name">Nom: </label>                            
<div class="controls">
<input type="text" id="last_name" value ="<%= last_name %>" placeholder="<%= last_name %>">
<span class="help-inline"></span>
</div>
</div>

<div class="control-group" id="control-first_name">
<label class="control-label" for="first_name">Prénom: </label>                            
<div class="controls">
<input type="text" id="first_name" value ="<%= first_name %>" placeholder="<%= first_name %>">
<span class="help-inline"></span>
</div>
</div>

<div class="control-group" id="control-username">
<label class="control-label" for="username">Pseudo: </label>                            
<div class="controls">
<input type="text" id="username" value ="<%= username %>" placeholder="<%= username %>">
<span class="help-inline"></span> 
</div>
</div>                                                        

<div class="control-group">
<div class="controls">
<button type="submit" class="btn">Modifier</button>
</div>
</div>

<fieldset>
</form>          

