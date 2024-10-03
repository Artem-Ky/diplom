import { StoryFn, Meta } from '@storybook/react';
import testIcon from '@/app/testIcon.svg';
import {
    Icon
} from './Icon';

export default {
    title: 'shared/Icon',
    component: Icon,
    argTypes: {
        backgroundColor: { control: 'color' },
        // variant: {
        //     control: 'select',
        //     options: Object.values(IconTypeVariant),
        //     description: 'Вариант кнопки',
        // },
        // color: {
        //     control: 'select',
        //     options: Object.values(IconColor),
        //     description: 'Цвет кнопки',
        // },
    },
} as Meta<typeof Icon>;

const Template: StoryFn<typeof Icon> = (args) => (
    <div>
        <Icon size='small' {...args} />
        <Icon size='medium' {...args} />
        <Icon size='large' {...args} />
    </div>
);

export const Light = Template.bind({});
Light.args = { icon: testIcon, color: 'black' };
