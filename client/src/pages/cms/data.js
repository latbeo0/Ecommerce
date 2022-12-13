import {
  PercentageOutlined,
  UserOutlined,
  ShopOutlined,
  AreaChartOutlined,
  ShoppingCartOutlined,
  CrownOutlined,
  ReadOutlined,
  FormatPainterOutlined 
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
    icon: ShoppingCartOutlined,
    label: "Order",
    link: "/list-order",
  },
  {
    key: "5",
    icon: FormatPainterOutlined,
    label: "Material",
    link: "/list-material",
  },
  {
    key: "6",
    icon: ReadOutlined,
    label: "Category",
    link: "/list-category",
  },
  {
    key: "7",
    icon: CrownOutlined,
    label: "Collection",
    link: "/list-collection",
  },
  {
    key: "8",
    icon: PercentageOutlined,
    label: "Sale Voucher",
    link: "/list-voucher",
  },
];
