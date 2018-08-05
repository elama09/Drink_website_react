using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using Juomasivut_Webapi2.Models;

namespace Juomasivut_Webapi2.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ArvostelutsController : ApiController
    {
        private JuomasivuDBEntities db = new JuomasivuDBEntities();

        // GET: api/Arvosteluts
        public IQueryable<Arvostelut> GetArvostelut(int id)
        {
            var kaikki = db.Arvostelut.Where(x => x.juoma_id == id);
            return kaikki;
        }

        public IQueryable<Arvostelut> GetArvostelut()
        {
            return db.Arvostelut;
        }


        // GET: api/Arvosteluts/5
        //[ResponseType(typeof(Arvostelut))]
        //public IHttpActionResult GetArvostelut(int id)
        //{
        //    Arvostelut arvostelut = db.Arvostelut.Find(id);
        //    if (arvostelut == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(arvostelut);
        //}

        // PUT: api/Arvosteluts/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutArvostelut(int id, Arvostelut arvostelut)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != arvostelut.arvostelu_id)
            {
                return BadRequest();
            }

            db.Entry(arvostelut).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ArvostelutExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Arvosteluts
        [ResponseType(typeof(Arvostelut))]
        public IHttpActionResult PostArvostelut(Arvostelut arvostelut)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Arvostelut.Add(arvostelut);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = arvostelut.arvostelu_id }, arvostelut);
        }

        // DELETE: api/Arvosteluts/5
        [ResponseType(typeof(Arvostelut))]
        public IHttpActionResult DeleteArvostelut(int id)
        {
            Arvostelut arvostelut = db.Arvostelut.Find(id);
            if (arvostelut == null)
            {
                return NotFound();
            }

            db.Arvostelut.Remove(arvostelut);
            db.SaveChanges();

            return Ok(arvostelut);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ArvostelutExists(int id)
        {
            return db.Arvostelut.Count(e => e.arvostelu_id == id) > 0;
        }
    }
}