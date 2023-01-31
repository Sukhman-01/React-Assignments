import "./App.css";
import React, { useState } from "react";
import 'semantic-ui-css/semantic.min.css'
import { Segment } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'

function App() {
  const [cnt, setCnt] = useState(0);
  const [inc, setInc] = useState(1);
  const handleIncrement = () => {
    if (inc === 1) {
      setCnt(cnt + 1);
    }
    else {
      setCnt(cnt * inc);
    }
  }
  const handleDecrement = () => {
    if (inc === 1) {
      setCnt(cnt - 1);
    }
    else {
      setCnt(cnt / inc);
    }
  }


  return (
    <div>
      <Grid columns={3} style={{height:"110vh"}} textAlign="center" verticalAlign='middle'>
        <Grid.Column >
        <Grid.Row centered>
          <Segment textAlign="center">
            <Grid textAlign="center">
              <Grid.Row><h1>Count</h1></Grid.Row>
                <Grid.Row><h1>{cnt}</h1></Grid.Row>
                
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Button color="green" onClick={handleIncrement}>Increment</Button>
                </Grid.Column>
                <Grid.Column>
                  <Button color="red" onClick={handleDecrement} disabled={cnt === 0}>Decrement</Button>
                </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={3}>
                  <Grid.Column>
                    <Button color="yellow" onClick={() => { setInc(2) }}>2x</Button>
                  </Grid.Column>
                  <Grid.Column>
                    <Button color="yellow" onClick={() => { setInc(4) }}>4x</Button>
                  </Grid.Column>
                  <Grid.Column>
                    <Button color="Red" onClick={() => { setCnt(0); setInc(1)}}>Reset</Button>
                  </Grid.Column>
                </Grid.Row>
            </Grid>
          </Segment>
        </Grid.Row>
          
        </Grid.Column>
        <Grid.Row><h1>Done by: Sukhman Singh - 12006129</h1></Grid.Row>
      </Grid>
    </div>
  );
}
export default App;
