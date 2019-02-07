using System;

namespace kb_development.API.Models
{
    public class Link
    {
        public int Id { get; set; }
        public string LogoUrl { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string SiteUrl { get; set; }
        public string Tags { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastUpdate { get; set; }
    }
}