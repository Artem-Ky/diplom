import { StoryFn, Meta } from '@storybook/react';
import { AppImage } from './AppImage';

export default {
    title: 'widget/AppImage',
    component: AppImage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof AppImage>;

const Template: StoryFn<typeof AppImage> = (args) => <AppImage {...args} />;

export const Light = Template.bind({});
Light.args = {};
