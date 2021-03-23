import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SortTable from '../Tables/sortTable'
import SpanningTable from '../Tables/spanningTable'
import VirtualizedTable from '../Tables/virtualizedTable'
import AdditionalAccordion from '../Accordion/additionalActions'
import ControlledAccordion from '../Accordion/controlledAccordion'
import CustomizedAccordion from '../Accordion/customizedAccordions'
//import SecondaryHeading from '../Accordion/secondaryHeading'
//import SimpleAccordion from '../Accordion/simpleAccordion' 
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width:'100%',
    flexGrow: 1

  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Sort Table" {...a11yProps(0)} />
          <Tab label="Spanning Table" {...a11yProps(1)} />
          <Tab label="Virtualized Table" {...a11yProps(2)} />
          <Tab label="Additional Accordion" {...a11yProps(3)} />
          <Tab label="Controlled Accordion" {...a11yProps(4)} />
          <Tab label="Customized Accordion" {...a11yProps(5)} />
          {/* <Tab label="Secondary Heading" {...a11yProps(6)} /> */}


        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        Sort Table <br/> <br/><SortTable/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        SpanningTable <br/><br/> <SpanningTable/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        Virtualized Table <br/><br/> <VirtualizedTable/>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
        Additional Accordion<br/><br/><AdditionalAccordion/>
        </TabPanel>

        <TabPanel value={value} index={4} dir={theme.direction}>
        Controlled Accordion<br/><br/><ControlledAccordion/>
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
        Customized Accordion<br/><br/> <CustomizedAccordion/>
        </TabPanel>
        {/* <TabPanel value={value} index={6} dir={theme.direction}>
        Secondary Heading<br/><br/> <SecondaryHeading/>
        </TabPanel> */}

      </SwipeableViews>
    </div>
  );
}
