export const SITE_BODY_HTML = `
  <!-- ===== STICKY HEADER / NAV ===== -->
  <header class="site-header" id="top">
    <div class="nav-container">

      <a href="#top" class="nav-logo" aria-label="Riyo Express ltd — home">
        <span class="logo-plane" aria-hidden="true">&#9992;</span>
        <span class="logo-wordmark">Riyo <strong>Express</strong> Ltd</span>
      </a>

      <!-- Hamburger toggle (CSS-only) -->
      <input type="checkbox" id="nav-toggle" class="nav-toggle-check" />
      <label for="nav-toggle" class="nav-burger" aria-label="Open navigation">
        <span></span><span></span><span></span>
      </label>

      <nav class="nav-menu" aria-label="Primary navigation">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#flights">Flights</a>
        <a href="#visa">Visas</a>
        <a href="#medical">Medical</a>
        <a href="#hajj">Hajj &amp; Umrah</a>
        <a href="#destinations">Destinations</a>
        <a href="#contact">Contact</a>
      </nav>

      <a href="#contact" class="btn btn-gold nav-cta" aria-label="Book your trip now">Book Now</a>
    </div>
  </header>

  <!-- ===== HERO ===== -->
  <section class="hero" id="hero" aria-label="Hero banner">
    <div class="hero-media" aria-hidden="true">
      <img src="/images/hero-banner.png" alt="" class="hero-img" />
      <div class="hero-overlay"></div>
    </div>
    <div class="hero-body">
      <p class="eyebrow eyebrow-light">Your Journey Begins Here</p>
      <h1 class="hero-heading">
        Discover the World<br />
        <span class="gold-text">In Style &amp; Comfort</span>
      </h1>
      <p class="hero-sub">Premium travel experiences — flights, visas, medical tourism, and sacred pilgrimages, all handled by experts who care.</p>
      <div class="hero-btns">
        <a href="#services" class="btn btn-gold btn-lg">Explore Services</a>
        <a href="#contact"  class="btn btn-outline-white btn-lg">Get a Free Quote</a>
      </div>
    </div>
    <div class="hero-stats" aria-label="Agency highlights">
      <div class="hero-stat">
        <span class="stat-num">15+</span>
        <span class="stat-lbl">Years Experience</span>
      </div>
      <div class="hero-stat-div" aria-hidden="true"></div>
      <div class="hero-stat">
        <span class="stat-num">50K+</span>
        <span class="stat-lbl">Happy Travellers</span>
      </div>
      <div class="hero-stat-div" aria-hidden="true"></div>
      <div class="hero-stat">
        <span class="stat-num">80+</span>
        <span class="stat-lbl">Destinations</span>
      </div>
      <div class="hero-stat-div" aria-hidden="true"></div>
      <div class="hero-stat">
        <span class="stat-num">30+</span>
        <span class="stat-lbl">Airline Partners</span>
      </div>
    </div>
  </section>

  <main>

    <!-- ===== ABOUT ===== -->
    <section class="section" id="about">
      <div class="container about-grid">

        <div class="about-visual">
          <img src="/images/about.png" alt="Our professional travel agency team in the office" class="about-img" loading="lazy" />
          <div class="about-badge" aria-label="15 plus years of trusted service">
            <span class="badge-num">15<sup>+</sup></span>
            <span class="badge-txt">Years Trusted</span>
          </div>
        </div>

        <div class="about-copy">
          <p class="eyebrow">About Us</p>
          <h2>A Travel Agency <span class="gold-text">You Can Trust</span></h2>
          <p class="lead-text">We are a full-service travel agency dedicated to making every journey seamless, memorable, and stress-free — from the moment you dream of a destination to the moment you return home.</p>
          <p>Our experienced team combines deep industry knowledge with a genuine passion for travel. We handle flight bookings, visa applications, hotel accommodation, medical travel, and sacred pilgrimages — all under one roof, with one point of contact.</p>
          <ul class="tick-list">
            <li>Personalised travel planning &amp; expert consultation</li>
            <li>24 / 7 customer support across all time zones</li>
            <li>Best-price guarantee on all flights and hotels</li>
            <li>Accredited Hajj &amp; Umrah pilgrimage packages</li>
          </ul>
          <a href="#contact" class="btn btn-primary mt-6">Talk to an Expert</a>
        </div>

      </div>
    </section>

    <!-- ===== SERVICES ===== -->
    <section class="section section-light" id="services">
      <div class="container">
        <header class="section-hd">
          <p class="eyebrow">What We Offer</p>
          <h2>Our Premium <span class="gold-text">Services</span></h2>
          <p class="section-sub">Everything you need for a perfect journey — handled by experts who care.</p>
        </header>

        <div class="cards-grid">

          <article class="srv-card" tabindex="0">
            <div class="srv-icon blue-ico" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <h3>Flight Booking</h3>
            <p>Economy, business and first-class tickets on 30+ airline partners at competitive fares — one-way, return, and multi-city.</p>
            <a href="#flights" class="card-link">Learn more &#8594;</a>
          </article>

          <article class="srv-card" tabindex="0">
            <div class="srv-icon gold-ico" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
            </div>
            <h3>Visa Assistance</h3>
            <p>Tourist, business, medical, and transit visa processing with full documentation support and embassy appointment scheduling.</p>
            <a href="#visa" class="card-link">Learn more &#8594;</a>
          </article>

          <article class="srv-card" tabindex="0">
            <div class="srv-icon blue-ico" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            </div>
            <h3>Medical Tourism</h3>
            <p>World-class hospitals in India, Thailand, Malaysia, and Turkey — we coordinate appointments, accommodation, and logistics.</p>
            <a href="#medical" class="card-link">Learn more &#8594;</a>
          </article>

          <article class="srv-card" tabindex="0">
            <div class="srv-icon gold-ico" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10z"/></svg>
            </div>
            <h3>Hajj &amp; Umrah</h3>
            <p>Accredited Hajj and Umrah packages for individuals and groups — hotels near the Haram, guided tours, and full pilgrimage support.</p>
            <a href="#hajj" class="card-link">Learn more &#8594;</a>
          </article>

          <article class="srv-card" tabindex="0">
            <div class="srv-icon blue-ico" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
            <h3>Hotels &amp; Resorts</h3>
            <p>Handpicked accommodation at every budget — from cosy guesthouses to five-star resorts — with exclusive agency rates worldwide.</p>
            <a href="#contact" class="card-link">Learn more &#8594;</a>
          </article>

          <article class="srv-card" tabindex="0">
            <div class="srv-icon gold-ico" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 14 8 14s8-8.75 8-14a8 8 0 0 0-8-8z"/></svg>
            </div>
            <h3>Tour Packages</h3>
            <p>Curated group and private tours to the world's most popular cities with experienced local guides and comfortable transport.</p>
            <a href="#contact" class="card-link">Learn more &#8594;</a>
          </article>

        </div>
      </div>
    </section>

    <!-- ===== FLIGHT BOOKING ===== -->
    <section class="section split-section" id="flights">
      <div class="container split-grid">
        <div class="split-img">
          <img src="/images/flight.png" alt="Commercial aircraft taking off at sunset" loading="lazy" />
        </div>
        <div class="split-copy">
          <p class="eyebrow">Flight Booking</p>
          <h2>Fly Anywhere, <span class="gold-text">For Less</span></h2>
          <p>We search across 30+ airline partners to secure the very best fares in economy, business, and first-class. Whether you need a simple return ticket or a complex multi-city itinerary, our flight specialists handle every detail so you can focus on the journey ahead.</p>
          <ul class="tick-list">
            <li>One-way, return &amp; multi-city itineraries</li>
            <li>Economy, Business &amp; First-Class options</li>
            <li>Group bookings with negotiated rates</li>
            <li>Flexible changes &amp; cancellation support</li>
            <li>Airport transfer coordination</li>
          </ul>
          <a href="#contact" class="btn btn-primary mt-6">Book a Flight</a>
        </div>
      </div>
    </section>

    <!-- ===== VISA ASSISTANCE ===== -->
    <section class="section split-section section-navy" id="visa">
      <div class="container split-grid split-reverse">
        <div class="split-copy">
          <p class="eyebrow eyebrow-light">Visa Assistance</p>
          <h2 class="light-title">Stress-Free <span class="gold-text">Visa Services</span></h2>
          <p class="light-body">Navigating visa requirements is complex and time-sensitive. Our dedicated visa team has processed thousands of applications across every major destination, delivering high approval rates and fast turnaround times.</p>
          <ul class="tick-list tick-list-light">
            <li>Tourist, business &amp; medical visas</li>
            <li>Complete document checklist &amp; preparation</li>
            <li>Embassy appointment scheduling</li>
            <li>Application tracking &amp; status updates</li>
            <li>Urgent &amp; express processing available</li>
          </ul>
          <a href="#contact" class="btn btn-gold mt-6">Apply for a Visa</a>
        </div>
        <div class="split-img">
          <img src="/images/visa.png" alt="Open passport with visa stamps on a world map" loading="lazy" />
        </div>
      </div>
    </section>

    <!-- ===== MEDICAL TOURISM ===== -->
    <section class="section split-section" id="medical">
      <div class="container split-grid">
        <div class="split-img">
          <img src="/images/medical.png" alt="Modern hospital corridor with professional medical staff" loading="lazy" />
        </div>
        <div class="split-copy">
          <p class="eyebrow">Medical Tourism</p>
          <h2>World-Class Care, <span class="gold-text">Global Access</span></h2>
          <p>We partner with internationally accredited hospitals and specialist clinics in India, Thailand, Malaysia, Turkey, and Jordan — offering world-class treatments at a fraction of Western costs without any compromise on quality.</p>
          <ul class="tick-list">
            <li>Hospital appointment &amp; specialist referrals</li>
            <li>Medical visa &amp; documentation support</li>
            <li>Accommodation near treatment centres</li>
            <li>Dedicated patient care coordinator</li>
            <li>Post-treatment travel &amp; recovery support</li>
          </ul>
          <a href="#contact" class="btn btn-primary mt-6">Enquire Now</a>
        </div>
      </div>
    </section>

    <!-- ===== HAJJ & UMRAH ===== -->
    <section class="section hajj-section" id="hajj" aria-label="Hajj and Umrah packages">
      <div class="hajj-media" aria-hidden="true">
        <img src="/images/mecca.png" alt="" class="hajj-img" />
        <div class="hajj-overlay"></div>
      </div>
      <div class="container hajj-body">
        <header class="section-hd">
          <p class="eyebrow eyebrow-light">Sacred Pilgrimages</p>
          <h2 class="light-title">Hajj &amp; Umrah <span class="gold-text">Packages</span></h2>
          <p class="section-sub section-sub-light">Embark on your spiritual journey with complete peace of mind. Our accredited packages cover flights, visas, accommodation, and guided rituals.</p>
        </header>
        <div class="hajj-cards">

          <div class="hajj-card">
            <div class="hajj-card-icon" aria-hidden="true">&#9670;</div>
            <h3>Standard Umrah</h3>
            <p>14-day guided Umrah with hotel within walking distance of the Haram, economy flights, and group ziyarat.</p>
            <ul>
              <li>Economy class flights included</li>
              <li>3-star hotel near Haram</li>
              <li>Guided group ziyarat</li>
              <li>Umrah visa processing</li>
            </ul>
            <a href="#contact" class="btn btn-gold btn-sm">Get Quote</a>
          </div>

          <div class="hajj-card hajj-card-featured">
            <div class="hajj-featured-badge">Most Popular</div>
            <div class="hajj-card-icon" aria-hidden="true">&#9670;</div>
            <h3>Premium Umrah</h3>
            <p>21-day premium Umrah with 5-star Haram-view hotels, business class flights, and private guided tours.</p>
            <ul>
              <li>Business class flights</li>
              <li>5-star hotel, Haram view</li>
              <li>Private guided tours</li>
              <li>Full visa &amp; documentation</li>
            </ul>
            <a href="#contact" class="btn btn-gold btn-sm">Get Quote</a>
          </div>

          <div class="hajj-card">
            <div class="hajj-card-icon" aria-hidden="true">&#9670;</div>
            <h3>Hajj Package</h3>
            <p>Official Hajj package with complete Mina, Arafah, and Muzdalifah programme. Limited seats — book early.</p>
            <ul>
              <li>Official Hajj visa support</li>
              <li>Complete ritual guidance</li>
              <li>Makkah &amp; Madinah hotels</li>
              <li>Group &amp; private options</li>
            </ul>
            <a href="#contact" class="btn btn-gold btn-sm">Get Quote</a>
          </div>

        </div>
      </div>
    </section>

    <!-- ===== POPULAR DESTINATIONS ===== -->
    <section class="section" id="destinations">
      <div class="container">
        <header class="section-hd">
          <p class="eyebrow">Explore the World</p>
          <h2>Popular <span class="gold-text">Destinations</span></h2>
          <p class="section-sub">We serve travellers to the world's most sought-after cities. Find your next adventure below.</p>
        </header>

        <div class="dest-grid">

          <article class="dest-card dest-large">
            <img src="/images/dest-istanbul.png" alt="Istanbul skyline with Blue Mosque and Hagia Sophia at sunset" loading="lazy" />
            <div class="dest-overlay" aria-hidden="true"></div>
            <div class="dest-info">
              <span class="dest-tag">Europe / Asia</span>
              <h3>Istanbul, Turkey</h3>
              <p>Where East meets West — mosques, bazaars, and Bosphorus cruises await.</p>
            </div>
          </article>

          <article class="dest-card">
            <img src="/images/dest-dubai.png" alt="Dubai skyline with Burj Khalifa at dusk" loading="lazy" />
            <div class="dest-overlay" aria-hidden="true"></div>
            <div class="dest-info">
              <span class="dest-tag">Middle East</span>
              <h3>Dubai, UAE</h3>
              <p>Luxury shopping, record-breaking towers, and desert adventures.</p>
            </div>
          </article>

          <article class="dest-card">
            <img src="/images/dest-bangkok.png" alt="Bangkok Wat Arun temple at sunrise reflected in the river" loading="lazy" />
            <div class="dest-overlay" aria-hidden="true"></div>
            <div class="dest-info">
              <span class="dest-tag">Southeast Asia</span>
              <h3>Bangkok, Thailand</h3>
              <p>Vibrant temples, world-famous street food, and elite healthcare.</p>
            </div>
          </article>

          <article class="dest-card">
            <img src="/images/dest-kl.png" alt="Kuala Lumpur Petronas Towers illuminated at night" loading="lazy" />
            <div class="dest-overlay" aria-hidden="true"></div>
            <div class="dest-info">
              <span class="dest-tag">Southeast Asia</span>
              <h3>Kuala Lumpur, Malaysia</h3>
              <p>Modern Islamic city — iconic towers, halal cuisine, and luxury malls.</p>
            </div>
          </article>

          <article class="dest-card">
            <img src="/images/dest-delhi.png" alt="Taj Mahal at golden sunrise in India" loading="lazy" />
            <div class="dest-overlay" aria-hidden="true"></div>
            <div class="dest-info">
              <span class="dest-tag">South Asia</span>
              <h3>Delhi, India</h3>
              <p>History, spirituality, and some of the world's finest medical facilities.</p>
            </div>
          </article>

          <article class="dest-card">
            <img src="/images/dest-amman.png" alt="Petra Jordan rose-red Treasury carved into rock" loading="lazy" />
            <div class="dest-overlay" aria-hidden="true"></div>
            <div class="dest-info">
              <span class="dest-tag">Middle East</span>
              <h3>Amman, Jordan</h3>
              <p>Ancient Petra, the Dead Sea, and warm Jordanian hospitality.</p>
            </div>
          </article>

        </div>
      </div>
    </section>

    <!-- ===== AIRLINE PARTNERS ===== -->
    <section class="section section-light partners-section">
      <div class="container">
        <header class="section-hd">
          <p class="eyebrow">Our Network</p>
          <h2>Trusted <span class="gold-text">Airline Partners</span></h2>
        </header>
        <div class="partners-strip">
          <div class="partner" role="img" aria-label="Sky Wings Airlines">
            <span class="partner-plane" aria-hidden="true">&#9992;</span>
            <span class="partner-name">Sky Wings</span>
          </div>
          <div class="partner" role="img" aria-label="Blue Horizon Air">
            <span class="partner-plane" aria-hidden="true">&#9992;</span>
            <span class="partner-name">Blue Horizon</span>
          </div>
          <div class="partner" role="img" aria-label="Gulf Express Airlines">
            <span class="partner-plane" aria-hidden="true">&#9992;</span>
            <span class="partner-name">Gulf Express</span>
          </div>
          <div class="partner" role="img" aria-label="Eastern Star Air">
            <span class="partner-plane" aria-hidden="true">&#9992;</span>
            <span class="partner-name">Eastern Star</span>
          </div>
          <div class="partner" role="img" aria-label="Pacific Soar Airlines">
            <span class="partner-plane" aria-hidden="true">&#9992;</span>
            <span class="partner-name">Pacific Soar</span>
          </div>
          <div class="partner" role="img" aria-label="Crescent Air">
            <span class="partner-plane" aria-hidden="true">&#9992;</span>
            <span class="partner-name">Crescent Air</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== TESTIMONIALS ===== -->
    <section class="section section-navy" id="testimonials">
      <div class="container">
        <header class="section-hd">
          <p class="eyebrow eyebrow-light">What Clients Say</p>
          <h2 class="light-title">Trusted by <span class="gold-text">Thousands</span></h2>
        </header>
        <div class="testi-grid">

          <article class="testi-card">
            <div class="stars" aria-label="5 out of 5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <blockquote>
              "The team arranged our entire Umrah trip seamlessly — flights, hotels, visas, and guided tours. It was a truly spiritual experience with zero stress. We will not go anywhere else for our next pilgrimage."
            </blockquote>
            <footer class="testi-author">
              <div class="testi-avatar" aria-hidden="true">MD</div>
              <div>
                <strong>Mursal Dhoolweyn</strong>
                <span>Umrah Package Client</span>
              </div>
            </footer>
          </article>

          <article class="testi-card">
            <div class="stars" aria-label="5 out of 5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <blockquote>
              "I needed urgent medical treatment abroad and they handled everything within 48 hours — the visa, hospital appointment, hotel, and flight. Outstanding professionalism and genuine care throughout."
            </blockquote>
            <footer class="testi-author">
              <div class="testi-avatar" aria-hidden="true">AD</div>
              <div>
                <strong>Abdirisaq Daahir</strong>
                <span>Medical Tourism Client</span>
              </div>
            </footer>
          </article>

          <article class="testi-card">
            <div class="stars" aria-label="5 out of 5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <blockquote>
              "Booked family holidays to Istanbul and Dubai through Riyo Express ltd. Both times exceptional — great prices, great hotels, and a team always available on WhatsApp. Highly recommended to everyone."
            </blockquote>
            <footer class="testi-author">
              <div class="testi-avatar" aria-hidden="true">AD</div>
              <div>
                <strong>Abdullahi Daahir</strong>
                <span>Leisure Travel Client</span>
              </div>
            </footer>
          </article>

        </div>
      </div>
    </section>

    <!-- ===== CONTACT ===== -->
    <section class="section" id="contact">
      <div class="container">
        <header class="section-hd">
          <p class="eyebrow">Get in Touch</p>
          <h2>Plan Your <span class="gold-text">Perfect Trip</span></h2>
          <p class="section-sub">Fill in the form and a travel expert will respond within 24 hours.</p>
        </header>

        <div class="contact-grid">

          <!-- Info column -->
          <div class="contact-info">
            <h3>Contact Information</h3>
            <ul class="contact-list">

              <li>
                <span class="ci-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </span>
                <div>
                  <strong>Office Address</strong>
                  <span>123 Travel Avenue, City Centre<br />Mogadishu, Somalia</span>
                </div>
              </li>

              <li>
                <span class="ci-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.27A2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z"/></svg>
                </span>
                <div>
                  <strong>Phone &amp; WhatsApp</strong>
                  <span>+252 61 949 6900<br />+252 62 949 6900</span>
                </div>
              </li>

              <li>
                <span class="ci-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </span>
                <div>
                  <strong>Email</strong>
                  <span>7gaaldile@gmail.com</span>
                </div>
              </li>

              <li>
                <span class="ci-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </span>
                <div>
                  <strong>Office Hours</strong>
                  <span>Mon – Sat: 8:00 AM – 8:00 PM<br />Sunday: 10:00 AM – 4:00 PM</span>
                </div>
              </li>

            </ul>

            <!-- Map placeholder -->
            <div class="map-placeholder" role="img" aria-label="Map showing office location — interactive map available on the live site">
              <div class="map-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <p>Map — 123 Travel Avenue<br />Mogadishu, Somalia</p>
              </div>
            </div>
          </div>

          <!-- Form column -->
          <form class="contact-form" action="#" method="post" novalidate>
            <div class="form-row">
              <div class="form-grp">
                <label for="cf-fname">First Name <span class="req" aria-hidden="true">*</span></label>
                <input type="text" id="cf-fname" name="first_name" placeholder="John" required autocomplete="given-name" />
              </div>
              <div class="form-grp">
                <label for="cf-lname">Last Name <span class="req" aria-hidden="true">*</span></label>
                <input type="text" id="cf-lname" name="last_name" placeholder="Doe" required autocomplete="family-name" />
              </div>
            </div>
            <div class="form-grp">
              <label for="cf-email">Email Address <span class="req" aria-hidden="true">*</span></label>
              <input type="email" id="cf-email" name="email" placeholder="john@example.com" required autocomplete="email" />
            </div>
            <div class="form-grp">
              <label for="cf-phone">Phone / WhatsApp</label>
              <input type="tel" id="cf-phone" name="phone" placeholder="+252 61 000 0000" autocomplete="tel" />
            </div>
            <div class="form-grp">
              <label for="cf-service">Service Required <span class="req" aria-hidden="true">*</span></label>
              <select id="cf-service" name="service" required>
                <option value="" disabled selected>Select a service…</option>
                <option value="flight">Flight Booking</option>
                <option value="visa">Visa Assistance</option>
                <option value="medical">Medical Tourism</option>
                <option value="hajj">Hajj &amp; Umrah</option>
                <option value="hotel">Hotel &amp; Accommodation</option>
                <option value="tour">Tour Package</option>
                <option value="other">Other / General Enquiry</option>
              </select>
            </div>
            <div class="form-row">
              <div class="form-grp">
                <label for="cf-dest">Destination</label>
                <input type="text" id="cf-dest" name="destination" placeholder="e.g. Istanbul, Dubai, Mecca…" />
              </div>
              <div class="form-grp">
                <label for="cf-date">Preferred Travel Date</label>
                <input type="date" id="cf-date" name="travel_date" />
              </div>
            </div>
            <div class="form-grp">
              <label for="cf-msg">Message <span class="req" aria-hidden="true">*</span></label>
              <textarea id="cf-msg" name="message" rows="4" placeholder="Tell us about your travel plans, budget, or any special requirements…" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-full">Send Enquiry &#8594;</button>
          </form>

        </div>
      </div>
    </section>

  </main>

  <!-- ===== FOOTER ===== -->
  <footer class="site-footer" role="contentinfo">
    <div class="container footer-grid">

      <div class="footer-brand">
        <a href="#top" class="nav-logo" aria-label="Riyo Express ltd — back to top">
          <span class="logo-plane" aria-hidden="true">&#9992;</span>
          <span class="logo-wordmark">Riyo <strong>Express</strong> Ltd</span>
        </a>
        <p>Your trusted partner for flights, visas, medical tourism, and sacred pilgrimages. Proudly serving travellers worldwide since 2009.</p>
        <nav class="social-row" aria-label="Social media links">
          <a href="#" class="social-btn" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="#" class="social-btn" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
          <a href="#" class="social-btn" aria-label="WhatsApp">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M11.997 1C6.004 1 1.087 5.906 1.087 11.888c0 1.893.497 3.665 1.363 5.209L1 23l6.134-1.609a10.805 10.805 0 0 0 4.863 1.158c5.99 0 10.906-4.906 10.906-10.889C22.903 5.907 17.987 1 11.997 1z"/></svg>
          </a>
        </nav>
      </div>

      <div class="footer-col">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Our Services</a></li>
          <li><a href="#destinations">Destinations</a></li>
          <li><a href="#hajj">Hajj &amp; Umrah</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Our Services</h4>
        <ul>
          <li><a href="#flights">Flight Booking</a></li>
          <li><a href="#visa">Visa Assistance</a></li>
          <li><a href="#medical">Medical Tourism</a></li>
          <li><a href="#hajj">Hajj Packages</a></li>
          <li><a href="#hajj">Umrah Packages</a></li>
          <li><a href="#contact">Hotel Bookings</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Popular Destinations</h4>
        <ul>
          <li><a href="#destinations">Istanbul, Turkey</a></li>
          <li><a href="#destinations">Dubai, UAE</a></li>
          <li><a href="#destinations">Bangkok, Thailand</a></li>
          <li><a href="#destinations">Kuala Lumpur, Malaysia</a></li>
          <li><a href="#destinations">Delhi, India</a></li>
          <li><a href="#destinations">Amman, Jordan</a></li>
        </ul>
      </div>

    </div>

    <div class="footer-bottom">
      <div class="container footer-bottom-inner">
        <p>&copy; 2024 Riyo Express ltd. All rights reserved.</p>
        <nav aria-label="Legal links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms &amp; Conditions</a>
          <a href="#">Cookie Policy</a>
        </nav>
      </div>
    </div>
  </footer>

  <!-- Floating WhatsApp Button -->
  <a href="https://wa.me/252619496900" class="whatsapp-fab" aria-label="Chat with us on WhatsApp" target="_blank" rel="noopener noreferrer">
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M11.997 1C6.004 1 1.087 5.906 1.087 11.888c0 1.893.497 3.665 1.363 5.209L1 23l6.134-1.609a10.805 10.805 0 0 0 4.863 1.158c5.99 0 10.906-4.906 10.906-10.889C22.903 5.907 17.987 1 11.997 1z"/></svg>
    <span class="whatsapp-pulse" aria-hidden="true"></span>
  </a>
`
