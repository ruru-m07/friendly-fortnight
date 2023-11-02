import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Project = () => {
  const [filedata, setFiledata] = useState();

  function onChange(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function (event) {
      // The file's text will be printed here
      setFiledata(event.target.result);
    };

    reader.readAsText(file);
  }

  const codeString = `import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </>
  )
}

export default App`;

  return (
    <div className="">
      <input type="file" onChange={onChange} />
      <div className="max-w-2xl min-w-[25rem] bg-[#3a404d] rounded-md overflow-hidden">
        <div className="justify-between px-4 text-white text-xs items-center">
          <p className="text-sm my-1">Index.tsx</p>
        </div>
        <SyntaxHighlighter
          language="tsx"
          style={atomOneDark}
          customStyle={{
            padding: "25px",
          }}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default Project;
