import React from 'react'

const BoardItem = ({
	board,
	item,
	dragStartHandler,
	dragLeaveHandler,
	dragEndHandler,
	dragOverHandler,
	dropHandler,
}) => {
	return (
		<div
			className='item'
			draggable={true}
			onDragStart={e => dragStartHandler(e, board, item)}
			onDragLeave={e => dragLeaveHandler(e)}
			onDragEnd={e => dragEndHandler(e)}
			onDragOver={e => dragOverHandler(e)}
			onDrop={e => dropHandler(e, board)}
		>
			{item.title}
		</div>
	)
}

export default BoardItem
