import React from "react";

const SimpleForm = () => {
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
  };
  return (
    <div>
      <h1>React Form</h1>
      <form onSubmit={handelSubmit}>
        <input type="text" name="name" placeholder="Your name" />
        <br />
        <input type="email" name="email" placeholder="Your email" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SimpleForm;
