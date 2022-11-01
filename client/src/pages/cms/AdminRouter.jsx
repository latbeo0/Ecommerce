import { Route, Routes } from "react-router-dom";
import Dashboard from "./layout/Dashboard/Dashboard";
import React, { useState } from "react";
import "antd/dist/antd.css";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import Icon from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import Product from "./layout/Product/Product";

import "./cms.css";
import { ListMenu } from "./data";
import User from "./layout/User/User";
import Category from './layout/Category/Category';
import Collection from "./layout/Collection/Collection";
import Sale from "./layout/Sale/Sale";
import Detail from "./layout/Product/Detail/Detail";
const { Header, Sider, Content } = Layout;

const AdminRouter = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout className="KBody">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          {ListMenu.map((item) => (
            <Menu.Item
              id={item.key}
              key={item.key}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Icon component={item.icon} />
              <span>
                <Link to={item.link} className="KLink">
                  {item.label}
                </Link>
              </span>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
            color: "white",
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 8,
            minHeight: 280,
          }}
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/list-product" element={<Product />} />
            <Route path="/list-product/detail:id" element={<Detail />} />
            <Route path="/list-user" element={<User />} />
            <Route path="/list-category" element={<Category />} />
            <Route path="/list-collection" element={<Collection />} />
            <Route path="/list-voucher" element={<Sale />} />
            {/* </Route> */}
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminRouter;
