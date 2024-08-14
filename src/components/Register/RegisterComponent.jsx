import React, { useState } from "react";
import { Input, Alert, Radio, Form } from "antd";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import ImageComponent from "./ImageComponent";


const LoginComponent = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ username: '', email: '', password: '', role: 'member' });
  const { register, error } = useContext(AuthContext);

  const handleSubmit = () => {
    register(credentials);
  };

  return (
    <div className="container">
      <div className="row m-5 no-gutters shadow-lg">
        <div className="col-md-5 d-none d-md-block">
          <ImageComponent />
        </div>
        <div className="col-md-6 bg-white p-5">
          <h3 className="pb-3">Register Form</h3>
          <div className="form-style">
            <Form
              // * Handle form submission
              onFinish={handleSubmit}
              // * Set initial form values
              initialValues={credentials}>
              <div className="form-group pb-2">
                <Form.Item
                  name="username"
                  rules={[
                    { required: true, message: 'Please enter your username!' },
                    { min: 6, message: 'Username must be at least 6 characters long!' }
                  ]}
                >
                  <Input
                    placeholder="Username"
                    size="large"
                    value={credentials.username}
                    data-testid="input-username"
                    onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                  />
                </Form.Item>
              </div>
              <div className="form-group pb-2">
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: 'please enter your email!' },
                    { type: 'email', message: 'The input is not a valid email!' }
                  ]}
                >
                  <Input
                    size="large"
                    placeholder="Email"
                    value={credentials.email}
                    data-testid="input-email"
                    onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                  />
                </Form.Item>
              </div>
              <div className="form-group pb-2">
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: 'Please enter your password!' },
                    { min: 6, message: 'Password must be at least 6 characters long!' },
                  ]}
                >
                  <Input.Password
                    size="large"
                    placeholder="Password"
                    value={credentials.password}
                    data-testid="input-password"
                    onChange={(e) =>
                      setCredentials({ ...credentials, password: e.target.value })
                    }
                  />
                </Form.Item>
              </div>
              <label className="form-label">Role</label>
              <div className="form-group pb-3">
                <Radio.Group
                  value={credentials.role}
                  onChange={(e) => setCredentials({ ...credentials, role: e.target.value })}
                >
                  <Radio value="member" data-testid="radio-role-member">Member</Radio>
                  <Radio value="customer">Customer</Radio>
                </Radio.Group>
              </div>
              {error && (
                <div className="form-group pb-3">
                  <Alert message={error} type="error" showIcon />
                </div>
              )}
              <div className="pb-2">
                <button
                  type="submit"
                  className="btn btn-dark w-100 font-weight-bold mt-2"
                  data-testid="button-register">
                  Register
                </button>
              </div>
            </Form>
            <div className="sideline text-center">OR</div>
            <div>
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="btn btn-secondary w-100 font-weight-bold mt-2">
                Sign In
              </button>
            </div>
            <div className="pt-4 text-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
