import React, { useState,useEffect } from 'react'
import './style.css'

const getLocalItems = () => {
    const lists = localStorage.getItem("mytodolist");

    if (lists) {
        return JSON.parse(lists);
    } else {
        return [];
    }
};

const TodoList = () => {

    const [addItem, setAddItem] = useState('')
    const [items, setItems] = useState(getLocalItems())
    const [toggleBtn, setToggleBtn] = useState(true)
    const [isEditItem, setIsEditItem] = useState(null)
    const [myName, setMyName] = useState('SRT')
    const [count, setCount] = useState(23)
    // const [newName, setNewName] = useState('')

    const minus = () => {
        setCount((prev) => {
            return prev - 1
        })
    }
    const plus = () => {
        setCount((prev) => {
            return prev + 1
        })
    }

    /* useEffect(() => {
        setMyName(Math.random())
    }, []) */
    const inputData = () => {
        if (!addItem) {
            alert('Please fill.....')
        }
        else if (addItem && !toggleBtn) {
            setItems(
                items.map((elem) => {
                    if (elem.id === isEditItem) {
                        return { ...elem, name: addItem }
                    }
                    return elem
                })
            )
            setToggleBtn(true)
            setAddItem('')
            setIsEditItem(null)
        }
        else {
            const allInputData = { id: new Date().getTime().toString(), name: addItem }
            setItems([...items, allInputData])
            setAddItem('')
        }

    }

    const editItem = (id) => {
        let newEditItem = items.find((ele) => {
            return ele.id === id
        })
        console.log(newEditItem)
        setToggleBtn(false)
        setAddItem(newEditItem.name)
        setIsEditItem(id)
    }
    const deleteItem = (id) => {
        const updatedItems = items.filter((ele) => {
            return id !== ele.id
        })
        setItems(updatedItems)
    }

    const deleteData = () => {
        setItems([])
    }

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="./images/todo.svg" alt="gfdg" />
                        <figcaption>Add Your List Here ✌</figcaption>
                        <h1 style={{color:'#fff',fontSize:'24px',marginTop:'15px'}}>Hello Global Varible {window.name}</h1>
                        <div className="addItems">
                            <input type="text" placeholder="✍ Add Item"
                                className="form-control"
                                value={ addItem }
                                onChange={ (e) => setAddItem(e.target.value) } />
                            {
                                toggleBtn ? <i className="fa fa-plus add-btn" onClick={ inputData }></i> :
                                    <i className="far fa-edit add-btn" onClick={ inputData }></i>
                            }
                        </div>
                        {/* Only State Update Example */}
                        <button style={{marginTop:'30px'}} className="btn" onClick={() => setMyName('AureateLabs Surat')}>CLICK HERE {myName}</button>
                        <button style={{marginTop:'30px'}} className="btn" onClick={(plus)}>BTN+ </button>
                        <p style={{color:'#fff',fontSize:'24px',marginTop:'15px'}}>Count: {count}</p> 
                        <button style={{marginTop:'30px'}} className="btn" onClick={minus}>BTN- </button>
                        {/* <input type="text" style={{marginTop:'30px'}} className="btn" value={newName} onChange={(e)=> setNewName(e.target.value)} /> */}
                        <div className="showItems">
                            { items.map((data) => {
                                return (
                                    <div className="eachItem" key={ data.id }>
                                        <h3>{ data.name }</h3>
                                        <div className="todo-btn">
                                            <i className="far fa-edit add-btn" onClick={ () => editItem(data.id) }></i>
                                            <i className="far fa-trash-alt add-btn" onClick={ () => deleteItem(data.id) }></i>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="showItems">
                            <button className="btn effect04" data-sm-link-text="Remove All" onClick={ deleteData }>
                                <span> CHECK LIST</span>
                            </button>
                        </div>
                    </figure>
                </div>
            </div>
        </>
    )
}

export default TodoList
