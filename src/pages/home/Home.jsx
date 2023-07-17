import Profile from "../../assets/kufre_roberts.jpg"
import { Link } from "react-router-dom"
import { FaArrowRight } from 'react-icons/fa'
import "./home.css"

const Home = () => {
  return (
      <section className="home section grid">
          <img src={Profile} alt="" className="home__img" />
          <div className="home__content">
              <div className="home__data">
                  <h1 className="home__title">
                      <span>I am Kufre-Mfon Effiong-Robert</span>. A writer
                  </h1>
                  <p className="home__description">
                  I am a multi-interest freelance writer. I am a strongly motivated and smart worker. I am keen and
enthusiastic about learning new things and passionate about producing meaningful and high-quality
content that gets the desired results.
                  </p>
                  <Link to='/about' className="button">
                      More About ME <span className="button__icon"><FaArrowRight/></span>
                  </Link>
              </div>
          </div>
          <div className="color__block">
          </div> 
   </section>
  )
}

export default Home