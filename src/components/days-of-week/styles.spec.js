import 'jest-styled-components'

import React from 'react'
import renderer from 'react-test-renderer'
import { List } from 'components/days-of-week/styles'
import { dayCell } from 'config'

describe('List', () => {
  it('should contain the following rules', () => {
    const tree = renderer.create(<List />).toJSON()
    expect(tree).toHaveStyleRule('display', 'flex')
    expect(tree).toHaveStyleRule('justify-content', 'space-evenly')
    expect(tree).toHaveStyleRule('flex-direction', 'column')
    expect(tree).toHaveStyleRule('height', `${7 * (dayCell.size + dayCell.spacing)}px`)
  })
})
