import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import showError from '../utils/showError';
import api from '../utils/api';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    console.log('Received values of form: ', values);
    try{
      message.loading("In progress");
      await api.post("/auth/local", values);
      message.destroy();
      message.success("Registration Successful!");
      navigate("/homepage");
    }catch(error){
      console.log(error);
      
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed: ', errorInfo);
    showError(errorInfo);
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <h1 style={{textAlign:"center", margin:"0.8rem auto"}}>Register</h1>
      <Form.Item
        name="identifier"
        rules={[{ required: true, message: 'Please input your E-mail!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="E-Mail" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        <span style={{margin: "0rem 0.2rem"}}>or</span>
        <a href="">register now!</a>
      </Form.Item>
    </Form>
  );
};

export default Login;