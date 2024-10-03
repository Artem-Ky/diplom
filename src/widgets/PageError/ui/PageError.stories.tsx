import { StoryFn, Meta } from '@storybook/react';
import { PageError } from './PageError';

export default {
    title: 'widget/PageError',
    component: PageError,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof PageError>;

const Template: StoryFn<typeof PageError> = (args) => <PageError {...args} />;

export const Light = Template.bind({});
Light.args = {
};
