import { StoryFn, Meta } from '@storybook/react';
import { AppLink } from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as Meta<typeof AppLink>;

const Template: StoryFn<typeof AppLink> = (args) => <AppLink {...args} />;

export const light = Template.bind({});
light.args = {
    children: 'Text',
};


export const WHITE = Template.bind({});
WHITE.args = {
    theme: 'white',
    children: 'Text',
};


export const BLACK = Template.bind({});
BLACK.args = {
    theme: 'black',
    children: 'Text',
};

