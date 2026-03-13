import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import '../App.css'

export default function Landing() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
        <section className="join-section" id="login">
          <div className="join-inner">
            <h2 className="join-title">Already have an account?</h2>
            <p className="join-text">Log in to manage your bookings and preferences.</p>
            <Link to="/login" className="btn btn-primary">Login</Link>
          </div>
        </section>
        <section className="join-section join-section-alt" id="add-hostel">
          <div className="join-inner">
            <h2 className="join-title">Hostel owner?</h2>
            <p className="join-text">List your hostel and reach thousands of students and travelers.</p>
            <a href="#add-hostel" className="btn btn-primary">Add Hostel</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
