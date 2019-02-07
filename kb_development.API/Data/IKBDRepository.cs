using System.Collections.Generic;
using System.Threading.Tasks;
using kb_development.API.Helpers;
using kb_development.API.Models;

namespace kb_development.API.Data
{
    public interface IKBDRepository
    {
        void Add<T>(T entity) where T: class;
        void Delete<T>(T entity) where T: class;
        Task<bool> SaveAll();
        //Task<IEnumerable<Link>> GetLinks(LinkParams linkParams);
        Task<IEnumerable<Link>> GetLinks();
    }
}