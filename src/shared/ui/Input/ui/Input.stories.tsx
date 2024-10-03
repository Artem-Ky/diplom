import { StoryFn, Meta } from '@storybook/react';
import testAvatar from '@/app/testAvatar.jpg';
import { Input } from './Input';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
        // Контроль размера инпута
        // size: {
        //     control: 'select',
        //     options: Object.values(),
        //     description: 'Контроль размера инпута',
        // },
        //  вся ширина
        fullWidth: {
            control: 'boolean',
            description: 'Ширина инпута 100%',
        },
        //  disabled input
        readonly: {
            control: 'boolean',
            description: 'disabled',
        },
    },
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => (
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <Input {...args} size='small' />
        <Input {...args} size='medium' />
        <Input {...args} size='large' />
    </div>
);

const TemplateRC: StoryFn<typeof Input> = (args) => (
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <Input {...args} />
        <Input {...args} checked />
    </div>
);

const smallIcon = (
    <img
        src={testAvatar}
        alt="1"
        style={{
            position: 'absolute',
            display: 'flex',
            top: '50%',
            translate: '0 -50%',
            alignItems: 'center',
            width: 16,
            height: 16,
        }}
    />
);

const mediumIcon = (
    <img
        src={testAvatar}
        alt="1"
        style={{
            position: 'absolute',
            display: 'flex',
            top: '50%',
            translate: '0 -50%',
            alignItems: 'center',
            width: 20,
            height: 20,
        }}
    />
);

const largeIcon = (
    <img
        src={testAvatar}
        alt="1"
        style={{
            position: 'absolute',
            display: 'flex',
            top: '50%',
            translate: '0 -50%',
            alignItems: 'center',
            width: 24,
            height: 24,
        }}
    />
);

const TemplateIcon: StoryFn<typeof Input> = (args) => (
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                rowGap: '10px',
                flexWrap: 'wrap',
            }}
        >
            <Input {...args} size='small' view='iconSmall'>
                {smallIcon}
            </Input>
            <Input
                {...args}
                size='small'
                view='iconMedium'
            >
                {mediumIcon}
            </Input>
            <Input {...args} size='small' view='iconLarge'>
                {largeIcon}
            </Input>
        </div>
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                rowGap: '10px',
                flexWrap: 'wrap',
            }}
        >
            <Input
                {...args}
                size='medium'
                view='iconSmall'
            >
                {smallIcon}
            </Input>
            <Input
                {...args}
                size='medium'
                view='iconMedium'
            >
                {mediumIcon}
            </Input>
            <Input
                {...args}
                size='medium'
                view='iconLarge'
            >
                {largeIcon}
            </Input>
        </div>
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                rowGap: '10px',
                flexWrap: 'wrap',
            }}
        >
            <Input {...args} size='large' view='iconSmall'>
                {smallIcon}
            </Input>
            <Input
                {...args}
                size='large'
                view='iconMedium'
            >
                {mediumIcon}
            </Input>
            <Input {...args} size='large' view='iconLarge'>
                {largeIcon}
            </Input>
        </div>
    </div>
);

export const Default = Template.bind({});
Default.args = {
    placeholder: 'test...',
};

export const Password = Template.bind({});
Password.args = {
    placeholder: 'test...',
    type: 'password',
};

export const CheckBox = TemplateRC.bind({});
CheckBox.args = {
    type: 'checkbox',
};

export const Radio = TemplateRC.bind({});
Radio.args = {
    type: 'radio',
};

export const WithIcon = TemplateIcon.bind({});
WithIcon.args = {};
