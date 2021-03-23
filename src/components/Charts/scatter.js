import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ScatterSeries,
} from '@devexpress/dx-react-chart-material-ui';


import { dataGenerator } from '../../../demo-data/generator';

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: dataGenerator(100),
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper>
        <Chart
          data={chartData}
        >
          <ScatterSeries
            valueField="val1"
            argumentField="arg1"
          />
          <ScatterSeries
            valueField="val2"
            argumentField="arg2"
          />
        </Chart>
      </Paper>
    );
  }
}