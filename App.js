import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const [editIndex, setEditIndex] = useState(-1);
  const [editedText, setEditedText] = useState("");

  const addText = () => {
    if (text.trim() !== "") {
      setList([...list, text]);
      setText("");
    }
  };

  const startEdit = (index, currentText) => {
    setEditIndex(index);
    setEditedText(currentText);
  };

  const cancelEdit = () => {
    setEditIndex(-1);
    setEditedText("");
  };

  const saveEdit = (index) => {
    const updatedList = [...list];
    updatedList[index] = editedText;
    setList(updatedList);
    setEditIndex(-1);
    setEditedText("");
  };

  const deleteText = (index) => {
    const updatedList = list.filter((_, i) => i !== index);
    setList(updatedList);
  };
  const deleteAll = () => {
    setList([]);
  };
  return (

    <div className='main'>
      <h1 className="todo-heading"
      >todo list</h1>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addText}>Add</button>
      <button onClick={deleteAll}>Delete All</button>
      {
        list.map((x, i) => (
          <div key={i} className="todo-item">
            <p>{x}</p>
            {editIndex === i ? (
              <>
                <input
                  type="text"
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                />
                <button onClick={() => saveEdit(i)}>OK</button>
                <button onClick={cancelEdit}>Cancel</button>
              </>
            ) : (
              <>
                <button onClick={() => startEdit(i, x)}>Edit</button>
                <button onClick={() => deleteText(i)}>Delete</button>
              </>
            )}
          </div>
        ))
      }
     </div>
 
  );
}

export default App;
