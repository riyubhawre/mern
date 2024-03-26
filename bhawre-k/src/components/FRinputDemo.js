import React from 'react';
//  function FRinputDemo() {
//   return (
//     <div>
//       <input type="text"></input>
//     </div>
//   );
// }

const FRinputDemo=React.forwardRef((props,ref)=>{
    return(
        <div>
            <input type="text" ref={ref}></input>
        </div>
    );
})
export default FRinputDemo;