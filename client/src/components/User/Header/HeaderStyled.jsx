import styled from 'styled-components';

const Container = styled.header`
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    z-index: 2;
`;

const ContainerMobile = styled.div`
    position: relative;
    z-index: 40;
    display: block;

    @media only screen and (min-width: 1025px) {
        display: none;
    }
`;

const Modal = styled.div`
    position: relative;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: rgb(0 0 0 / 0.25);
`;

const Dialog = styled.div`
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    z-index: 40;
    display: flex;
`;

const MenuMobile = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    max-width: 20rem;
    flex-direction: column;
    overflow-y: auto;
    padding-bottom: 3rem;
    background-color: rgb(255 255 255);

    --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
        0 8px 10px -6px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color),
        0 8px 10px -6px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
        var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
`;

const WrapperCloseButton = styled.div`
    display: flex;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 1.25rem;
    padding-bottom: 0.5rem;
`;

const ContainerPrimary = styled.div`
    margin-top: 0.5rem;
`;

const ContainerTags = styled.div`
    border-bottom-width: 1px;
    border-color: rgb(229 231 235);
`;

const WrapperTags = styled.div`
    margin-bottom: -1px;
    display: flex;
    padding-left: 1rem;
    padding-right: 1rem;
`;

const ButtonTag = styled.button.attrs({ type: 'button' })`
    flex: 1 1;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 500;
    color: ${(props) =>
        props.active ? 'var(--primary-color)' : 'rgb(17 24 39)'};

    white-space: nowrap;
    border-bottom-width: 2px;
    border-color: ${(props) =>
        props.active ? 'var(--primary-color)' : 'transparent'};

    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 0.25rem;
    padding-right: 0.25rem;

    transition: color 0.2s cubic-bezier(0, 0, 0.2, 1),
        border 0.2s cubic-bezier(0, 0, 0.2, 1);

    & + & {
        margin-left: 2rem;
    }
`;

const ContainerMenu = styled.div`
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 2.5rem;
    padding-bottom: 2rem;
`;

const ContainerFeatured = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 1rem;
`;

const ContainerOthers = styled.div`
    border-top-width: 1px;
    border-color: rgb(229 231 235);
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;

    & span {
        font-size: 1rem;
        line-height: 1.5rem;
    }
`;

const WrapperOther = styled.div`
    display: flow-root;

    & + & {
        margin-top: 1.5rem;
    }
`;

export {
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
};
