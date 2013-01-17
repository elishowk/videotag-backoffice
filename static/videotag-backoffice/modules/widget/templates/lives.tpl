<a href="#liveModal" role="button" class="btn btn-primary" id="btn-liveModal" data-toggle="modal">Ajout de live !</a>
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
<!-- Modal -->
<div id="liveModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="ModalLabel-live" aria-hidden="true">
    <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
        <h3 id="ModalLabel-live">Ajout de live !</h3>
        <p>
            Informations sur les lives
        </p>
    </div>
    <div class="modal-body">
        <form  class="form" action="/" >
            <fieldset>
                <div class="control-group" id ="control-date_live">
                    <label class="control-label" for="date_live">Date: </label>
                    <div class="controls">
                        <input type="text" value="2012-12-25" id="datepicker" class="input-small">
                        <span class="help-inline"></span>
                    </div>
                </div>

                <div class="control-group" id="control-time_live">
                    <label class="control-label" for="time_live">Heure: </label>
                    <div class="controls">
                        <input type="text"  id="timepicker" class="input-small">
                        <span class="help-inline"></span>
                    </div>
                </div>
            </fieldset>
        </form>
    </div>
    <div class="modal-footer">
        <button class="btn" data-dismiss="modal" aria-hidden="true">Annuler</button>
        <button class="btn btn-primary addLive"  data-dismiss="modal" aria-hidden="true">Ajouter live</button>
    </div>
</div>


