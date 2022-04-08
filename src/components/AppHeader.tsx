import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/logo.jpg'
import AppNav from '../components/AppNav'
import { useRouter } from 'next/router'

const AppHeader = () => {
  const { pathname } = useRouter()
  const dot = <div>&#8226;</div>

  const links = [
    { name: 'home', path: '/' },
    { name: 'thoughts', path: '/thoughts' },
    { name: 'work', path: '/work' },
  ].map((l, i) => {
    return (
      <div className="flex flex-col mr-10 text-center" key={i}>
        <Link href={l.path}>
          <a>{l.name}</a>
        </Link>
        {pathname === l.path && dot}
      </div>
    )
  })

  return (
    <header className="flex justify-between py-2 pt-4 text-sm font-bold uppercase">
      <Link href="/">
        <a>
          <div className="flex items-center text-base uppercase">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
            {/*<Image src={logo} width="55" height="55" />*/}
            <div className="ml-4 uppercase">Jon Tonti</div>
          </div>
        </a>
      </Link>
      <AppNav>{links}</AppNav>
    </header>
  )
}

export default AppHeader
