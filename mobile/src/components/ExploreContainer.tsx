import React, {useState} from 'react';
import './ExploreContainer.css';

interface ContainerProps {
  arg1: string,
  arg2: string,
  someArray: number[]
}

const ExploreContainer: React.FC<ContainerProps> = ({
  arg1, arg2, someArray
}) => {

  const [state, setState] = useState(0);

  let b = state * 8;
  console.log(b);
  let counter = 0;
  for (let i = 0; i < 100; i++) {
    counter += i;
  }

  const myArrLength = someArray.length;

  const handleClick = () => {
    console.log("I was clicked!");
    setState(state + 1);
  };

  return (
    <div className="container">
      <strong>Lets create an app! {counter}</strong>
      <br />
      <strong>I passed in a list of length {myArrLength}. It looks like {someArray}</strong>
      <br />
      <button type="button" onClick={handleClick}>Click Me!</button>
      <h1>I've been clicked {state} times!</h1>
      <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
    </div>
  );
};

export default ExploreContainer;
