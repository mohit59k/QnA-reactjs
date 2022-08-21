import React, { useState } from 'react'
import data from './data'
import SingleQuestion from './Question'
function App() {
	return (
		<main>
			<div className='container'>
				<h3>Question And Answere About Login</h3>
				<section>
					{data.map((val) => {
						const { id, title, info } = val
						return <SingleQuestion key={id} title={title} info={info} />
					})}
				</section>
			</div>
		</main>
	)
}

export default App
