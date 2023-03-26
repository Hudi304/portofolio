export function SmartEcu() {
  return (
    <div className='flex flex-col text gap-[10px] bg-gray-700'>
      <div className='title'>Smart E.C.U. (Engine Control Unit)</div>
      <div>This is by far the most complex task I have ever approached.</div>
      <div>
        The Idea behind this project was the build an open source system that
        can controller any internal combustion piston engine. This way the owner
        of the vehicle has full control over what the hardware is doing.
      </div>
      <div>It was my bachelor's project. </div>
      <div>It took an year to get it to work properly.</div>
      <div>It made me feel like an actual engineer.</div>
      <div>It is still not complete.</div>

      <div className='ml-3 subtitle'>Motivation :</div>

      <p>Automakers like to design their products as black boxes.</p>
      <p>
        This makes cars harder to repair and retrofit with more modern
        technology.
      </p>

      <div className='ml-3 subtitle'>Design :</div>

      <p>The project can be split into four large pieces:</p>
      <p>1. The Flutter Client</p>
      <p>2. The ESP8266 asynchronous web socket server</p>
      <p>3. The Speeduino ECU</p>
      <p>4. The Peripheral circuits</p>

      <br />

      <p>The Flutter Client</p>
      <p>This is a mobile app that implements the MVVM architecture.</p>
      <p>
        Every view Model is observable by one or more views and it decides when
        the UI need to be updated.
      </p>
      <p>
        The Web SOcket controller is also observeble by the ViewModels and it
        will notify the relevant view models when new data arrives.
      </p>
      <p>
        The phone itself needs to act as an AP, this was the entire vehicle is a
        moving LAN.
      </p>

      <br />

      <p>The ESP8266 asynchronous web socket server</p>
      <p>
        It queries the ECU (Speeduino) for data, about 200 bytes that represent
        all the information the ECU has about the engine at the time ov the
        query (Rpm, engine temperature, how much O2 is in the exhaust gases and
        many, many more).
      </p>
      <p>
        It will send to every client that connects to it a part of this data.
        Not all pages need the entire 200 bytes of data 60 times/s.
      </p>

      <p>The ECU</p>
      <p>This is an ArduinoMega running the Speeduino (opensource) firmware.</p>
      <p>
        It has attached to it a control shield with drivers and conditioners for
        a large variety of sensors and peripherals.
        <p>This shield was hand soldered by me.</p>
      </p>

      <p>
        It exposes an UART interface that sends the data to the WiFI module
        (ESP8266)
      </p>

      <br />

      <p>The peripherals</p>
      <p>
        This represents all the other circuits needed to drive the sparkplugs
        and the injectors.
        <p>
          These circuits were built by me with scrapyard car parts. Many of them
          had no documentation so I resorted to experimental measurements in
          order to build the drivers.
        </p>
      </p>

      <br />

      <p>Mistakes : </p>
      <p>
        First of all the ESP8266 was a poor choice. It only has a single core
        and it does not run RTOS. This means that procedures started in the main
        loop should be kept short. If they are too long and they block the main
        (and only thread) too long it interferes with the WiFi capabilities of
        the microntroller. This made me split my code into small procedures that
        complete just a part of a task. This way the task is completed in many
        iterations and the thread is returned to the WiFi ciruitery.
      </p>
      <p>
        The ESP32 would be a way better choise, as it has two cores and runs
        RTOS from the factory. One of the cores serves tha WiFI chips and the
        other one runs the firmware. Also it has a cryptographic accelerator
        that would enable secure sockets (wss).
      </p>

      <p>
        The Atmega2560 or the ArduionoMega has an extensive IO and it's easy to
        program, but running such a complex firmware on it takes it's toll on
        the 15 year old microcontroller. I found out experimentally that I can
        not meet the bandwith needed to send all the data 60 times/s. The
        maximum UART bandwith for that baud rate should be 3 times larger then
        what I need. The ESP8266, slow as it is can read all that data with no
        problems (slow compared to the ESP32 but it's way more powerful then the
        Atmega2560). I can send 200bytes of data from an arduino Mega to the
        ESP, but the Atmega running the firmware can not (small package of
        70bytes to a frq of 40-45Hz max). It should be replaced with a
        Teensy4.2. The IO is not that extensive compared to the Mega, but that
        600Mhz microprocessor should be running circles around the Atmega2560.
        It is also around the same price.
      </p>

      <div className='ml-3 subtitle'>Planned Features :</div>
    </div>
  )
}
