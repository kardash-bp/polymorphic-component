import { useRef } from 'react'
import './App.css'
import { Text } from './components'
import Emphasis from './components/Emphasis'
import { TextRef } from './components/TextRef'
export default function App() {
  const ref = useRef<HTMLHeadingElement | null>(null)
  return (
    <div className='App'>
      <TextRef as='h1' ref={ref}>
        Hello CodeSandbox
      </TextRef>
      <Text as='h2' color='violet' style={{ backgroundColor: 'black' }}>
        Start editing to see some magic happen!
      </Text>
      <Text>Start editing to see some magic happen!</Text>
      <br />
      <Text as={Emphasis}>This is important, really!</Text>
    </div>
  )
}
