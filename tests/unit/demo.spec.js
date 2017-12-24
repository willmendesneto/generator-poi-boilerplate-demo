import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Demo from '../../src/js/components/demo'

describe('demo.js', () => {
  let wrapper

  before(() => {
    wrapper = shallow(
      <Demo>
        <div className="test-container">my Demo content</div>
      </Demo>
    )
  })

  it('should renders a `header` element', () => {
    expect(wrapper.find('header').length).to.eql(1)
  })

  it('should renders a `main` element', () => {
    expect(wrapper.find('main').length).to.eql(1)
  })

  it('should renders a `footer` element', () => {
    expect(wrapper.find('footer').length).to.eql(1)
  })

  it('should renders the content', () => {
    expect(wrapper.find('.test-container').text()).to.eql('my Demo content')
  })
})
