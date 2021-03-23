import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import '../App.css';

import {Link}  from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      marginBottom: '30%',
      marginTop: '150px',

    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Link to="/navTab">
      <Button variant="contained">Nav Tabs</Button></Link>
      <Link to="/fixedTab">
      <Button variant="outlined" color="secondary">
Fixed Tabs</Button></Link>
      <Link to="/verticalTab">
      <Button  color="primary">
      Vertical Tab
      </Button></Link>
      
      <Link to="/scrollTab">
      <Button variant="contained" color="secondary">
        Scroll Tabs
      </Button></Link>
      
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Link to="/tab"  >
            <Button variant="contained" color="primary">Simple tabs</Button>          
          </Link> 

    </div>
  );
}
