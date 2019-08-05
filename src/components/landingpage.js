import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* maps stuff will go here */}
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>This is Google Tool 2</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>This is Google Tool 3</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>This is Google Tool 4</h1></div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Maps</Tab>
          <Tab>Google Tool 2</Tab>
          <Tab>Google Tool 3</Tab>
          <Tab>Google Tool 4</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
