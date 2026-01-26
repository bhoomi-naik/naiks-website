// @ts-nocheck

export default function OpeningHours() {
  return (
    <div style={{ padding: "70px 10%", background: "white" }}>
      <h2 style={{ fontSize: "28px" }}>OPENING TIME HOURS</h2>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "30px" }}>
        
        <div>
          <p>Monday – Friday: 7:00 am – 22:00 pm</p>
          <p>Saturday: 8:00 am – 23:00 pm</p>
          <p>Sunday: 8:30 am – 23:00 pm</p>
          <p>Holidays: Closed</p>
        </div>

        <div 
          style={{
            background: "#0f172a",
            color: "white",
            padding: "25px",
            width: "350px"
          }}
        >
          <h3>BOOK A TABLE</h3>
          <p>Call us or text us to reserve your table today.</p>
          <p>📞 +91-XXXXXXXXXX</p>
        </div>

      </div>
    </div>
  );
}
