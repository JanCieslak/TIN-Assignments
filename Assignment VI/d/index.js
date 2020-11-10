'use strict';

const addBtn = document.getElementById('addBtn');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const table = document.getElementById('tbody');

addBtn.addEventListener('click', function() {
  const row = document.createElement('tr');
  const firstnameData = document.createElement('td');
  const lastnameData = document.createElement('td');
  
  firstnameData.innerHTML = firstname.value;
  lastnameData.innerHTML = lastname.value;
  
  firstname.value = '';
  lastname.value = '';
  
  row.appendChild(firstnameData);
  row.appendChild(lastnameData);
  table.appendChild(row);
});