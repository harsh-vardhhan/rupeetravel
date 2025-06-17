import { Rubik } from 'next/font/google'

const rubik = Rubik({ 
  subsets: ['latin'],
  display: 'swap',
})

const Layout = ({ children }) => {
  return (
    <div className={rubik.className}>
      <main>{children}</main>
    </div>
  )
}

export default Layout
  