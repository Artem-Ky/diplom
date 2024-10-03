import { StoryFn, Meta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof LoginForm>;

const Template: StoryFn<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
    StoreDecorator({
        loginForm: { username: '123', password: '123' },
    }),
];

export const LightError = Template.bind({});
LightError.args = {};
LightError.decorators = [
    StoreDecorator({
        loginForm: {
            username: '123',
            password: '123',
            error: '* Вы ввели неверный логин или пароль',
        },
    }),
];

export const LightLoading = Template.bind({});
LightLoading.args = {};
LightLoading.decorators = [
    StoreDecorator({
        loginForm: { username: '123', password: '123', isLoading: true },
    }),
];
