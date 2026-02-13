import { useState } from "react";
import { Link } from "react-router-dom";
import "./Styles.css";

/* Utility: create clean URLs */
const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const megaMenuData = [
  {
    title: "Equipment",
    links: ["Ski Poles", "Backpacks", "MagStraps", "Extras"],
    image:
      "https://media.yardsale.day/images/8l1z5dyl/production/6cf2c5d7602f1d77fcea657d1851ab3e9f8b492d-2000x3000.jpg?rect=0,938,2000,1125&w=1024&h=576&fm=webp&q=75&fit=crop&auto=format",
    imgTitle: "Best Equipment",
    imgDesc: "Top picks for your next adventure",
  },
  {
    title: "Men",
    links: ["The Sport Coat", "Baselayers", "Sweaters", "Accessories"],
    image:
      "https://media.yardsale.day/images/8l1z5dyl/production/c9293e71e2e68a95e358d3cca338de2a1a21f9a3-1021x791.jpg?rect=0,109,1021,574&w=1024&h=576&fm=webp&q=75&fit=crop&auto=format",
    imgTitle: "Men's Collection",
    imgDesc: "Stylish and durable apparel",
  },
  {
    title: "Women",
    links: ["The Sport Coat", "Baselayers", "Sweaters", "Accessories"],
    image:
      "https://media.yardsale.day/images/8l1z5dyl/production/2a4d6bc473ceb7a0c4be02542832b453a4ef83c5-1024x683.jpg?rect=0,54,1024,576&w=1024&h=576&fm=webp&q=75&fit=crop&auto=format",
    imgTitle: "Women's Collection",
    imgDesc: "Trendy and comfortable clothing",
  },
  {
    title: "Staff",
    links: ["The Journal", "Apparel", "Gift Cards", "Jobs"],
    image:
      "https://media.yardsale.day/images/8l1z5dyl/production/39428a66bd8469a87a5f2746164c604d8cecd231-1024x683.jpg?rect=0,54,1024,576&w=1024&h=576&fm=webp&q=75&fit=crop&auto=format",
    imgTitle: "Staff Picks",
    imgDesc: "Curated favorites for staff",
  },
];

export default function MegaMenu() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [accordion, setAccordion] = useState(null);

  return (
    <>
      {/* ================= DESKTOP NAV ================= */}
      <nav
        className="nav-section desktop-nav"
        onMouseLeave={() => setActiveIndex(null)}
      >
        <div className="lins-logo">
          <img src="/favicon_io/logo.png" alt="Logo" />
        </div>

        <div className="cart-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z"
            />
          </svg>
        </div>

        <div className="nav-links">
          {megaMenuData.map((item, index) => (
            <div key={index} onMouseEnter={() => setActiveIndex(index)}>
              <a href="#">{item.title}</a>
            </div>
          ))}
        </div>

        {activeIndex !== null && (
          <div className="expanded-area visible">
            <div className="links-left">
              {megaMenuData[activeIndex].links.map((link, idx) => (
                <Link
                  key={idx}
                  to={`/${slugify(link)}`}
                  className="child-link"
                >
                  {link}
                </Link>
              ))}
              <a href="#" className="button-link">Explore</a>
            </div>

            <div className="image-right">
              <img
                src={megaMenuData[activeIndex].image}
                alt={megaMenuData[activeIndex].imgTitle}
              />
              <div className="image-text">
                <h3>{megaMenuData[activeIndex].imgTitle}</h3>
                <p>{megaMenuData[activeIndex].imgDesc}</p>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* ================= MOBILE NAV ================= */}
      <button className="hamburger-btn" onClick={() => setMobileOpen(true)}>
        ☰
      </button>

      {mobileOpen && (
        <div className="mobile-menu">
          <div className="mobile-header">
            <button onClick={() => setMobileOpen(false)}>✕</button>

            <img
              src="./public/favicon_io/logo.png"
              alt="Logo"
              className="mobile-logo"
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#221400"
              width="24"
              height="24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z"
              />
            </svg>
          </div>

          <div className="mobile-nav">
            {megaMenuData.map((item, i) => (
              <div key={i}>
                <button
                  className="mobile-title"
                  onClick={() =>
                    setAccordion(accordion === i ? null : i)
                  }
                >
                  {item.title}
                  <span>{accordion === i ? "−" : "+"}</span>
                </button>

                {accordion === i && (
                  <div className="mobile-links">
                    {item.links.map((l, idx) => (
                      <Link
                        key={idx}
                        to={`/${slugify(l)}`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {l}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mobile-images">
            {megaMenuData.map((item, i) => (
              <img key={i} src={item.image} alt="" />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
