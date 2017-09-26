import React from 'react'
import renderer from 'react-test-renderer'
import Months from 'components/months'

describe('Months', () => {
  it('should render as expected', () => {
    const tree = renderer.create(<Months />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
