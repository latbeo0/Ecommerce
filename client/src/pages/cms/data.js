import {
  EnvironmentOutlined,
  UserOutlined,
  ShopOutlined,
  AreaChartOutlined,
  ClusterOutlined,
} from "@ant-design/icons";

export const ListMenu = [
  {
    key: "1",
    icon: AreaChartOutlined,
    label: "Dashboard",
    link: "/",
  },
  {
    key: "2",
    icon: UserOutlined,
    label: "User",
    link: "/list-user",
  },
  {
    key: "3",
    icon: ShopOutlined,
    label: "Product",
    link: "/list-product",
  },
  {
    key: "4",
    icon: EnvironmentOutlined,
    label: "Region",
    link: "/list-region",
  },
  {
    key: "5",
    icon: ClusterOutlined,
    label: "Role",
    link: "/list-role",
  },
];
