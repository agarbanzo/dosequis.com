using Havas.Common.Web.MVC.Filters;
using System.Web.Mvc;

namespace DosEquis.Com.Controllers
{
    [AgeGateCheckFilter]
    public abstract class ControllerBase : Controller
    {
       
    }
}