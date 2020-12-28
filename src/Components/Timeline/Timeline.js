import React from 'react'
import './Timeline.scss'
// import rhinoshield from './assets/rhinoshield.png'
import fcu from '../../assets/fcu.png'

function Timeline() {
	const work_experience = [
		{
			position: 'Fullstack Developer Intern',
			company: 'Feng Chia University - Self-driving Lab',
			company_link: 'http://en.fcu.edu.tw/wSite/mp?mp=3',
			time: 'Jun - Aug 2020',
			info:
				'Worked on the national project founded by Ministry of Science and Technology of Taiwan,  \
			established a computer vision platform using React and Flask, which helps AI developers visualizing \
			object detection results and do fine-tune directly on results.',
		},
		{
			position: 'HackIllinois 2020 Winner',
			company: 'HackIllinois',
			company_link: 'https://2020.hackillinois.org/',
			time: 'Feb 2020',
			info:
				'Worked in a team of three, developed a GUI for package manager Homebrew using Electron, React.js, and Node.js, \
				responsible for frontend development and interacting with shell using ChildProcess\
				 module in Node.js. \nWon 1st place among 18 teams in UI/UX competition host by Mirus Research\
				 and 3rd place among 66 teams in overall project competition',
		},
		{
			position: 'Backend Developer Intern',
			company: 'Rhinoshield',
			company_link: 'https://rhinoshield.tw/',
			time: 'Jun - Aug 2019',
			info:
				"Develop backend apis and wrote tests using Laravel in 3 projects: \n \
        1. shorten url app \n \
        2. customer exchange/return item webpage \n \
        3. company's internal web applications integration system\
        ",
		},
		{
			position: 'Data Analyst',
			company: 'Rhinoshield',
			company_link: 'https://rhinoshield.tw/',
			time: 'Mar - Apr 2018',
			info:
				"Analyzed marketing events' effectiveness, \
        improved UIUX by designeing A/B test experiements and analyzing users behaviors on the website using Google Tag Manager and CrazyEgg\
        provided production planning advices by performing product sales analysis \
        ",
		},
	]
	return (
		<div class="container">
			<h1>Experience</h1>
			<div className="timeline">
				{work_experience.map((exp) => {
					return <Exp exp={exp} />
				})}
			</div>
		</div>
	)
}

function Exp(props) {
	const exp = props.exp

	return (
		<div className="exp">
			<div className="bullet"></div>
			<div className="content">
				<h3>{exp.position}</h3>
				<span>@</span>
				<a className="company" href={exp.company_link}>
					{exp.company}
				</a>
				<p className="time">{exp.time}</p>
				<p className="info">{exp.info}</p>
			</div>
		</div>
	)
}

export default Timeline
