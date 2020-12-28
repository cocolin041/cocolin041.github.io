import React from 'react'
import './ExpCard.scss'

function ExpCard(props) {
	return (
		<div className="container">
			<h1>{props.exp.title}</h1>

			{props.exp.list.map((el, i) => {
				return (
					<div className="exp" key={i}>
						<div className="left">
							<a href={el.img_src}>
								<img src={el.img} alt={el.img_alt} />
							</a>
						</div>
						<div className="right">
							<p className="name">{el.name}</p>
							<p className="title">
								{el.title}, <span>{el.date}</span>
							</p>
							<p className="location">{el.location}</p>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default ExpCard
