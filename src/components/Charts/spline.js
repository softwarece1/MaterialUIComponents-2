import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  LineSeries,
  SplineSeries,
} from '@devexpress/dx-react-chart-material-ui';


const generateData = (start, end, step) => {
  const data = [];
  for (let i = start; i < end; i += step) {
    data.push({ splineValue: Math.sin(i) / i, lineValue: ((i / 15) ** 2.718) - 0.2, argument: i });
  }

  return data;
};

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: generateData(2.5, 12, 0.5),
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper>
        <Chart
          data={chartData}
        >
          <LineSeries
            valueField="lineValue"
            argumentField="argument"
          />
          <SplineSeries
            valueField="splineValue"
            argumentField="argument"
          />
        </Chart>
      </Paper>
    );
  }
}