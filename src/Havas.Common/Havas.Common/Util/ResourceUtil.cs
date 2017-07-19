using System.IO;
using System.Reflection;

namespace Havas.Common.Util {
	public class ResourceUtil {

		public static string GetResourceFileContents(string path) {
			var fileContents = "";

			using (var stream = Assembly.GetExecutingAssembly().GetManifestResourceStream(path)) {
				if (stream == null) {
					throw new FileNotFoundException("Embedded resource not found.",path);
				}
				using (var reader = new StreamReader(stream)) {
					fileContents = reader.ReadToEnd();
				}			
			}

			return fileContents;
		}

	}
}