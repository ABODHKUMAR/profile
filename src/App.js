import Profile from "./frontend/component/profile/profile"
import Project from "./frontend/component/project/project";
import './App.css';
import ContactMe from "./frontend/component/contant/contact";

function App() {
  return (
    <div >
     <Profile/>
     <hr></hr>
     <Project/>
     <hr></hr>
     <ContactMe/>
     </div>

  );
}

export default App;
