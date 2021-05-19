import { useEffect, useRef, useState } from "react";
import { CounterProvider } from "./useCounterContext";
import styled from "styled-components";
import { Count } from "./component/Count";
import { Label } from "./component/Label";
import { Decrement } from "./component/Decrement";
import { Increment } from "./component/Increment";

export default function Counter({ children, onChange, initialValue = 0 }) {
  const [count, setCount] = useState(initialValue);

  const firstMounded = useRef(true);
  useEffect(() => {
    // if (!firstMounded.current) {
    //   onChange && onChange(count);
    // }
    // firstMounded.current = false;
    // onChange(count);
    onChange && onChange(count);
  }, [count, onChange]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(Math.max(0, count - 1));
  };
  return (
    <CounterProvider value={{ count, handleIncrement, handleDecrement }}>
      <StyledCounter>{children}</StyledCounter>
    </CounterProvider>
  );
}

const StyledCounter = styled.div`
  display: inline-flex;
  border: 1px solid #17a2b8;
  line-height: 1.5;
  border-radius: 0.25rem;
  overflow: hidden;
`;

Counter.Count = Count;
Counter.Label = Label;
Counter.Decrement = Decrement;
Counter.Increment = Increment;
