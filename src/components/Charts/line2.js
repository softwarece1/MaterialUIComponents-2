import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  LineSeries,
  Legend,
  Title,
} from '@devexpress/dx-react-chart-material-ui';


// import NoisySignalIcon from '../../../demo-data/images/noisySignal.svg';
// import OriginalSignalIcon from '../../../demo-data/images/originalSignal.svg';

// const SpecialMarkerComponent = ({ name, color }) => {
//   const Icon = name === 'Noisy signal' ? NoisySignalIcon : OriginalSignalIcon;
//   // xlinkHref is use for safari
//   return (
//     <svg width={18} height={18} viewBox={Icon.viewBox}>
//       <use fill={color} xlinkHref={`#${Icon.id}`} />
//     </svg>
//   );
// };

const titleStyle = { margin: 'auto' };
const TitleText = props => <Title.Text {...props} style={titleStyle} />;

const generateData = (start, end, step) => {
  const data = [];
  for (let i = start; i < end; i += step) {
    const originalValue = Math.sin(i) / i;
    data.push({ value: originalValue + ((0.5 - Math.random()) / 10), originalValue, argument: i });
  }
  return data;
};

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: generateData(2.5, 12, 0.1),
    };
  }

  render() {
    const {
      data: chartData,
    } = this.state;

    return (
      <Paper>
        <Chart
          data={chartData}
        >

          <ArgumentAxis />
          <ValueAxis />

          <LineSeries
            name="Noisy signal"
            valueField="value"
            argumentField="argument"
          />

          <LineSeries
            name="Original signal"
            valueField="originalValue"
            argumentField="argument"
          />

          <Title
            text="Noisy and Original signals"
            textComponent={TitleText}
          />
          {/* <Legend
            markerComponent={SpecialMarkerComponent}
          /> */}
        </Chart>
      </Paper>
    );
  }
}
