import React, { Fragment } from 'react'

import { css } from 'glamor'

import HowToStart from './how-to-start'

const demoHeader = css({
  display: 'flex',
  padding: '10px',
  backgroundColor: '#fff',
  borderBottom: '1px solid #d5d8db',
})

const demoMainWrapper = css({
  display: 'flex',
  width: '100%',
  height: '100%',
  flexGrow: '1',
  padding: '20px',
  overflowY: 'auto',
})

const demoFooter = css({
  display: 'flex',
  width: '100%',
  padding: '10px',
  backgroundColor: '#fff',
  position: 'fixed',
  bottom: 0,
})

const Demo = ({ children }) => (
  <Fragment>
    <header className={`${demoHeader}`}>
      <h1>Component Demo Page</h1>
    </header>
    <main className={`${demoMainWrapper}`}>
      { children || <HowToStart /> }
    </main>
    <footer className={`${demoFooter}`}>
      <p>Built with ❤ by @willmendesneto</p>
    </footer>
  </Fragment>
)

export default Demo
