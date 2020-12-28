import React from 'react'
import './PortfolioCard.scss'

function PortfolioCard(props) {
	console.log(props.projects)

	return (
		<div className="container">
			<h1>Portfolio</h1>
			<div className="project-list">
				{props.projects.list.map((project) => {
					return (
						<div className="project">
							<img src={project.img_src} alt={project.img_alt} />
							<div className="cover">
								<div className="summary">
									<h4 className="name">{project.name}</h4>
									<div className="stack">{project.stack}</div>
									<div className="description">{project.description}</div>
								</div>
								<button>
									<a href={project.href}>View Project</a>
								</button>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default PortfolioCard
