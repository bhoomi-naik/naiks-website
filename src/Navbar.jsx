import logo from "./assets/logo.png";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      {/* Left side – Logo & Brand */}
      <div style={styles.left}>
        <img src={logo} alt="Naik's Kitchen" style={styles.logo} />
      </div>

      {/* Right side – Navigation */}
      <div style={styles.links}>
        {["Home", "Menu", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={styles.link}
            onMouseOver={(e) => {
              e.target.style.color = "#c89b63";
              e.target.style.borderBottom = "2px solid #c89b63";
            }}
            onMouseOut={(e) => {
              e.target.style.color = "#0f172a";
              e.target.style.borderBottom = "none";
            }}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    height: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 40px",
    background: "white",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
  },

  left: {
    display: "flex",
    alignItems: "center",
    gap: "12px"
  },

  logo: {
    height: "48px",
    objectFit: "contain"
  },

  links: {
    display: "flex",
    gap: "35px",
    alignItems: "center"
  },

  link: {
    color: "#0f172a",
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: "500",
    position: "relative",
    paddingBottom: "4px",
    transition: "0.2s ease"
  }
};
