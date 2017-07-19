using System;
using System.Collections.Generic;
using System.Web.Mvc;

namespace Havas.Common.Web
{
    public interface ISelectListRepository
    {


        IEnumerable<SelectListItem> GetBirthMonth();
        IEnumerable<SelectListItem> GetBirthMonthAbbreviations();
        IEnumerable<SelectListItem> GetBirthDay();
        IEnumerable<SelectListItem> GetBirthYear();
    }

    public class SelectListRepository : ISelectListRepository
    {


        public SelectListRepository()
        {

        }


        public IEnumerable<SelectListItem> GetBirthMonth()
        {
            return new List<SelectListItem> {
                new SelectListItem {Text = "Month", Value = ""},
                new SelectListItem {Text = "January", Value = "1"},
                new SelectListItem {Text = "February", Value = "2"},
                new SelectListItem {Text = "March", Value = "3"},
                new SelectListItem {Text = "April", Value = "4"},
                new SelectListItem {Text = "May", Value = "5"},
                new SelectListItem {Text = "June", Value = "6"},
                new SelectListItem {Text = "July", Value = "7"},
                new SelectListItem {Text = "August", Value = "8"},
                new SelectListItem {Text = "September", Value = "9"},
                new SelectListItem {Text = "October", Value = "10"},
                new SelectListItem {Text = "November", Value = "11"},
                new SelectListItem {Text = "December", Value = "12"},
            };
        }

        public IEnumerable<SelectListItem> GetBirthMonthAbbreviations()
        {
            return new List<SelectListItem> {
                new SelectListItem {Text = "Month", Value = ""},
                new SelectListItem {Text = "Jan", Value = "1"},
                new SelectListItem {Text = "Feb", Value = "2"},
                new SelectListItem {Text = "Mar", Value = "3"},
                new SelectListItem {Text = "Apr", Value = "4"},
                new SelectListItem {Text = "May", Value = "5"},
                new SelectListItem {Text = "Jun", Value = "6"},
                new SelectListItem {Text = "Jul", Value = "7"},
                new SelectListItem {Text = "Aug", Value = "8"},
                new SelectListItem {Text = "Sep", Value = "9"},
                new SelectListItem {Text = "Oct", Value = "10"},
                new SelectListItem {Text = "Nov", Value = "11"},
                new SelectListItem {Text = "Dec", Value = "12"},
            };
        }

        public IEnumerable<SelectListItem> GetBirthDay()
        {
            for (var i = 1; i <= 31; i++)
            {
                yield return new SelectListItem { Text = i.ToString(), Value = i.ToString() };
            }
        }

        public IEnumerable<SelectListItem> GetBirthYear()
        {
            yield return new SelectListItem { Text = "Year", Value = "" };

            for (var i = DateTime.Now.Year + 1; i > DateTime.Now.Year - 120; i--)
            {
                yield return new SelectListItem { Text = i.ToString(), Value = i.ToString() };
            }
        }

        public IEnumerable<SelectListItem> GetContactUsTypes()
        {
            return new List<SelectListItem> {
                new SelectListItem {Text = "-Select One-", Value = ""},
                new SelectListItem {Text = "Compliment", Value="Compliment"},
                new SelectListItem {Text = "Complaint", Value = "Complaint"},
                new SelectListItem {Text = "Question", Value = "Question"},
                new SelectListItem {Text = "Suggestion" ,Value = "Suggestion"},
            };
        }
    }


}