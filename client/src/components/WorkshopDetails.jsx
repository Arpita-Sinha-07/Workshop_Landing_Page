const details = [
  { title: "Age Group", value: "8-14 Years" },
  { title: "Duration", value: "4 Weeks" },
  { title: "Mode", value: "Online" },
  { title: "Fee", value: "₹2,999" },
  { title: "Start Date", value: "15 July 2026" },
];

function WorkshopDetails() {
  return (
    <section>
      <div className="container">
        <h2>Workshop Details</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(180px,1fr))",
            gap: "20px",
          }}
        >
          {details.map((item) => (
            <div
              key={item.title}
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "10px",
                boxShadow:
                  "0 2px 10px rgba(0,0,0,0.1)",
              }}
            >
              <h3>{item.title}</h3>
              <p>{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkshopDetails;