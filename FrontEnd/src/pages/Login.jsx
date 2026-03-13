import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './Login.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: connect to auth API
    console.log({ email, password })
  }

  return (
    <>
      <Navbar />
      <main className="login-page">
        <div className="login-bg">
          <img
            src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1920&q=80"
            alt=""
            aria-hidden
          />
          <div className="login-bg-overlay" />
        </div>
        <div className="login-container">
          <div className="login-card">
            <div className="login-header">
              <Link to="/" className="login-logo">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=48&h=48&fit=crop"
                  alt="HostelHub"
                />
                <span>HostelHub</span>
              </Link>
              <h1 className="login-title">Welcome back</h1>
              <p className="login-subtitle">Sign in to manage your bookings and account.</p>
            </div>
            <form className="login-form" onSubmit={handleSubmit}>
              <label className="login-label">
                <span>Email</span>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="login-input"
                  autoComplete="email"
                  required
                />
              </label>
              <label className="login-label">
                <span>Password</span>
                <div className="login-password-wrap">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="login-input"
                    autoComplete="current-password"
                    required
                  />
                  <button
                    type="button"
                    className="login-toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    tabIndex={-1}
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
              </label>
              <div className="login-options">
                <label className="login-remember">
                  <input type="checkbox" /> Remember me
                </label>
                <Link to="#" className="login-forgot">Forgot password?</Link>
              </div>
              <button type="submit" className="login-submit">
                Sign in
              </button>
            </form>
            <p className="login-footer">
              Don&apos;t have an account? <Link to="/">Create one</Link> or browse hostels.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
