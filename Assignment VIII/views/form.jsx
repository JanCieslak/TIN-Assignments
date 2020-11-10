import React from 'react';
import DefaultLayout from './default.jsx';

const Form = (props) => {
  return (<DefaultLayout title="Form">
    <div>
      <form action="http://localhost:3000/formdata" method="POST">
        <label htmlFor="firstname">firstname</label> <br></br>
        <input type="text" name="firstname"/> <br></br>

        <label htmlFor="lastname">lastname</label> <br></br>
        <input type="text" name="lastname"/> <br></br>

        <label htmlFor="nickname">nickname</label> <br></br>
        <input type="text" name="nickname"/> <br></br>

        <button type="submit">Submit</button>
      </form>
    </div>
  </DefaultLayout>);
}

module.exports = Form;