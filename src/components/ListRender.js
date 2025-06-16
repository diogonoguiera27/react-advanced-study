import React, { useState,setUsers } from 'react'

const ListRender = () => {

    const [list] = useState(["Diogo","tayllan","Kaio"]);
    const [ users] = useState([
        {id:1, name: "Diogo" ,age:20},
        {id:2, name: "Lucas" ,age:26},
        {id:3, name: "papa" ,age:50},
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4 );

        setUsers((prevUsers)=>{
            return prevUsers.filter((user)=>randomNumber !== user.id);
        });
    };
  return ( 
    <div>
        <ul>
            {list.map((item,i)=>(
                <li key={i}>
                    {item}
                </li>
            ))}
        </ul>
        <ul>
            {users.map((user) =>(
              <li key={user.id}>
                {user.name} - {user.age}
              </li>
            ))}
        </ul>
        <button onClick={deleteRandom} >Delete raandowm user</button>
    </div>
  )
}

export default ListRender