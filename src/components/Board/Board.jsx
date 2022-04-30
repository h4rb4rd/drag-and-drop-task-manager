import React from 'react'

import BoardItem from '../BoardItem/BoardItem'

const Board = ({
	board,
	dragStartHandler,
	dragLeaveHandler,
	dragEndHandler,
	dragOverHandler,
	dropHandler,
}) => {
	return (
		<div className='board'>
			<div className='board__title'>{board.title}</div>
			{board.items.map(item => (
				<BoardItem
					key={item.id}
					board={board}
					item={item}
					dragStartHandler={dragStartHandler}
					dragLeaveHandler={dragLeaveHandler}
					dragEndHandler={dragEndHandler}
					dragOverHandler={dragOverHandler}
					dropHandler={dropHandler}
				/>
			))}
		</div>
	)
}

export default Board
