import styles from './Employees.module.scss' 
import defaultUser from './assets/default-user-image.png'
import { AddRemoveEmployee } from '../AddRemoveEmployee';
import { useState } from 'react'

export const Employees = () => {
    const [employees, setEmployees] = useState([
      {
        name: 'Ira',
        position: 'Accountant',
      },
      {
        name: 'Egor',
        position: 'cleaner',
      },
      {
        name: 'Artur',
        position: 'loader',
      },
      {
        name: 'Evgen',
        position: 'cook',
      },
      {
        name: 'Ilia',
        position: 'developer',
      },
      {
        name: 'Avgustin',
        position: 'watcher',
      },
      {
        name: 'Jotaro',
        position: 'designer',
      },
    ]);
  
    const addEmployee = (person) => {
        setEmployees([person, ...employees]);
    };
    
    const deleteEmployee = (index) => {
        const updatedEmployees = [...employees];
        updatedEmployees.splice(index, 1);
        setEmployees(updatedEmployees);
    };
    
    return (
        <div className={styles.employeesWrapper}>
            <AddRemoveEmployee addEmployee={addEmployee} />
            {employees.map((employee, index) => (
                <div key={employee.name + index} className={styles.employeesWrapper__employee}>
                    <img src={defaultUser} alt="user" className={styles.employeesWrapper__user} />
                    <div>
                        <h4>Name: {employee.name}</h4>
                        <p>Position: {employee.position}</p>
                        <button onClick={() => deleteEmployee(index)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
}