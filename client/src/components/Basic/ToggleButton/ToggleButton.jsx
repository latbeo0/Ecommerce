import { ButtonToggle, ButtonTool } from './ToggleButtonStyled';

const ToggleButton = (props) => {
    return (
        <ButtonToggle {...props}>
            <ButtonTool>Open menu</ButtonTool>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='2'
                stroke='currentColor'
                aria-hidden='true'
                style={{ width: '2.4rem', height: '2.4rem' }}
            >
                <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4 6h16M4 12h16M4 18h16'
                ></path>
            </svg>
        </ButtonToggle>
    );
};

export default ToggleButton;
