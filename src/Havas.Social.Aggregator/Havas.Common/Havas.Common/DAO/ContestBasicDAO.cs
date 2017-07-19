using System;
using JMS.Common.Entities;
using System.Configuration;
using System.Data.SqlClient;
using System.Data;

namespace Havas.Common.DAO
{
    /// <summary>
    /// Handle database operations related to promotional contests.
    /// </summary>
    public class ContestBasicDAO : AbstractDAO
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ContestBasicDAO"/> class.
        /// </summary>
        public ContestBasicDAO() : base(null)
        {
            string connectionStringName = ConfigurationManager.AppSettings["ContestDBConnectionStringName"];

            if (connectionStringName == null)
                throw new Exception("No ContestDBConnectionStringName key found in app settings");

            ConnectionString = ConfigurationManager.ConnectionStrings[connectionStringName].ConnectionString;
        }

        /// <summary>
        /// Description: Process the contest basice info and store to database
        /// </summary>
        /// <param name="submission">ContestSubmission object</param>        
        /// <returns>The Id of the new inserted row</returns>
        public int SaveContestBasicInfo(ContestBasicInfo basicInfo)
        {
            var cmd = new SqlCommand("dbo.JMS_SubmitContestBasiceInfo", Connection) { CommandType = CommandType.StoredProcedure };

            cmd.Parameters.Add("@WebsiteId", SqlDbType.Int).Value = basicInfo.WebsiteId;
            cmd.Parameters.Add("@PromotionId", SqlDbType.Int).Value = basicInfo.PromotionId;
            cmd.Parameters.Add("@FirstName", SqlDbType.VarChar).Value = basicInfo.UserInfo.FirstName;
            cmd.Parameters.Add("@LastName", SqlDbType.VarChar).Value = basicInfo.UserInfo.LastName;
            cmd.Parameters.Add("@Address1", SqlDbType.VarChar).Value = basicInfo.UserInfo.Address1;
            cmd.Parameters.Add("@Address2", SqlDbType.VarChar).Value = basicInfo.UserInfo.Address2;
            cmd.Parameters.Add("@City", SqlDbType.VarChar).Value = basicInfo.UserInfo.City;
            cmd.Parameters.Add("@State", SqlDbType.VarChar).Value = basicInfo.UserInfo.State;
            cmd.Parameters.Add("@PostalCode", SqlDbType.VarChar).Value = basicInfo.UserInfo.ZipCode;
            cmd.Parameters.Add("@DaytimePhone", SqlDbType.VarChar).Value = basicInfo.UserInfo.PhoneNumber;
            cmd.Parameters.Add("@EveningPhone", SqlDbType.VarChar).Value = basicInfo.UserInfo.EveningPhone;
            cmd.Parameters.Add("@DateOfBirth", SqlDbType.DateTime).Value = basicInfo.UserInfo.BirthDate;
            cmd.Parameters.Add("@EmailAddress", SqlDbType.VarChar).Value = basicInfo.UserInfo.EmailAddress;
            cmd.Parameters.Add("@CreateDate", SqlDbType.DateTime).Value = DateTime.Now;
            cmd.Parameters.Add("@OptIn", SqlDbType.Bit).Value = basicInfo.OptIn;

            var idParameter = new SqlParameter("@Id", 0) {Direction = ParameterDirection.Output};
            cmd.Parameters.Add(idParameter);

            cmd.ExecuteNonQuery();

            basicInfo.Id = Convert.ToInt32(idParameter.Value);
            return basicInfo.Id;
        } //end of function


        /// <summary>
        /// Gets the last date user regsitered.
        /// </summary>
        /// <param name="emailAddress">The email address.</param>
        /// <param name="websiteId">The website id.</param>
        /// <param name="promotionId">The promotion id.</param>
        /// <returns></returns>
        public DateTime GetLastDateUserRegsitered(string emailAddress, int websiteId, int promotionId)
        {
            const string cmdText = "SELECT MAX(CreateDate) LastRegisterDate FROM JMS_ContestBasicInfo " +
                                   "WHERE WebsiteId = @WebsiteId AND PromotionId = @PromotionId AND EmailAddress = @EmailAddress";

            var cmd = new SqlCommand(cmdText, Connection);

            cmd.Parameters.Add("@EmailAddress", SqlDbType.VarChar).Value = emailAddress;
            cmd.Parameters.Add("@WebsiteId", SqlDbType.Int).Value = websiteId;
            cmd.Parameters.Add("@PromotionId", SqlDbType.Int).Value = promotionId;

            //Replaced commented text with text below
            SqlDataReader reader = cmd.ExecuteReader();
            DateTime dt = DateTime.MinValue;

            if (reader.Read())
            {
                if (!reader.IsDBNull(0))
                    dt = reader.GetDateTime(0);
            }

            reader.Close();

            return dt;
        } //end of function

        /// <summary>
        /// Gets the total count of submissions for all users for particular promotion.
        /// </summary>
        /// <param name="websiteId">The website id.</param>
        /// <param name="promotionId">The promotion id.</param>
        /// <returns></returns>
        public int GetTotalCountOfSubmissions(int websiteId, int promotionId)
        {
            try
            {
                string cmdText = "SELECT count(*) Total FROM JMS_ContestBasicInfo " +
                                 "WHERE WebsiteId = @WebsiteId AND PromotionId = @PromotionId";

                SqlCommand cmd = new SqlCommand(cmdText, Connection);

                cmd.Parameters.Add("@WebsiteId", SqlDbType.Int).Value = websiteId;
                cmd.Parameters.Add("@PromotionId", SqlDbType.Int).Value = promotionId;

                //Replaced commented text with text below
                SqlDataReader reader = cmd.ExecuteReader();
                int total = 0;

                if (reader.Read())
                {
                    if (!reader.IsDBNull(0))
                        total = reader.GetInt32(0);
                }

                reader.Close();

                return total;
            }
            catch (Exception ex)
            {
                throw;
            }

        } //end of function

        /// <summary>
        /// Gets the total count of submissions associated with a particual email address in a promotion.
        /// </summary>
        /// <param name="websiteId">The website id.</param>
        /// <param name="promotionId">The promotion id.</param>
        /// <returns></returns>
        public int GetTotalCountOfSubmissions(string email, int websiteId, int promotionId)
        {
            try
            {
                string cmdText = "SELECT count(*) Total FROM JMS_ContestBasicInfo " +
                                 "WHERE EmailAddress = @EmailAddress AND WebsiteId = @WebsiteId AND PromotionId = @PromotionId";

                SqlCommand cmd = new SqlCommand(cmdText, Connection);

                cmd.Parameters.Add("@EmailAddress", SqlDbType.VarChar).Value = email;
                cmd.Parameters.Add("@WebsiteId", SqlDbType.Int).Value = websiteId;
                cmd.Parameters.Add("@PromotionId", SqlDbType.Int).Value = promotionId;

                //Replaced commented text with text below
                SqlDataReader reader = cmd.ExecuteReader();
                int total = 0;

                if (reader.Read())
                {
                    if (!reader.IsDBNull(0))
                        total = reader.GetInt32(0);
                }

                reader.Close();

                return total;
            }
            catch (Exception ex)
            {
                throw;
            }

        } //end of function

    }
}
