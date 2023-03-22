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


const parent=React.createElement("div",{id:'parent'},
React.createElement('div',{id: 'child'},
[React.createElement('h1',{},'i am h1'),React.createElement('h2',{},'i am h2')]
)
);



const heading=React.createElement("h1",{id:"heading"},"Hello world from react");
const root=ReactDOM.createRoot(document.getElementById("react"));
//root.render(heading);
root.render(parent);