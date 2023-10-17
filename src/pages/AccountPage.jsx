import { Button, Form, Input, message, Tabs } from "antd";
import { useCallback, useEffect, useState } from "react";
import { request } from "../server/request";

import "./style.scss"

const AccountPage = () => {
  const items = [
    {
      key: "1",
      label: `Edit Account`,
      children: <AccountEdit />,
    },
    {
      key: "2",
      label: "Edit Password",
      children: <PasswordEdit />,
    },
    
  ];

  return (
    <div className="pt-5 container">
      <Tabs items={items} />
    </div>
  );
};

export default AccountPage;

const AccountEdit = () => {
  
  const [form] = Form.useForm();
  const getUser = useCallback(async () => {
    try {
      const { data } = await request("auth/me");
      form.setFieldsValue(data);
    } catch (err) {
      console.log(err.message);
    }
  }, [form]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  const submit = async () => {
    const res = await form.getFieldsValue();
    try {

      await request.put("auth/details", res);
      message.success("Edited !");
    } catch (err) {
      console.log(err.message);
    } 
  };

  return (
    <div className="w-full md:w-2/3 mx-auto">
      <Form
        labelCol={{ span: 7 }}
        form={form}
        name="Account"
        style={{ width: "100%" }}
        onFinish={submit}
        autoComplete="off"
      >
        <Form.Item label="Firstname" name="first_name">
          <Input style={{ borderRadius: "0px", padding: "6px 12px" }} />
        </Form.Item>

        <Form.Item label="Lastname" name="last_name">
          <Input style={{ borderRadius: "0px", padding: "6px 12px" }} />
        </Form.Item>

        <Form.Item label="UserName" name="username">
          <Input style={{ borderRadius: "0px", padding: "6px 12px" }} />
        </Form.Item>

        <Form.Item label="Info" name="info">
          <Input.TextArea
            style={{ borderRadius: "0px", padding: "6px 12px" }}
          />
        </Form.Item>

        <Form.Item label="Phone Number" name="phoneNumber">
          <Input
            placeholder="+998"
            style={{ borderRadius: "0px", padding: "6px 12px" }}
          />
        </Form.Item>

        <Form.Item label="Address" name="address">
          <Input placeholder="qwerty@gmail.com" style={{ borderRadius: "0px", padding: "6px 12px" }} />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              type: "email",
            },
          ]}
        >
          <Input style={{ borderRadius: "0px", padding: "6px 12px" }} />
        </Form.Item>

        <Form.Item
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Button
            style={{ width: "200px", borderRadius: "0px", padding: "6px 12px" }}
            type="primary"
            htmlType="submit"
          >
            Edit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const PasswordEdit = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const submit = async () => {
    const res = await form.getFieldsValue();
    try {
      setLoading(true);
      console.log(res);
      await request.put("auth/password", res);
      message.success("Edited succesfully!");
    } catch (err) {
      message.error("Error ocurate when change password!");
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full md:w-2/3 mx-auto h-[350px] flex items-center">
      <Form
        labelCol={{ span: 7 }}
        form={form}
        name="password"
        style={{ width: "100%" }}
        onFinish={submit}
        autoComplete="off"
      >
        <Form.Item label="CurrentPassword" name="currentPassword">
          <Input style={{ borderRadius: "0px", padding: "6px 12px" }} />
        </Form.Item>

        <Form.Item label="NewPassword" name="newPassword">
          <Input style={{ borderRadius: "0px", padding: "6px 12px" }} />
        </Form.Item>

        <Form.Item
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            style={{
              width: "200px",
              borderRadius: "0px",
              padding: "6px 12px",
            }}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
