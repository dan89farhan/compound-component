import Counter from "./Counter";

export default function Usage() {
  const handleChangeCounter = (count) => {
    console.log("count", count);
  };
  return (
    <Counter>
      <Counter.Label>Counter</Counter.Label>
      <Counter.Decrement icon="minus" />
      <Counter.Count max={10}></Counter.Count>
      <Counter.Increment icon="plus" />
    </Counter>
  );
}
