import { storiesOf } from 'storybook-react'

import { Demo, HowToStart } from './src/js/export'
import { homepage, name, description } from './package.json'

storiesOf('Demo', module)
  .add('Without a children component', () => 
    <Demo
      title={name}
      description={description}
      repositoryUrl={homepage}
    />
  )
  .add('With a children component', () => 
    <Demo
      title={name}
      description={description}
      repositoryUrl={homepage}
    >
      <p>This is a children component</p>
    </Demo>
  )

storiesOf('HowToStart', module)
  .add('Default', () => <HowToStart/>)
