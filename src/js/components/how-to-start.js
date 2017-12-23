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
    <h2 className={`${subHeading}`}>Next steps to get started:</h2>
    <ul className={`${list}`}>
      <li>Toggle the different fixtures on the left</li>
      <li>Edit this file: <code className={`${code}`}>src/js/components/your-component-name.js</code></li>
      <li>Edit the styles: <code className={`${code}`}>src/scss/your-component-name.scss</code></li>
    </ul>
  </Fragment>
)

export default HowToStart
