using System.Data;
using System.Data.SqlClient;

namespace Havas.Common.DAO
{
    /// <summary>
    /// Description: Abstract class for data access object
    /// </summary>
    public abstract class AbstractDAO
    {
        protected string _connectionString;
        protected SqlConnection _connection;

        /// <summary>
        /// Initializes a new instance of the <see cref="AbstractDAO"/> class.
        /// </summary>
        /// <param name="connectionString">The connection string.</param>
        protected AbstractDAO(string connectionString)
        {
            //_connectionString = ConfigurationManager.ConnectionStrings["Default"].ConnectionString;
            _connectionString = connectionString;
            _connection = new SqlConnection(_connectionString);
        }

        /// <summary>
        /// Gets or sets the connection string.
        /// </summary>
        /// <value>The connection string.</value>
        public string ConnectionString
        {
            get
            {
                return _connectionString;
            }
            set
            {
                _connectionString = value;
                CloseConnection();
                _connection = new SqlConnection(_connectionString);
            }
        }

        /// <summary>
        /// Gets the connection.
        /// </summary>
        /// <value>The connection.</value>
        public SqlConnection Connection
        {
            get { return _connection; }
        }

        /// <summary>
        /// Opens the connection.
        /// </summary>
        public void OpenConnection()
        {
            if (_connection != null && _connection.State == ConnectionState.Closed)
                _connection.Open();
        }

        /// <summary>
        /// Closes the connection.
        /// </summary>
        public void CloseConnection()
        {
            if (_connection != null && _connection.State == ConnectionState.Open)
                _connection.Close();
        }
    }
}
