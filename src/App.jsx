import { useState } from "react";

const navItems = [
  { label: "Home", href: "index.html", page: "home" },
  { label: "Menu", href: "index.html#menu", page: "menu" },
  { label: "Our story", href: "about.html", page: "about" },
  { label: "Hours", href: "hours.html", page: "hours" },
  { label: "Find us", href: "contact.html", page: "contact" },
];

function Brand() {
  return (
    <a className="brand" href="index.html" aria-label="Little Taco Shop home">
      <span className="brand-mark" aria-hidden="true">
        🌮
      </span>
      <span className="brand-copy">
        <strong>Little Taco Shop</strong>
        <small>Kansas City, Missouri</small>
      </span>
    </a>
  );
}

function Header({ page }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="topbar">
        <span>Kansas City, MO</span>
        <span aria-hidden="true">·</span>
        <span>Open today 11am–9pm</span>
        <a href="tel:+15555555555">Call us: 555-555-5555</a>
      </div>
      <header className="site-header">
        <div className="header-inner">
          <Brand />
          <nav
            id="main-navigation"
            className={`main-nav${menuOpen ? " is-open" : ""}`}
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={page === item.page ? "nav-link active" : "nav-link"}
                aria-current={page === item.page ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a className="header-cta" href="tel:+15555555555">
            Call to order <span aria-hidden="true">↗</span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-controls="main-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
          >
            <span className="menu-toggle-icon" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span>Menu</span>
          </button>
        </div>
      </header>
    </>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <Brand />
        <div className="footer-address">
          <strong>Come hungry. Leave happy.</strong>
          <span>555 Taco Temptation Lane, Kansas City, MO</span>
        </div>
        <a className="footer-phone" href="tel:+15555555555">
          555-555-5555
        </a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Little Taco Shop</span>
        <a href="hours.html">Hours &amp; location</a>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}

function ButtonLink({ href, children, secondary = false }) {
  return (
    <a className={`button${secondary ? " button-secondary" : ""}`} href={href}>
      {children}
      <span aria-hidden="true">→</span>
    </a>
  );
}

function HomePage() {
  return (
    <main id="top">
      <section className="hero section">
        <div className="hero-copy">
          <p className="eyebrow">FRESH TACOS · FRIENDLY SERVICE · KC</p>
          <h1>
            Your neighborhood
            <br />
            taco shop.
          </h1>
          <p className="hero-description">
            Freshly made tacos, classic sides, and a warm welcome. Stop by for
            lunch, bring the family, or call ahead for pickup.
          </p>
          <div className="hero-actions">
            <ButtonLink href="#menu">See the menu</ButtonLink>
            <a className="phone-link" href="tel:+15555555555">
              Call to order <span>555-555-5555</span>
            </a>
          </div>
          <p className="hero-hours">
            <span className="open-dot" /> Open today <strong>11am–9pm</strong>
            <span className="hours-separator">·</span> Dine-in &amp; pickup
          </p>
        </div>
        <div className="hero-photo">
          <img
            src="/img/tacos_tray_400x267.png"
            alt="A tray of freshly prepared tacos, ready to share"
          />
          <span>Made fresh when you order</span>
        </div>
      </section>

      <section className="quick-info" aria-label="What to expect">
        <div>
          <span className="quick-icon">✳</span>
          <strong>Fresh, made to order</strong>
          <small>Prepared fresh in our kitchen</small>
        </div>
        <div>
          <span className="quick-icon">⌂</span>
          <strong>Your neighborhood spot</strong>
          <small>Right here in Kansas City</small>
        </div>
        <div>
          <span className="quick-icon">◷</span>
          <strong>Easy pickup</strong>
          <small>Call ahead and we’ll have it ready</small>
        </div>
      </section>

      <section className="menu-section section" id="menu">
        <div className="section-heading">
          <div>
            <p className="eyebrow">SOMETHING FOR EVERY APPETITE</p>
            <h2>Our menu</h2>
          </div>
          <p>
            Simple favorites, made fresh. Pick your taco, choose how many, and
            add chips and salsa for the table.
          </p>
        </div>
        <div className="menu-panel">
          <div className="menu-photo">
            <img
              src="/img/tacos_close_up_400x260.png"
              alt="Close-up of tacos from the Little Taco Shop"
            />
            <span>House favorites</span>
          </div>
          <div className="menu-items">
            <MenuItem
              name="Crunchy tacos"
              description="Crisp shells with all the classic fixings"
              prices={["$1.50", "$2.50", "$3.25"]}
            />
            <MenuItem
              name="Soft tacos"
              description="Warm tortillas, filled fresh to order"
              prices={["$2.00", "$3.50", "$4.50"]}
            />
            <div className="side-item">
              <div>
                <strong>Chips &amp; salsa</strong>
                <small>A little something for the table</small>
              </div>
              <b>$2</b>
            </div>
            <p className="menu-note">
              Ask us about today’s favorites when you call.
            </p>
          </div>
        </div>
        <div className="menu-action">
          <span>Ready when you are.</span>
          <a href="tel:+15555555555">
            Call 555-555-5555 <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section className="visit-section">
        <div className="visit-inner section">
          <div className="visit-photo">
            <img
              src="/img/tacos_and_drink_400x267.png"
              alt="Tacos and a drink served at the shop"
            />
          </div>
          <div className="visit-content">
            <p className="eyebrow">COME ON BY</p>
            <h2>Good food, close to home.</h2>
            <p>
              Drop in for a quick bite or settle in with friends. We’re open
              every day and always happy to see you.
            </p>
            <div className="visit-details">
              <div>
                <strong>Sunday–Thursday</strong>
                <span>11am–9pm</span>
              </div>
              <div>
                <strong>Friday–Saturday</strong>
                <span>11am–11pm</span>
              </div>
            </div>
            <div className="visit-actions">
              <ButtonLink href="contact.html">Get directions</ButtonLink>
              <a className="plain-link" href="hours.html">
                All hours &amp; details
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="story-teaser section">
        <div>
          <p className="eyebrow">A LITTLE ABOUT US</p>
          <h2>
            Built on a love of tacos
            <br />
            and bringing people together.
          </h2>
        </div>
        <ButtonLink href="about.html" secondary>
          Meet the shop
        </ButtonLink>
      </section>
    </main>
  );
}

function MenuItem({ name, description, prices }) {
  return (
    <article className="menu-item">
      <div className="menu-item-info">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className="menu-prices" aria-label="Prices by quantity">
        {prices.map((price, index) => (
          <span key={price}>
            <small>{index + 1}</small>
            <strong>{price}</strong>
          </span>
        ))}
      </div>
    </article>
  );
}

function PageIntro({ label, title, description, image, alt }) {
  return (
    <section className="page-intro section">
      <div>
        <p className="eyebrow">{label}</p>
        <h1>{title}</h1>
        <p className="page-description">{description}</p>
      </div>
      <img src={image} alt={alt} />
    </section>
  );
}

function AboutPage() {
  return (
    <main className="inner-page" id="top">
      <PageIntro
        label="OUR STORY"
        title="A small shop with a big love for tacos."
        description="We opened our doors in 2024 to bring good food and good company to our Kansas City neighborhood."
        image="/img/tacos_and_drink_400x267.png"
        alt="Tacos and a drink at the Little Taco Shop"
      />
      <section className="story-content section">
        <div className="story-year">
          <span>Serving KC</span>
          <strong>Since 2024</strong>
        </div>
        <div>
          <h2>There’s always room at the table.</h2>
          <p>
            Little Taco Shop began with a simple idea: make a welcoming place
            where friends, families, and neighbors can enjoy freshly prepared
            tacos together. We keep things warm, casual, and focused on what
            matters—good food and a friendly hello.
          </p>
          <p>
            Whether it’s your first visit or your usual order, we’re glad you’re
            here.
          </p>
        </div>
      </section>
      <section className="trivia-section">
        <div className="section">
          <p className="eyebrow">TACO TRIVIA</p>
          <details>
            <summary>
              When did tacos first appear in the United States?<span>+</span>
            </summary>
            <p>
              Taco historian Jeffrey M. Pilcher points to an early newspaper
              mention from 1905.{" "}
              <a
                href="https://www.smithsonianmag.com/arts-culture/where-did-the-taco-come-from-81228162/"
                target="_blank"
                rel="noreferrer"
              >
                Read more at Smithsonian Magazine →
              </a>
            </p>
          </details>
        </div>
      </section>
    </main>
  );
}

function HoursPage() {
  return (
    <main className="inner-page" id="top">
      <PageIntro
        label="PLAN A VISIT"
        title="We’ll have a table ready."
        description="Come by any day of the week for fresh tacos and friendly service."
        image="/img/tacos_tray_400x267.png"
        alt="A tray of tacos ready to share"
      />
      <section className="hours-location section">
        <div className="hours-card">
          <p className="eyebrow">OPEN EVERY DAY</p>
          <h2>Shop hours</h2>
          <div className="hours-row">
            <span>Sunday–Thursday</span>
            <strong>11am–9pm</strong>
          </div>
          <div className="hours-row">
            <span>Friday–Saturday</span>
            <strong>11am–11pm</strong>
          </div>
          <p className="hours-note">
            <span className="open-dot" /> Dine in or call ahead for pickup
          </p>
        </div>
        <LocationCard />
      </section>
    </main>
  );
}

function LocationCard() {
  return (
    <div className="location-card">
      <p className="eyebrow">FIND THE SHOP</p>
      <h2>Come say hello.</h2>
      <address>
        555 Taco Temptation Lane, Suite T<br />
        Kansas City, MO 55555-5555
      </address>
      <a
        className="map-link"
        href="https://maps.google.com/?q=555+Taco+Temptation+Lane+Kansas+City+MO"
        target="_blank"
        rel="noreferrer"
      >
        Get directions <span aria-hidden="true">↗</span>
      </a>
      <a className="location-phone" href="tel:+15555555555">
        555-555-5555
      </a>
    </div>
  );
}

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }
  return (
    <main className="inner-page" id="top">
      <PageIntro
        label="WE’RE HERE TO HELP"
        title="Come hungry. Leave happy."
        description="Need directions or have a question? Give us a call or stop by—we’d love to see you."
        image="/img/tacos_close_up_400x260.png"
        alt="Fresh tacos from the Little Taco Shop"
      />
      <section className="contact-content section">
        <LocationCard />
        <div className="contact-form-wrap">
          <p className="eyebrow">SEND US A NOTE</p>
          <h2>Get in touch</h2>
          <p className="form-disclaimer">
            Our online form is a demo for now. For the quickest reply, call us
            at <a href="tel:+15555555555">555-555-5555</a>.
          </p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Your name</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
            />
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required />
            <button className="button" type="submit">
              Preview message <span aria-hidden="true">→</span>
            </button>
            {submitted && (
              <p className="form-note" role="status">
                Thanks! This form isn’t connected to our inbox yet. Please call
                us for now.
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}

const pages = {
  home: HomePage,
  about: AboutPage,
  hours: HoursPage,
  contact: ContactPage,
};

export default function App() {
  const page = document.body.dataset.page || "home";
  const Page = pages[page] || HomePage;
  return (
    <>
      <Header page={page} />
      <Page />
      <Footer />
    </>
  );
}
