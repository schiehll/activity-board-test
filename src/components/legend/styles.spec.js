import 'jest-styled-components'

import React from 'react'
import renderer from 'react-test-renderer'
import { List, Item, Text } from 'components/legend/styles'
import { dayCell } from 'config'

describe('List', () => {
  it('should contain the following rules', () => {
    const tree = renderer.create(<List />).toJSON()
    expect(tree).toHaveStyleRule('display', 'flex')
    expect(tree).toHaveStyleRule('justify-content', 'flex-end')
    expect(tree).toHaveStyleRule('width', `${53 * (dayCell.size + dayCell.spacing) + 30}px`)
  })
})

describe('Item', () => {
  it('should contain the following rules', () => {
    const tree = renderer.create(<Item />).toJSON()
    expect(tree).toHaveStyleRule('margin', `0 ${dayCell.spacing}px`)
  })
})

describe('Text', () => {
  it('should contain the following rules', () => {
    const tree = renderer.create(<Text />).toJSON()
    expect(tree).toHaveStyleRule('margin', '0 10px')
  })
})
