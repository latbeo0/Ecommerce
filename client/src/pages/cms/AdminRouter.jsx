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
import Category from "./layout/Category/Category";
import Collection from "./layout/Collection/Collection";
import Sale from "./layout/Sale/Sale";
import Detail from "./layout/Product/Detail/Detail";
import ShoesLogo from "../../assets/img/shoes.png";
import { LogoutOutlined } from "@ant-design/icons";
import { fetchLogout } from "../../services/userFetch";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./../../redux/userSlice";
import Order from './layout/Order/Order';
import Material from './layout/Material/Material';

const { Header, Sider, Content } = Layout;

const AdminRouter = () => {
  const user = useSelector(selectUser);
  const [collapsed, setCollapsed] = useState(false);
  const dispatch = useDispatch();

  return (
    <Layout className="KBody" style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <img
            src={ShoesLogo}
            alt="Web shoes"
            style={{ height: "inherit" }}
          ></img>
          {!collapsed && (
            <div
              style={{
                height: "inherit",
                fontSize: "17px",
                fontWeight: "bold",
                color: "#FFF",
                overflow: "hidden",
              }}
            >
              UTE WEBSHOES
            </div>
          )}
        </div>
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
          <Menu.Item
            id={0}
            key={"0"}
            style={{ display: "flex", alignItems: "center" }}
            onClick={async () => {
              await dispatch(fetchLogout());
            }}
          >
            <Icon component={LogoutOutlined} />
            <span>
              <Link to={"/"} className="KLink">
                Logout
              </Link>
            </span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
            color: "white",
            minHeight: "35px",
            height: "7vh",
            display: "flex",
            alignItems: "center",
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
          id="KContent"
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 8,
            minHeight: 280,
            maxHeight: "93vh",
            overflowY: "auto",
          }}
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/list-product" element={<Product />} />
            <Route path="/list-product/detail:id" element={<Detail />} />
            <Route path="/list-user" element={<User />} />
            <Route path="/list-order" element={<Order />} />
            <Route path="/list-category" element={<Category />} />
            <Route path="/list-collection" element={<Collection />} />
            <Route path="/list-material" element={<Material />} />

            <Route path="/list-voucher" element={<Sale />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminRouter;
