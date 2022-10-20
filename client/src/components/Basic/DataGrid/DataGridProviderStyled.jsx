import styled from "styled-components";

const ListColorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ColorCard = styled.div`
  margin: 3px;
  border: 1px solid #696969;\
  border-radius: 50%;
  height: 25px;
  width: 25px;
  background-color: ${(props) => props.color}
`;
const CurrencyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #0a06d4;
`;
export { ListColorContainer, ColorCard, CurrencyContainer };
