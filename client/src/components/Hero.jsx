function Hero() {
  return (
    <section
      style={{
        background: "#dbeafe",
        textAlign: "center",
      }}
    >
      <div className="container">
        <h1>AI & Robotics Summer Workshop</h1>

        <p
          style={{
            maxWidth: "600px",
            margin: "0 auto 20px",
          }}
        >
          Learn Artificial Intelligence, Robotics,
          Coding and Problem Solving through
          exciting hands-on projects.
        </p>

        <button className="btn">
          Enroll Now
        </button>
      </div>
    </section>
  );
}

export default Hero;