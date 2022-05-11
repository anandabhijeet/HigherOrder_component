import React from "react";
import HOC from "./HOC";

const UserList = ({data})=>{
    // const [users, setUsers]  = useState([]);
    // const [term, setTerm] = useState("");

    // const fetchUsers = async()=>{
    //     const res = await fetch("https://jsonplaceholder.typicode.com/users"); 
    //     const response = await res.json();
    //     console.log("response",response);
    //     setUsers(response);
    // }

    // useEffect(()=>{
    //     fetchUsers(); 
    //     // console.log(user);
    // },[])

    let renderUser = data.map((user)=>{
        return (
            <div key={user.id}>
                <p>
                    <strong>{user.name}</strong>
                </p>
            </div>
        )
    })

    // let filteredUser = users.filter(({name})=>{
    //     return name.indexOf(term)>=0;
    // }).map((user)=>{
    //     return (
    //         <div key={user.id}>
    //             <p>
    //                 <strong>{user.name}</strong>
    //             </p>
    //         </div>
    //     )
    // })


    return (
       <div>
           
            <div>{renderUser}</div>
       </div>
    )
}

const SearchUsers = HOC(UserList, "users")

export default SearchUsers;

