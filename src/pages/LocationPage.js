import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import '../assets/styles/style-pages/location_page.scss';
import SEO from '../components/SEO';

export default function LocationPage() {
  return (
    <Zoom triggerOnce>
      <section className="loc-cont" id="lokacija-mapa">
        <SEO
          title="Startfinity Navigator Private Limited | Location | Business Consultancy"
          keywords="Startfinity Navigator, business consultancy, location, contact, corporate solutions"
          description="Discover the location of Startfinity Navigator Private Limited – your trusted business consultancy partner dedicated to seamless support and expert guidance."
          name="Startfinity Navigator Private Limited | Business Consultancy"
          type="website"
        />
        <h1>LOCATION</h1>
        <div className="loc-wrap">
          <div className="loc-img" />
          <div className="loc-iframe">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11507.858785507102!2d18.4090856!3d43.8565604!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2ca13d716acd6937!2sAdvokat%20Senad%20Ra%C5%A1inli%C4%87!5e0!3m2!1sen!2sba!4v1671481102590!5m2!1sen!2sba"
              title="Startfinity Navigator Private Limited Location"
              width="100%"
              height="100%"
              style={{ border: '0' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </Zoom>
  );
}
