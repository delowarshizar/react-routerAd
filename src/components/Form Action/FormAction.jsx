import React from "react";

const FormAction = () => {
  const HandleAction = (formData) => {
    console.log(formData.get("username"));
    console.log(formData.get("email"));
  };
  return (
    <div>
      <h1>Form Action Component</h1>
      <form action={HandleAction}>
        <input type="text" name="username" placeholder="Username" />
        <br />
        <input type="email" name="email" placeholder="Email" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FormAction;
