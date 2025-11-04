import { logos } from "@assets/assets";
import "@styles/Footer.css";
import dev_yb from "@assets/images/developed-yb.png"
const [primaryLogo] = logos;

const PRIMARY_LINKS = [
  {
    label: "About Thematic",
    href: "https://hellothematic.com/about-thematic/",
  },
  { label: "How it Works", href: "https://hellothematic.com/how-it-works/" },
  { label: "Blog", href: "https://hellothematic.com/blog/" },
  { label: "Help Center", href: "https://hellothematic.crunch.help/" },
  {
    label: "Affiliate Program",
    href: "https://hellothematic.com/thematic-affiliate-squad/",
  },
  { label: "Pricing", href: "https://hellothematic.com/#pricing" },
];

const SECONDARY_LINKS = [
  {
    label: "Creator Toolkit",
    href: "https://hellothematic.com/creator-toolkit/",
  },
  { label: "Contact Us", href: "https://hellothematic.com/contact-us/" },
  { label: "Licenses", href: "/creator/downloads/licenses" },
];

const SOCIAL_LINKS = [
  {
    id: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/hellothematic",
  },
  {
    id: "spotify",
    label: "Spotify",
    href: "https://open.spotify.com/user/hellothematic",
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/hellothematic",
  },
  {
    id: "twitter",
    label: "Twitter",
    href: "https://twitter.com/hellothematic",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/hellothematic",
  },
  {
    id: "tiktok",
    label: "TikTok",
    href: "https://www.tiktok.com/@hellothematic",
  },
];

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="app-footer__top">
        <div className="app-footer__brand">
          {primaryLogo ? (
            <img
              src={primaryLogo}
              alt="Thematic"
              className="app-footer__logo"
            />
          ) : null}
          <p className="app-footer__tagline">
            Trending music for creators.
            <br />
            Free &amp; copyright-safe.
          </p>
        </div>
        <div className="app-footer__links">
          <nav aria-label="Primary">
            <ul className="app-footer__link-list">
              {PRIMARY_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Secondary">
            <ul className="app-footer__link-list">
              {SECONDARY_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="app-footer__social" aria-label="Social media">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.id}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noreferrer"
                className={`app-footer__social-icon app-footer__social-icon--${social.id}`}
              >
                <span aria-hidden="true">{social.label.charAt(0)}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="app-footer__bottom">
        <p className="app-footer__copyright">
          © {new Date().getFullYear()} Thematic. All rights reserved.
        </p>
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="app-footer__legal"
        >
          Terms of Use &amp; Privacy Policy
        </a>
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="app-footer__youtube"
        >
          <img src={dev_yb} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
