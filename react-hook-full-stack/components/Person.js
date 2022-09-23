import '../css/Person.css';

function Person(props) {
  return (
    <div id='person'>
      <div>이름:{props.name}</div>
      <div>나이:{props.age}</div>
      <div>키:{props.height}</div>
    </div>
  );
}

export default Person;