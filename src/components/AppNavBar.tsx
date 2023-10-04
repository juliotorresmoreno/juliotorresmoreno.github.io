import React from 'react'

type Item = { title: string; link: string }

const menuItems: Item[] = [
  { title: 'World', link: '/' },
  { title: 'U.S.', link: '/us' },
  { title: 'Technology', link: '/technology' },
  { title: 'Design', link: '/design' },
  { title: 'Culture', link: '/culture' },
  { title: 'Business', link: '/business' },
  { title: 'Opinion', link: '/opinion' },
  { title: 'Science', link: '/science' },
  { title: 'Opinion', link: '/opinion' },
  { title: 'Science', link: '/science' },
]

const AppNavBar: React.FC = () => {
  return (
    <div className="nav-scroller py-1 mb-3 border-bottom">
      <nav className="nav nav-underline justify-content-between">
        {menuItems.map((item) => (
          <a
            className="nav-item nav-link link-body-emphasis"
            href={item.link}
            key={'item-' + item.title}
          >
            {item.title}
          </a>
        ))}
      </nav>
    </div>
  )
}

export default AppNavBar
