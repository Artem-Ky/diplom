import { StoryFn, Meta } from '@storybook/react';
import { PageLoader } from './PageLoader';

export default {
    title: 'widget/PageLoader',
    component: PageLoader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof PageLoader>;

const Template: StoryFn<typeof PageLoader> = (args) => <PageLoader {...args} />;

export const Light = Template.bind({});
Light.args = {
};
