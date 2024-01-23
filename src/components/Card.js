export function Card(props) {
  return (
    <div className="card">
      <h4>{props.title}</h4>
      <div>{props.children}</div>
    </div>
  );
}
