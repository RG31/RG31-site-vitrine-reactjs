import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { Slider } from './components/slider'
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
      <title>Artiste Christina Grillet</title>
      <meta name="description"
        content="Il s'agit d'un modèle site vitrine (Mobile First Design) basé sur ReactJS, adapté à une entreprise, un service en démarrage. La conception est inspirée d'un modèle de Free-CSS </a>" />
      <meta name="keywords"
        content="React developer, Front end web developer, responsive user interfaces, interactive web applications, Toulouse web design" />
    </Helmet>  
      <Navigation />
      <Header data={landingPageData.Header} />
      <Slider data={landingPageData.Header} />
    </div>
  )
}

export default App