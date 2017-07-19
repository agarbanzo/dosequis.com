using System.Collections.Generic;

namespace Havas.Common.APIService
{
    public interface IPoxService
    {
        PoxResponse Get(string url);
        PoxResponse Post(string url, string data);
        PoxResponse PostMultipartForm(string url, byte[] data, string boundary);
        string BuildPostData(Dictionary<string, string> data);
        byte[] BuildPostData(Dictionary<string, string> data, byte[] image, string boundary, string filename);
        byte[] BuildUtf8PostData(Dictionary<string, string> data);
        PoxResponse PostUtf8(string url, byte[] data);
    }
}
