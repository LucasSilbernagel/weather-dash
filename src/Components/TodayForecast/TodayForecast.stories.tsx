import { ComponentStory, ComponentMeta } from '@storybook/react'
import { RecoilRoot } from 'recoil'
import { atomForecast } from '../../atoms'
import TodayForecast from './TodayForecast'
import { fakeForecast } from '../../Data/FakeDataHelpers'

export default {
  title: 'Components/TodayForecast',
  component: TodayForecast,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof TodayForecast>

const Template: ComponentStory<typeof TodayForecast> = (args) => (
  <TodayForecast />
)

const forecastAtomConfig = fakeForecast

export const Loading = Template.bind({})
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
