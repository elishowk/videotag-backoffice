<a href="#moderatorModal" role="button" class="btn btn-primary" id="btn-moderatorModal" data-toggle="modal">Ajouter un moderateur</a> 
<%if(moderators.length > 0){%>
<table class="table table-condensed">
    <thead>
        <tr>
            <th>Email</th>
        </tr>
    </thead>
    <tbody>
        <% _.each(moderators, function(moderator) { %>
        <tr>
            <td  <% if(moderator.is_active == false){%>class='unactive'<%}%>>
                    <img src="http://www.gravatar.com/avatar/<%=moderator.email%>?s=20&d=retro"/>
                    <%= moderator.username %>
            </td>
            <td><button  id="btn-delmoderator" class="close">&times;</button><td>
        </tr>
        <% }); %>
    </tbody>
</table>
<%}%>
<!-- Modal -->
<div id="moderatorModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="ModalLabel-moderator" aria-hidden="true">
    <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
        <h3 id="ModalLabel-moderator">Ajout de moderateur</h3>
        </br>
        <p>
           Les profils "modérateurs" pourront supprimer l'ensembles des commentaires leurs paraissant inadaptés</br></br>
            <em>Rentrez l'adresse mail de la personne que vous souhaitez nommer modérateur. </br>
            Celle-ci recevra un mail automatique l'informant de votre choix et de la date de l'événement</em>
        </p>
    </div>
    <div class="modal-body">
        <form  class="form" id="formAddModerator" action="<%= inviteUrl %>" method="POST" accept-charset="utf-8" >
            <fieldset>

                <div style='display:none'><input type='hidden' name='csrfmiddlewaretoken' value='<%= csrf %>' ></div>
                <div style='display:none'><input type='hidden' name='responsibility' value='moderator' ></div>

                <div class="control-group">
                    <label class="control-label" for="email">E-mail du moderateur: </label>
                    <div class="controls">
                        <input type="text" name="email" class="required" id="cemail">
                    </div>
                </div>

                 <input class="submit btn btn-primary" type="submit" value="Ajouter"/>
            </fieldset>
        </form>
    </div>
    <div class="modal-footer">
        <button class="btn" data-dismiss="modal" aria-hidden="true">Annuler</button>
    </div>
</div>
