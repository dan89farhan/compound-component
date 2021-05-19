// import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCounterContext } from "../useCounterContext";
import { StyledButton } from "./styles";
import {} from "@fortawesome/fontawesome-free-solid";

export function Decrement({ icon = "minus" }) {
  const { handleDecrement } = useCounterContext();
  return (
    <StyledButton onClick={handleDecrement}>
      <FontAwesomeIcon icon={icon} color="#17a2b8" />
    </StyledButton>
  );
}
