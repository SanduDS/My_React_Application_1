import React from "react";

const person = prop => {
  return (
    <div>
      <h1>
        name is {prop.name} ,age is {prop.age}
      </h1>
      <p>{prop.children}</p>
    </div>
  );
};
export default person;
