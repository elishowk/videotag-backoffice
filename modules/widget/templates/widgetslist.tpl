    <ul class="nav nav-list">
        <a class="btn btn-primary btn-large btn-block" href="#addwidget"> Créer un widget</a>
        <li class="nav-header">Mes widgets</li>
     <% _.each(widgets, function(widget) { %>
            <li><a href= "#widget/<%=widget.id %>"><i class="icon-pencil"></i><%= widget.title %></a></li>
            <% }); %>
    </ul>
