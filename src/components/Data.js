import React,{useState, useEffect} from "react";
import API from "../utils/API.js"
import Search from "./Search.js"



function Data(){
    const [search, setSearch]= useState('')
    const [result, setResult] = useState([])

    useEffect(()=>{
        findUsers()
    },[])

    function handleInputChange(event){
        const response = event.target.value
        setSearch(response)
    }

    function handleFormSubmit(event){
        event.preventDefault();
        console.log(`[handleFormSubmit] called.`);
        const keyword = search.toLowerCase()
        if(search) {
          const response = result.filter(item => {
            if(item.name.first.toLowerCase().includes(keyword) || item.name.last.toLowerCase().includes(keyword)) return true;
            else return false;
          });
          setSearch('');
          setResult(response);
        }
        else setResult(result);
      }
    function sort(){
        let response = result.sort(function(item1, item2){
            const name1 = item2.name.first.toLowerCase();
            const name2 = item1.name.first.toLowerCase();
            if(name1 < name2) return 1;
            else if (name1 > name2) return -1;
            else return 0;
        });

        setResult([...response])
    }

    async function findUsers(){
        const users = await API.getUsers()
        console.log(users.data.results)
        setResult(users.data.results)



    }


    return (
        <>
        <Search
         value={search}
         handleInputChange={handleInputChange}
         handleFormSubmit={handleFormSubmit}
         />

        {/* <input value={search} onChange={handleInputChange}/><button onClick={filterNum}>Filter by phone Number</button> */}
         <table className="table">
          <thead>
            <tr>
              <th scope="col">
                FirstName <button onClick={sort}>Sort</button>
              </th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {result.map((item, idx) => (
              <tr key={`emp-${idx}`}>
                <td>{item.name.first}</td>
                <td>{item.name.last}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr> 
              ))}
          
          </tbody>
        </table>
        </>
      );

}


export default Data;