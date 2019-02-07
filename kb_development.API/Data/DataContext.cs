using kb_development.API.Models;
using Microsoft.EntityFrameworkCore;

namespace kb_development.API.Data
{
    public class DataContext: DbContext
    {
        public DataContext (DbContextOptions<DataContext> options):base(options){}

        public DbSet<Link> Links { get; set; }
        
    }
}