import React, { useState } from "react";

const Feedback = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  //Handle change
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  //!HandleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !message) {
      alert("Please fill out both fields");
      return;
    }
    //update the isSubmitted
    setIsSubmitted(true);
  };
  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
      <h2>Feedback Project</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input type="text" value={name} onChange={handleNameChange} />
          </label>
        </div>
        <br />
        <div>
          <label>
            Message:
            <textarea rows="4" value={message} onChange={handleMessageChange} />
          </label>
        </div>
        <button type="submit">Submit Feedback</button>
      </form>
      {/* Show submitted if available */}
      {isSubmitted && (
        <div
          style={{
            marginTop: "30px",
            padding: "10px",
            background: "#f0f0f0",
            borderRadius: "6px",
          }}
        >
          <h3>Feedback Received:</h3>
          <p>Name: {name}</p>
          <p>Message: {message}</p>
        </div>
      )}
    </div>
  );
};

export default Feedback;
