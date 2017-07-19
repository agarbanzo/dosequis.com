using System;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.IO;

namespace Havas.Common.DAO {

	public class TransientAsset {
		public byte[] Buffer { get; set; }
		public string ContentType { get; set; }
		public string PromotionKey { get; set; }
		public string EntryID { get; set;  }
	}

	public class TransientAssetDAO : AbstractDAO {
        /// <summary>
        /// Initializes a new instance of the <see cref="ContestBasicDAO"/> class.
        /// </summary>
        public TransientAssetDAO() : base(null) {
            ConnectionString = ConfigurationManager.ConnectionStrings["JMSAccessConn"].ConnectionString;
        }

		public Guid StoreAsset(byte[] Asset, string ContentType, string PromotionKey, string EntryId) {
			base.OpenConnection();
			try {
				var cmd = new SqlCommand("dbo.CreateTransientAsset", Connection) {CommandType = CommandType.StoredProcedure};


				cmd.Parameters.Add("@assetData", SqlDbType.VarBinary,Asset.Length).Value = Asset;
				cmd.Parameters.Add("@ContentType", SqlDbType.VarChar).Value = ContentType;
				cmd.Parameters.Add("@PromotionKey", SqlDbType.VarChar).Value = PromotionKey;
				cmd.Parameters.Add("@EntryId", SqlDbType.VarChar).Value = EntryId;

				var assetId = (Guid) cmd.ExecuteScalar();

				return assetId ;

			} catch {
				return Guid.Empty;
			}
			finally {
				base.CloseConnection();
			}			
		}

		public Guid StoreAsset(Stream Asset, string ContentType, string promotionKey, string entryId) {
			var buffer = new byte[Asset.Length];
			Asset.Read(buffer, 0, Convert.ToInt32(Asset.Length));

			return StoreAsset(buffer, ContentType, promotionKey, entryId);		
		}

		public Guid StoreAsset(byte[] Asset, string ContentType) {

			return StoreAsset(Asset, ContentType,null,null);
		}

		public Guid StoreAsset(Stream Asset, string ContentType) {
			var buffer = new byte[Asset.Length];
			Asset.Read(buffer, 0, Convert.ToInt32(Asset.Length));

			return StoreAsset(buffer, ContentType, null, null);
		}

		public TransientAsset RetrieveAsset(Guid AssetId) {
			base.OpenConnection();
			base.OpenConnection();
			try {
				var cmd = new SqlCommand("dbo.ReadTransientAsset", Connection) {CommandType = CommandType.StoredProcedure};

				cmd.Parameters.Add("@assetId", SqlDbType.UniqueIdentifier).Value = AssetId;

				var reader = cmd.ExecuteReader(CommandBehavior.CloseConnection);

				var asset = new TransientAsset();
				while (reader.Read()) {
					asset.Buffer = reader.GetSqlBytes(0).Buffer;
					asset.ContentType = reader.GetString(1);
					if (!reader.IsDBNull(2)) { asset.PromotionKey = reader.GetString(2); }
					if (!reader.IsDBNull(3)) { asset.EntryID = reader.GetString(3); }
				}
				return asset;

			} catch {
				return null;
			}
			finally {
				base.CloseConnection();
			}
		}

		public void DeleteAsset(Guid AssetId) {
			base.OpenConnection();
			try {
				var cmd = new SqlCommand("dbo.DeleteTransientAsset", Connection) {CommandType = CommandType.StoredProcedure};

				cmd.Parameters.Add("@assetId", SqlDbType.UniqueIdentifier).Value = AssetId;

				cmd.ExecuteNonQuery();
			}
			finally {
				base.CloseConnection();
			}
		}
	}
}
