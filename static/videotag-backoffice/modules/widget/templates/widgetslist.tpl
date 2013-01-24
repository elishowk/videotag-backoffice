<% if(length > 0){  %>
<ul class="nav nav-list">
<a class="btn btn-primary btn-large btn-block" href="#addwidget">Nouveau widget</a>
<li class="nav-header">Mes widgets</li>
<% _.each(widgets, function(widget) { %>
        <li><a href= "/#widget/<%=widget.id %>"><i class="icon-pencil"></i><%= widget.title %></a></li>
        <% }); %>
</ul>

<ul class="pager">
    <% if(previous != null){%> <li><a class="previous btn">Précédent</a></li><%}%>
    <% if(next != null){%> <li><a  class="next btn">Suivant</a></li><%}%>
</ul>
<% }else {%>
<a class="btn btn-primary btn-large btn-block" href="#addwidget">Créer votre premier widget</a>
<%}%>
