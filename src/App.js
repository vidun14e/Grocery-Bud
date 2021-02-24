import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import List from './List'
import Alert from './Alert'

function App() {

  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingID, setEditingID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' })

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, 'please enter a item', 'danger')
    }
    else if (name && isEditing) {
      //
    }
    else {
      showAlert(true, 'New item is added to the list', 'success')
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName('');
    }
  }

  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type })
  }

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}

        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g. eggs'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type='submit' className='submit-btn'>
            {isEditing ? "Edit" : "Submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List items={list} />
          <button className='clear-btn'>
            clear items
          </button>
        </div>
      )
      }
    </section >
  );
}

export default App;
