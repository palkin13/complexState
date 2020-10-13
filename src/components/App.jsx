import React, {useState} from "react";

function App() {

const [ fullName , setFullName ] = useState({
  fName: "",
  lName: ""
});

function handleChange(event) {
  
// const { value , name } = event.target;
// Use instead of newValue = value and inputName = name 
const newValue = event.target.value;
// to know which property triggered the handleChange function
const inputName = event.target.name;

// console.log(newValue);
// console.log(inputName);

// At one time only one property was showing in heading 

// if ( inputName === "fName") {
//   setFullName( {fName : newValue});
// }
// else if ( inputName === "lName") {
// setFullName( { lName : newValue});
// }

 // To hold previous value
 
// setFullName( prevValue => {
//   console.log(prevValue);
// });

setFullName( prevValue => {
   if(inputName === "fName"){
     return {
          fName: newValue,
          lName: prevValue.lName
     };
   }
   else if(inputName === "lName"){
     return {
       fName : prevValue.fName,
       lName: newValue
     };
   }
});

} 



  return (
        <div className="container">
          <h1>Hello {fullName.fName} {fullName.lName}</h1>
          <form>
            <input onChange={handleChange} name="fName" placeholder="First Name" value={fullName.fName} 
            />
            <input onChange={handleChange} name="lName" placeholder="Last Name"  value={fullName.lName} 
            />
            <button>Submit</button>
          </form>
        </div>
     );

}
export default App;
// const [fName , setFName] = useState("");
// const [lName , setLName] = useState("");

// function updateFName(event) {
//   const firstName = event.target.value;
//   setFName(firstName);
  
// }
// function updateLName(event) {
//   const lastName = event.target.value;
//   setLName(lastName);
// }


//   return (
//     <div className="container">
//       <h1>Hello {fName} {lName}</h1>
//       <form>
//         <input onChange={updateFName} name="fName" placeholder="First Name" value={fName} />
//         <input onChange={updateLName} name="lName" placeholder="Last Name" value={lName} />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
