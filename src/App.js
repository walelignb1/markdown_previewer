import React, { useState } from "react";
import {FaFreeCodeCamp, FaExpandArrowsAlt} from "react-icons/fa"
import {TbArrowsDiagonalMinimize2} from "react-icons/tb"
import {marked} from "marked";
import "./App.css"

const App = () => {
  const [text, setText] = useState("")
  const [show, setShow] = useState(true)
  const [preview, setPreview] = useState(true)

  marked.setOptions({
    breaks: true
  })
  
  return (
    <div>
      <div id="app">
        {preview &&
        <div className="editorWrap">
          <div className='toolbar'><FaFreeCodeCamp fontSize={23} className="fa-free-code-camp"/> Editor
            {show ? <FaExpandArrowsAlt className='fa-arrows-alt' onClick={() => setShow(!show)}/> : <TbArrowsDiagonalMinimize2 fontSize={23} className='fa-arrows-alt' onClick={() => setShow(!show)}/>}
           </div>
          <textarea id="editor" type="text" onChange={(e) => setText(e.target.value)}></textarea>
        </div>
        }
        <div class="converter"></div>
        {show &&
        <div className="previewWrap">
        <div className='toolbar'>
          <FaFreeCodeCamp fontSize={23} className="fa-free-code-camp"/> Previwer
          {preview ? <FaExpandArrowsAlt className='fa-arrows-alt' onClick={() => setPreview(!preview)}/> : <TbArrowsDiagonalMinimize2 fontSize={23} className='fa-arrows-alt' onClick={() => setPreview(!preview)}/>}
        </div>
        <div id="preview" dangerouslySetInnerHTML={{
          __html: marked(text),}}>
        </div>
        </div>
        }
      </div>
    </div>
  )
}

export default App
