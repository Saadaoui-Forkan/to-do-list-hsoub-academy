import React from 'react'

function NotesList(props) {
  return (
    <ul className='notes-list'>
        {props.children}
    </ul>
  )
}

export default NotesList