import { createContext, useContext } from "react";

const CounterContext = createContext(undefined);

export function CounterProvider({ children, value }) {
  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
}

export function useCounterContext() {
  const context = useContext(CounterContext);
  if (context === undefined) {
    throw new Error("useCounterContext must be used within a CounterProvider");
  }
  return context;
}
