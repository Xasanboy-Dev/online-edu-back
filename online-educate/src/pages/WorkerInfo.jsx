import { useState } from 'react';
import './../workinfo.css';

export default function WorkInfo() {
  const [data, setData] = useState([
    {
      id: 1,
      rolar: 'Frontend',
      price: '10,000,000',
      kurs: 'Frontend',
      foiz: '50%',
    },
  ]);

  const [editableRows, setEditableRows] = useState({});

  const handleEditClick = (id) => {
    setEditableRows((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleAddRowClick = () => {
    const newRow = {
      id: data.length + 1,
      rolar: '',
      price: '',
      kurs: '',
      foiz: '',
    };
    setData([...data, newRow]);
    setEditableRows((prevState) => ({
      ...prevState,
      [newRow.id]: true,
    }));
  };

  return (
    <div className='container workInfo'>
      <table>
        <thead>
          <tr>
            <th>Rolar</th>
            <th>Suma</th>
            <th>Kurs</th>
            <th>Foizne kritish</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td contentEditable={editableRows[item.id]}>{item.rolar}</td>
              <td contentEditable={editableRows[item.id]}>{item.price}</td>
              <td contentEditable={editableRows[item.id]}>{item.kurs}</td>
              <td contentEditable={editableRows[item.id]}>{item.foiz}</td>
                <button onClick={() => handleEditClick(item.id)}>
                  {editableRows[item.id] ? 'Saqlash' : "O'zgartirish"}
                </button>
            </tr>
          ))}
        </tbody>
      </table>
      <button contentEditable={editableRows} className="plusTr" onClick={handleAddRowClick}>
        +
      </button>
    </div>
  );
}