import { ComponentStory, ComponentMeta } from '@storybook/react'
import CitySelect from './CitySelect'

export default {
  title: 'Components/CitySelect',
  component: CitySelect,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CitySelect>

const Template: ComponentStory<typeof CitySelect> = (args) => (
  <CitySelect {...args} />
)

export const Default = Template.bind({})
Default.args = {
  cityOptions: [
    {
      country: 'Canada',
      latitude: 43.6534817,
      longitude: -79.3839347,
      cityName: 'Toronto',
      state: 'Ontario',
      id: 0,
    },
  ],
}
