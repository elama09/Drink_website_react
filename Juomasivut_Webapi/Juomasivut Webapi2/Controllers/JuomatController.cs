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
    public class JuomatController : ApiController
    {
        private JuomasivuDBEntities db = new JuomasivuDBEntities();

        // GET: api/Juomat
        public IQueryable<Juomat> GetJuomat()
        {
            return db.Juomat;
        }

        // GET: api/Juomat/5
        [ResponseType(typeof(Juomat))]
        public IHttpActionResult GetJuomat(int id)
        {
            Juomat juomat = db.Juomat.Find(id);
            if (juomat == null)
            {
                return NotFound();
            }

            return Ok(juomat);
        }

        // PUT: api/Juomat/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutJuomat(int id, Juomat juomat)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != juomat.juoma_id)
            {
                return BadRequest();
            }

            db.Entry(juomat).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!JuomatExists(id))
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

        // POST: api/Juomat
        [ResponseType(typeof(Juomat))]
        public IHttpActionResult PostJuomat(Juomat juomat)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Juomat.Add(juomat);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = juomat.juoma_id }, juomat);
        }

        // DELETE: api/Juomat/5
        [ResponseType(typeof(Juomat))]
        public IHttpActionResult DeleteJuomat(int id)
        {
            Juomat juomat = db.Juomat.Find(id);
            if (juomat == null)
            {
                return NotFound();
            }

            db.Juomat.Remove(juomat);
            db.SaveChanges();

            return Ok(juomat);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool JuomatExists(int id)
        {
            return db.Juomat.Count(e => e.juoma_id == id) > 0;
        }
    }
}