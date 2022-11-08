import React from 'react'

function Note({title,noteClicked,active}) {
  return (
    <li className={`note-item ${active && 'active'}`} onClick={noteClicked}>
        {title}
    </li>
  )
}

export default Note