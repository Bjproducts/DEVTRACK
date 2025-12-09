import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome to Dev Track</h1>
      <p>
        Dev Track helps you achieve your career goals using AI — whether you want to become a Software Engineer or any other professional.
      </p>
      <Link to="/register">
        <button style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}>Get Started</button>
      </Link>
    </div>
  );
}

export default Home;
