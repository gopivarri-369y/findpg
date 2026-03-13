import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  { label: 'Find Hostel', href: '/', hash: '#find-hostel' },
  { label: 'Services', href: '/', hash: '#services' },
  { label: 'Contact', href: '/', hash: '#contact' },
  { label: 'About', href: '/', hash: '#about' },
  { label: 'Login', href: '/login', className: 'nav-login' },
  { label: 'Add Hostel', href: '/', hash: '#add-hostel', className: 'nav-cta' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=48&h=48&fit=crop"
            alt="Hostel"
            className="navbar-logo"
          />
          <span className="navbar-brand-text">HostelHub</span>
        </Link>

        <button
          type="button"
          className="navbar-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <span className={open ? 'open' : ''} />
          <span className={open ? 'open' : ''} />
          <span className={open ? 'open' : ''} />
        </button>

        <nav className={`navbar-nav ${open ? 'open' : ''}`}>
          {navLinks.map((link) => {
            const to = link.hash ? `${link.href}${link.hash}` : link.href
            return (
              <Link
                key={link.label}
                to={to}
                className={`navbar-link ${link.className || ''}`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
