<legend>
    <h3><%=widget.title%></h3>
    <h5><a href="<%=widget.permalink%>" target="blank"><%=widget.permalink%></a> </h5>
</legend>

<h4>Importez ce code sur votre site</h4>
<div = class"row-fluid">
             <div class = 'span10'><pre class = 'snippet'></pre></div>
             <div class = 'span2'>
                <a href="#myModal" role="button" class="btn" data-toggle="modal">Preview</a>
            </div>
</div>
<legend>Configurez votre widget</legend>
<!-- Button to trigger modal -->
<!-- Modal -->
<div id="myModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
        <h3 id="myModalLabel">Preview du widget</h3>
    </div>
    <div class="modal-body">
        <p>Ici le widget</p>
    </div>
    <div class="modal-footer">
       <button class="btn" data-dismiss="modal" aria-hidden="true">Fermer</button>
     </div>
 </div>
