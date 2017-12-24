import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { css } from 'glamor'

import HowToUse from './how-to-use'
import GithubCorner from 'react-github-corner'

const demoHeader = css({
  display: 'flex',
  padding: '10px',
  backgroundColor: '#fff',
  borderBottom: '1px solid #d5d8db',
  fontFamily: 'monospace',
  color: '#3a3939',
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
  borderTop: '1px solid #d5d8db',
  position: 'fixed',
  bottom: 0,
})

const Demo = ({ children, repositoryUrl, title, description }) => (
  <Fragment>
    <header className={`${demoHeader}`}>
      <GithubCorner href={repositoryUrl} />
      <h1>{title}</h1>
    </header>
    <main className={`${demoMainWrapper}`}>
      { children || <HowToUse /> }
    </main>
    <footer className={`${demoFooter}`}>
      <p>Built with ❤ by @willmendesneto</p>
    </footer>
  </Fragment>
)

Demo.propTypes = {
  repositoryUrl: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
};

export default Demo
