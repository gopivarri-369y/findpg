import './About.css'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-inner">
        <div className="about-media">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80"
            alt="Comfortable accommodation"
          />
          <div className="about-badge">
            <span className="about-badge-num">500+</span>
            <span className="about-badge-label">Hostels Listed</span>
          </div>
        </div>
        <div className="about-content">
          <h2 className="about-title">About HostelHub</h2>
          <p className="about-text">
            We connect students and travelers with safe, affordable hostel accommodations.
            Our platform helps you discover verified hostels, read real reviews, and book
            with confidence—whether you're moving for college or exploring a new city.
          </p>
          <ul className="about-list">
            <li>Trusted by thousands of students and travelers</li>
            <li>Transparent pricing with no hidden fees</li>
            <li>24/7 support for bookings and queries</li>
          </ul>
          <a href="#contact" className="btn btn-primary">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
