import { StoryFn, Meta } from '@storybook/react';
import { Header } from './Header';

export default {
    title: 'widget/Header',
    component: Header,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Header>;

const Template: StoryFn<typeof Header> = (args) => <Header {...args} />;

export const Light = Template.bind({});
Light.args = {};
