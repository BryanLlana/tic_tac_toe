import React from 'react'

const Square = ({ children, updateBoard, index, isSelected}) => {
  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={`square ${isSelected ? 'is-selected' : ''}`}>
      { children }
    </div>
  )
}

export default Square