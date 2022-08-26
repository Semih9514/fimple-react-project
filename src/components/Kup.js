import React  from 'react';

function Kup(props) {
  return (
    <div>
        <button className='btn' onClick={() => props.onClick()}>{props.value}</button>
    </div>
  );
}

export default Kup;