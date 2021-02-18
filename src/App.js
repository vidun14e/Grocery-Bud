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

  return (
    <section className='section-center'>
      <form className='grocery-form'>

        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g. eggs'

          />
          <button type='submit' className='submit-btn'>
            submit
          </button>
        </div>
      </form>

      <div className='grocery-container'>
        <List />
        <button className='clear-btn'>
          clear items
          </button>
      </div>

    </section>
  );
}

export default App;
