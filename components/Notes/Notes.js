import React from 'react';

const Notes = (props) => {
  const { notes, Icon, iconCheck, noteStyle } = props;

  return notes.map((el, i) => {
    return (
      <li key={i} style={{ width: '100%' }}>
        <p>
          <Icon className={iconCheck} size={20} />
        </p>
        <p className={noteStyle}>{el}</p>
      </li>
    );
  });
  //
};

export default Notes;
