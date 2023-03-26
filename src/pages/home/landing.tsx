import { Card } from '@/components/card/card'
import { NavBar } from '@/components/nav-bar/nav-bar'
import { MyProjects } from './my-projects/my-projects'
import { AboutMe } from './aboute-me/about-me'
import './landing.scss'

export function LandingPage() {
  return (
    <div className='landing-page-layout'>
      <NavBar></NavBar>

      <div className='flex flex-col justify-center items-center gap-5 '>
        <AboutMe></AboutMe>

        <Card className='w-96 h-[400px]'>
          <div>Work Experience</div>

          <div className='text-red-600'>
            Find out if it is a bad ideas to include work project in your
            portofolio
          </div>
          <div className='flex flex-col'>
            <div>Parking Spotter</div>
            <div>Content Status</div>
            <div>Natural Commerce</div>
            <div>Cascada</div>
          </div>
        </Card>

        {/* <Card className='w-96'> */}

        <MyProjects />

        <div className='grid grid-cols-4 grid-rows-4 gap-1'>
          <div className='debug'>Smart Thermostat</div>
          <div className='debug'>Cluj Who</div>
          <div className='debug'>I.O.T. Engine Control Unit</div>
          <div className='debug'>Code Generator</div>
        </div>
        {/* </Card> */}
        <Card className='w-96 h-[400px]'>Contact</Card>
      </div>
    </div>
  )
}
