import React, { useEffect, useState } from "react";
import "./style.css";

//get localStorage
const getLocalData = () => {
  const lists = localStorage.getItem("mytodolist");

  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};

//main
const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [item, setItems] = useState(getLocalData());
  const [edit_item, setEditItem] = useState("");
  const [toggleButton, setToggleButton] = useState(false);

  //add items
  const addItem = () => {
    if (!inputData) {
      alert("Enter item first!!!");
    } else if (inputData && toggleButton) {
      setItems(
        item.map((curElement) => {
          if (curElement.id === edit_item) {
            return { ...curElement, name: inputData };
          }
          return curElement;
        })
      );
      setInputData([]);
      setEditItem(null);
      setToggleButton(false);
    } else {
      const myNewData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...item, myNewData]);
      setInputData("");
    }
  };

  //edit item
  const editItem = (index) => {
    const tudo_item_edit = item.find((curElement) => {
      return curElement.id === index;
    });
    setInputData(tudo_item_edit.name);
    setEditItem(index);
    setToggleButton(true);
  };

  //delete item
  const deleteItem = (index) => {
    const updatedItems = item.filter((curElement) => {
      return curElement.id !== index;
    });
    setItems(updatedItems);
  };

  //remove all item
  const removeAll = () => {
    setItems([]);
  };

  //generate localstorage
  useEffect(() => {
    localStorage.setItem("mytodolist", JSON.stringify(item));
  }, [item]);

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.png" alt="todologo" />
            <figcaption>Add Your Items List Here 👀</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍ Add Item"
              className="form-control"
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            />
            {toggleButton ? (
              <i className="far fa-edit add-btn" onClick={addItem}></i>
            ) : (
              <i className="fa fa-plus add-btn" onClick={addItem}></i>
            )}
          </div>
          {/* show items here */}
          <div className="showItems">
            {item.map((curElement) => {
              return (
                <div className="eachItem" key={curElement.id}>
                  <h3>{curElement.name}</h3>
                  <div className="todo-btn">
                    <i
                      className="far fa-edit add-btn"
                      onClick={() => editItem(curElement.id)}
                    ></i>
                    <i
                      className="far fa-trash-alt add-btn"
                      onClick={() => deleteItem(curElement.id)}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>
          {/* remove items here */}
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeAll}
            >
              <span>CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
