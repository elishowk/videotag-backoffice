<a href="#liveModal" role="button" class="btn btn-primary" id="btn-liveModal" data-toggle="modal">Ajout de live</a>
<%if(lives.length > 0){%>
<table class="table table-condensed">
    <thead>
        <tr>
            <th>Date</th>
            <th>Heure</th>
        </tr>
    </thead>
    <tbody>
        <% _.each(lives, function(live) { %>
        <% var date = live.start.split('T')[0]; var time = live.start.split('T')[1]; %>
        <tr>
            <td><%= date %></td>
            <td><%= time %></td>
            <td><button name="<%=live.id%>" class="close deleteLive">&times;</button></td>
        </tr>
        <% }); %>
    </tbody>
</table>
<%}%>
<!-- Modal -->
<div id="liveModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="ModalLabel-live" aria-hidden="true">
    <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
        <h3 id="ModalLabel-live">Ajout de live !</h3>
        </br>
        <p>Rassemblez votre audience autour de votre vidéo à la date et l'heure de votre choix.</p>
        <p><em>Quelque soit le moment où ils se connectent, tous les internautes sont assurés de se retrouver au même instant de la vidéo</em></p>
    </div>
    <div class="modal-body">
        <form  class="form" id="formAddLive" action="/" >
            <fieldset>

                <div class="control-group">
                    <label class="control-label" for="datepicker">Date: </label>
                    <div class="controls">
                        <input type="text" class="input-xlarge" placeholder="Choisissez la date de votre évenement" name="date" id="datepicker">
                    </div>
                </div>

                <div class="control-group">
                    <label class="control-label" for="timepicker">Heure: </label>
                    <div class="controls">
                        <input type="text" class="input-xlarge" placeholder="Programmez l'heure de début" name='time' id="timepicker">
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


