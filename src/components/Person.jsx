function Person({ age, difference }) {
  const currentAge = age - difference;
  let title = "";

  if (age <= 100 && age > 80) {
    title = "Great Great Father";
  } else if (age <= 80 && age > 60) {
    title = "Grand Father";
  } else if (age <= 60 && age > 30) {
    title = "Father";
  } else {
    title = "Child";
  }

  return (
    <div>
      <h1>{title}</h1>
      <p>Age: {age}</p>
      {currentAge > 10 && <Person age={currentAge} difference={difference} />}
    </div>
  );
}

export default Person;
