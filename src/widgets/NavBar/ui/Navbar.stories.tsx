import { StoryFn, Meta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NavBar } from './NavBar';

export default {
    title: 'widget/NavBar',
    component: NavBar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof NavBar>;

const Template: StoryFn<typeof NavBar> = (args) => <NavBar {...args} />;

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
