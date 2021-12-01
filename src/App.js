import React from 'react'
import { Result } from './components/Result'
import { Typing } from './components/Typing'
import { Welcome } from './components/Welcome'

function App() {
  const [stats, setStats] = React.useState({})
  const [step, setStep] = React.useState('welcome')
  const onStart = () => {
    if (step === 'welcome') {
      setStep('typing')
    } else {
      setStep('welcome')
    }
  }
  const onFinish = (sec, wordsCount) => {
    setStats({
      sec, wordsCount
    })
    setStep('result')
  }
  const stepPage = {
    welcome: <Welcome onClickStart={onStart} />,
    typing: <Typing onFinish={onFinish}/>,
    result: <Result stats={stats} onClickStart={onStart}/>
  }

  return (
    <div className='App'>
      <div className='common-rect'>
        {stepPage[step]}
      </div>
    </div>
  )
}

export default App
