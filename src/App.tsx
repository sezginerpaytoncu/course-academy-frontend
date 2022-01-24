import { Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

function App() {
  // return <>Online Courses</>;
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: '0 50px', marginTop: 64 }}
      >
        {/* <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <Routes>
          <Route path="/register" element={<SignUp />} />
        </Routes>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Online Free Courses ©2022 by <b>Course Academy</b>
      </Footer>
    </Layout>

    // <React.Fragment>
    //   <Routes>
    //     <Route path="/" element={<></>} />
    //     <Route path="/register" element={<SignUp />} />
    //   </Routes>
    // </React.Fragment>
  );
}

export default App;
