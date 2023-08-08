/* 
React uses a syntax extension of JavaScript called JSX that allows you to write HTML directly within JavaScript.
Code within curly braces is treated as JavaScript: { 'this is treated as JavaScript code' }

Note (EXPORTS: 
1)exports are placed before function/object declarations e.g "export function App()" or "export const foods = [...]"
2)exports for objects can also be done as follows:
  "export {
    foods,
    drinks
   }"
3)default exports are done as follows e.g "export default App" or "export default foods"


Note (IMPORTS):
1)imports are done using name of function/object as follows: "import { App } from ./App"
2)default imports won't need curly brackets e.g "import default from ./App"
*/

import './styles.css';
import React from "react"



/////////////////////////////////////////////////////////////////* Basics of JSX */////////////////////////////////////////////////////////////////

export function Lesson1() {
    const JSX = (
      <div className="myDiv"> {/* Note: everything in JSX is camel case of JavaScript 
                                e.g it's not "class" but "className" now
                                e.g it's not "onclick" but "onClick" */}

        <h1>Paragraph One</h1> 
        <p>Paragraph Two</p>
        
        {/* Note: In HTML, some elements have opening and closing tags e.g "<div></div>" 
        and some has self-closing tags e.g "<br>" or "<br />"
        
        In JSX, ALL elements can be written with self-closing tags and MUST have a closing tag e.g "<br />" or "<div />" or "<div></div>" 
        BUT NOT e.g <br> */}

        <br />

        <ul>
          <li>twr</li>
          <li>twr</li>
          <li>twr</li>
        </ul>
      </div>
    );

  return JSX;
}



/////////////////////////////////////////////////////////////////* React component as a Function */////////////////////////////////////////////////////////////////

export const Lesson2 = function() { //Note: This is a stateless functional component = recieves and renders data without managing/tracking changes to that data
  return (
    <div>Lesson2</div>
  );
}



/////////////////////////////////////////////////////////////////* React component as a Class */////////////////////////////////////////////////////////////////

export class Lesson3 extends React.Component { //The other way to define a react component. It inherits properties and features from "React.Component"
  constructor(props) {
    super(props); //"super" calls the parent object(like "this" calls this object). "super()" calls the parent's constructor.
  }
  render() {
    return (
      <div>
        <h1>Hello React! - Lesson3</h1>
      </div>
    )
  }
};



/////////////////////////////////////////////////////////////////* Composing components together */////////////////////////////////////////////////////////////////

const ChildComponent1 = () => {
  return (
    <div>
      <p>I am child1</p>
    </div>
  );
};

const ChildComponent2 = () => {
  return (
    <div>
      <p>I am child2</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        <ChildComponent1 /> {/* Here we have made a parent class which calls and renders the other child classes to compose them together*/}
        <ChildComponent2 />
      </div>
    );
  }
};



/////////////////////////////////////////////////////////////////* Composing components together */////////////////////////////////////////////////////////////////
const CurrentDate = (props) => {
  return (
    <div>        <CurrentDate date={Date()} />
      <p>The current date is: {props.date}</p>        <CurrentDate date={Date()} />
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        <CurrentDate date={Date()} />
      </div>
    );
  }
};