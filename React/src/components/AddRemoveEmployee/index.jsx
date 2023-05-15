import { useState } from 'react'
import styles from './AddRemoveEmployee.module.scss'

export const AddRemoveEmployee = ({ addEmployee }) => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && position) {
      const person = {
        name: name,
        position: position,
      };

      addEmployee(person);
      setName('');
      setPosition('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add new employee</h3>
      <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder='Position' value={position} onChange={(e) => setPosition(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  )
}
