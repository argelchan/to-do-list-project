import React from 'react';
import trash from '../../assets/trash.svg'

function Todo (props) {
    const {task, deleteTask} = props
    return (
        <div key={task.id} style={{ display: 'flex', marginBottom: '10px' }}>
            <div style={{ flexGrow: 1 }}>
              <div className='text' style={{fontSize: '14px'}}>{task.title}</div>
              <div className='text' style={{fontSize: '12px'}}><small>{task.date}</small></div>
            </div>
            <img
              src={trash}
              alt="Eliminar"
              onClick={deleteTask}
              style={{ marginLeft: '10px', cursor: 'pointer', width: '20px', height: '20px', color: '#000000'}}
            />
          </div>
    );
};

export default Todo;