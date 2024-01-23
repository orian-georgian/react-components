import Father from "./Father";

function GrandFather({ age, difference }) {
  const fatherAge = age - difference;

  return (
    <div>
      <h2>Grand Father</h2>
      <p>Age: {age}</p>
      <Father age={fatherAge} difference={difference} />
    </div>
  );
}

export default GrandFather;
