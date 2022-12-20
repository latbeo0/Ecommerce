export const user = {
    id: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    birthDate: "",
    address: {
        city: "",
        district: "",
        ward: "",
        other: "",
    },
    gender: "",
    avatar: "",
    phone: "",
    isActive: false,
    roleCode: "",
    err: "",
    success: "",
};
export const gender = [
    {
        id: "MALE",
        name: "Male",
    },
    {
        id: "FEMALE",
        name: "Female",
    },
];
export const roles = [
    {
        roleCode: "ADMIN",
        roleName: "Admin",
        level: 1,
    },
    {
        roleCode: "MANAGER",
        roleName: "Manager",
        level: 2,
    },
    {
        roleCode: "SALESPERSON",
        roleName: "Salesperson",
        level: 3,
    },
    {
        roleCode: "DRIVER",
        roleName: "Driver",
        level: 4,
    },
    {
        roleCode: "CUSTOMER",
        roleName: "Customer",
        level: 5,
    },
];
