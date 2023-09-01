import React, { ReactElement, FC } from 'react'

interface Props{
    children: ReactElement
}
const layout:FC<Props> = ({children}) => {
  return (
    <h2>This is the layout component of the about page. it should always show even if nested pages url changes

        {children}
    </h2>
  )
}

export default layout