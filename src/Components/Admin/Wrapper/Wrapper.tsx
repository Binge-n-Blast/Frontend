import "./Wrapper.scss"

import { ReactNode } from "react";

interface WrapperProps {
    children: ReactNode;
  }


const Wrapper:React.FC<WrapperProps> = ({children}) => {
  return (
    <section className='wrapper'>
        {children}
    </section>
  )
}

export default Wrapper