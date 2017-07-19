using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Havas.Social.Aggregator.Moderate.Models
{
    public class ServiceResult
    {
        public string Result { get; set; }
        public string Message { get; set; }
        public object Record { get; set; }
        public object Records { get; set; }
        public int TotalRecordCount { get; set; }

        public ServiceResult()
        {

        }

        public ServiceResult(string status, string message = null)
        {
            this.Result = status;
            this.Message = message;
        }

        public ServiceResult(string status, object record)
        {
            this.Result = status;
            this.Record = record;
        }

        public ServiceResult(string status, object records, int totalRecordCount)
        {
            this.Result = status;
            this.Records = records;
            this.TotalRecordCount = totalRecordCount;
        }

    }
}