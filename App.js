/**
 * 
 * <div id="perent">
 *      <div id="child">
 *          <h2>
 *              iam nested h2 tag
 *           </h2>
 *      </div>
 * </div>
 * 
 * 
 * 
 * 
 */


const perent= React.createElement(
    "div",
    {id:"perent"},
    [React.createElement(
        "div",
        {id:"child"},
        [
        React.createElement("h2",{},"iam nested h2 tag"),
        React.createElement("h3",{},"iam nested h3 tag")   
        ]
      ),
      React.createElement(
        "div",
        {id:"child2"},
        [
        React.createElement("h2",{},"iam nested h2 tag"),
        React.createElement("h3",{},"iam nested h3 tag")   
        ]
      )]
    );




// const heading= React.createElement(
//     "h1",
//     {id:"heading"},
//     "hello react"
// );

console.log(perent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(perent)
