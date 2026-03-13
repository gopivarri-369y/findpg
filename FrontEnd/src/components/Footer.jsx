import './Footer.css'

const quickLinks = [
  { label: 'Find Hostel', href: '#find-hostel' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=48&h=48&fit=crop"
            alt=""
            className="footer-logo"
          />
          <span className="footer-brand-text">HostelHub</span>
          <p className="footer-tagline">
            Your trusted platform for finding and managing hostel stays.
          </p>
        </div>
        <div className="footer-links">
          <h4 className="footer-heading">Quick Links</h4>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
            <li><a href="#login">Login</a></li>
            <li><a href="#add-hostel">Add Hostel</a></li>
          </ul>
        </div>
        <div className="footer-legal">
          <p className="footer-copy">
            © {new Date().getFullYear()} HostelHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
