<a href="#moderatorModal" role="button" class="btn btn-primary" id="btn-moderatorModal" data-toggle="modal">Ajouter un moderator</a> 

<table class="table table-condensed">
    <thead>
        <tr>
            <th>Email</th>
        </tr>
    </thead>
    <tbody>
        <% _.each(moderators, function(moderator) { %>
        <tr>
            <td  title="<%=moderator.username%>" class='td-moderator'>
                <% if(moderator.is_active == true){%>
                    <%= moderator.username %>
                <%} else {%>
                   <%=  moderator.username %>(XX)
                <%}%>
            </td>
            <td><button  id="btn-delmoderator" class="close">&times;</button><td>
        </tr>
        <% }); %>
    </tbody>
</table>

<!-- Modal -->
<div id="moderatorModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="ModalLabel-moderator" aria-hidden="true">
    <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
        <h3 id="ModalLabel-moderator">Ajout de moderator !</h3>
        <p>
           Vous allez ajouter un moderator blabla...
        </p>
    </div>
    <div class="modal-body">
        <form  class="form" id="formAddModerator" action="<%= inviteUrl %>" method="POST" accept-charset="utf-8" >
            <fieldset>

                <div style='display:none'><input type='hidden' name='csrfmiddlewaretoken' value='<%= csrf %>' ></div>
                <div style='display:none'><input type='hidden' name='responsibility' value='moderator' ></div>

                <div class="control-group">
                    <label class="control-label" for="email">E-mail du moderator: </label>
                    <div class="controls">
                        <input type="text" name="email" class="required" id="cemail">
                    </div>
                </div>

                 <input class="submit btn btn-primary" type="submit" value="Ajouter live"/>
            </fieldset>
        </form>
    </div>
    <div class="modal-footer">
        <button class="btn" data-dismiss="modal" aria-hidden="true">Annuler</button>
    </div>
</div>
