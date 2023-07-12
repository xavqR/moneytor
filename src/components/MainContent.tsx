import { PropsWithChildren } from 'react'

type MyProps = {
  children?: React.ReactElement
}

export function MainContent(props: PropsWithChildren<MyProps>): JSX.Element {
  return (
    <>
      <div className='ml-2 mr-4 text-primaryTextColor bg-primaryMainBg h-full w-full rounded-2xl p-3'>
        {props.children}
      </div>
    </>
  )
}
