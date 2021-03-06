import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, } from 'react-mdl';
// Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton 
import SimpleMap from './map';
import MyFancyComponent from './reactmap';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          <SimpleMap/>
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
        <div className="projects-grid">
          <MyFancyComponent/>
        </div>

      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Maps</Tab>
          <Tab>Calendar</Tab>
          <Tab>Images</Tab>
          <Tab>different maps npm</Tab>
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
