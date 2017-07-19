namespace Havas.Common.APIService
{
    public interface IPoxServiceRecorder
    {
        int RecordRequest(string Method, string Url, string Body);
        void RecordResponse(int ConversationId, string Body, int StatusCode, bool Success);
    }
}
