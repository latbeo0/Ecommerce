export const productMaster = {
  productName: "",
  productDescription: "",
  gender: "",
  cateCode: "",
  collectCode: "",
  err: "",
  success: "",
};
export const product = {
  productMasterId: "",
  primaryImages: [],
  secondaryImages: [],
  stateCode: "",
  saleCode: "",
  price: 0,
  newPrice: 0,
  color: {
    nameColor: "",
    valueColor: "",
    details: []
  },
  isStock: true,
  err: "",
  success: "",
};

export const color = {
  nameColor: "White",
  valueColor: "#ffffff",
  details: [],
};
export const detail = {
  size: 38,
  quantity: 0,
};
export const categories = [
  {
    cateCode: "CATEGORY1",
    cateName: "Walking",
  },
  {
    cateCode: "CATEGORY2",
    cateName: "Climbing",
  },
  {
    cateCode: "CATEGORY3",
    cateName: "Travel",
  },
  {
    cateCode: "CATEGORY4",
    cateName: "Party",
  },
];
export const gender = [
  {
    id: "MALE",
    name: "Male",
  },
  {
    id: "FEMALE",
    name: "Female",
  },
  {
    id: "UNISEX",
    name: "Unisex",
  },
];
export const collections = [
  {
    collectCode: "COLLECTION1",
    collectName: "Spring",
  },
  {
    collectCode: "COLLECTION2",
    collectName: "Summer",
  },
  {
    collectCode: "COLLECTION3",
    collectName: "Autumn",
  },
  {
    collectCode: "COLLECTION4",
    collectName: "Winter",
  },
];
export const states = [
  {
    stateCode: "STATE1",
    stateName: "New",
  },
  {
    stateCode: "STATE2",
    stateName: "Hot",
  },
  {
    stateCode: "STATE3",
    stateName: "Limited",
  },
];
export const sales = [
  {
    saleCode: "SALE1",
    saleName: "ANNIVERSARY 2ND",
  },
  {
    saleCode: "SALE2",
    saleName: "NEW BRANCH",
  },
  {
    saleCode: "SALE3",
    saleName: "SEPTEMBER",
  },
];
export const sizes = [
  { 
    id: "SIZE38",
    value: "38"
  },
  { 
    id: "SIZE39",
    value: "39"
  },
  { 
    id: "SIZE40",
    value: "40"
  },
  { 
    id: "SIZE41",
    value: "41"
  },
  { 
    id: "SIZE42",
    value: "42"
  },
  { 
    id: "SIZE43",
    value: "43"
  }
]
