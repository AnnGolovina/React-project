import React, { useContext, useState, Dispatch, FC } from "react";
import { MainContext } from "../context/MainContext";

interface PropsInterface {
  value: string;
  name: string;
  age: number;
  arr: number[];
  fn: () => void;
}

export const Counter:FC<PropsInterface> = (props: PropsInterface) => { // або ({value: any})
  //const {value} = props;
  props.fn();
  props.name;
  props.age;
console.log(props, "PROPS", props.value);

const {renderPosts} = useContext(MainContext)!;

  //return "aaaa"; - стає тоді звичайною функцією
  //return null; - якщо не треба рнічого відмальовувати
  const [counter, setCounter] = useState<number>(0);
  const [isCounterEnabled, setIsCounterEnabled] = useState<boolean>(true);

  // const onIncrement = () => {
  //		setCounter(counter + 1);
  // }

  // const onDecrement = () => {
  //	setCounter(counter - 1);
  //}

  const onClickButton = (isIncrement: boolean) => {
    //isIncrement ? setCounter(counter + 1) : setCounter(counter - 1)
    setCounter(isIncrement ? counter + 1 : counter - 1);
  };

  const togleCounter = () => setIsCounterEnabled(!isCounterEnabled);


  //---------HW
  const [name, setName ] = useState<string>("name");
  const names: string[] = ["Ann", "Kyryll", "Michael", "Oleksiy", "Maria"]
 
  const onClickName = (isName: string) => {
	setName(isName);
  }
 
  return (
    <div className="counter">

      <button onClick={togleCounter}>
        {isCounterEnabled ? "Hide" : "Show"} counter
      </button>

      {isCounterEnabled && <h1>Counter: {counter}</h1>}
      {counter < 10 && <button onClick={() => onClickButton(true)}>+</button>}
      <button onClick={() => onClickButton(false)}>-</button>

      <div>
		<h3>{name}</h3>
		{names.map((name, i) => (
			<div className="names" key={`${name}-${i}`} onClick={() => onClickName(name)}>
			<p>{name}</p>
			</div>

		))
		}
    {renderPosts()}
	  </div>
    </div>
  );
};
