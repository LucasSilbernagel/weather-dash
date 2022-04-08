import { ComponentStory, ComponentMeta } from '@storybook/react'
import UnitToggle from './UnitToggle'

export default {
  title: 'Components/UnitToggle',
  component: UnitToggle,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof UnitToggle>

const Template: ComponentStory<typeof UnitToggle> = (args) => (
  <UnitToggle {...args} />
)

export const Default = Template.bind({})
Default.args = {
  units: 'metric',
}
