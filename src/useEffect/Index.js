import React, { useState, useEffect } from "react";
import "./Index.css";
export default function Index() {
const [resourceType, setResourceType] = useState('posts')

useEffect(() =>{
console.log('render')
})

return(
    <>
    <div>
        <button onClick ={() => setResourceType('posts')}>Posts</button>
        <button onClick ={() => setResourceType('posts')}>Users</button>
        <button onClick ={() => setResourceType('posts')}>Comments</button>
    </div>
    <h1>{resourceType}</h1>
    </>
)
}

    //Jaga jaga nek rusak
    // const [count, setCount] = useState(0);
    // const [data, setData] = useState([]);
    // //dijalankan 1 kali
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(data);
    //             setData(data);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }, []);
    // //dijalankan terus setiap ada perubahan count
    // useEffect(() => {
    //     if (count > 0) {
    //         alert('component will update & count ${count}');
    //     }
    // }, [count]);
    // //dijalankan terus menerus
    // useEffect(() => {
    //     console.log('spam console kuy');
    // });
    // const countUp = () => {
    //     setCount(count + 1);
    // };
    // const countDown = () => {
    //     setCount(count - 1);
    // };
    // return (
    //     <div className="Main">
    //         <p className="Text"> Learn useEffect</p>
    //         <p>KELOMPOK 02</p>
    //         <ul>
    //             {data.slice(0, 10).map((value) => (
    //                 <li key={value.id}>{value.title}</li>
    //             ))}
    //         </ul>
    //         <p className="Text">{count}</p>
    //         <div className="ViewButton">
    //             <div className="ViewButton2">
    //                 <button className="Button"
    //                     onClick={countUp}>
    //                     Up
    //                 </button>
    //             </div>
    //             <div className="ViewButton1">
    //                 <button className="Button"
    //                     onClick={countDown}>
    //                     Down
    //                 </button>
    //             </div>
    //         </div>
    //     </div>
    // );
