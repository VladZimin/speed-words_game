import React from 'react'

const texts = [
  'Наверное, вы еще не готовы',
  'Тото у меня такое ощущение',
  'Не судите меня за',
  'Все делай тихо и'
]

const sentence = texts[Math.floor(Math.random() * texts.length)]
const words = sentence.split(' ')

export const Typing = ({ onFinish }) => {
  const curIndexRef = React.useRef(0)
  const timerRef = React.useRef(null)
  const [curWord, setCurWord] = React.useState(words[curIndexRef.current])
  const [wordsCount, setWordsCount] = React.useState(0)
  const [sec, setSec] = React.useState(20)
  const [isError, serIsError] = React.useState(false)
  const [inputValue, setInputValue] = React.useState('')

  React.useEffect(() => {
    timerRef.current = setInterval(() => {
      setSec((prev) => {
        const value = prev - 1
        if (!value) {
          clearInterval(timerRef.current)
          onFinish(20 - value, curIndexRef.current)
        }
        return value
      })
    }, 1000)
  }, [])

  const onChangeInput = (e) => {
    const { value } = e.target
    setInputValue(value.trim())
    if (curWord === value) {
      curIndexRef.current += 1
      if (curIndexRef.current >= words.length ) {
        clearInterval(timerRef.current)
        onFinish( 20 - sec, curIndexRef.current)
        return
      }
      setCurWord(words[curIndexRef.current])
      setWordsCount(prev => prev + 1)
      setInputValue('')
      return
    }
    if (!new RegExp(`^${value}`).test(curWord)) {
      serIsError(true)
    }
    else {
      serIsError(false)
    }
  }

  console.log(words)
  return (
    <div class='flex typing'>
      <p class='typing__enter-word'>Введите слово:</p>
      <h3 class='typing__word'>{curWord}</h3>
      <input
        onChange={onChangeInput}
        value={inputValue}
        class={`typing__input ${isError ? 'error' : ''}`}
        type='text'
      />
      <div class='typing__progress'>
        <div class='typing__timer'>
          <p>Осталось времени:</p>
          <b>{sec} сек.</b>
        </div>
        <div class='typing__counter'>
          <p>Введено слов:</p>
          <b>{wordsCount}</b>
        </div>
      </div>
    </div>
  )
}
