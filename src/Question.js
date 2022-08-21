import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Question = (props) => {
	const { title, info } = props
	const [show, setShow] = useState(true)
	return (
		<div className='question'>
			<header>
				<h4>{title}</h4>
				<span>
					<button
						className='btn'
						onClick={() => {
							return setShow((prevState) => {
								if (prevState === true) {
									return false
								} else {
									return true
								}
							})
						}}
					>
						{show ? <AiOutlinePlus /> : <AiOutlineMinus />}
					</button>
				</span>
			</header>
			<p>{!show ? `${info}` : ''}</p>
		</div>
	)
}

export default Question
