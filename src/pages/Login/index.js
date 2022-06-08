import React, { Component } from "react";
import { Card, Form, Input, Button, Checkbox, message } from "antd";
import styles from "./index.module.scss";
import logo from "assets/logo192.png";
import login from "../../api/user";
import { setToken } from "utils/storage";

class Login extends Component {
  state = {
    loading: false,
    data: {}
  };
  render() {
    const onFinish = async ({ telephonee, password }) => {
      this.setState({
        // 按钮加载状态
        loading: true
      });
      try {
        const res = await login({ telephonee, password });
        const { state } = this.props.location;
        setToken(res.data.token);
        message.success("登陆成功", 1, () => {
          if (state) {
            this.props.history.push(state.from);
          } else {
            this.props.history.push("/home");
          }
        });
      } catch (error) {
        this.setState({ loading: false });
        alert(error.response.data.message);
      }
    };
    return (
      <div className={styles.login}>
        <Card className="login-container" style={{ width: 440, height: 360 }}>
          <img src={logo} className="logo" alt="" />
          <Form
            name="basic"
            initialValues={{
              telephonee: "13911111111",
              password: "246810",
              remember: true
            }}
            autoComplete="off"
            size="large"
            validateTrigger={["onChange", "onBlur"]}
            onFinish={onFinish}
          >
            <Form.Item
              label="Telephone"
              name="telephonee"
              validateTrigger="onBlur"
              rules={[
                {
                  required: true,
                  message: "手机号不能为空!"
                },
                {
                  pattern: /^1[3-9]\d{9}$/,
                  message: "手机号格式错误"
                }
              ]}
            >
              <Input placeholder="请输入手机号" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              validateTrigger="onBlur"
              rules={[
                {
                  required: true,
                  message: "密码不能为空!!"
                },
                {
                  pattern: /\d{6}/,
                  message: "密码格式错误"
                }
              ]}
            >
              <Input.Password placeholder="请输入密码" />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              rules={[
                {
                  validator: async (rule, value) => {
                    if (value) {
                      return Promise.resolve;
                    } else {
                      // return Promise.reject()
                      throw new Error("请同意我的霸王条款!");
                    }
                  }
                }
              ]}
            >
              <Checkbox>我同意隐私协议，你可以把我的信息卖给诈骗犯</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
              <Button
                type="primary"
                htmlType="submit"
                loading={this.state.loading}
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}

export default Login;
