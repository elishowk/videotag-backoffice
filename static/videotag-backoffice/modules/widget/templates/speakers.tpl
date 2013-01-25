<a href="#speakerModal" role="button" class="btn btn-primary" id="btn-speakerModal" data-toggle="modal">Ajouter une personnalité</a> 
<%if(speakers.length > 0){%>
<table class="table table-condensed">
    <thead>
        <tr>
            <th>Email</th>
        </tr>
    </thead>
    <tbody>
        <% _.each(speakers, function(speaker) { %>
        <tr>
            <td <% if(speaker.is_active == false){%>class='unactive'<%}%>>  
                    <img src="http://www.gravatar.com/avatar/<%=speaker.email%>?s=20&d=retro"/>
                    <%= speaker.username %>
            </td>
            <td><button  id="btn-delspeaker" speaker-id=<%=speaker.id%> class="close">&times;</button><td>
        </tr>
        <% }); %>
    </tbody>
</table>
<%}%>
<!-- Modal -->
<div id="speakerModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="ModalLabel-speaker" aria-hidden="true">
    <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
        <legend id="ModalLabel-speaker">Ajout de personnalité</legend>
        <p>
            Les personnalités sont des profils "VIP" dont les commentaires apparaissent d'une couleur différente et sont mis en avant.</br>
            Ceux sont par exemple des personnes ayant des connaissances sur le domaine de votre vidéo.</br>
            <em>Rentrez l'adresse mail de la personne que vous souhaitez nommer . </br>
            Celle-ci recevra un mail automatique l'informant de votre choix et de la date de l'événement</em>
        </p>
    </div>
    <div class="modal-body">
        <form  class="form" id="formAddSpeaker" action="<%= inviteUrl %>"method="POST" accept-charset="utf-8" >
            <fieldset>

                <div style='display:none'><input type='hidden' name='csrfmiddlewaretoken' value='<%= csrf %>' ></div>
                <div style='display:none'><input type='hidden' name='responsibility' value='speaker' ></div>

                <div class="control-group">
                    <label class="control-label" for="email">E-mail de la personnalité: </label>
                    <div class="controls">
                        <input type="text" name="email" class="required" id="cemail">
                    </div>
                </div>

                    <input type="submit" value="Ajouter" class=" submit btn btn-primary">
            </fieldset>
        </form>
    </div>
    <div class="modal-footer">
        <button class="btn" data-dismiss="modal" aria-hidden="true">Annuler</button>
    </div>
</div>
