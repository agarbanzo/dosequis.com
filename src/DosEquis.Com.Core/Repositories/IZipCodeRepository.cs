using DosEquis.Com.Core.Entities;
using System.Collections.Generic;

namespace DosEquis.Com.Core.Repositories
{
    public interface IZipCodeRepository
    {
        List<ZipCode> Get();
    }
}
