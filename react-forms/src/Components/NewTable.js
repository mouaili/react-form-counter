import { useEffect, useRef } from 'react';
import style from '../css/NewTable.module.css';

function NewTable(props) {
  const counterRefs = useRef([]);
  counterRefs.current = [];

  const addToRefs = el => {
    if (el && !counterRefs.current.includes(el)) {
      counterRefs.current.push(el);
    }
    //console.log(counterRefs.current);
  };

  useEffect(() => {
    console.log(counterRefs.current);
    //...**
  }, []);

  return (
    <>
      <table
        className={`${style.table} table table-info table-striped m-5  mx-auto fw-light fs-6`}
      >
        <thead>
          <tr>
            <th scope='col'>Date/Heure</th>
            <th scope='col'>Temps écoulé en secondes</th>
            <th scope='col'>Tâche </th>
            <th scope='col'>Description</th>
          </tr>
        </thead>
        <tbody className='table-tripped'>
          {props.counters.map((element, index) => {
            return (
              <tr key={index} ref={addToRefs}>
                <td>
                  {element.date.toLocaleDateString()} à{' '}
                  {element.date.toLocaleTimeString()}
                </td>
                <td>{element.count} seconde(s)</td>
                <td>{element.title}</td>
                <td>{element.description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default NewTable;
