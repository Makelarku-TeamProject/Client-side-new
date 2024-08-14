import React, { useState } from "react";
import { Input, Spin, Alert, Form } from "antd";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import ImageComponent from "./ImageComponent";

const LoginComponent = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const { error, loading, login } = useContext(AuthContext);

  const handleSubmit = () => {
    login(credentials);
  };

  return (
    <div className="container">
      <div className="row m-5 no-gutters shadow-lg">
        <div className="col-md-5 d-none d-md-block">
          <ImageComponent />
        </div>
        <div className="col-md-6 bg-white p-5">
          <h3 className="pb-3">Login Form</h3>
          <div className="form-style">
            <Form
              onFinish={handleSubmit}
              initialValues={credentials}
            >
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
                    onChange={(e) =>
                      setCredentials({ ...credentials, email: e.target.value })
                    }
                  />
                </Form.Item>
              </div>
              <div className="form-group pb-3">
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
              {error && (
                <div className="form-group pb-3">
                  <Alert message={error} type="error" showIcon />
                </div>
              )}
              <div className="pb-2">
                <button
                  type="submit"
                  className="btn btn-dark w-100 font-weight-bold mt-2"
                  disabled={loading}
                  data-testid="button-signin">
                  {loading ? <Spin size="sm" /> : "Sign In"}
                </button>
              </div>
            </Form>
            <div className="sideline text-center">OR</div>
            <div>
              <button
                type="button"
                onClick={() => navigate("/register")}
                className="btn btn-secondary w-100 font-weight-bold mt-2">
                Register
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
