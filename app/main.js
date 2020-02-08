import { h, render } from "preact";

const App = props => {
  return (
    <div id="main-app">
      <div id="home">
        <h1>Mentor Web App</h1>
      </div>
    </div>
  );
};

render(<App />, document.body);
