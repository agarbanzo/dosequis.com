using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using Havas.Common.Constants;
using Havas.Common.Extensions;

namespace Havas.Common
{
   
        [Serializable]
        public class AppException : Exception
        {
            private int _errorCode;
            private string _userFriendlyMessage;

            /// <summary>
            /// Initializes a new instance of the <see cref="AppException"/> class.
            /// </summary>
            /// <param name="message">The message.</param>
            public AppException(string message)
                : base(message)
            {
                this._errorCode = (int)(UserFriendlyErrorMessage.GenericError);
                this._userFriendlyMessage = UserFriendlyErrorMessage.GenericError.GetStringValue();
            }

            /// <summary>
            /// Initializes a new instance of the <see cref="AppException"/> class.
            /// </summary>
            /// <param name="userFriendlyMessage">The user friendly message.</param>
            public AppException(UserFriendlyErrorMessage userFriendlyMessage)
                : base(userFriendlyMessage.GetStringValue())
            {
                this._errorCode = System.Convert.ToInt32(userFriendlyMessage);
                this._userFriendlyMessage = userFriendlyMessage.GetStringValue();
            }

            /// <summary>
            /// Initializes a new instance of the <see cref="AppException"/> class.
            /// </summary>
            /// <param name="userFriendlyMessage">The user friendly message.</param>
            /// <param name="innerException">The inner exception.</param>
            public AppException(UserFriendlyErrorMessage userFriendlyMessage, Exception innerException)
                : base(innerException.Message, innerException)
            {
                this._userFriendlyMessage = userFriendlyMessage.GetStringValue();
                this._errorCode = System.Convert.ToInt32(userFriendlyMessage);
            }

            /// <summary>
            /// Initializes a new instance of the <see cref="AppException"/> class.
            /// </summary>
            /// <param name="info">The info.</param>
            /// <param name="context">The context.</param>
            protected AppException(SerializationInfo info, StreamingContext context)
                : base(info, context)
            {

            }

            /// <summary>
            /// Gets the user friendly message.
            /// </summary>
            /// <value>The user friendly message.</value>
            public string UserFriendlyMessage
            {
                get { return this._userFriendlyMessage; }
            }

            /// <summary>
            /// Gets the error code.
            /// </summary>
            /// <value>The error code.</value>
            public virtual int ErrorCode
            {
                get { return this._errorCode; }
            }


        }
    
}