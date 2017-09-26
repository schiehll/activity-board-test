import 'jest-styled-components'

import React from 'react'
import renderer from 'react-test-renderer'
import { List } from 'components/months/styles'
import { dayCell } from 'config'

describe('List', () => {
  it('should contain the following rules', () => {
    const tree = renderer.create(<List />).toJSON()
    expect(tree).toHaveStyleRule('display', 'flex')
    expect(tree).toHaveStyleRule('justify-content', 'space-evenly')
    expect(tree).toHaveStyleRule('width', `${53 * (dayCell.size + dayCell.spacing)}px`)
  })
})
