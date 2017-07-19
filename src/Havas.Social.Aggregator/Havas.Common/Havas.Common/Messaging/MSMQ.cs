using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Messaging;
using Newtonsoft.Json;
using System.IO;

namespace Havas.Common.Messaging
{
    public class MSMQ
    {

        public static void SendToTransactionalQueue(object queueMessage, string queueAddress)
        {
            try
            {
                using (var queue = new MessageQueue(queueAddress))
                {
              //      var message = new Message(queueMessage);
                    var message = new Message();

                    var tx = new MessageQueueTransaction();
                    tx.Begin();
                    var jsonMessage = JsonConvert.SerializeObject(queueMessage);
                    message.BodyStream = new MemoryStream(Encoding.Default.GetBytes(jsonMessage));
                    queue.Send(message, tx);
                    tx.Commit();
                }
            }
            catch (MessageQueueException)
            {
                throw;
            }
        }
    }
}
