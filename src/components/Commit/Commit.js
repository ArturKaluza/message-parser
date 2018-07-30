import React from 'react';
import './Commit.css';

const Commit = (props) => {
  return (
    <div className='Commit'>
      <div className='Commit__message'>Message: {props.message}</div>
      <div className='Commit__title'>Commit id(sha): {props.id}</div>
    </div>
  )
}

export default Commit;