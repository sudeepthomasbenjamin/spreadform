import React, { useState } from "react";

function App() {
  var [contact,setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function changed(event)
  {
var {name,value}=event.target

setContact(prevValue => {
    return {
       ...prevValue,
       [name]:value
    };
  })
  }
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" onChange={changed} placeholder="First Name" />
        <input name="lName" onChange={changed} placeholder="Last Name" />
        <input name="email" onChange={changed} placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
