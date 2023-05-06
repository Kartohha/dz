import './li.css'

const Listi=({id, firstName, lastName, email, gender, img})=>{
   const MyStyle={
      backgroundImage: `url(${img})`
   }
   return(
      <li>
      <div className="img" style={MyStyle}></div>
      <div className="bl"><p>id: {id}</p>
      <p>имя: {firstName}</p>
      <p>фамилия: {lastName}</p>
      <p>email: {email}</p>
      <p>пол: {gender}</p>
      </div>
    </li>
   )
}

export default Listi
