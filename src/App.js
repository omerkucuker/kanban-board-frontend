import React, { Component } from 'react';
//import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Inprog from 'components/Inprog';
import Todo from 'components/Todo';
import Backlog from 'components/Backlog';
import Designed from 'components/Designed';
import AOS from 'aos';
import { isMobile } from 'react-device-detect';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import 'aos/dist/aos.css';
import './App.css';
import './fonts.css';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      AOS.init({
        offset: isMobile ? 10 : 100,
      });
      AOS.refresh();
    }, 1500);
  }

  render() {
    return (
      <Grid container spacing={3}>
        <Grid item xs>
          <Item><Backlog /></Item>
        </Grid>
        <Grid item xs>
          <Item><Todo /></Item>
        </Grid>
        <Grid item xs>
          <Item><Inprog /></Item>
        </Grid>
        <Grid item xs>
          <Item><Designed /></Item>
        </Grid>
      </Grid>

      /* <Router hashType="noslash" basename={process.env.BASE_PATH}>
         <Switch>
           <Route exact path="/">
             <div>
               pxCode Screen List: <br />
               <Link to="/Inprog">Inprog</Link>
               <br />
               <Link to="/Todo">Todo</Link>
               <br />
               <Link to="/Backlog">Backlog</Link>
               <br />
               <Link to="/Designed">Designed</Link>
             </div>
           </Route>
 
           <Route exact path="/Inprog" component={Inprog} />
           <Route exact path="/Todo" component={Todo} />
           <Route exact path="/Backlog" component={Backlog} />
           <Route exact path="/Designed" component={Designed} />
         </Switch>
       </Router>*/
    );
  }
}

export default App;
