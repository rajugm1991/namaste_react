import React from "react";
import ReactDOM  from "react-dom/client";

/**
 * 
 * <div id ="parent">
 * 
 *  <div id="child">
 *   <h1>I am h1 </h1>
 *  <h2>i am h2</h1>
 * 
 *  </div>
 * 
 * </div>
 * 
 * 
 */


/**
 *  Learnings from episode 2
 * 
 *  Git setup local
 *  Remote git code push
 *  npm init -> pulled package manager
 *  parcel -> File bundlers similar to Webpack and others
 *  npm install parcel -> package.json creation where it tracks dependency verstion
 *  package.lock.json -> Keep track of exact version
 *  tildo -> used to auto upgrade
 *  caret -> used to minot upgrade
 *  npm install react and dom
 *  switched react to npm module in code
 *  cdn react -> It requires to load every time from script.
 *  import will refer to node module folder.
 *  
 *  
 * 
 * 
 * 
 */


/**
 *  React.createElement => object => HtmlElment(render)
 * 
 */
const parent=React.createElement("div",{id:'parent'},
React.createElement('div',{id: 'child'},
[React.createElement('h1',{},'i am h1'),React.createElement('h2',{},'i am h2')]
)
);



const heading=React.createElement("h1",{id:"heading"},"Hello world from react");
const root=ReactDOM.createRoot(document.getElementById("react"));
//root.render(heading);
root.render(parent);



// jsx - it is syntax (ES6);
// JSX (transpiled before if reaches the JS) - parcel- Babel
// JSX  => React.createElemet => ReactELement-JS object => HtmlElement(render)

const jsxHeadong=<h1 id="heading">Namaste react using jsx</h1>
root.render(jsxHeadong);
 

// React compenent
//  It is java script which return JSX

// Functional based components


const HeadingComponent=()=>{
    return <h1>Namaste react functional compenent</h1>
}

root.render(<HeadingComponent/>);