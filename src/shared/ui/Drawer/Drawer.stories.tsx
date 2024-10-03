import { StoryFn, Meta } from '@storybook/react';
import { Drawer } from './Drawer';

export default {
    title: 'shared/Drawer',
    component: Drawer,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Drawer>;

const Template: StoryFn<typeof Drawer> = (args) => <Drawer {...args} />;

export const Light = Template.bind({});
Light.args = {
    isOpen: true,
    children: 'test test test',
};
