import React, { useState } from 'react'

const Content = () => {
    // function randomName(){
    //     const names = ["john","peter"];
    //     const i = Math.floor(Math.random()*2)
    //     return names[i];
    // }
    
    //  const addItem = ()=>{
    //     console.log("hi");
    //  } 
    
    //  const addItem1 = (name)=>{
    //     console.log(name);
    //  } 

    // if(true){
    //     useState()
    // }
    

    // const [count, setCount] = useState(99);

    // function incrementFunc(){
    //     setCount(count => ++count);
    //     setCount(count => ++count);
    //     setCount(count => ++count);
    // }

    // function decrementFunc(){
    //     setCount(count - 1);
    // }

    const [items, setItems] = useState([
        {id:1,checked: true , description: "Pratice Java"},
        {id:2,checked: false , description: "Pratice JS"},
        {id:3,checked: false , description: "Pratice Coding"},
    ])

    function handleCheck(id){
      const listItems = items.map(item => item.id === id ? {...item, checked: !item.checked} : item)
      setItems(listItems);
    }

    function deleteTask(id){
        // const listItems = items.map(item => item.id === id ? {} : item)
        const listItems = items.filter(item => item.id !== id)
        setItems(listItems);
    }

    
  return (
    <main>
       {/* <p>Logged in by {randomName()}</p> */}

       {/* <button onClick={addItem}>Add</button> */}
       {/* <button onClick={addItem1("hi")}>Add</button>  */}
       {/* <button onClick={()=> addItem1("hi")}>Add</button>  */}

       {/* <button onClick={(e)=> addItem1(e)}>Add</button> */}
        {/* 
        <button onClick={decrementFunc}>-</button>
        <span>{count}</span>
        <button onClick={incrementFunc}>+</button> */}

        <ul>
            {items.map(item => (
                <li className='item' key={item.id}>
                    <input type='checkbox' 
                        checked={item.checked}
                        onChange={()=> handleCheck(item.id)}>
                        
                    </input>
                    <label>{item.description}</label>
                    <button onClick={()=> deleteTask(item.id)}>Delete</button>
                </li>
            ))}
        </ul>


    </main>
  )
}

export default Content