import React, { FC } from 'react'
import AppHeader from '../components/AppHeader'

interface Props {}

const Layout: FC<Props> = ({ children, ...props }) => {
  return (
    <>
      <div id="main-layout" className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        {' '}
        <AppHeader />
        {children}
      </div>
    </>
  )
}

export default Layout
