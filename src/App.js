import './App.scss'
import bg from './assets/bg.jpg'
import avatar from './assets/avatar.jpg'
import ncku from './assets/ncku.png'
import uiuc from './assets/uiuc.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons'

function App() {
  return (
    <div id="App">
        <nav>
          <div className='website-name'><a href='#'>Coco Lin</a></div>
          <div className='menu'>
            <ul>
              <li><a href='#about'>ABOUT</a></li>
              <li><a href='#skill'>WEB SKILLS</a></li>
              <li><a href='#education'>EDUCATION</a></li>
              <li><a href='#experience'>EXPERIENCE</a></li>
              <li><a href='#portfolio'>PORTFOLIO</a></li>
            </ul>
          </div>
        </nav>

      

      <section id='landing-page'>
        {/* <img src={bg} className="background-img" alt="background" /> */}
      </section>

      <section id='about'>
        <div className='container'>
          <h1>About</h1>
          <div className='profile'>
            <div className="profile-left">
              <img src={avatar} alt="avatar"/>
            </div>

            <div className='profile-right'>
              <div className='summary'>
                <h3>HELLO, I'M COCO.</h3>
                <p>Hi, my name is Coco(SihYi) Lin. I'm an information science student at the University of 
                  Illinois at Urbana Champaign with a passion for web development.</p>
                <p>Previously worked as a Full Stack Developer at FengChia University, Backend Engineer
                   and Data Analyst at Rhinoshield. Outside of work, I contributed to open source projects on Github.</p>
                <p>Please have a look at my 
                  <a href='https://drive.google.com/file/d/1_z4kD1vcCN945Ke9kg8OrbyPmDBVO3n-/view?usp=sharing'> resume</a>. 
                  I also enjoy writing on Medium to share ideas. Thanks for stopping by!</p>
              </div>

              <div className='contact'>
                <h3>Contact Me</h3>
                <a href='https://github.com/cocolin041'><FontAwesomeIcon className='icon' icon={faGithub}/></a>
                <a href='https://www.linkedin.com/in/cocosihyilin'><FontAwesomeIcon className='icon' icon={faLinkedin}/></a>
                <a href='https://medium.com/@cocolin041'><FontAwesomeIcon className='icon' icon={faMedium}/></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='skill'>
        <div className='container'>
          <h1>Web Skills</h1>
          <div className='tools'>
            <span class="tool"><img src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png' alt='javascript'/></span>
            <span class="tool"><img src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png' alt='react'/></span>
            <span class="tool"><img src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png' alt='sass'/></span>
            <span class="tool"><img src="https://img.icons8.com/color/48/000000/nodejs.png" alt='nodejs'/></span>
            <span class="tool"><img src="https://raw.githubusercontent.com/github/explore/56a826d05cf762b2b50ecbe7d492a839b04f3fbf/topics/laravel/laravel.png" alt='laravel'/></span>
            <span class="tool"><img src="https://raw.githubusercontent.com/github/explore/56a826d05cf762b2b50ecbe7d492a839b04f3fbf/topics/python/python.png" alt='python'/></span>
            <span class="tool"><img src="https://raw.githubusercontent.com/github/explore/56a826d05cf762b2b50ecbe7d492a839b04f3fbf/topics/flask/flask.png" alt='flask'/></span>
            <span class="tool"><img src="https://raw.githubusercontent.com/github/explore/56a826d05cf762b2b50ecbe7d492a839b04f3fbf/topics/sql/sql.png" alt='sql'/></span>
            <span class="tool"><img src="https://raw.githubusercontent.com/github/explore/56a826d05cf762b2b50ecbe7d492a839b04f3fbf/topics/mongodb/mongodb.png" alt='mongodb'/></span>
          </div>
        </div>
      </section>

      <section id='education'>
        <div className='container'>
          <h1>Education</h1>

          <div className='education'>
            <div className="education-left">
              <img src={uiuc} alt="uiuc"/>
            </div>
            <div className='education-right'>
              <p className='school'>University of Illinois at Urbana-Champaign</p>
              <p className='degree'>M.S. in Information Management, <span>earned Dec 2020</span></p>
              <p className='location'>Illinois, USA</p>
            </div>
          </div>

          <div className='education'>
            <div className="education-left">
              <img src={ncku} alt="ncku"/>
            </div>
            <div className='education-right'>
              <p className='school'>National Cheng Kung University</p>
              <p className='degree'>B.S. in Mathematics & Statistics, <span>earned Jun 2016</span></p>
              <p className='location'>Tainan, Taiwan</p>
            </div>
          </div>

        </div>
      </section>

      <section id='experience'>
      </section>

      <section id='portfolio'>
      </section>

    </div>
  )
}

export default App
