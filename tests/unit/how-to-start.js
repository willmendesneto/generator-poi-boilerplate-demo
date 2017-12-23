import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import HowToStart from '../../src/js/components/my-component'

describe('my-component.js', () => {
  let wrapper

  before(() => {
    wrapper = shallow(
      <HowToStart />
    )
  })

  it('should renders `how-to` content', () => {
    expect(wrapper.find('h2').text()).to.eql('Next steps to get started:')
    console.log(wrapper.find('ul li'));

    // expect(wrapper.find('ul li').get().text()).to.eql('Toggle the different fixtures on the left')
    // expect(wrapper.find('h2').text()).to.eql('Next steps to get started:')
    // expect(wrapper.find('h2').text()).to.eql('Next steps to get started:')
  })
})
