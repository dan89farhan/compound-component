import styled from "styled-components";
import { useCounterContext } from "../useCounterContext";

export function Count({ max }) {
  const { count } = useCounterContext();
  const hasError = max ? count >= max : false;
  return <StyledCount hasError={hasError}>{count}</StyledCount>;
}
const StyledCount = styled.div`
  background-color: ${({ hasError }) => (hasError ? "#bd2130" : "#17a2b8")};
  color: white;
  padding: 5px 7px;
`;
