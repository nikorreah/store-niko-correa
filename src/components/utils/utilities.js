import { useEffect } from "react"

function request () {
    fetch ("https://coding-challenge-api.aerolab.co/user/me", {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTBjOTc5NWQwMDVjZDAwMjE0NDc3MDkiLCJpYXQiOjE2MjgyMTUxODl9.WnOZ5f3lMVnjsX3VI8JKQlCOI3nf1Nu6IhtkdykdsfI"
    }) 
}

const optionsGet = {
    method: "GET",
    headers: HEADERS,
    redirect: "follow",
  };
  
useEffect (()=>{
   try {
       const userRequest= async () => {
           const response = await request();
           const data = await response.json();
       }; 
       userRequest ();
   } catch (error) {
       alert("error")
   }
},[])

console.log(userRequest())
