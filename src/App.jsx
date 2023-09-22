import "./App.css";
import { Counter } from "./components/Counter";
import { SingleLight } from "./components/SingleLight";
import { Text } from "./components/Text";

function App() {
  return (
    <div>
      <nav className="nav">
        <Text>0 bulbs</Text>
        <Counter text={"colums"} count={0} />
        <Counter text={"rows"} count={0} />
      </nav>
      <div>
        <SingleLight />
      </div>
    </div>
  );
}

export default App;
