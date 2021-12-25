import React, { useState, useEffect } from 'react'; //Component
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
import KanbanboardService from 'services/kanbanboardService';

import 'aos/dist/aos.css';
import './App.css';
import './fonts.css';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



function App() {



  const [board, setBoard] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      AOS.init({
        offset: isMobile ? 10 : 100,
      });
      AOS.refresh();
    }, 1500);

    let kanbanboardService = new KanbanboardService();
    let result = kanbanboardService.getByBoardId(1)
    result.then((result) => {
      if (result === undefined)
        alert("result undefined")
      else
        setBoard(result.data)

    })
  }, []);

  let backlogArray = board.filter(function (el) {
    return el.Name === 'Backlog';
  });

  let todoArray = board.filter(function (el) {
    return el.Name === 'ToDo';
  });

  let inprogressArray = board.filter(function (el) {
    return el.Name === 'InProgress';
  });

  let designedArray = board.filter(function (el) {
    return el.Name === 'Designed';
  });



  //console.log(backlogArray); twice

  return (

     <div className="App">

        <Grid container spacing={3}>
          <Grid item xs>
            <Item><Backlog props={backlogArray} setBoard={setBoard} /></Item>
          </Grid>
          <Grid item xs>
            <Item><Todo props={todoArray} setBoard={setBoard} /></Item>
          </Grid>
          <Grid item xs>
            <Item><Inprog props={inprogressArray} setBoard={setBoard}/></Item>
          </Grid>
          <Grid item xs>
            <Item><Designed props={designedArray} setBoard={setBoard}/></Item>
          </Grid>
        </Grid>
      </div>

      

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

export default App;


