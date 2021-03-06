import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  ScatterSeries,
  Title,
} from '@devexpress/dx-react-chart-material-ui';

import { scaleLog } from 'd3-scale';
import { symbolCircle, symbol } from 'd3-shape';
import { formatPrefix } from 'd3-format';

import { ValueScale } from '@devexpress/dx-react-chart';

const data = [
  { planet: 'Moon', mass: 0.073e24 },
  { planet: 'Mercury', mass: 0.330e24 },
  { planet: 'Mars', mass: 0.642e24 },
  { planet: 'Venus', mass: 4.87e24 },
  { planet: 'Earth', mass: 5.97e24 },
  { planet: 'Uranus', mass: 86.8e24 },
  { planet: 'Saturn', mass: 568e24 },
  { planet: 'Jupiter', mass: 1898e24 },
];

const Point = props => (
  <ScatterSeries.Point {...props} d={symbol().size([20 ** 2]).type(symbolCircle)()} />
);

const scale = () => scaleLog().base(2);
const modifyDomain = domain => [domain[0], 5000e24];

const format = obj => obj.tickFormat(null, formatPrefix('.1', 1e24));

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
        >
          <ValueScale factory={scale} modifyDomain={modifyDomain} />
          <ArgumentAxis />
          <ValueAxis
            tickFormat={format}
          />

          <ScatterSeries
            valueField="mass"
            argumentField="planet"
            pointComponent={Point}
          />
          <Title
            text="Planetary mass (kg)"
          />
        </Chart>
      </Paper>
    );
  }
}
