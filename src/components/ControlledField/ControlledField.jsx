import React, { useState } from "react";

const ControlledField = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const [password, setPassword] = useState("");
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Controlled Field Component</h1>
        <input type="text" name="name" placeholder="Your name" />
        <br />
        <input
          type="password"
          name="password"
          placeholder="*******"
          defaultValue={password}
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ControlledField;
