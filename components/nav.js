import React from 'react'
import shuffle from 'shuffle-array'

const links = [
  { href: 'javascript:alert("令和だ！！！！")', label: '0' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
  { href: 'javascript:alert("令和じゃない......")', label: '○' },
].map((link, i) => {
  link.key = `${i}`
  return link
})


const Nav = () => (
    <ul>
      {shuffle(links).map(({ key, href, label }) => (
        <li className='load' key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: Wawati TC, 'M PLUS 1p', sans-serif;
          background: linear-gradient(182deg, #fd876c, #ffffff);
          background-size: 400% 400%;
          -webkit-animation: back 10s ease infinite;
          -moz-animation: back 10s ease infinite;
          -o-animation: back 10s ease infinite;
          animation: back 10s ease infinite;
          height: 100vh;
        }

        @-webkit-keyframes back {
          0%{background-position:54% 0%}
          50%{background-position:47% 100%}
          100%{background-position:54% 0%}
        }
        @-moz-keyframes back {
            0%{background-position:54% 0%}
            50%{background-position:47% 100%}
            100%{background-position:54% 0%}
        }
        @-o-keyframes back {
            0%{background-position:54% 0%}
            50%{background-position:47% 100%}
            100%{background-position:54% 0%}
        }
        @keyframes back {
            0%{background-position:54% 0%}
            50%{background-position:47% 100%}
            100%{background-position:54% 0%}
        }

        ul {
          width: 75%;
          margin: 0 auto;
        }

        li {
          float: left;
          list-style-type: none;
        }

        a {
          margin: 10px;
          color: #333;
          text-decoration: none;
          font-weight: 100;
          font-size: 40px;
        }

        .load {
          -webkit-animation: spin 1.5s linear infinite;
          -moz-animation: spin 1.5s linear infinite;
          -ms-animation: spin 1.5s linear infinite;
          -o-animation: spin 1.5s linear infinite;
          animation: spin 1.5s linear infinite;
        }

        @-webkit-keyframes spin {
          0% {-webkit-transform: rotate(0deg);}
          100% {-webkit-transform: rotate(360deg);}
        }

        @-moz-keyframes spin {
          0% {-moz-transform: rotate(0deg);}
          100% {-moz-transform: rotate(360deg);}
        }

        @-ms-keyframes spin {
          0% {-ms-transform: rotate(0deg);}
          100% {-ms-transform: rotate(360deg);}
        }

        @-o-keyframes spin {
          0% {-o-transform: rotate(0deg);}
          100% {-o-transform: rotate(360deg);}
        }

        @keyframes spin {
          0% {transform: rotate(0deg);}
          100% {transform: rotate(360deg);}
        }
      `}</style>
    </ul>
)

export default Nav
