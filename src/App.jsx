import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Footer from "./Footer";

export default function App() {
  return (
    <div
      style={{
        width: "100%",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        background: "#faf7f2"
      }}
    >
      <Navbar />
      <Hero />
      <About />

      {/* Push footer to bottom if content is short */}
      <div style={{ flexGrow: 1 }} />

      <Footer />
    </div>
  );
}
