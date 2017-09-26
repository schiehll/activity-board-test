import React from 'react'
import renderer from 'react-test-renderer'
import Legend from 'components/legend'

describe('Legend', () => {
  it('should render as expected', () => {
    const tree = renderer.create(<Legend />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
