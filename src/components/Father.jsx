import Child from "./Child";

function Father({ age, difference }) {
  const childAge = age - difference;
  return (
    <div>
      <h3>Father</h3>
      <p>Age: {age}</p>
      <Child age={childAge} />
    </div>
  );
}

export default Father;
