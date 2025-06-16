import React, { useState } from 'react'

const ListRender = () => {

    const [list] = useState(["Diogo","tayllan","Kaio"]);
    const [ users] = useState([
        {id:1, name: "Diogo" ,age:20},
        {id:421342352, name: "Lucas" ,age:26},
        {id:4523454365, name: "papa" ,age:50},
    ]);
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
    </div>
  )
}

export default ListRender