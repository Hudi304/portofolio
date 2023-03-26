import { Card } from '@/components/card/card'

export function FutureProjects() {
  return (
    <Card className='w-96 h-[400px]'>
      <p>Future Projects</p>

      <p>These are projects that I plan on develop in the future.</p>

      <p>ESP based bluetooth CB Radio in a Motorcycle Helmet</p>

      <div>
        I am a motorcyclist. I have been searching around for a good
        communication headset for a while.
        <p>
          They all have the same problems, they can only connect to a select
          group of other devices (most of the time sold by the same
          manufacturer). They have limited ranges (rarely exceeding a few
          kilometers). None of them enable communication with other drivers on
          the citizen band.
        </p>
        <p>The plan</p>
        <p>
          Take an Avanti Micro CB Radio, connect an ESP32 to it and expose the
          factory controls via Bluetooth (maybe even BLE) or WiFi.
        </p>
        <p>
          Have another ESP32 inside the helmet recieve that incoming audio data
          and transmit the microphone audio stream to the CBRadio.
        </p>
        <p>
          Build custom controlls for the CB radio on the handlebars. (3 buttons
          should be enough : Push To Talk, channel up and channel down)
        </p>
        <p>
          Make the ESP inside the helmet also act as a bluetooth headset so that
          I can use it as headphones for my phone.
        </p>
      </div>

      <p>CNC</p>
    </Card>
  )
}
