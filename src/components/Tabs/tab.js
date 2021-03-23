import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SecondaryHeading from '../Accordion/secondaryHeading'
import SimpleAccordion from '../Accordion/simpleAccordion'
import SimpleAlerts from '../Toast/simpleAlert' 
import Action from '../Toast/Action'
import ColorAlert from '../Toast/colorAlert'
import DescriptionAlert from '../Toast/descriptionAlert'
import Filled from '../Toast/filled'
import Icons from '../Toast/icons'
import Transition from '../Toast/transition'
import Variants from '../Toast/variants'
import Area from '../Charts/area'
import Bar from '../Charts/bar'
import Dot from '../Charts/dot'
import Line from '../Charts/straightLine'
import Curve from '../Charts/line'
import Line2 from '../Charts/line2'
import Chart from '../Charts/chart'
import Chart2 from '../Charts/chart2'
import Segment from '../Charts/segment'
import Animation from '../Charts/animation'
import Animation1 from '../Charts/animation1'
import Animation2 from '../Charts/animation2'
import Hover2 from '../Charts/hover2'
import Hover1 from '../Charts/hover1'
import Hover from '../Charts/hover'
import Hover3 from '../Charts/hover3'
import Tooltip from '../Charts/tooltip'
import Zoom from '../Charts/zoom'
import Multiple from '../Charts/multipleLine'
import Rotated from '../Charts/rotated'
import Pie from '../Charts/pie'
import SimpleArea from '../Charts/simpleArea'
import Spline1 from '../Charts/spline1'
import Stacked from '../Charts/stacked'
import Fullstacked from '../Charts/fullStacked'
import StepArea from '../Charts/stepArea'
import Doughnut from '../Charts/doughnut'
import Streamgraph from '../Charts/streamgraph'
import SimpleBar from '../Charts/simpleBar'
import Axes from '../Charts/axes'

import SeriesInteration from '../Charts/seriesInteraction'
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label=" Accordion" {...a11yProps(0)} />
          <Tab label="Charts" {...a11yProps(1)} />
          <Tab label="Toast" {...a11yProps(2)} />
          <Tab label="Charts 2" {...a11yProps(3)} />
          <Tab label="Charts 3" {...a11yProps(4)} />

          <Tab label="Simple Alerts" {...a11yProps(5)} />

        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      Secondary Heading Accordion<br/> <br/>
      <SecondaryHeading/>
      </TabPanel>
      <TabPanel value={value} index={0}>
        Simple Accordion<br/> <br/><SimpleAccordion/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Animation/></TabPanel>
        <TabPanel value={value} index={1}>
        <Animation1/></TabPanel>
        <TabPanel value={value} index={1}>
        <Animation2/></TabPanel>
        <TabPanel value={value} index={1}>
        Area<br/> <br/> <Area/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Bar Chart<br/> <br/> <Bar/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Scatter Chart<br/> <br/> <Dot/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Line Chart<br/> <br/> <Line/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Curve Chart<br/> <br/> <Curve/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Line Chart<br/> <br/> <Line2/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Chart2/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Chart/>
      </TabPanel>
       <TabPanel value={value} index={1}>
        <Segment/>
      </TabPanel>
     
      <TabPanel value={value} index={2}>
      Simple Alerts<br/> <br/> <SimpleAlerts/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      Action<br/> <br/> <Action/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      Color Alert<br/> <br/> <ColorAlert/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      Description Alert<br/> <br/> <DescriptionAlert/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      Filled Alert<br/> <br/> <Filled/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      Transition Alert<br/> <br/> <Transition/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      Icons Alert<br/> <br/> <Icons/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      Variants Alert<br/> <br/> <Variants/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Rotated/></TabPanel>
      <TabPanel value={value} index={3}>
        <Hover2/></TabPanel>
        <TabPanel value={value} index={3}>
        <Hover/></TabPanel>
        <TabPanel value={value} index={3}>
        <Hover3/></TabPanel>
        <TabPanel value={value} index={3}>
        <Hover1/></TabPanel>
        <TabPanel value={value} index={3}>
        <Tooltip/></TabPanel>
        <TabPanel value={value} index={3}>Zoom Chart<br/> <br/>
        <Zoom/></TabPanel>
        <TabPanel value={value} index={3}>Customize Point Appearance<br/> <br/>
        <Multiple/></TabPanel>
        <TabPanel value={value} index={3}> Pie Chart <br/><br/>
        <Pie/></TabPanel>
        <TabPanel value={value} index={3}> Simple Area Chart<br/><br/>
        <SimpleArea/></TabPanel>
        <TabPanel value={value} index={3}> Spline Chart<br/><br/>
        <Spline1/></TabPanel>
        <TabPanel value={value} index={3}> Step Area Chart<br/><br/>
        <StepArea/></TabPanel>
        <TabPanel value={value} index={3}> Streamgraph Chart<br/><br/>
        <Streamgraph/></TabPanel>
        <TabPanel value={value} index={3}> Doughnut Chart<br/><br/>
        <Doughnut/></TabPanel>
        <TabPanel value={value} index={3}> Fullstacked Chart<br/><br/>
        <Fullstacked/></TabPanel>
        <TabPanel value={value} index={3}> Stacked Chart<br/><br/>
        <Stacked/></TabPanel>
        <TabPanel value={value} index={4}> Simple Bar Chart<br/><br/>
        <SimpleBar/></TabPanel>
        <TabPanel value={value} index={4}> Series Interation Chart<br/><br/>
        <SeriesInteration/></TabPanel>
        <TabPanel value={value} index={4}> Chart Type of Axes<br/><br/>
        <Axes/></TabPanel>
    </div>
  );
}
