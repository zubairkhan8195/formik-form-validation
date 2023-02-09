import React from "react";  
import FormComponent from "./FormComponent";

function App() {
  return (
    <>
       <FormComponent/>
    </>
  );
}

export default App;

// function ControlledForm() {
//   const [data, setData] = useState({
//      name:'',
//      email:'',
//      phone:''
//   });
//   const handleChange = (e)=>{
//        const name = e.target.name;
//        const value = e.target.value;
//        const phone = e.target.value;
//        console.log(name,value);
//        setData((prev)=>{
//          return {
//            ...prev,[name]:value
//          }
//        })
//   }

// return (
//  <div>
//      <form>
//          <label htmlFor="">Enter Name:</label>
//          <input type="text" name='name' value={data.name} onChange={handleChange} placeholder='Enter Your Name'/>
//          <br />
//          <br />
//          <label htmlFor="">Enter Name:</label>
//          <input type="email" name='email' value={data.email} onChange={handleChange}placeholder='Enter Your Email'/>
//          <br />
//          <br />
//          <label htmlFor="">Enter Phone:</label>
//          <input type="number" name='number' value={data.phone} onChange={handleChange} placeholder='Enter Your PhoneNumber'/>
//          <br />
//          <br />
//          <input type="submit" value="Submit" />

//      </form>
//  </div>
// )
// }
  