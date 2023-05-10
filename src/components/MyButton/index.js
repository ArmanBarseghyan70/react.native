import { useEffect} from 'react';

function MyButton({title,handleClick,count}) {

  useEffect(()=>{
    console.log('hello')
    return(()=>{
      console.log('poxvav')
    })
  },[count])
    return (
      <>
        <button onClick={handleClick}>{title}</button>
      </>
    )
  }

  export default MyButton;