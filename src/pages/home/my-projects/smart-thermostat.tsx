export function SmartThermostat() {
  return (
    <div className='flex flex-col text gap-[10px] bg-gray-700'>
      <div className='title'>Smart Thermostat</div>
      <div>
        This project consists of an embedded web server that runs on bare metal
        (no OS) and serves a modern SPA built with React, Tailwind and Vite. The
        webb app controls the hardware through HTTP.
      </div>
      <div className=' ml-3 subtitle'>Motivation :</div>
      <div>
        This project started when the thermostat in my apartment started to
        malfunction. I had a few ESP32s lying around so I started developing my
        own.
      </div>
      <div>
        I developed firmware for the ESP so it serves a SPA, that consumes a
        REST API exposed by the esp. The server just reads the temperature every
        5s and updates a state machine.
      </div>

      <div>
        If the temperature is lower the the min close the circuit and start the
        heater. If the temperature is over the max open the circuit and stop the
        heater.
      </div>
      <div>
        After I had the entire circuit set up it became quite inconvenient to
        update the firmware thorough an USB cable.
      </div>
      <div>
        This is why I programmed OTA into the firmware. This way I can update
        the firmware from anywhere, as long as I am connected to my WiFi
        network.
      </div>
      <div>
        Having the web app accessible through the ESP's IP was not the most user
        friendly thing, and if the router lost power it would change the ip. In
        order to make the app easily accessible I updated the firmware to use
        multics DNS. This way the app is accessible at "thermostat.local" no
        matter what the actual IP of the ESP is.
      </div>

      <div className='ml-3 subtitle'>Planned Features :</div>
      <div>
        I've been using this project almost daily ever since I got it working
        and it works beautifully, but I still have some feature ideas that I
        never implemented.
        <p>
          I always wanted it to be a PWA, but it needs to be served through
          HTTPS.
        </p>
        <p>
          The Cryptographic Accelerator of the ESP32 makes this possible, but it
          comes at a big performance hit.
        </p>
        <p>
          In order to make this a true PWA I need to serve it through a reverse
          proxy, most likely an OrangePy Zero.
        </p>
        <p>
          This is quite an interactive system and I find that most of the time I
          need to send data from the server to the client (real time data). Http
          polling works but that's not the most elegant method. I want to drop
          the REST API altogether and replace it with web socket
        </p>
      </div>
    </div>
  )
}
