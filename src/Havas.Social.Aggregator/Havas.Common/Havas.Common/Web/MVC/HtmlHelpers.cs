using System.Web.Mvc;

namespace Havas.Common.Web.MVC
{
    public static class HtmlHelpers
    {
        /// <summary>
        /// Indicate if the passed controller and action are the current/active conroller and action that serve the current view.
        /// </summary>
        /// <param name="helper">The helper</param>
        /// <param name="context">Current View Context</param>
        /// <param name="controller">Controller name</param>
        /// <param name="action">Action name</param>
        /// <returns></returns>
        public static bool IsActive(this HtmlHelper helper, ViewContext context, string controller, string action)
        {
            string currentController = context.RouteData.GetRequiredString("controller");
            string currentAction = context.RouteData.GetRequiredString("action"); ;

            if (currentController.Equals(controller) && currentAction.Equals(action))
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public static MvcHtmlString Image(this HtmlHelper helper, string imgFile, string imgAlt, string imgId, string imgClass)
        {
            TagBuilder img = new TagBuilder("img");
            img.Attributes.Add("src", imgFile );
            img.Attributes.Add("alt", imgAlt);
            img.Attributes.Add("id", imgId);
            img.Attributes.Add("class", imgClass);
            return new MvcHtmlString(img.ToString());
        }

        public static MvcHtmlString ActionImage(this HtmlHelper html, string imgFile, string imgAlt, string imgId, string imgClass,
            string action, string controllerName, object routeValues)
        {
            var currentUrl = new UrlHelper(html.ViewContext.RequestContext);
            string imgHtml = Image(html,imgFile,imgAlt,imgId,imgClass).ToString();
            var anchorTagBuilder = new TagBuilder("a"); // build the <a> tag
            anchorTagBuilder.MergeAttribute("href", currentUrl.Action(action, controllerName, routeValues));
            anchorTagBuilder.InnerHtml = imgHtml; // include the <img> tag inside
            string anchorHtml = anchorTagBuilder.ToString(TagRenderMode.Normal);
            return MvcHtmlString.Create(anchorHtml);
        }


     }
}
