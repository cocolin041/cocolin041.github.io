import './App.scss'
import bg from './assets/bg.jpg'
import avatar from './assets/avatar.jpg'
import logo from './assets/logo.png'

function App() {
  return (
    <div id="App">
        <nav>
          <div className='website-name'><a href='#'>Coco Lin</a></div>
          <div className='menu'>
            <ul>
              <li><a href='#about'>ABOUT</a></li>
              <li><a href='#skill'>WEB SKILL</a></li>
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
          <div className="avatar"><img src={avatar} alt="avatar"/></div>

        </div>
      </section>

      <section id='skill'>
      </section>

      <section id='education'>
      </section>

      <section id='experience'>
      </section>

      <section id='portfolio'>
      </section>

    </div>
  )
}

export default App
