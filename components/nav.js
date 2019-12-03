import React from 'react'
import Link from 'next/link'

const links = [
  { href: 'https://ja.wikipedia.org/wiki/%E4%BB%A4%E5%92%8C', label: '0' },
  { href: '/', label: '○' },
  { href: '/', label: '○' },
  { href: '/', label: '○' },
  { href: '/', label: '○' },
  { href: '/', label: '○' },
  { href: '/', label: '○' },
  { href: '/', label: '○' },
  { href: '/', label: '○' },
  { href: '/', label: '○' },
  { href: '/', label: '○' },
  { href: '/', label: '○' },
  { href: '/', label: '○' },
  { href: '/', label: '○' },
  { href: '/', label: '○' },
  { href: '/', label: '○' },
  { href: '/', label: '○' },
  { href: '/', label: '○' },
  { href: '/', label: '○' },
  { href: '/', label: '○' },
  { href: '/', label: '○' },
  { href: '/', label: '○' },
  { href: '/', label: '○' },
  { href: '/', label: '○' },
  { href: '/', label: '○' },
  { href: '/', label: '○' },
  { href: '/', label: '○' },
  { href: '/', label: '○' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>
    <ul>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: Wawati TC;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
        animation: rotate-anime 3s linear infinite;
      }
      @keyframes a {
        0%  {transform: rotate(0);}
        100%  {transform: rotate(360deg);}
      }
    `}</style>
  </nav>
)

export default Nav
