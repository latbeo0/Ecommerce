import styled from 'styled-components';

const Container = styled.header`
    position: relative;
    background-color: white;
`;

const ContainerMobile = styled.div`
    position: relative;
    z-index: 40;
    display: block;

    @media only screen and (min-width: 1024px) {
        display: none;
    }
`;

const Modal = styled.div`
    position: fixed;
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
    max-width: 32rem;
    flex-direction: column;
    overflow-y: auto;
    padding-bottom: 4.8rem;
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
    padding-left: 1.6rem;
    padding-right: 1.6rem;
    padding-top: 2rem;
    padding-bottom: 0.8rem;
`;

const ButtonClose = styled.button.attrs({ styled: 'button' })`
    margin: -0.8rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.6rem;
    padding: 0.8rem;
    color: rgb(156 163 175 / 1);
`;

const ButtonCloseTool = styled.span`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
`;

const ContainerPrimary = styled.div`
    margin-top: 0.8rem;
`;

const ContainerTags = styled.div`
    border-bottom-width: 1px;
    border-color: rgb(229 231 235 / 1);
`;

const WrapperTags = styled.div`
    margin-bottom: -1px;
    display: flex;
    padding-left: 1.6rem;
    padding-right: 1.6rem;
`;

const ButtonTag = styled.button.attrs({ type: 'button' })`
    flex: 1 1;
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 500;
    color: ${(props) => (props.active ? 'rgb(79 70 229 / 1)' : '#000')};

    white-space: nowrap;
    border-bottom-width: 2px;
    border-color: ${(props) =>
        props.active ? 'rgb(79 70 229 / 1)' : 'transparent'};

    padding-top: 1.6rem;
    padding-bottom: 1.6rem;
    padding-left: 0.4rem;
    padding-right: 0.4rem;

    transition: color 0.2s cubic-bezier(0, 0, 0.2, 1),
        border 0.2s cubic-bezier(0, 0, 0.2, 1);

    & + & {
        margin-left: 3.2rem;
    }
`;

const ContainerMenu = styled.div`
    padding-left: 1.6rem;
    padding-right: 1.6rem;
    padding-top: 4rem;
    padding-bottom: 3.2rem;
`;

const ContainerFeatured = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 1.6rem;
`;

export {
    Container,
    ContainerMobile,
    Modal,
    Dialog,
    MenuMobile,
    WrapperCloseButton,
    ButtonClose,
    ButtonCloseTool,
    ContainerPrimary,
    ContainerTags,
    WrapperTags,
    ButtonTag,
    ContainerMenu,
    ContainerFeatured,
};
