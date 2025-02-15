import Link from "next/link";

// Images
import footerLogo from "@/assets/images/footer_logo_@x2.png";
import logo from "@/assets/images/logo.png";

// ----------

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content content-1140 center-relative">
        {/* Your Contact links */}
        <div className="footer-logo">
          <Link href="/">
            <img src={logo.src} alt="Jaawidaan" />
          </Link>
        </div>
        <div className="footer-text">
          <p className="footer-first-line">
            <Link href="mailto:info@jaawidaan.in">alliance@jaawidaan.in</Link>
          </p>
          {/* <p className="footer-second-line">
            or can use our <Link href="/contact">contact form</Link> as well
          </p> */}
        </div>
        {/* <div className="our-position-holder">
          <div className="our-position-left">
            <p className="position-lat">
              <Link href="https://goo.gl/Iuqj8E" target="_blank">
                40.758896° N
              </Link>
            </p>
          </div>
          <div className="our-position-right">
            <p className="position-lng">
              <Link href="https://goo.gl/Iuqj8E" target="_blank">
                -73.985130° W
              </Link>
            </p>
          </div>
        </div> */}

        <ul id="footer-sidebar">
          <li className="widget widget_text">
           <p>&nbsp;</p>
          </li>
          {/* Recent Blog Articles */}
          <li className="widget widget_recent_entries">
          <h4 className="widgettitle">Headquarter</h4>
            {/* Contact Info */}
            <div className="textwidget">
              <p>Bombay, India</p>
              <p>Mobile: +91 9004337075</p>
              <p>Email: alliance@jaawidaan.in</p>
            </div>
            {/* <h4 className="widgettitle">Recent Posts</h4>
            <ul>
              <li>
                <Link href="/blog/single">
                  Retro fashion glasses for everyday use
                </Link>
              </li>
              <li>
                <Link href="/blog/single">
                  The best handcrafted wooden office table
                </Link>
              </li>
              <li>
                <Link href="/blog/single">
                  Do it yourself white print art frame
                </Link>
              </li>
            </ul> */}
          </li>
          {/* Articles tags */}
          <li className="widget widget_tag_cloud">
            {/* <h4 className="widgettitle">Category</h4>
            <div className="tagcloud">
              <Link href="">Architecture</Link>
              <Link href="">Branding</Link>
              <Link href="">Fashion</Link>
              <Link href="">Interior</Link>
              <Link href="">Jewelry</Link>
            </div> */}
          </li>
        </ul>

        {/* Coptright and social links */}
        <ul className="copyright-holder">
          <li className="copyright-footer">
            © {new Date(Date.now()).getFullYear()} - Jaawidaan inc
          </li>
          {/* <li className="social-footer">
            <Link href="https://twitter.com/">LINKEDIN</Link>
            <Link href="https://www.facebook.com/">FACEBOOK</Link>
            <Link href="https://www.instagram.com/">INSTAGRAM</Link>
            
          </li> */}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
