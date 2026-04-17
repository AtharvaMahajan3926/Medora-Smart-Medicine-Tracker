import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Find Your Medicine,<br/>
            <span>Right on Time</span>
          </h1>
          <p>
            MEDORA connects you with nearby pharmacies in real-time. Search any
            medicine, see live stock availability on a map, and get directions
            — all in one place.
          </p>
          <div className="hero-buttons">
            <Link to="/signup" className="btn btn-primary btn-lg">
              🚀 Create Account
            </Link>
            <Link to="/signin" className="btn btn-secondary btn-lg">
              Sign In
            </Link>
          </div>
        </div>
        
        <div className="hero-visual animate-in-up stagger-3">
          <div className="visual-orb visual-orb-primary" style={{ animation: 'float 8s ease-in-out infinite' }}>💊</div>
          <div className="visual-orb visual-orb-secondary" style={{ animation: 'float-reverse 10s ease-in-out infinite' }}>🗺️</div>
          <div className="visual-glass-card">
            <div className="glass-header">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <div className="glass-body">
              <div className="glass-line w-70"></div>
              <div className="glass-line w-full"></div>
              <div className="glass-line w-50"></div>
              <div style={{ display: 'flex', gap: '8px', marginTop: '1rem' }}>
                <span className="badge badge-success">In Stock</span>
                <span className="badge badge-primary">2.4km</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps-grid">
          <div className="step-item animate-in-up stagger-1">
            <div className="step-number" style={{ animation: 'float 6s ease-in-out infinite' }}>1</div>
            <h3>Search Medicine</h3>
            <p>Type the name of any medicine or browse by category to find what you need.</p>
          </div>
          <div className="step-item animate-in-up stagger-3">
            <div className="step-number" style={{ animation: 'float-reverse 7s ease-in-out infinite' }}>2</div>
            <h3>View Nearby Stock</h3>
            <p>See which nearby pharmacies have it in stock with live map pins and distance info.</p>
          </div>
          <div className="step-item animate-in-up stagger-5">
            <div className="step-number" style={{ animation: 'float 8s ease-in-out infinite' }}>3</div>
            <h3>Book & Collect</h3>
            <p>Reserve your medicine, get a QR code, and pick it up from the pharmacy within 30 minutes.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose MEDORA?</h2>
        <div className="features-grid">
          <div className="feature-card animate-in-up stagger-1">
            <div className="feature-icon">🔍</div>
            <h3>Smart Search</h3>
            <p>
              Search for any medicine and instantly see which nearby pharmacies
              have it in stock. Filter by category to narrow your results.
            </p>
          </div>

          <div className="feature-card animate-in-up stagger-3">
            <div className="feature-icon">🗺️</div>
            <h3>Live Map View</h3>
            <p>
              See pharmacies on an interactive map with color-coded pins
              showing real-time stock levels — green, yellow, or red.
            </p>
          </div>

          <div className="feature-card animate-in-up stagger-4">
            <div className="feature-icon">📞</div>
            <h3>Quick Actions</h3>
            <p>
              Call the pharmacy directly or get Google Maps directions with a
              single tap. No more calling multiple stores.
            </p>
          </div>

          <div className="feature-card animate-in-up stagger-5">
            <div className="feature-icon">💊</div>
            <h3>Pharmacist Portal</h3>
            <p>
              Pharmacists can manage their inventory, update stock levels, and
              reach more customers through the MEDORA platform.
            </p>
          </div>

          <div className="feature-card animate-in-up stagger-6">
            <div className="feature-icon">🔒</div>
            <h3>Rx Awareness</h3>
            <p>
              Medicines requiring a prescription are clearly marked with
              warnings, promoting responsible medication practices.
            </p>
          </div>

          <div className="feature-card animate-in-up stagger-1">
            <div className="feature-icon">🏥</div>
            <h3>Verified Pharmacies</h3>
            <p>
              Every pharmacy on MEDORA goes through a license verification
              process managed by our admin team.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <p>
          © 2026 <span className="footer-brand">MEDORA</span> — Medicine at the Right Time. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
