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
                    <td  title="<%=moderator.email%>" class='td-moderator'>
                        <% if((moderator.email).length < 14){%> 
                            <%= moderator.email %>
                        <%} else {%>
                           <%= moderator.email.substring(0,13)%>...
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
                <form  class="form" action="/" >
                    <fieldset>
                        <div class="control-group" id="control-email">
                            <label class="control-label" for="email-moderator">E-mail du moderator: </label>                            
                            <div class="controls">
                                <input type="text" id="email">
                                <span class="help-inline"></span>                                    
                            </div>
                        </div>                                           
                    </fieldset>
                </form>                
            </div>
            <div class="modal-footer">
                <button class="btn" data-dismiss="modal" aria-hidden="true">Annuler</button>
                <button class="btn btn-primary" id="btn-addmoderator" data-dismiss="modal" aria-hidden="true">Ajouter moderator</button>
            </div>
        </div>  