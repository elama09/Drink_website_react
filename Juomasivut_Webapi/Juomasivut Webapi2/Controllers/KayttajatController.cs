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
    public class KayttajatController : ApiController
    {
        private JuomasivuDBEntities db = new JuomasivuDBEntities();

        // GET: api/Kayttajat
        public IEnumerable<Kayttajat> GetKayttajat()
        {
            return db.Kayttajat.ToArray();
        }

        // GET: api/Kayttajat/5
        [ResponseType(typeof(Kayttajat))]
        public IHttpActionResult GetKayttajat(int id)
        {
            Kayttajat kayttajat = db.Kayttajat.Find(id);
            if (kayttajat == null)
            {
                return NotFound();
            }

            return Ok(kayttajat);
        }

        // PUT: api/Kayttajat/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutKayttajat(int id, Kayttajat kayttajat)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != kayttajat.kayttaja_id)
            {
                return BadRequest();
            }

            db.Entry(kayttajat).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!KayttajatExists(id))
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

        // POST: api/Kayttajat
        [ResponseType(typeof(Kayttajat))]
        public IHttpActionResult PostKayttajat(Kayttajat kayttajat)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Kayttajat.Add(kayttajat);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = kayttajat.kayttaja_id }, kayttajat);
        }

        // DELETE: api/Kayttajat/5
        [ResponseType(typeof(Kayttajat))]
        public IHttpActionResult DeleteKayttajat(int id)
        {
            Kayttajat kayttajat = db.Kayttajat.Find(id);
            if (kayttajat == null)
            {
                return NotFound();
            }

            db.Kayttajat.Remove(kayttajat);
            db.SaveChanges();

            return Ok(kayttajat);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool KayttajatExists(int id)
        {
            return db.Kayttajat.Count(e => e.kayttaja_id == id) > 0;
        }
    }
}