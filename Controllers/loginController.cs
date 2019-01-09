using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ScoreGenius.Controllers
{
   // [Route("api/[controller]")]
    public class loginController : Controller
    {
       
        [Route("api/login/Login")]
        [HttpPost]
        public ActionResult Login([FromBody]UserLogin login)
        {
            try{

                if(!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                else
                {
                     if(login.UserName=="rikesh" && login.Password=="pathak" )
                    {
                        return Ok(
                            "success"
                        );
                    }
                }
               
            }
            catch(Exception ex)
            {
               return this.Ok(
                   "Falied"
               );
            }
            
            return Unauthorized();
        }

    }
    public class UserLogin
    {
        public string  UserName { get; set; }
        public string Password { get; set; }
    }
}
