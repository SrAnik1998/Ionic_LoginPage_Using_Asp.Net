using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LoginAPI.Models
{
    public class Login
    {
        [Key]
        public int? LoginId { get; set; }

        [Column(TypeName ="nvarchar(100)")]
        public string? Email { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string? Password { get; set; }
    }
}
