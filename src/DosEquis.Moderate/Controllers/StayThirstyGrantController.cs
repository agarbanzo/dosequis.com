using AutoMapper;
using DosEquis.Com.Core.Entities;
using DosEquis.Com.Repositories;
using Havas.Social.Aggregator.Moderate.Models;
using PagedList;
using System;
using System.Collections.Generic;
using System.Web.Mvc;

namespace Havas.Social.Aggregator.Moderate.Controllers
{
    [Authorize]
    public class StayThirstyGrantController : BaseController
    {

        private STGContestRepository _stgContestRepository;

        public StayThirstyGrantController()
        {
            var context = new DosEquisEntities();
            _stgContestRepository = new STGContestRepository(context);
        }

        public ActionResult Index()
        {
            //ViewBag.Rounds = new SelectList(this._stgContestRepository.GetRounds();

            List<int> rounds = null;
            //new List<int>();
            //rounds.Add(1);
            //rounds.Add(2);
            //rounds.Add(3);

            rounds = this._stgContestRepository.GetRounds();

            ViewBag.Rounds = new SelectList(rounds, rounds[rounds.Count - 1]);

            return View();
        }

        public JsonResult GetSubmissions(int jtStartIndex = 0, int jtPageSize = 15, string jtSorting = null, int? round = null, bool? isFinalist = null)
        {
            try
            {
                var domainResults = this._stgContestRepository.Search(jtStartIndex, jtPageSize, jtSorting, round, isFinalist);

                List<STGContestModel> modelResults = Mapper.Map<IPagedList<STGContest>, List<STGContestModel>>(domainResults);

                return Json(new ServiceResult("OK", modelResults, domainResults.TotalItemCount), JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return GetJsonResultWithException(ex);
            }

        }

        public JsonResult UpdateSubmissionStatus(int Id, bool? IsApproved = false, bool? IsFinalist = false, bool? IsRejected = false, bool? IsWinner = false)
        {
            try
            {
                var item = _stgContestRepository.Get(Id);

                if (item.IsRejected.GetValueOrDefault(false) == true && IsRejected.GetValueOrDefault(false) == false)
                {
                    return Json(new ServiceResult("ERROR", "Sorry, you can not un-reject!"), JsonRequestBehavior.AllowGet);
                }
                else if (item.IsRejected.GetValueOrDefault(false) == false && IsRejected.GetValueOrDefault(false) == true)
                {
                    //Send Reject Email only if it is set for the first time
                    dynamic email = new Postal.Email("RejectEmail");
                    email.To = item.EmailAddress;
                    email.HostName = GetHostName();
                    email.From = "DosEquis<no_reply@dosequis.com>";
                    email.Send();
                }

                this._stgContestRepository.UpdateStatus(Id, IsApproved, IsFinalist, IsRejected, IsWinner);

                return Json(new ServiceResult("OK"), JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return GetJsonResultWithException(ex);
            }

        }

        public JsonResult UpdateSubmissionWinnerStatus(int Id, bool? IsWinner = false)
        {
            try
            {
                this._stgContestRepository.UpdateStatus(Id, IsWinner);

                return Json(new ServiceResult("OK"), JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return GetJsonResultWithException(ex);
            }

        }

        public JsonResult DeleteSubmission(int jtStartIndex = 0, int jtPageSize = 15, string jtSorting = null, int? round = null)
        {
            try
            {
                var domainResults = this._stgContestRepository.Search(jtStartIndex, jtPageSize, jtSorting, round);

                List<STGContestModel> modelResults = Mapper.Map<IPagedList<STGContest>, List<STGContestModel>>(domainResults);

                return Json(new ServiceResult("OK", modelResults, domainResults.TotalItemCount), JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return GetJsonResultWithException(ex);
            }

        }

    }
}
