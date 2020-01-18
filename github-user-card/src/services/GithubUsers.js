import axios from 'axios';


export function fetchUsers (){
    // let currentDay = new Date();
    // let previousMonth = new Date();
    // previousMonth.setMonth(previousMonth.getMonth() - 1);
  
    return (
    axios.get("https://api.github.com/users/petedram")
    // .then(response => {
    //     console.log(response.data);
    // })
    .catch(error => {
        console.log("server error", error);
    })
    );
};




