type AppNavProps = {
  children: React.ReactNode
}

const AppNav = ({ children }: AppNavProps) => {
  return <nav className="flex">{children}</nav>
}

export default AppNav
