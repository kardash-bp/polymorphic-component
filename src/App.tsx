import './App.css'
import { Text } from './components'
import Emphasis from './components/Emphasis'
export default function App() {
  return (
    <div className='App'>
      <Text as='h1'>Hello CodeSandbox</Text>
      <Text as='h2' color='violet' style={{ backgroundColor: 'black' }}>
        Start editing to see some magic happen!
      </Text>
      <Text>Start editing to see some magic happen!</Text>
      <br />
      <Text as={Emphasis}>This is important, really!</Text>
    </div>
  )
}
