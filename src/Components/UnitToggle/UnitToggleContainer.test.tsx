import { render, screen } from '@testing-library/react'
import UnitToggleContainer from './UnitToggleContainer'

describe('UnitToggleContainer', () => {
  test('renders UnitToggle', () => {
    render(<UnitToggleContainer setUnits={() => null} units={'metric'} />)
    expect(screen.getByText('Celsius')).toBeTruthy()
    expect(screen.getByText('Fahrenheit')).toBeTruthy()
  })
})
