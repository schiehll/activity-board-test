import React from 'react'
import renderer from 'react-test-renderer'
import DaysOfWeek from 'components/days-of-week'

describe('DaysOfWeek', () => {
  it('should render as expected', () => {
    const tree = renderer.create(<DaysOfWeek />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
