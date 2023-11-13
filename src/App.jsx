import { useState } from 'react'
import Die from './Die'
import { nanoid } from 'nanoid'

function App() {
	const [dice, setDice] = useState(allNewDice())

	function allNewDice() {
		const diceArray = []
		for (let i = 0; i < 10; i++) {
			diceArray[i] = {
				value: Math.ceil(6 * Math.random()),
				isHeld: false,
				id: nanoid(),
			}
		}
		return diceArray
	}

	function rollDice(e) {
		setDice((prevDice) =>
			prevDice.map((die) => ({
				...die,
				value: die.isHeld ? die.value : Math.ceil(6 * Math.random()),
			}))
		)
	}

	function holdDice(id) {
		setDice((prevDice) =>
			prevDice.map((die) => ({
				...die,
				isHeld: die.id === id ? !die.isHeld : die.isHeld,
			}))
		)
	}

	const diceElements = dice.map((die) => (
		<Die
			key={die.id}
			value={die.value}
			isHeld={die.isHeld}
			handleClick={() => holdDice(die.id)}
		/>
	))

	return (
		<main>
			<div className="dice-container">{diceElements}</div>
			<button className="roll-btn" id="roll-btn" onClick={rollDice}>
				Roll
			</button>
		</main>
	)
}

export default App
