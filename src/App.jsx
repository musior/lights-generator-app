import { useState } from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import { SingleLight } from "./components/SingleLight";
import { Text } from "./components/Text";
import { Grid } from "./components/Grid";

function App() {
  const [columns, setColumns] = useState(0);
  const [rows, setRows] = useState(0);

  const handleIncrementRow = () => {
    setRows(rows + 1);
  };

  const handleDecrementRow = () => {
    if (rows <= 0) {
      return;
    }
    setRows(rows - 1);
  };

  const handleIncrementColumns = () => {
    if (columns >= 9) {
      return;
    }
    setColumns(columns + 1);
  };

  const handleDecrementColumns = () => {
    if (columns <= 0) {
      return;
    }
    setColumns(columns - 1);
  };

  const totalLights = rows * columns;

  const lights = Array.from({ length: totalLights });

  return (
    <div>
      <nav className="nav">
        <Text>{totalLights} bulbs</Text>
        <Counter
          text={"columns"}
          count={columns}
          onIncrement={handleIncrementColumns}
          onDecrement={handleDecrementColumns}
        />
        <Counter
          text={"rows"}
          count={rows}
          onIncrement={handleIncrementRow}
          onDecrement={handleDecrementRow}
        />
      </nav>
      <Grid columns={columns}>
        {lights.map((value, index) => {
          return <SingleLight key={index} />;
        })}
      </Grid>
    </div>
  );
}

export default App;
