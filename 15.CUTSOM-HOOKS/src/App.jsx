import { useState } from 'react'
import './App.css'
import useCounter from './hooks/useCounter'
import useToogle from './hooks/useToogle';
import useCopyToClipboard from './hooks/useCopyToClipboard';


function App() {
  const { count, increase, decrease } = useCounter(0);
  const { open, change } = useToogle();
  const [copied, copy] = useCopyToClipboard('Hello World');

  return (
    <>
      <div>
        <div>{count}</div>
        <button onClick={increase}>Arttır</button>
        <button onClick={decrease}>Azalt</button>
      </div>

      <br />

      <div>
        <h1>{open ? 'Açık' : 'Kapalı'}</h1>
        <button onClick={change}>Change</button>
      </div>

      <br />

      <div>
        <h1>Copy to Clipboard</h1>
        <button onClick={copy}>Copy</button>
        {copied && <span>Copied</span>}
      </div>
    </>
  )
}

export default App
