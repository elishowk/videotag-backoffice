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
                    <td  title="<%=speaker.email%>" speaker-id=<%=speaker.id%> class='td-speaker'>
                        <% if((speaker.email).length < 14){%> 
                            <%= speaker.email %>
                        <%} else {%>
                           <%= speaker.email.substring(0,13)%>...
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
                   Vous allez ajouter un speaker blabla... 
                </p>
            </div>
            <div class="modal-body">
                <form  class="form" action="<%= inviteUrl %>"method="POST" accept-charset="utf-8" >
                    <fieldset>
                        <div style='display:none'><input type='hidden' name='csrfmiddlewaretoken' value='<%= csrf %>' ></div>
                        <div style='display:none'><input type='hidden' name='responsibility' value='speaker' ></div>
                        <div class="control-group" id="control-email">
                            <label class="control-label" for="email-speaker">E-mail du speaker: </label>
                            <div class="controls">
                                <input type="text" name="email_address"id="email_addres">
                                <span class="help-inline"></span>
                            </div>
                        </div>

                        <div class="form-actions">
                            <input type="submit" value="Invite" class="btn btn-primary">
                        </div>
                    </fieldset>
                </form>
            </div>
            <div class="modal-footer">
                <button class="btn" data-dismiss="modal" aria-hidden="true">Annuler</button>
                <button class="btn btn-primary" id="btn-addspeaker" data-dismiss="modal" aria-hidden="true">Ajouter speaker</button>
            </div>
        </div>  
