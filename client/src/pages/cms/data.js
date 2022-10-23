import {
  QuestionCircleOutlined,
  UserOutlined,
  ShopOutlined,
  AreaChartOutlined,
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
    icon: QuestionCircleOutlined,
    label: "Category",
    link: "/list-category",
  },
  {
    key: "5",
    icon: QuestionCircleOutlined,
    label: "Collection",
    link: "/list-collection",
  },
  {
    key: "6",
    icon: QuestionCircleOutlined,
    label: "Sale Voucher",
    link: "/list-voucher",
  },

];
