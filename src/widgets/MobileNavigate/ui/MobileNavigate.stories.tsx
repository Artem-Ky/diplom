import { StoryFn, Meta } from '@storybook/react';
import { MobileNavigate } from './MobileNavigate';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'widget/MobileNavigate',
    component: MobileNavigate,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof MobileNavigate>;

const Template: StoryFn<typeof MobileNavigate> = (args) => (
    <MobileNavigate {...args} />
);

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
    StoreDecorator({
        loginForm: { username: '123', password: '123' },
    }),
];

export const LightAuth = Template.bind({});
LightAuth.args = {};
LightAuth.decorators = [
    StoreDecorator({
        loginForm: { username: '123', password: '123' },
        user: { authData: {} },
    }),
];
