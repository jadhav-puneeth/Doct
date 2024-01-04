import { Form, Input, message } from "antd";
import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { hideLoading, showLoading } from "../redux/features/alertSlice";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Submit for Register
  const submitHandler = async (values) => {
    try {
      dispatch(showLoading());
      const { data } = await axios.post("http://localhost:5000/api/users/register", values);
      dispatch(hideLoading());
      if (data.success) {
        message.success("Registration Successful");
        navigate("/");
      } else {
        message.error(data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      message.error("Registration Failed");
      console.log(error);
    }
  };

  return (
    <div style={styles.registerPage}>
      <Form layout="vertical" onFinish={submitHandler} style={styles.form}>
        <h1 style={styles.heading}>Register</h1>
        <Form.Item
          label="Name"
          name="name"
          rules={[
            { required: true, message: "Please input your name!" },
            { min: 3, message: "Your name must be at least 3 characters" },
            { max: 50, message: "Your name cannot exceed 50 characters" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Invalid email!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: "Please input your password!" },
            { min: 8, message: "Your password must be at least 8 characters" },
            { max: 128, message: "Your password cannot exceed 128 characters" },
            {
              pattern:
                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?])/,
              message:
                "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <div className="d-flex justify-content-between" style={styles.linkContainer}>
          <Link to="/" style={styles.link}>
            Already Registered? Click Here to Login
          </Link>
          <button className="btn btn-primary" type="submit" style={styles.button}>
            Register
          </button>
        </div>
      </Form>
    </div>
  );
};

const styles = {
  registerPage: {
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
    marginTop: '20%',
  },
  link: {
    color: '#007BFF',
    textDecoration: 'none',
  },
  button: {
    fontSize: '16px',
  },
};

export default Register;
