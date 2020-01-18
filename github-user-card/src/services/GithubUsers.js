import axios from 'axios';


export function fetchUsers (){
    // let currentDay = new Date();
    // let previousMonth = new Date();
    // previousMonth.setMonth(previousMonth.getMonth() - 1);
  
    return fetch(
      'https://api.github.com/users/petedram'
    )
      .then(res => res.json())
      .catch(err => console.log(err));
  };



