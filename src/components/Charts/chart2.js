import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ArgumentAxis,
  AreaSeries,
  Legend,
  Title,
} from '@devexpress/dx-react-chart-material-ui';

import {
  stackOffsetWiggle,
  stackOrderInsideOut,
  curveCatmullRom,
  area,
} from 'd3-shape';

import { Stack } from '@devexpress/dx-react-chart';

import { booksSale } from '../demo-data/data-vizualization';

const Area = (props) => {
  const {
    coordinates,
    color,
  } = props;

  return (
    <path
      fill={color}
      d={area()
        .x(({ arg }) => arg)
        .y1(({ val }) => val)
        .y0(({ startVal }) => startVal)
        .curve(curveCatmullRom)(coordinates)}
      opacity={0.5}
    />
  );
};

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: booksSale,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper>
        <Chart
          data={chartData}
          style={{ paddingLeft: '20px' }}
        >
          <ArgumentAxis tickFormat={() => tick => tick} />

          <AreaSeries
            name="Mysteries"
            valueField="mysteries"
            argumentField="year"
            seriesComponent={Area}
          />
          <AreaSeries
            name="Science Fiction"
            valueField="scienceFiction"
            argumentField="year"
            seriesComponent={Area}
          />
          <AreaSeries
            name="Romance"
            valueField="romance"
            argumentField="year"
            seriesComponent={Area}
          />
          <AreaSeries
            name="Fantasy"
            valueField="fantasy"
            argumentField="year"
            seriesComponent={Area}
          />
          <AreaSeries
            name="Thrillers"
            valueField="thrillers"
            argumentField="year"
            seriesComponent={Area}
          />
          <Legend />
          <Title
            text="Book Sales"
          />
          <Stack
            stacks={[
              { series: ['Mysteries', 'Science Fiction', 'Romance', 'Fantasy', 'Thrillers'] },
            ]}
            offset={stackOffsetWiggle}
            order={stackOrderInsideOut}
          />
        </Chart>
      </Paper>
    );
  }
}
