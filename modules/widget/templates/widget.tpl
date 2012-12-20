<legend><h2>Edition de Widget</h2> </legend>

<h4>Le code Javascript à importer</h4>
        <div class = 'row'>
            <pre class = 'span5'></pre>
        <div class = 'span3'>
                <a href="#preview" role="button" class="btn btn-primary btn-large" id="btn-preview" data-toggle="modal">
                    Preview 
                    </a>
              <% if( state  == 1 ) {%>
                <h4>Intéractions</h4> <span class="badge badge-success">Activé</span> 
                <button type="button" class="btn btn-danger"  id='btn-unpublish' widget-id=<%= id %> >Désactivé</button>
                <%}else {%>
                <h4>Intéractions</h4> <span class="badge badge-important">Désactivé</span> 
                <button type="button" class="btn btn-success"  widget-id=<%= id %>  id='btn-publish'>Activé</button>
                <%}%>
            </div>
        </div>
        <h4>video : <%=video %></h4>

        <legend>Configurez votre widget</legend>    
 
