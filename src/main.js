function Greeter(props) {
  return <h1>Hello, {props.name}</h1>;
}

Greeter.propTypes = {
  name: PropTypes.string.isRequired,
};

const element = <Greeter name="Srini" />;
ReactDOM.createRoot(document.getElementById("root")).render(element);