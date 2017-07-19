using System;
using Havas.Common.DAO;
using System.Configuration;
using System.Data.SqlClient;
using System.Data;

namespace Havas.Common.APIService
{
    public class PoxServiceDatabaseRecorder : AbstractDAO, IPoxServiceRecorder
    {
        private static log4net.ILog log = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);

        public PoxServiceDatabaseRecorder()
            : base(null)
        {

            string connectionStringName = ConfigurationManager.AppSettings["DBConnectionStringName"];

            if (connectionStringName == null)
                throw new Exception("No DBConnectionStringName key found in app settings");
            ConnectionString = ConfigurationManager.ConnectionStrings[connectionStringName].ConnectionString;

        }

        public int RecordRequest(string method, string url, string body)
        {
            int conversationId = int.MinValue;

            OpenConnection();
            using (var cmd = new SqlCommand("SaveRequestToServiceConversation", Connection) { CommandType = CommandType.StoredProcedure })
            {
                cmd.Parameters.Add("@StartedOn", SqlDbType.DateTime).Value = DateTime.Now;
                cmd.Parameters.Add("@Url", SqlDbType.VarChar).Value = url;
                cmd.Parameters.Add("@Method", SqlDbType.VarChar).Value = method;
                cmd.Parameters.Add("@RequestBody", SqlDbType.VarChar).Value = body;

                conversationId = (Int32)cmd.ExecuteScalar();
            }
            CloseConnection();

            return conversationId;
        }

        public void RecordResponse(int conversationId, string body, int statusCode, bool success)
        {
            OpenConnection();
            using (var cmd = new SqlCommand("SaveResponseToServiceConversation", Connection) { CommandType = CommandType.StoredProcedure })
            {
                cmd.Parameters.Add("@ConversationID", SqlDbType.Int).Value = conversationId;
                cmd.Parameters.Add("@ResponseBody", SqlDbType.VarChar).Value = body;
                cmd.Parameters.Add("@StatusCode", SqlDbType.Int).Value = statusCode;
                cmd.Parameters.Add("@Successfull", SqlDbType.Bit).Value = success;
                cmd.ExecuteNonQuery();
            }
            CloseConnection();
        }
    }
    
}
