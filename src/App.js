import React from 'react';
import { getCnodeList } from '@/utils/api'

//引入antd样式文件
import 'antd/dist/antd.css';
import '@/assets/style/common.scss'

//引入路由
import { HashRouter, Route,Switch,Redirect } from 'react-router-dom'
import routes from '@/views'

//
import { Provider } from 'react-redux'
import store from './store/index'

import HjwContent from './components/layout/hjwContent'
import HjwHeader from './components/layout/hjwHeader'
import HjwSider from './components/layout/hjwSider'

//在antDesgin组件库中，需要使用什么组件就必须引入什么组件
// import { Button } from 'antd';
// import { Layout } from 'antd';
// import { Layout, Menu, Breadcrumb } from 'antd';

import { Pagination } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      list:[]
    }
  }

  componentDidMount(){
    let params = {
      tab:'',
      page:1,
      limit:5
    }
    getCnodeList(params).then(res=>{
      console.log('res',res)
    })
  }

  //生成视图容器
  createRoutes(){
    let res = []
    routes.forEach(ele=>{    
      res.push(
      <Route 
      exact 
      path={ele.path} 
      component={ele.component} 
      key={ele.id}>
      </Route>
      )
      if(ele.children){
        ele.children.map(ele=>(
          res.push(
            <Route 
            exact 
            path={ele.path} 
            component={ele.component} 
            key={ele.id}>
            </Route> 
          )
        ))
      }
    })        
    return res 
  }



  render(){
      return (
      <Provider store={store}>
      <HashRouter>
        <div className="App">
          {/* <Button type='primary'>Button</Button> */}
          <Switch>
            {this.createRoutes()}
            <Redirect from='/*' to='/home'></Redirect>
          </Switch>
          <HjwHeader></HjwHeader>
            <Layout>

              <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                  <Menu.Item key="1">nav 1</Menu.Item>
                  <Menu.Item key="2">nav 2</Menu.Item>
                  <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
              </Header>

              <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>List</Breadcrumb.Item>
                  <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                  <Sider className="site-layout-background" width={200}>
                    <Menu
                      mode="inline"
                      defaultSelectedKeys={['1']}
                      defaultOpenKeys={['sub1']}
                      style={{ height: '100%' }}
                    >
                      <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                        <Menu.Item key="1">option1</Menu.Item>
                        <Menu.Item key="2">option2</Menu.Item>
                        <Menu.Item key="3">option3</Menu.Item>
                        <Menu.Item key="4">option4</Menu.Item>
                      </SubMenu>
                      <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                        <Menu.Item key="5">option5</Menu.Item>
                        <Menu.Item key="6">option6</Menu.Item>
                        <Menu.Item key="7">option7</Menu.Item>
                        <Menu.Item key="8">option8</Menu.Item>
                      </SubMenu>
                      <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                        <Menu.Item key="9">option9</Menu.Item>
                        <Menu.Item key="10">option10</Menu.Item>
                        <Menu.Item key="11">option11</Menu.Item>
                        <Menu.Item key="12">option12</Menu.Item>
                      </SubMenu>
                    </Menu>
                  </Sider>
                  <Content style={{ padding: '0 24px', minHeight: 280 }}><HjwContent></HjwContent><HjwSider></HjwSider></Content>
                </Layout>
              </Content>

              <Footer style={{ textAlign: 'center' }}><Pagination defaultCurrent={1} total={50} /></Footer>

            </Layout>,
        </div>
      </HashRouter>
      </Provider>
      );
  }

}

