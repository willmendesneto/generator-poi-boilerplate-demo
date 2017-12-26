import React from 'react'
import { render } from 'react-dom'

import Demo from './src/js/components/demo'
import { homepage, name, description } from './package.json'

render(
  <Demo
    title={name}
    description={description}
    repositoryUrl={homepage}
  />,
  document.getElementById('app')
)