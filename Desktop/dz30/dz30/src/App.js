import './App.css';
import users from './data/users.js';
import Listi from './li/list';

function App() {
  return (
  <div className="wrapper">
    <div className="block">
      <ul>
        {
          users.map((el)=>{
            return(
            <Listi
              img={el.image}
              firstName={el.firstName}
              lastName={el.lastName}
              id={el.id}
              email={el.email}
              gender={el.gender}
              />
            )
            }
           ) 
           }
      </ul>
    </div>
  </div>
  )
}

export default App;
