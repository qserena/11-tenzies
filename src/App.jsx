import { useState } from 'react'
import Die from './Die'

function allNewDice() {
	const randomArray = []
	for (let i = 0; i < 10; i++) {
		randomArray[i] = Math.ceil(6 * Math.random())
	}
	return randomArray
}

allNewDice()

function App() {
	const dice = allNewDice().map((die) => <Die value={die} />)
	return (
		<main>
			<div className="container">{dice}</div>
		</main>
	)
}

export default App
