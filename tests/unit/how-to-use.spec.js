import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import HowToUse from '../../src/js/components/how-to-use'

describe('how-to-use.js', () => {
  let wrapper

  before(() => {
    wrapper = shallow(
      <HowToUse />
    )
  })

  it('should renders content', () => {
    expect(wrapper.find('h2').text()).to.eql('Next steps to use `generator-poi-boilerplate-demo`:')
    expect(wrapper.find('ul li').at(0).text()).to.eql('Edit this file: src/index.js')
    expect(wrapper.find('ul li').at(1).text()).to.eql('Add your react component')
  })
})
