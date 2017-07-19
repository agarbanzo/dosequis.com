using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Havas.Common.Filesystem
{
    public class FtpSetting
    {
        public bool KeepAlive { get; set; }
        public bool UsePassive { get; set; }
        public string ConnectionGroup { get; set; }
    }
}
