<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl`1[[MvcSiteMapProvider.Web.Html.Models.MenuHelperModel,MvcSiteMapProvider]]" %>
<%@ Import Namespace="System.Web.Mvc.Html" %>
<%@ Import Namespace="MvcSiteMapProvider.Web.Html.Models" %>

<nav id="mainNav" class="nav navbar-nav">
    <div class="wrapper">
    <% foreach (var node in Model.Nodes) { %>
        <%
        if (node.IsRootNode) { %>
            <div class="main">
                <a href="/" class="icon-logo">Home</a>
            </div>
        <% } else {
            if ( !(node.Attributes.ContainsKey("type") && node.Attributes["type"].ToString()=="hide-main")){
            var linkHTML = node.Title;
            var linkHREF = node.Url;
            var CSSClass = node.Controller.ToString();
            var navItem = node.Controller.ToString();
            if (node.Key.Length > 0 && node.Key == "about") {
                linkHTML = "About <span>Dos Equis</span>";
            } else if(node.Key.Length > 0 && node.Key == "Store"){
                linkHREF = "https://store.dosequis.com/";
                CSSClass ="Store";
                navItem = "Store";
            } else if(node.Key.Length > 0 && node.Key == "privacy"){
                linkHTML ="Your Privacy Rights";
            } %>
            <div class="sec <%=  CSSClass %>">
                <div class="content" data-navItem="<%= navItem %>">
                <a href="<%= linkHREF %>"><%=linkHTML %></a>
            <%//Html.DisplayFor(m => node)%>
        <% if (node.Children.Any()) { %>
            <div class="sub">
                <%=Html.DisplayFor(m => node.Children)%>
            </div><!--sub -->
            <button class="expandButton" href="#expand" ></button>
        <% } %>
            </div><!-- content -->
        </div><!--sec -->
            <% } %>
    <% }
    } %>
    </div><!-- wrapper -->
</nav>