import React, { useState, useEffect } from "react";
import "./Index.css";
export default function Index() {
const [resourceType, setResourceType] = useState('posts')
const [items, setItems] = useState([])

console.log('render')

useEffect(() =>{
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))
}, [resourceType])

return(
    <>
        <h2>Isi API dari JSONPlaceholder</h2>
    <div>
        <button className="Button" onClick ={() => setResourceType('posts')}>Posts</button>
        <button className="Button" onClick ={() => setResourceType('users')}>Users</button>
        <button className="Button" onClick ={() => setResourceType('comments')}>Comments</button>
    </div>
    
    <h2>{resourceType}</h2>

    {items.slice(0,20).map(item => {
        return <div>
            <h3>{item.title}</h3>
            <h3>{item.name}</h3>
            <p>{item.username}</p>
            <p>{item.email}</p>
            <p>{item.phone}</p>
            <p>{item.website}</p>
            <p>{item.body}</p>
            </div>
    })}

    </>
)
}