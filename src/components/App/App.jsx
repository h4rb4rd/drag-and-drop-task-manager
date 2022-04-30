import React, { useState } from 'react'

import Board from '../Board/Board'

const taskBoards = [
	{
		id: 1,
		title: 'Сделать',
		items: [
			{ id: 1, title: 'Выкинуть мусор' },
			{ id: 2, title: 'Пойти в магазин' },
			{ id: 3, title: 'Забрать почту' },
		],
	},
	{
		id: 2,
		title: 'Проверить',
		items: [
			{ id: 4, title: 'Код ревью' },
			{ id: 5, title: 'Задача на факториал' },
			{ id: 6, title: 'Задачи на фибоначчи' },
		],
	},
	{
		id: 3,
		title: 'Сделано',
		items: [
			{ id: 7, title: 'Поспать' },
			{ id: 8, title: 'Покушать' },
			{ id: 9, title: 'Погулять' },
		],
	},
]

const App = () => {
	const [boards, setBoards] = useState(taskBoards)
	const [currentBoard, setCurrentBoard] = useState(null)
	const [currentItem, setCurrentItem] = useState(null)

	const dragStartHandler = (e, board, item) => {
		setCurrentBoard(board)
		setCurrentItem(item)
	}

	const dragLeaveHandler = e => {
		e.target.style.boxShadow = 'none'
	}

	const dragEndHandler = e => {
		e.target.style.boxShadow = 'none'
	}

	const dragOverHandler = e => {
		e.preventDefault()

		if (e.target.className === 'item') {
			e.target.style.boxShadow = '0 2px 3px gray'
		}
	}

	const dropHandler = (e, board) => {
		e.preventDefault()
		updateBoardsState(board)
	}

	const updateBoardsState = board => {
		const currentId = board.items.map(item => item.id)

		if (!currentId.includes(currentItem.id)) {
			const currentIndex = currentBoard.items.indexOf(currentItem)

			board.items.push(currentItem)
			currentBoard.items.splice(currentIndex, 1)

			setBoards(
				boards.map(b => {
					if (b.id === board.id) {
						return board
					}
					if (b.id === currentBoard.id) {
						return currentBoard
					}
					return b
				})
			)
		}
	}

	return (
		<div className='app'>
			{boards.map(board => (
				<Board
					key={board.id}
					board={board}
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

export default App
