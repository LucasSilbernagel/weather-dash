import { render, screen } from '@testing-library/react'
import AppContainer from './AppContainer'
import { RecoilRoot } from 'recoil'

describe('AppContainer', () => {
  test('renders App component', async () => {
    render(
      <RecoilRoot>
        <AppContainer />
      </RecoilRoot>
    )
    expect(screen.getByLabelText(/City/)).toBeInTheDocument()
  })
})
