import React, { Fragment } from 'react'

import { css } from 'glamor'

const subHeading = css({
  display: 'flex',
  fontSize: '16px',
  lineHeight: '16px',
})

const list = css({
  listStyle: 'circle inside',
  marginLeft: '1em',
})

const code = css({
  fontFamily: 'monospace',
})

const HowToStart = () => (
  <Fragment>
    <h2 className={`${subHeading}`}>Next steps to use `generator-poi-boilerplate-demo`:</h2>
    <ul className={`${list}`}>
      <li>Edit this file: <code className={`${code}`}>src/index.js</code></li>
      <li>Add your react component</li>
    </ul>
  </Fragment>
)

export default HowToStart
