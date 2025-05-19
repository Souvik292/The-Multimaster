
import Header from './header';
import { useEffect} from 'react';
import "prismjs/themes/prism-tomorrow.css"
import prism from "prismjs"
import React from 'react';
// import { highlight, languages } from "prismjs/components/prism-core.js";
// import Editor from "react-simple-code-editor"


const para =()=>{
  <p className="innerText text-center text-4xl text-black-20">hiii</p>
}

const TextAreaEditable = () => {
  const [content, setContent] = React.useState("")
  
  return (
    <textarea 
      value={content} 
      onChange={e => setContent(e.currentTarget.value)} 
    />  
  )
}
function Body() {
  // const[code,setCode]=useState(`hiii how are you`);
  useEffect(()=>{
    prism.highlightAll()
  },[])

    return (
      <>
      <Header/>
      <section className='p-[2%]'>
      <h1 className='text-4xl  text-center text-lime-600'>chat with AI </h1><p className='font-[20px] text-center'>...solve your problem</p>
    <div className=" bg-[#111111] h-[600px] w-[50%] p-[20px] m-auto flex flex-row justify-evenly items-end ">
           <div className='bg-sky-50 h-[15%] w-[80%]   ' onClick={TextAreaEditable} >
            <code className='code'>
                  {/* <Editor>
      value={code}
      onValueChange={code => setCode(code)}
      highlight={code => highlight(code, languages.js)}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 12,
        border:"1 px solid #ddd",
        height:"100%",
        width:"100%"

      }}
  </Editor> */}

  <p ></p>
            </code>
  
            </div>
           <button  className=" bg-red-50 w-[80px] h-[15%] "type="submit" onClick={para}>submit</button>
      </div>

      </section>
     
      </>
    
    );
  }
  
  export default Body;