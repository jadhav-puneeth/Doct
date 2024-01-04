import { Form, Input, Button, message } from "antd";
import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { hideLoading, showLoading } from "../redux/features/alertSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Submit for Login
  const submitHandler = async (values) => {
    try {
      dispatch(showLoading());
      const { data } = await axios.post("http://localhost:5000/api/users/login", values);
      dispatch(hideLoading());
      if (data.success) {
        localStorage.setItem("token", data.token);
        message.success("Login Successfully");
        navigate("/Doctor-Stats");
      } else {
        message.error(data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      message.error("Something went wrong");
      console.log(error);
    }
  };

  return (
    <div style={styles.loginPage}>
      <Form layout="vertical" onFinish={submitHandler} style={styles.form}>
        <h1 style={styles.heading}>Login</h1>
        <Form.Item label="Email" name="email" rules={[{ required: true, message: "Please input your email!" }]}>
          <Input type="email" />
        </Form.Item>
        <Form.Item label="Password" name="password" rules={[{ required: true, message: "Please input your password!" }]}>
          <Input.Password />
        </Form.Item>
        <div className="d-flex justify-content-between" style={styles.linkContainer}>
          <Link to="/register" style={styles.link}>
            Not a User? Click Here to Register
          </Link>
          <Button type="primary" htmlType="submit" style={styles.button}>
            Login
          </Button>
        </div>
      </Form>
    </div>
  );
};

const styles = {
  loginPage: {
    margin: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    background: '#f8f9fa', // Background color
  },
  form: {
    maxWidth: '400px',
    margin: 'auto',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  linkContainer: {
    marginTop: '23%',
  },
  link: {
    color: '#007BFF',
    textDecoration: 'none',
  },
  button: {
    fontSize: '16px',
  },
};

export default Login;
