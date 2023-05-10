import { useEffect,useState } from "react";
function UserList(){

    const [users,setUsers]= useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users')
        .then((res)=>res.json())
        .then((res)=>{
            setUsers(res)    
        })
        
    },[])

    

    
    return(
        <>
        {
            users.map((item,index) => {
             return <li key={index}>
                {item.id}
                <img src={item.avatar_url} height="50"/>
                </li>
            })
        }  
     </>   
    )
}


export default UserList