using System.Collections.Generic;
using System.Threading.Tasks;
using kb_development.API.Helpers;
using kb_development.API.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System;


namespace kb_development.API.Data
{
    public class KBDRepository: IKBDRepository
    {
        private readonly DataContext _context;

        public KBDRepository(DataContext context)
        {
            _context = context;
        }

        public void Add<T>(T entity) where T: class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T: class
        {
            _context.Remove(entity);
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        
        //public async Task<PagedList<User>> GetLinks(LinkParams linkParams)
        public async Task<IEnumerable<Link>> GetLinks()
        {
            var links = await _context.Links.ToListAsync();
            return links;

        }

    }
}