<legend>
    <h2>Edition de Widget</h2>
    <h4> <%=widget.title%> </h4>
</legend>

<h4>Le code Javascript à importer</h4>
<div = class"row-fluid">
             <div class = 'span10'><pre class = 'snippet'></pre></div>
             <div class = 'span2'>
                <a href="#preview" role="button" class="btn btn-primary btn-large" id="btn-preview" data-toggle="modal">
                    Preview
                </a>
                <h4>Intéractions</h4> 
                <% if( widget.published  == 1 ) {%>
                    <img class="switch" src ="<%=baseUrl%>videotag-backoffice/img/switch_enabled.png" width="110" alt="switch enabled" />
                <%}else {%>
                    <img class="switch" src ="<%=baseUrl%>videotag-backoffice/img/switch_disabled.png" width="110" alt="switch disabled" />
                <%}%>
            </div>
</div>
        <legend>Configurez votre widget</legend>
