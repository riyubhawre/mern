import React, {useState} from 'react'

export default function Pskform(props) {
    const changehere=(event)=>{
        console.log("hi change");
        setText(event.target.value)
    }
    const clickupper=()=>{
        console.log("hi click"+text);
        var a=text.toUpperCase();
        setText(a);
    }
    const clicklower=()=>{
      console.log("hi click"+text);
      var a=text.toLowerCase();
      setText(a);
  }
  const clickcopy=()=>{
    //console.log("hi click"+text);
    var a=document.getElementById('data');
    a.select();
    navigator.clipboard.writeText(a.value);
}
// const clickcapitalize=()=>{
//   //console.log("hi click"+text);
//   console.log("hi click"+text);
//      var a=document.getElementById('data');
// var all=capitalizeParagraph(a);

// }
// const capitalize = (str: string)=>{
//   const firstChar = str 
//                     .charAt(0)
//                     .toLocalUpperCase()
//   const restOfStr = str
//                     .substring(1)
//                     .toLocaleLowerCase()
//   return '${firstChar}${restOfStr}';
// }

    const[text,setText]=useState("write code here");
  return (
    <>
    {/* <div>
      <label for="favcolor">Select your favorite color:</label>
<input type="color" id="favcolor" value="#ff0000"></input>
    </div> */}

    <div className="container mt-3">
  <form action="/action_page.php">
    <div className="mb-3 mt-3">
      <label htmlFor="exampleFormControlTextarea1">{props.title}</label>
      <textarea className="form-control" rows="5" id="data" name="text" value={text} onChange={changehere}></textarea>
    </div>
    <button type="button" className="btn btn-primary mx-2" onClick={clickupper}>UPPER</button>
    <button type="button" className="btn btn-primary mx-2" onClick={clicklower}>LOWER</button>
    <button type="button" className="btn btn-primary mx-2" onClick={clickcopy}>Copy</button>
    {/* <button type="button" className="btn btn-primary mx-2" onClick={clickcapitalize}>Capitalize</button> */}
  </form>
</div>
<div className="container">
  <h1>charcter count={text.length} and word count={text.split(" ").length}</h1>
  <h1>time to read word ={0.008*text.split(" ").length}</h1>
</div>
    </>
  );
}
