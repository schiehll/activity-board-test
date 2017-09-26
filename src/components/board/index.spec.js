import React from 'react'
import renderer from 'react-test-renderer'
import Board from 'components/board'

describe('Board', () => {
  it('should render as expected', () => {
    const tree = renderer.create(<Board />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
