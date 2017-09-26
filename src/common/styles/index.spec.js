import 'jest-styled-components'

import React from 'react'
import renderer from 'react-test-renderer'
import { CapitalizedText } from 'common/styles'
import { colors } from 'config'

describe('CapitalizedText', () => {
  it('should contain the following rules', () => {
    const tree = renderer.create(<CapitalizedText />).toJSON()
    expect(tree).toHaveStyleRule('text-transform', 'capitalize')
    expect(tree).toHaveStyleRule('font-size', '10px')
    expect(tree).toHaveStyleRule('font-family', 'Arial')
    expect(tree).toHaveStyleRule('color', `${colors.text}`)
  })
})
