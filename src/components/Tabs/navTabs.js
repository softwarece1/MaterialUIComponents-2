import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import DataTable from '../Tables/dataTable';
import CollapseTable from '../Tables/collapseTable';
import CustomPage from '../Tables/customPageTable';
import CustomTable from '../Tables/customTable'
import DenseTable from '../Tables/denseTable'
import FixedHeader from '../Tables/fixedHeaderTable'
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
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
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Data Table" {...a11yProps(0)} />
          <LinkTab label="Custom Page Table"  {...a11yProps(1)} />
          <LinkTab label= "Collapse Table" {...a11yProps(2)} />
          <LinkTab label="Custom Table" {...a11yProps(3)} />
          <LinkTab label="Dense Table"  {...a11yProps(4)} />

          <LinkTab label="Fixed Header Table"  {...a11yProps(5)} />

        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Data Table
        <br/> <br/>  <DataTable/>
      </TabPanel>
      <TabPanel value={value} index={1}>Custom Page Table
      <br/> <br/>    <CustomPage/>
      </TabPanel>
      <TabPanel value={value} index={2}>Collapse Table
      <br/> <br/>   <CollapseTable/>
      </TabPanel>
      <TabPanel value={value} index={3}>Custom Table
      <br/> <br/>     <CustomTable/>
        </TabPanel>
      <TabPanel value={value} index={4}>Dense Table
      <br/> <br/>  <DenseTable/>
      </TabPanel>
      <TabPanel value={value} index={5}>Fixed Header Table
      <br/> <br/> <FixedHeader/>
      </TabPanel>

    </div>
  );
}
