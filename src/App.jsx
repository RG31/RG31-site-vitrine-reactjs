import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { Features } from './components/features'
import { About } from './components/about'
import { Services } from './components/services'
import { Gallery } from './components/gallery'
import { Testimonials } from './components/testimonials'
//import { Team } from './components/Team'
import { Contact } from './components/contact'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'
import {Helmet} from "react-helmet";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
    <Helmet>
      <title>Ecommerce Site Details &#x007C; Mina Bui &#x2013; Web Developer in Vancouver, BC</title>
      <meta name="description"
        content="Il s'agit d'un modèle site vitrine (Mobile First Design) basé sur ReactJS, adapté à une entreprise, un service en démarrage. La conception est inspirée d'un modèle de Free-CSS </a>" />
      <meta name="keywords"
        content="React developer, Front end web developer, responsive user interfaces, interactive web applications, Toulouse web design" />
    </Helmet>   
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <Services data={landingPageData.Services} />
      <Gallery />
      <About data={landingPageData.About} />
      <Testimonials data={landingPageData.Testimonials} />
      {/*<Team data={landingPageData.Team} />*/}
      <Contact data={landingPageData.Contact} />
    </div>
  )
}

export default App
