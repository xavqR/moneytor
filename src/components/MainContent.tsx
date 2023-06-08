import { PropsWithChildren } from "react";

type MyProps = {
  children?: React.ReactElement;
}

function MainContent(props: PropsWithChildren<MyProps>): JSX.Element {
  return (
    <>
      <div>
        {props.children}
      </div>
    </>
  )
}


export default MainContent