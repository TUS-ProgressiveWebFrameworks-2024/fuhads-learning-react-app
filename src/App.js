import logo from './logo.svg';

import './App.css'; /*Loading app's css from the app css file  */
 import  First from './components/First.js' /*Loading the First.js from the components file */
 import Welcome from './components/Welcome.js';
 import Display from './components/Display.js'
function App() {
  let owner= "Fuhad's" /*Creating a variable owner and assigning it a value called Fuhads*/
  let course= "Web Frameworks" /*Creating a variable course and assigning it a value called Web Frameworks */
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         This is {owner} first  react app in {course}.
        </p>
       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <First/>
        <Welcome/>
        <Display/>
      </header>
    </div>
  );
}

export default App;

