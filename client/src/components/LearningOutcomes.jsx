const outcomes = [
  "Introduction to Artificial Intelligence",
  "Robotics Fundamentals",
  "Programming Concepts",
  "Building AI Projects",
  "Problem Solving Skills",
  "Logical Thinking",
];

function LearningOutcomes() {
  return (
    <section
      style={{
        background: "#eef2ff",
      }}
    >
      <div className="container">
        <h2>Learning Outcomes</h2>

        <ul
          style={{
            lineHeight: "2",
          }}
        >
          {outcomes.map((item) => (
            <li key={item}>
              ✅ {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default LearningOutcomes;