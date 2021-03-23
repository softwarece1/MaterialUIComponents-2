import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  AreaSeries,  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';


import { born as data } from '../demo-data/data-vizualization';

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper>
        <Chart
          data={chartData}
        > <ArgumentAxis />
        <ValueAxis />
          <AreaSeries
            valueField="ru"
            argumentField="year"
          />
          <AreaSeries
            valueField="ch"
            argumentField="year"
          />
          <AreaSeries
            valueField="us"
            argumentField="year"
          />
        </Chart>
      </Paper>
    );
  }
}
