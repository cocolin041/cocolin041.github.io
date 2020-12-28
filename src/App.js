import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faGithub,
	faLinkedin,
	faMedium,
} from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'

import './App.scss'

/** Components */
// import ExpCard from './Components/ExpCard/ExpCard'
import PortfolioCard from './Components/Portfolio/PortfolioCard'
import Timeline from './Components/Timeline/Timeline'

/** Images */
//landing page
import bg from './assets/bg.jpg'
//about
import avatar from './assets/avatar2.jpg'
//education
import ncku from './assets/ncku2.png'
import uiuc from './assets/uiuc.jpg'
import rhinoshield from './assets/rhinoshield.png'
import fcu from './assets/fcu.png'
//portfolio
import homebrew from './assets/homebrew.png'
import iLabel from './assets/ilabel.jpg'

function App() {
	const education = {
		title: 'Education',
		list: [
			{
				name: 'University of Illinois Urbana-Champaign',
				title: 'M.S. in Information Management',
				date: 'earned Dec 2020',
				location: 'Illinois, USA',
				img: uiuc,
				img_alt: 'uiuc',
				img_src: 'https://illinois.edu/',
			},
			{
				name: 'National Cheng Kung University',
				title: 'B.S. in Mathematics & Statistics',
				date: 'earned Jun 2016',
				location: 'Tainan, Taiwan',
				img: ncku,
				img_alt: 'ncku',
				img_src: 'https://web.ncku.edu.tw/',
			},
		],
	}
	const projects = {
		list: [
			{
				name: 'Homebrew Shop',
				description: 'A desktop GUI for Homebrew',
				stack: 'React, Electron, Node.js',
				img_src: homebrew,
				img_alt: 'Homebrew',
				href: 'https://devpost.com/software/home-brew-shop',
			},
			{
				name: 'iLabel',
				description:
					'A platform for labeling objects and transform result into YOLOv4 format',
				stack: 'React, Flask',
				img_src: iLabel,
				img_alt: 'ilabel',
				href: 'https://ilabel.iecs.fcu.edu.tw/',
			},
		],
	}
	return (
		<div id="App">
			<nav>
				<div className="website-name">
					<a href="#">Coco Lin</a>
				</div>
				<div className="menu">
					<ul>
						<li>
							<a href="#about">ABOUT</a>
						</li>
						<li>
							<a href="#skill">WEB SKILLS</a>
						</li>
						{/* <li>
							<a href="#education">EDUCATION</a>
						</li> */}
						<li>
							<a href="#experience">EXPERIENCE</a>
						</li>
						<li>
							<a href="#portfolio">PORTFOLIO</a>
						</li>
					</ul>
				</div>
			</nav>

			<section id="landing-page">
				<p>I love to explore how data can be used in web apps.</p>
			</section>

			<section id="about">
				<div className="container">
					<h1>About</h1>
					<div className="profile">
						<div className="profile-left">
							<img src={avatar} alt="avatar" />
						</div>

						<div className="profile-right">
							<div className="summary">
								<h3>HELLO, I'M COCO.</h3>
								<p>
									I just got my master degree in information science from
									University of Illinois Urbana-Champaign. I also have a
									bachelor degree in Mathematics and Statistics.
								</p>
								<p>
									I previously worked as a Fullstack Developer at FengChia
									University, Backend Developer and Data Analyst at Rhinoshield.
									Outside of work, I contributed to open source projects on
									Github.
								</p>
								<p>
									Please have a look at my
									<a href="https://drive.google.com/file/d/1_z4kD1vcCN945Ke9kg8OrbyPmDBVO3n-/view?usp=sharing">
										{' '}
										resume
									</a>
									. Thanks for stopping by!
								</p>
							</div>

							<div className="contact">
								<h3>Contact Me</h3>
								<a href="https://github.com/cocolin041">
									<FontAwesomeIcon className="icon" icon={faGithub} />
								</a>
								<a href="https://www.linkedin.com/in/cocosihyilin">
									<FontAwesomeIcon className="icon" icon={faLinkedin} />
								</a>
								<a href="https://medium.com/@cocolin041">
									<FontAwesomeIcon className="icon" icon={faMedium} />
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="skill">
				<div className="container">
					<h1>Web Skills</h1>
					<div className="tools">
						<span class="tool">
							<img
								src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
								alt="javascript"
							/>
						</span>
						<span class="tool">
							<img
								src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
								alt="react"
							/>
						</span>
						<span class="tool">
							<img
								src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png"
								alt="sass"
							/>
						</span>
						<span class="tool">
							<img
								src="https://img.icons8.com/color/48/000000/nodejs.png"
								alt="nodejs"
							/>
						</span>
						<span class="tool">
							<img
								src="https://raw.githubusercontent.com/github/explore/56a826d05cf762b2b50ecbe7d492a839b04f3fbf/topics/laravel/laravel.png"
								alt="laravel"
							/>
						</span>
						<span class="tool">
							<img
								src="https://raw.githubusercontent.com/github/explore/56a826d05cf762b2b50ecbe7d492a839b04f3fbf/topics/python/python.png"
								alt="python"
							/>
						</span>
						<span class="tool">
							<img
								src="https://raw.githubusercontent.com/github/explore/56a826d05cf762b2b50ecbe7d492a839b04f3fbf/topics/flask/flask.png"
								alt="flask"
							/>
						</span>
						<span class="tool">
							<img
								src="https://raw.githubusercontent.com/github/explore/56a826d05cf762b2b50ecbe7d492a839b04f3fbf/topics/sql/sql.png"
								alt="sql"
							/>
						</span>
						<span class="tool">
							<img
								src="https://raw.githubusercontent.com/github/explore/56a826d05cf762b2b50ecbe7d492a839b04f3fbf/topics/mongodb/mongodb.png"
								alt="mongodb"
							/>
						</span>
					</div>
				</div>
			</section>

			<section id="experience">
				<Timeline />
			</section>

			<section id="portfolio">
				<PortfolioCard projects={projects} />
			</section>

			<footer>
				Copyright{' '}
				<span>
					<FontAwesomeIcon className="icon" icon={faCopyright} />
				</span>{' '}
				2020 Coco Lin
			</footer>
		</div>
	)
}

export default App
