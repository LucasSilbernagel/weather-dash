import { ComponentStory, ComponentMeta } from '@storybook/react'
import { RecoilRoot } from 'recoil'
import { atomForecast } from '../../atoms'
import FutureForecast from './FutureForecast'
import { fakeForecast } from '../../Data/FakeDataHelpers'

export default {
  title: 'Components/FutureForecast',
  component: FutureForecast,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof FutureForecast>

const Template: ComponentStory<typeof FutureForecast> = (args) => (
  <FutureForecast {...args} />
)

const forecastAtomConfig = fakeForecast

export const Loading = Template.bind({})
Loading.args = {
  futureDays: fakeForecast.splice(1),
  blankDays: ['day1', 'day2', 'day3', 'day4'],
}
Loading.decorators = [
  (Story) => (
    <RecoilRoot
      initializeState={(snap: any): any => {
        snap.set(atomForecast, [])
      }}
    >
      <Story />
    </RecoilRoot>
  ),
]

export const Loaded = Template.bind({})
Loaded.args = {
  ...Loading.args,
}
Loaded.decorators = [
  (Story) => (
    <RecoilRoot
      initializeState={(snap: any): any => {
        snap.set(atomForecast, forecastAtomConfig)
      }}
    >
      <Story />
    </RecoilRoot>
  ),
]
