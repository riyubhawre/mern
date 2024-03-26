import {useEffect} from 'react';

function useDocument(count) {
    useEffect(()=>{
        document.title=`count ${count}`
    },[count])
  return (
    <div>
      
    </div>
  )
}

export default useDocument;
