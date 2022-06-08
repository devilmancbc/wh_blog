import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import styles from "./index.module.scss";
import { Layout, Menu, Popconfirm, message } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import Home from "pages/Home";
import ArticalList from "pages/ArticalList";
import ArticalPublish from "pages/ArticalPublish.js";
import { getUserProfile } from "../../api/user";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined
} from "@ant-design/icons";
import { removeToken } from "utils/storage";

const { Header, Content, Sider } = Layout;
const items1 = ["1", "2", "3"].map(key => ({
  key,
  label: `nav ${key}`
}));
const items2 = [
  { icon: UserOutlined, str: "数据概览", link: "/home" },
  { icon: LaptopOutlined, str: "内容管理", link: "/home/list" },
  { icon: NotificationOutlined, str: "发布文章", link: "/home/publish" }
].map((data, key) => {
  // const key = String(index + 1);
  return {
    key: data.link,
    icon: React.createElement(data.icon),
    label: <Link to={data.link}> {data.str}</Link>
  };
});
class LayoutComponent extends Component {
  state = {
    profile: {}
  };
  render() {
    return (
      <div>
        <Layout className={styles.aa}>
          <Header className="header">
            <div className="logo" />
            <div className="profile">
              <span>{this.state.profile.name}</span>
              <span>
                <Popconfirm
                  title="Are you sure to delete this task?"
                  onConfirm={this.confirm}
                  // onCancel={cancel}
                  okText="Yes"
                  cancelText="No"
                >
                  <LogoutOutlined /> 退出登录
                </Popconfirm>
              </span>
            </div>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              items={items1}
            />
          </Header>
          <Layout>
            <Sider width={200} className="site-layout-background">
              <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={[this.props.location.pathname]}
                // defaultOpenKeys={["sub1"]}
                style={{
                  height: "100%",
                  borderRight: 0
                }}
                items={items2}
              />
            </Sider>
            <Layout
              style={{
                padding: "0 24px 24px"
              }}
            >
              <Content className="site-layout-background">
                <Switch>
                  <Route path="/home" exact component={Home}></Route>
                  <Route path="/home/list" component={ArticalList}></Route>
                  <Route
                    path="/home/publish"
                    component={ArticalPublish}
                  ></Route>
                </Switch>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
  confirm = () => {
    this.props.history.push("/login");
    removeToken();
    //   localStorage.removeItem('token')
    message.success("退出登录成功");
  };
  async componentDidMount() {
    const res = await getUserProfile();
    this.setState({ profile: res.data }, () => {
      console.log("setState", this.state);
    });
    console.log("res", res);
  }
}

export default LayoutComponent;
