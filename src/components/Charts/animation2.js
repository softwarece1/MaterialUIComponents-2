import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  SplineSeries,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';

import { ValueScale, Animation } from '@devexpress/dx-react-chart';
import { easeBounceOut } from 'd3-ease';

import { sales as data } from '../demo-data/data-vizualization';

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: data[2017],
    };
    this.changeData = this.changeData.bind(this);
  }

  changeData(e) {
    this.setState({ data: data[e.target.value] });
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper>
        <Chart
          data={chartData}
        >
          <ValueScale name="sale" />
          <ValueScale name="total" />

          <ArgumentAxis />
          <ValueAxis scaleName="sale" showGrid={false} showLine showTicks />
          <ValueAxis scaleName="total" position="right" showGrid={false} showLine showTicks />

          <BarSeries
            name="Units Sold"
            valueField="sale"
            argumentField="month"
            scaleName="sale"
          />

          <SplineSeries
            name="Total Transactions"
            valueField="total"
            argumentField="month"
            scaleName="total"
          />
          <Animation duration={2000} easing={easeBounceOut} />
          <Legend />
        </Chart>
        <select style={{ width: '100px', margin: '10px' }} onChange={this.changeData}>
          <option>2017</option>
          <option>2018</option>
          <option>2019</option>
        </select>
      </Paper>
    );
  }
}
