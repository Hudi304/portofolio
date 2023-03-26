import { ClujWho } from './cluj-who'
import { CodeGenerator } from './code-generator'
import './my-projects.scss'
import { SmartEcu } from './smart-ecu'
import { SmartThermostat } from './smart-thermostat'

export function MyProjects() {
  return (
    <div className='my-projects'>
      <div>My Projects</div>

      <div className='flex flex-col w-[800px] gap-8 '>
        <SmartThermostat />
        <SmartEcu />
        <ClujWho />
        <CodeGenerator />
      </div>
    </div>
  )
}
