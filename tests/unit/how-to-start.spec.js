import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import HowToStart from '../../src/js/components/how-to-start'

describe('how-to-use.js', () => {
  let wrapper

  before(() => {
    wrapper = shallow(
      <HowToStart />
    )
  })

  it('should renders content', () => {
    expect(wrapper.find('h2').text()).to.eql('Next steps to get started:')
    expect(wrapper.find('ul li').at(0).text()).to.eql('Toggle the different fixtures on the left')
    expect(wrapper.find('ul li').at(1).text()).to.eql('Edit this file: src/js/components/your-component-name.js')
    expect(wrapper.find('ul li').at(2).text()).to.eql('Edit the styles: src/scss/your-component-name.scss')
  })
})
