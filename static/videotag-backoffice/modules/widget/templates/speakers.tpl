<a href="#speakerModal" role="button" class="btn btn-primary" id="btn-speakerModal" data-toggle="modal">Ajouter un speaker</a> 

<table class="table table-condensed">
    <thead>
        <tr>
            <th>Email</th>
        </tr>
    </thead>
    <tbody>
        <% _.each(speakers, function(speaker) { %>
        <tr>
            <td  title="<%=speaker.username%>" speaker-id=<%=speaker.id%> class='td-speaker'>
                <% if(speaker.is_active == true){%>
                    <%= speaker.username %>
                <%} else {%>
                   <%=  speaker.username %>(XX)
                <%}%>
            </td>
            <td><button  id="btn-delspeaker" speaker-id=<%=speaker.id%> class="close">&times;</button><td>
        </tr>
        <% }); %>
    </tbody>
</table>

<!-- Modal -->
<div id="speakerModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="ModalLabel-speaker" aria-hidden="true">
    <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
        <legend id="ModalLabel-speaker">Ajout de speaker !</legend>
        <p>
           Vous allez ajouter un speaker blabla
        </p>
    </div>
    <div class="modal-body">
        <form  class="form" id="formAddSpeaker" action="<%= inviteUrl %>"method="POST" accept-charset="utf-8" >
            <fieldset>

                <div style='display:none'><input type='hidden' name='csrfmiddlewaretoken' value='<%= csrf %>' ></div>
                <div style='display:none'><input type='hidden' name='responsibility' value='speaker' ></div>

                <div class="control-group">
                    <label class="control-label" for="email">E-mail du speaker: </label>
                    <div class="controls">
                        <input type="text" name="email" class="required" id="cemail">
                    </div>
                </div>

                    <input type="submit" value="Invite" class=" submit btn btn-primary">
            </fieldset>
        </form>
    </div>
    <div class="modal-footer">
        <button class="btn" data-dismiss="modal" aria-hidden="true">Annuler</button>
    </div>
</div>
