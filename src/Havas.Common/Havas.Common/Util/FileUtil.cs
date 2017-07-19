using System.IO;
using System.Threading.Tasks;

namespace Havas.Common.Util
{
    public static class FileUtil
    {
        public static async Task<string> ReadTextAsync(string filePath)
        {
            using (var reader = File.OpenText(filePath))
            {
                return await reader.ReadToEndAsync().ConfigureAwait(false);
            }
        }
    }
}
