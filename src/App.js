import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import googlepic from'./google.png'
import reactpic from './react.png'

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">
        <img src={googlepic} alt="google"/>
        in
        <img src={reactpic} alt="react"/>
        </Link>} scroll>
            <Navigation>
                
                <Link to="/aboutme">About Me</Link>
                
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Google in React</Link>}>
            <Navigation>
              
              <Link to="/aboutme">About Me</Link>
              
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
