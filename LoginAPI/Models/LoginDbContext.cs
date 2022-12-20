using Microsoft.EntityFrameworkCore;

namespace LoginAPI.Models
{
    public class LoginDbContext: DbContext
    {
        public LoginDbContext(DbContextOptions<LoginDbContext> options):base(options)
        {}

        public DbSet<Login> Logins { get; set; }
    }
}
