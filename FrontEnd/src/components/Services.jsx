import './Services.css'

const services = [
  {
    title: 'Search & Compare',
    description: 'Filter by location, price, and amenities. Compare hostels side by side.',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80',
    icon: '🔍',
  },
  {
    title: 'Verified Listings',
    description: 'Every hostel is verified. Real photos and honest reviews from guests.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89c4784c0b4?w=600&q=80',
    icon: '✓',
  },
  {
    title: 'Easy Booking',
    description: 'Book instantly online. Get confirmation and support 24/7.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    icon: '📅',
  },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services-header">
        <h2 className="services-title">Our Services</h2>
        <p className="services-intro">
          Everything you need to find and book a hostel that fits your budget and lifestyle.
        </p>
      </div>
      <div className="services-grid">
        {services.map((item, i) => (
          <article key={i} className="service-card">
            <div className="service-card-image">
              <img src={item.image} alt={item.title} />
              <span className="service-card-icon" aria-hidden>{item.icon}</span>
            </div>
            <h3 className="service-card-title">{item.title}</h3>
            <p className="service-card-desc">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
