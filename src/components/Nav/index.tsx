import Image from "next/image";
import Link from "next/link";

function Nav() {
  return (
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center">
        <Link href="index.html" className="logo me-auto">
          <Image src="/assets/img/logo.png" alt="" width={200} height={200} />
        </Link>

        <h1 className="logo me-auto">
          <Link href="index.html"></Link>
        </h1>
        {/* <!-- Uncomment below if you prefer to use an image logo --> */}

        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li>
              <Link href="about.html">Who we are</Link>
            </li>
            <li className="dropdown">
              <Link href="services.html">
                <span>What we do</span> <i className="bi bi-chevron-down"></i>
              </Link>
              <ul>
                <li>
                  <Link href="service-details_tech-consulting.html">
                    Technology Consulting
                  </Link>
                </li>
                <li>
                  <Link href="service-details_staffing.html">Staffing</Link>
                </li>
                <li>
                  <Link href="service-details_corporate training.html">
                    Corporate Training
                  </Link>
                </li>
                <li>
                  <Link href="service-details_DM-promo.html">
                    Digital Marketing & Promotions
                  </Link>
                </li>
                <li>
                  <Link href="service-details_web-development.html">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="service-details_Job-Placements.html">
                    Job Placements
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="contact.html">Work with us</Link>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
        {/* <!-- .navbar --> */}

        <Link
          href="https://calendly.com/kdcs-/30min"
          className="get-started-btn scrollto"
        >
          <b>Get Started</b>
        </Link>
      </div>
    </header>
  );
}

export default Nav;
