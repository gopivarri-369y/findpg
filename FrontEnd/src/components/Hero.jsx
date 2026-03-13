import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="find-hostel">
      <div className="hero-bg">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80"
          alt="Comfortable hostel room"
        />
        <div className="hero-overlay" />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">
          Find Your Perfect <span className="hero-accent">Hostel</span> Stay
        </h1>
        <p className="hero-subtitle">
          Browse verified hostels, compare prices, and book a safe, affordable place
          for students and travelers.
        </p>
        <div className="hero-actions">
          <a href="#find-hostel" className="btn btn-primary">
            Find Hostel
          </a>
          <a href="#services" className="btn btn-secondary">
            Our Services
          </a>
        </div>
      </div>
    </section>
  )
}
