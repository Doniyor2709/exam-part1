import { Button, Input, Form } from "antd";
import { useNavigate } from "react-router-dom";
import { request } from "../server/request";
import { useContext, useState } from "react";
import { GeneralContextInfo } from "../contexts/GeneralContext";
import Cookies from "js-cookie";
import { EXPIRE, ROLE, TOKEN } from "../const/const";
import "./style.scss"
const LoginPage = () => {
  const { setIsAuthenticated, setRole } = useContext(GeneralContextInfo);
  const navigate = useNavigate();
  const [btnLoading, setBtnLoading] = useState(false);
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    try {
      setBtnLoading(true);
      const { data } = await request.post("auth/login", values);
      const { token, expire, role } = data;
      Cookies.set(TOKEN, token);
      Cookies.set(EXPIRE, expire);
      Cookies.set(ROLE, role);
      setRole(role);
      setIsAuthenticated(true);
      if (role === "") {
        navigate("/");
      } else if (role === "user") {
        navigate("/user" );
      }
    } catch (err) {
      console.log(err.message);
    } finally {
      setBtnLoading(false);
    }
  };
  return (
    <div
      style={{ height: "calc(100vh - 70px)" }}
      className="flex flex-col justify-center container"
    >
      <h2 className="text-center text-4xl sm:text-5xl font-semibold py-4 pt-10">
        Login
      </h2>
      <div className="my-4 w-[80%] sm:w-[500px] flex justify-center  mx-auto">
        <Form
          form={form}
          name="login"
          onFinish={onFinish}
          style={{ width: "100%", borderRadius: "0px", zIndex: "0 !important" }}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              style={{
                borderRadius: "0px",
                padding: "8px 14px",
                fontSize: "16px",
              }}
              placeholder="Username"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password
              placeholder="Password"
              style={{
                borderRadius: "0px",
                padding: "8px 14px",
                fontSize: "16px",
              }}
            />
          </Form.Item>

          <Form.Item>
            <Button  className="btn3 ant-btn "
              loading={btnLoading}
            >
              <button>Login</button>
              
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
