import { useState } from "react";
import axios from "axios";

function RegistrationForm() {
  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      phone: "",
    });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response =
        await axios.post(
          "http://localhost:5000/api/enquiry",
          formData
        );

      alert(response.data.message);

      setFormData({
        name: "",
        email: "",
        phone: "",
      });
    } catch (error) {
      alert(
        error.response?.data
          ?.message ||
          "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      style={{
        background: "#dbeafe",
      }}
    >
      <div className="container">
        <h2>Register Now</h2>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection:
              "column",
            gap: "15px",
            maxWidth: "500px",
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <button
            className="btn"
            disabled={loading}
          >
            {loading
              ? "Submitting..."
              : "Register"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default RegistrationForm;