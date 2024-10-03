import { StoryFn, Meta } from '@storybook/react';
import {
    Button
} from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
        // variant: {
        //     control: 'select',
        //     options: Object.values(ButtonVariant),
        //     description: 'Вариант кнопки',
        // },
        // // Контроль цвета кнопки
        // color: {
        //     control: 'select',
        //     options: Object.values(ButtonColor),
        //     description: 'Цвет кнопки',
        // },
        // // Контроль размера кнопки
        // size: {
        //     control: 'select',
        //     options: Object.values(ButtonSize),
        //     description: 'Размер кнопки',
        // },
        // // Контроль цвета контура (доступен только для варианта outline)
        // outlineColor: {
        //     control: 'select',
        //     options: Object.values(ButtonOutlineColor),
        //     description: 'Цвет контура для outline варианта',
        // },
        // Контроль полноэкранного размера кнопки
        fullWidth: {
            control: 'boolean',
            description: 'Ширина кнопки 100%',
        },
        // Контроль отключения кнопки
        disabled: {
            control: 'boolean',
            description: 'disabled button',
        },
    },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args:any) => (
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <Button {...args} size='x-small' />
        <Button {...args} size='small' />
        <Button {...args} size='medium' />
        <Button {...args} size='large' />
    </div>
);

const TemplateArrow: StoryFn<typeof Button> = (args:any) => (
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <Button {...args} size='x-small' arrow='arrowBottom' />
        <Button {...args} size='small' arrow='arrowTop' />
        <Button {...args} size='medium' arrow='arrowLeft' />
        <Button {...args} size='large' arrow='arrowRight' />
    </div>
);

export const Default = Template.bind({});
Default.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    variant: 'clear',
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    variant: 'outline',
};

export const OutlineArrow = TemplateArrow.bind({});
OutlineArrow.args = {
    children: 'Text',
    variant: 'outline',
};

export const DefaultDisabled = Template.bind({});
DefaultDisabled.args = {
    children: 'Text',
    disabled: true,
    color: 'black',
};
