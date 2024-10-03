import { StoryFn, Meta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { UserRole } from '@/entities/User';
import { AvatarDropDown } from './AvatarDropDown';

export default {
    title: 'features/AvatarDropDown',
    component: AvatarDropDown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof AvatarDropDown>;

const Template: StoryFn<typeof AvatarDropDown> = (args) => (
    <AvatarDropDown {...args} />
);

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
    StoreDecorator({
        loginForm: { username: '123', password: '123' },
        user: { authData: {} },
    }),
];

export const LightAuth = Template.bind({});
LightAuth.args = {};
LightAuth.decorators = [
    StoreDecorator({
        loginForm: { username: '123', password: '123' },
        user: { authData: { id: '1', roles: [UserRole.ADMIN] } },
    }),
];
