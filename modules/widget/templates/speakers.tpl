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
                <form  class="form" action="/" >
                    <fieldset>
                        <div class="control-group" id="control-email">
                            <label class="control-label" for="email">E-mail du speaker: </label>                            
                            <div class="controls">
                                <input type="text" id="email-speaker">
                                <span class="help-inline"></span>                                    
                            </div>
                        </div>                                           
                    </fieldset>
                </form>                
            </div>
            <div class="modal-footer">
                <button class="btn" data-dismiss="modal" aria-hidden="true">Annuler</button>
                <button class="btn btn-primary" id="btn-addspeaker" data-dismiss="modal" aria-hidden="true">Ajouter speaker</button>
            </div>
        </div>  
