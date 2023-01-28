import React, { useEffect, useState } from 'react'
import '../styles/App.css';
import { Loader } from './Loader';
import { PhotoFrame } from './PhotoFrame';
const App = () => {
    const[id,setId] =useState(null);
    const[url,setUrl]=useState(null);
    const[title,setTitle]=useState(null);
    const[loading,setLoading]=useState(false);
    let api =`https://jsonplaceholder.typicode.com/photos/${id}`
     useEffect(()=>{
        fetch(api).then(response=>response.json()).then(response=>{
            setUrl(response.url);
            setTitle(response.title);
            setLoading(true)
        }
            );
     })
const ipChange=(e)=>{
   setId(e.target.value)
}

    return(
        <>
        <label for="input">Id number</label>
        <input type="number" value={id} onChange={ipChange}/>
        {
           url && title && id ? <PhotoFrame url={url} title={title} />:<Loader/>
        }
        </>
    )
 
}


export default App;
