import './App.css';

import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { Button, Icon, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { useState } from 'react';
import { TaskList } from './TaskList';

function App() {

  const [showMenu, setShowMenu] = useState(true);

  return (
    <>
    <BrowserRouter>

      <div id="navbar" className={'nav-div'}>

        <Button className={'nav-menu-item'} onClick={() => setShowMenu(!showMenu)}>
          <Icon className={'nav-menu-item-icon'}>menu</Icon>
        </Button>

      </div>

      <div className={'sidebar-main-div'}>

        {showMenu && <div id="sidebar" className={'sidebar-left-div'}>

          <List component="nav">

            <ListItem button={true} component={Link} {...{to: "/pending"}}>
              <ListItemIcon><Icon>list</Icon></ListItemIcon>
              <ListItemText primary="Pending"></ListItemText>
            </ListItem>
            <ListItem button={true} component={Link} {...{to: "/done"}}>
              <ListItemIcon><Icon>checked</Icon></ListItemIcon>
              <ListItemText primary="Done"></ListItemText>
            </ListItem>

          </List>

          </div>}

        <div className={'sidebar-body-div'}>

          <div className="sidebar-body-div-outlet">

            <Switch>
              <Route path="/pending" exact={true} component={() => TaskList({done: false})} />
              <Route path="/done" exact={true} component={() => TaskList({done: true})} />
            </Switch>

          </div>

        </div>

      </div>

    </BrowserRouter>
    </>
  );
}

export default App;
