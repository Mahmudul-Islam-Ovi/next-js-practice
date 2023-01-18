import React from 'react';
import { Link } from 'next/link';

const user = ({user}) => {
    return (
        <div>
            <h3>Name : {user?.name}</h3>
            <h4>Email : {user?.email}</h4>
            <h5>Address : {user?.address.city}</h5>
        </div>
    );
};

export default user;

export async function getStaticPaths() {
    

    const res = await fetch('https://jsonplaceholder.typicode.com/users'); 
    const users =await res.json();
  
    const paths = users.map((user) => ({
      params: { id: user.id.toString()},
    }))
  
    return { paths, fallback: false }
  }

  export async function getStaticProps({params}) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`); 
    const user =await res.json();

    return{props :{user}}
  }