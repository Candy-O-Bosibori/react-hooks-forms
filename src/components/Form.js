import React from "react";

function Form({handleFirstNameChange, handleLastNameChange, firstName, lastName}) {

  return (
    <form>
      <input type="text" value={firstName} onChange={handleFirstNameChange} />
      <input type="text" value={lastName} onChange={handleLastNameChange}/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
