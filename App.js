import React from 'react';
class App extends React.Component {

componentDidMount(){
  
  setTimeout(alert("Hello"), 2000);


}

componentWillUnmount(){

  alert("Goodbye");
}

render(){
  return (
    <div className="App">
    <h1>Hello</h1>
    </div>
  );
}
}
export default App ;


