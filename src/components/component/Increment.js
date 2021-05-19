import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCounterContext } from "../useCounterContext";
import { StyledButton } from "./styles";

export function Increment({ icon = "plus" }) {
  const { handleIncrement } = useCounterContext();
  return (
    <StyledButton onClick={handleIncrement}>
      <FontAwesomeIcon icon={icon} color="#17a2b8" />
    </StyledButton>
  );
}
