import { useEffect, useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import {
    Announcement,
    Navbar,
    Featured,
    List,
    Button,
    Avatar,
} from "../../Basic";
import {
    Container,
    ContainerMobile,
    Modal,
    Dialog,
    MenuMobile,
    WrapperCloseButton,
    ContainerPrimary,
    ContainerTags,
    WrapperTags,
    ButtonTag,
    ContainerMenu,
    ContainerFeatured,
    ContainerOthers,
    WrapperOther,
} from "./HeaderStyled";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./../../../redux/userSlice";
import { fetchLogout } from "../../../services/userFetch";
import { selectCategories } from "../../../redux/categorySlice";
import { selectCollections } from "../../../redux/collectionSlice";
import { selectMaterials } from "./../../../redux/materialSlice";

// const navigation = {
//     categories: [
//         {
//             id: 'women',
//             name: 'Women',
//             featured: [
//                 {
//                     name: 'New Arrivals',
//                     href: '#',
//                     imageSrc:
//                         'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
//                     imageAlt:
//                         'Models sitting back to back, wearing Basic Tee in black and bone.',
//                 },
//                 {
//                     name: 'Basic Tees',
//                     href: '#',
//                     imageSrc:
//                         'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
//                     imageAlt:
//                         'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
//                 },
//             ],
//             sections: [
//                 {
//                     id: 'clothing',
//                     name: 'Clothing',
//                     items: [
//                         { name: 'Tops', href: '#' },
//                         { name: 'Dresses', href: '#' },
//                         { name: 'Pants', href: '#' },
//                         { name: 'Denim', href: '#' },
//                         { name: 'Sweaters', href: '#' },
//                         { name: 'T-Shirts', href: '#' },
//                         { name: 'Jackets', href: '#' },
//                         { name: 'Activewear', href: '#' },
//                         { name: 'Browse All', href: '#' },
//                     ],
//                 },
//                 {
//                     id: 'accessories',
//                     name: 'Accessories',
//                     items: [
//                         { name: 'Watches', href: '#' },
//                         { name: 'Wallets', href: '#' },
//                         { name: 'Bags', href: '#' },
//                         { name: 'Sunglasses', href: '#' },
//                         { name: 'Hats', href: '#' },
//                         { name: 'Belts', href: '#' },
//                     ],
//                 },
//                 {
//                     id: 'brands',
//                     name: 'Brands',
//                     items: [
//                         { name: 'Full Nelson', href: '#' },
//                         { name: 'My Way', href: '#' },
//                         { name: 'Re-Arranged', href: '#' },
//                         { name: 'Counterfeit', href: '#' },
//                         { name: 'Significant Other', href: '#' },
//                     ],
//                 },
//             ],
//         },
//         {
//             id: 'men',
//             name: 'Men',
//             featured: [
//                 {
//                     name: 'New Arrivals',
//                     href: '#',
//                     imageSrc:
//                         'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
//                     imageAlt:
//                         'Drawstring top with elastic loop closure and textured interior padding.',
//                 },
//                 {
//                     name: 'Artwork Tees',
//                     href: '#',
//                     imageSrc:
//                         'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
//                     imageAlt:
//                         'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
//                 },
//             ],
//             sections: [
//                 {
//                     id: 'clothing',
//                     name: 'Clothing',
//                     items: [
//                         { name: 'Tops', href: '#' },
//                         { name: 'Pants', href: '#' },
//                         { name: 'Sweaters', href: '#' },
//                         { name: 'T-Shirts', href: '#' },
//                         { name: 'Jackets', href: '#' },
//                         { name: 'Activewear', href: '#' },
//                         { name: 'Browse All', href: '#' },
//                     ],
//                 },
//                 {
//                     id: 'accessories',
//                     name: 'Accessories',
//                     items: [
//                         { name: 'Watches', href: '#' },
//                         { name: 'Wallets', href: '#' },
//                         { name: 'Bags', href: '#' },
//                         { name: 'Sunglasses', href: '#' },
//                         { name: 'Hats', href: '#' },
//                         { name: 'Belts', href: '#' },
//                     ],
//                 },
//                 {
//                     id: 'brands',
//                     name: 'Brands',
//                     items: [
//                         { name: 'Re-Arranged', href: '#' },
//                         { name: 'Counterfeit', href: '#' },
//                         { name: 'Full Nelson', href: '#' },
//                         { name: 'My Way', href: '#' },
//                     ],
//                 },
//             ],
//         },
//     ],
//     pages: [
//         { name: 'Orders', href: '/orders' },
//         { name: 'Stores', href: '/stores' },
//     ],
// };

const Header = () => {
    const ref = useRef(null);
    const modalRef = useRef(null);
    const dialogRef = useRef(null);

    const user = useSelector(selectUser);
    const { listCategories } = useSelector(selectCategories);
    const { listCollections } = useSelector(selectCollections);
    const { listMaterials } = useSelector(selectMaterials);

    const { currentUser, isLoading, isError } = user;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await dispatch(fetchLogout({ dispatch })).unwrap();
        navigate("/");
    };

    const [active, setActive] = useState(false);
    const [gender, setGender] = useState("women");

    const setActiveToggle = () => {
        setActive((active) => !active);
    };

    const cateMenu = listCategories.map((element) => {
        return {
            name: element.cateName,
            href: `/products?categories=${element.cateName}`,
        };
    });

    const materialMenu = listMaterials.map((element) => {
        return {
            name: element.materialName,
            href: `/products?materials=${element.materialName}`,
        };
    });

    const collectMenu = listCollections.map((element) => {
        return {
            name: element.collectName,
            href: `/products?collections=${element.collectName}`,
        };
    });

    const sectionMenu = [
        {
            id: "categories",
            name: "Categories",
            items: cateMenu,
        },
        {
            id: "collections",
            name: "Collections",
            items: collectMenu,
        },
        {
            id: "materials",
            name: "Materials",
            items: materialMenu,
        },
    ];

    const menu = {
        categories: [
            {
                id: "women",
                name: "Women",
                featured: [
                    {
                        name: "New Arrivals",
                        href: "#",
                        imageSrc:
                            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
                        imageAlt:
                            "Models sitting back to back, wearing Basic Tee in black and bone.",
                    },
                    {
                        name: "Basic Tees",
                        href: "#",
                        imageSrc:
                            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
                        imageAlt:
                            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
                    },
                ],
                sections: sectionMenu,
            },
            {
                id: "men",
                name: "Men",
                featured: [
                    {
                        name: "New Arrivals",
                        href: "#",
                        imageSrc:
                            "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
                        imageAlt:
                            "Drawstring top with elastic loop closure and textured interior padding.",
                    },
                    {
                        name: "Artwork Tees",
                        href: "#",
                        imageSrc:
                            "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
                        imageAlt:
                            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
                    },
                ],
                sections: sectionMenu,
            },
        ],
        pages: [
            { name: "Orders", href: "/orders" },
            { name: "Stores", href: "/stores" },
        ],
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setActiveToggle();
            }
        };

        document.addEventListener("click", handleClickOutside, true);

        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, []);

    return (
        <>
            <Container>
                <Announcement
                    announce={"Get free delivery on orders over $100"}
                />
                <Navbar
                    funcActive={() => setActiveToggle()}
                    navigation={menu}
                />
            </Container>

            <ContainerMobile>
                <CSSTransition
                    in={active}
                    timeout={300}
                    classNames="opacity-linear"
                    unmountOnExit
                    nodeRef={modalRef}
                >
                    <Modal ref={modalRef} />
                </CSSTransition>
                <CSSTransition
                    in={active}
                    timeout={300}
                    classNames="translate-x-ease"
                    unmountOnExit
                    nodeRef={dialogRef}
                >
                    <Dialog ref={dialogRef}>
                        <MenuMobile ref={ref}>
                            <WrapperCloseButton>
                                <Button
                                    button
                                    color="var(--black-color)"
                                    sizeIcon="1.5rem"
                                    onClick={() => setActiveToggle()}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        style={{
                                            width: "1.5rem",
                                            height: "1.5rem",
                                        }}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        ></path>
                                    </svg>
                                </Button>
                            </WrapperCloseButton>
                            <ContainerPrimary>
                                <ContainerTags>
                                    <WrapperTags>
                                        {menu.categories.map((category) =>
                                            category.id === gender ? (
                                                <ButtonTag
                                                    key={category.id}
                                                    active
                                                    onClick={() =>
                                                        setGender(category.id)
                                                    }
                                                >
                                                    {category.name}
                                                </ButtonTag>
                                            ) : (
                                                <ButtonTag
                                                    key={category.id}
                                                    onClick={() =>
                                                        setGender(category.id)
                                                    }
                                                >
                                                    {category.name}
                                                </ButtonTag>
                                            )
                                        )}
                                    </WrapperTags>
                                </ContainerTags>
                                {menu.categories.map(
                                    (category) =>
                                        category.id === gender && (
                                            <ContainerMenu key={category.id}>
                                                <ContainerFeatured>
                                                    {category.featured.map(
                                                        (featured) => (
                                                            <Featured
                                                                key={
                                                                    featured.name
                                                                }
                                                                featured={
                                                                    featured
                                                                }
                                                            />
                                                        )
                                                    )}
                                                </ContainerFeatured>
                                                {category.sections.map(
                                                    (section) => (
                                                        <List
                                                            key={section.name}
                                                            section={section}
                                                        />
                                                    )
                                                )}
                                            </ContainerMenu>
                                        )
                                )}
                            </ContainerPrimary>
                            <ContainerOthers>
                                {menu.pages.map((page) => (
                                    <WrapperOther key={page.name}>
                                        <Button
                                            href={page.href}
                                            content={page.name}
                                            color="var(--black-color)"
                                        />
                                    </WrapperOther>
                                ))}
                            </ContainerOthers>
                            {user.currentUser ? (
                                <ContainerOthers>
                                    <WrapperOther style={{ display: "flex" }}>
                                        <Avatar
                                            link="#"
                                            src={currentUser?.avatar}
                                            text={currentUser?.fullName}
                                        />
                                    </WrapperOther>
                                    <WrapperOther>
                                        <Button
                                            content="Log out"
                                            color="var(--black-color)"
                                            onClick={handleLogout}
                                        />
                                    </WrapperOther>
                                </ContainerOthers>
                            ) : (
                                <ContainerOthers>
                                    <WrapperOther>
                                        <Link to="/login">
                                            <Button
                                                type="button"
                                                content="Sign in"
                                                color="var(--black-color)"
                                                size="medium"
                                            />
                                        </Link>
                                    </WrapperOther>
                                    <WrapperOther>
                                        <Link to="/register">
                                            <Button
                                                content="Create Account"
                                                color="var(--black-color)"
                                            />
                                        </Link>
                                    </WrapperOther>
                                </ContainerOthers>
                            )}
                            <ContainerOthers>
                                <Button
                                    startIcon={{
                                        img: "https://tailwindui.com/img/flags/flag-canada.svg",
                                    }}
                                    content="CAD"
                                    color="var(--black-color)"
                                />
                            </ContainerOthers>
                        </MenuMobile>
                    </Dialog>
                </CSSTransition>
            </ContainerMobile>
        </>
    );
};

export default Header;
