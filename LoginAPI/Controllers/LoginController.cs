using LoginAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LoginAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly LoginDbContext _context;
        public LoginController(LoginDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Login>>> GetLogins()
        {
            return await _context.Logins.ToListAsync();
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Login>> GetLogin(int id)
        {
            var _login = await _context.Logins.FindAsync(id);

            if (_login == null)
            {
                return NotFound();
            }

            return _login;
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLogin(int id, Login _LoginResult)
        {
            if (id != _LoginResult.LoginId)
            {
                return BadRequest();
            }

            // get all current details of the record, then update with quiz results
            Login login = _context.Logins.Find(id);
            //login. = _participantResult.Score;
            //login.TimeTaken = _participantResult.TimeTaken;

            _context.Entry(login).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LoginExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }
        [HttpPost]
        public async Task<ActionResult<Login>> PostLogin(Login login)
        {
            var temp = _context.Logins
                .Where(x => x.Email == login.Email)
                .FirstOrDefault();

            if (temp == null)
            {
                _context.Logins.Add(login);
                await _context.SaveChangesAsync();
            }
            else
                login = temp;

            return Ok(login);
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLogin(int id)
        {
            var login = await _context.Logins.FindAsync(id);
            if (login == null)
            {
                return NotFound();
            }

            _context.Logins.Remove(login);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        private bool LoginExists(int id)
        {
            return _context.Logins.Any(e => e.LoginId == id);
        }
    }
}
