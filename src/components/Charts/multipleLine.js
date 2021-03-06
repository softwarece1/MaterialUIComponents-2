import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  LineSeries,
  ScatterSeries,  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';


import {
  symbol,
  symbolCross,
  symbolDiamond,
  symbolStar,
} from 'd3-shape';

const data = [
  {
    argument: 0, constantValue: 20, linearValue: 40, powValue: 0,
  },
  {
    argument: 1, constantValue: 20, linearValue: 35, powValue: 1,
  },
  {
    argument: 2, constantValue: 20, linearValue: 30, powValue: 4,
  },
  {
    argument: 3, constantValue: 20, linearValue: 25, powValue: 9,
  },
  {
    argument: 4, constantValue: 20, linearValue: 20, powValue: 16,
  },
  {
    argument: 5, constantValue: 20, linearValue: 15, powValue: 25,
  },
  {
    argument: 6, constantValue: 20, linearValue: 10, powValue: 36,
  },
  {
    argument: 7, constantValue: 20, linearValue: 5, powValue: 49,
  },
  {
    argument: 8, constantValue: 20, linearValue: 0, powValue: 64,
  },
  {
    argument: 9, constantValue: 20, linearValue: -5, powValue: 81,
  },
];

const Point = (type, styles) => (props) => {
  const {
    arg, val, color,
  } = props;
  return (
    <path
      fill={color}
      transform={`translate(${arg} ${val})`}
      d={symbol().size([10 ** 2]).type(type)()}
      style={styles}
    />
  );
};

const DiamondPoint = Point(symbolDiamond, {
  stroke: 'white',
  strokeWidth: '1px',
});

const CrossPoint = Point(symbolCross, {
  stroke: 'white',
  strokeWidth: '1px',
});

const StarPoint = Point(symbolStar, {
  stroke: 'white',
  strokeWidth: '1px',
});

const LineWithDiamondPoint = props => (
  <React.Fragment>
    <LineSeries.Path {...props} />
    <ScatterSeries.Path {...props} pointComponent={DiamondPoint} />
  </React.Fragment>
);

const LineWithCrossPoint = props => (
  <React.Fragment>
    <LineSeries.Path {...props} />
    <ScatterSeries.Path {...props} pointComponent={CrossPoint} />
  </React.Fragment>
);

const LineWithStarPoint = (props) => {
  const { coordinates } = props;
  return (
    <React.Fragment>
      <LineSeries.Path {...props} coordinates={coordinates} />
      <ScatterSeries.Path {...props} pointComponent={StarPoint} />
    </React.Fragment>
  );
};

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
        ><ArgumentAxis />
        <ValueAxis />
          <LineSeries
            valueField="constantValue"
            argumentField="argument"
            seriesComponent={LineWithDiamondPoint}
          />
          <LineSeries
            valueField="linearValue"
            argumentField="argument"
            seriesComponent={LineWithCrossPoint}
          />
          <LineSeries
            valueField="powValue"
            argumentField="argument"
            seriesComponent={LineWithStarPoint}
          />
        </Chart>
      </Paper>
    );
  }
}
