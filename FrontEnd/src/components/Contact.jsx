import './Contact.css'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <div className="contact-info">
          <h2 className="contact-title">Contact Us</h2>
          <p className="contact-text">
            Have questions about hostels or need help with a booking? Reach out and we will
            get back to you soon.
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-item-icon" role="img" aria-label="Email">&#9993;</span>
              <div>
                <strong>Email</strong>
                <span>support@hostelhub.com</span>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-item-icon" role="img" aria-label="Phone">&#9742;</span>
              <div>
                <strong>Phone</strong>
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-item-icon" role="img" aria-label="Location">&#9982;</span>
              <div>
                <strong>Office</strong>
                <span>123 Hostel Street, City, Country</span>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form-wrap">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <label className="contact-label">
              <span>Name</span>
              <input type="text" placeholder="Your name" className="contact-input" />
            </label>
            <label className="contact-label">
              <span>Email</span>
              <input type="email" placeholder="you@example.com" className="contact-input" />
            </label>
            <label className="contact-label">
              <span>Message</span>
              <textarea
                placeholder="How can we help?"
                rows={4}
                className="contact-input contact-textarea"
              />
            </label>
            <button type="submit" className="btn btn-primary contact-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
