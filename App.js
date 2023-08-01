import React from "react";
import ReactDOM from "react-dom/client";

// const div = React.createElement('div', {id: "parent"},
//                 [
//                     React.createElement('div', {id: "child-1"},
//                     [
//                         React.createElement('h1', {}, "<h1> tag"), React.createElement('h2', {}, "<h2> tag")
//                     ]),
//                     React.createElement('div', {id: "child-2"},
//                     [
//                         React.createElement('h1', {}, "<h1> tag"), React.createElement('h2', {}, "<h2> tag")
//                     ])
//                 ]
//             );

// JSX => React.createElement => ReactElement (JS Object) => HTMLElement (when Rendered)
const Title = () => {
  return <h1>My Introduction</h1>;
};

const DivElement = () => {
  return (
    <div className="container">
      <Title />
      <p>My name is Ayush Khandelwal, B.tech Graduate in 2023.</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<DivElement />);
