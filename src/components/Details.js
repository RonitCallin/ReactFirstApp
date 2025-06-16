import React from 'react';

{/* Direct passing parameters , no need of the 'props' */}
const Details = ({ name, age, contact }) => {
  return (
    <>
      {/* This is a functional component that takes name, age, and contact as props */}
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{contact}</h1>
    </>
  );
};

export default Details;
