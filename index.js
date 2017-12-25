import { storiesOf, setAddon } from 'storybook-react'
import JSXAddon from 'storybook-addon-jsx';

import { Demo, HowToStart } from './src/js/export'
import { homepage, name, description } from './package.json'

setAddon(JSXAddon)

storiesOf('Demo', module)
  .addWithJSX('Without a children component', () => 
    <Demo
      title={name}
      description={description}
      repositoryUrl={homepage}
    />
  )
  .addWithJSX('With a children component', () => 
    <Demo
      title={name}
      description={description}
      repositoryUrl={homepage}
    >
      <p>This is a children component</p>
    </Demo>
  )

storiesOf('HowToStart', module)
  .addWithJSX('Default', () => <HowToStart/>)