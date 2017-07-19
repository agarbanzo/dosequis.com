using System;
using System.Collections.Generic;
using System.Text;

namespace Havas.Common
{
    public class StringValueAttribute : System.Attribute
    {

        private string _value;

        /// <summary>
        /// Initializes a new instance of the <see cref="StringValueAttribute"/> class.
        /// </summary>
        /// <param name="value">The value.</param>
        public StringValueAttribute(string value)
        {
            _value = value;
        }

        /// <summary>
        /// Gets the value.
        /// </summary>
        /// <value>The value.</value>
        public string Value
        {
            get { return _value; }
        }

    }


}
