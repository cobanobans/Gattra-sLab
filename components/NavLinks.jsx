// // import links from '@/utils/navlinks'

// const links = [
//   { href: '/portfolio', label: 'portfolio' },
//   { href: '/musicLab', label: 'music lab' },
//   { href: '/info', label: 'info' },
// ]

import Link from 'next/link'
import links from '../utils/navlinksData'

const NavLinks = () => {
  return (
    <ul className='flex gap-20 uppercase tracking-wide'>
      {links.map((link) => {
        return (
          <li className='hover:text-white duration-300 text-xl' key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        )
      })}
    </ul>
  )
}
export default NavLinks
