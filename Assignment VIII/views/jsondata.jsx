import React from 'react';
import DefaultLayout from './default.jsx';

const containerStyle = { 
  display: 'flex', 
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'
}

const cellStyle = {
  border: '1px solid black',
  padding: '10px 25px'
}

const JsonData = (props) => {
  return (<DefaultLayout title="Json Data">
    <div style={containerStyle}>
      <h1 style={cellStyle}>form data</h1>
      <h1 style={cellStyle}>Firstname: {props.firstname}</h1>
      <h1 style={cellStyle}>Lastname: {props.lastname}</h1>
      <h1 style={cellStyle}>Nickname: {props.nickname}</h1>
    </div>
  </DefaultLayout>);
}

module.exports = JsonData;