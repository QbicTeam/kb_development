using System.Collections.Generic;
using System;

namespace kb_development.API.DTOs
{
    public class LinksForListDto
    {
        public int Id { get; set; }
        public string LogoUrl { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string SiteUrl { get; set; }
        public List<string> Tags { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastUpdate { get; set; }        
    }
}