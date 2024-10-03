import { StoryFn, Meta } from '@storybook/react';
import testAvatar from '@/app/testAvatar.jpg';
import { Avatar } from './Avatar';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Avatar>;

const Template: StoryFn<typeof Avatar> = (args) => (
    <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
            flexWrap: 'wrap',
        }}
    >
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <Avatar {...args} size='small-round' src={testAvatar} />
            <Avatar {...args} size='medium-round' src={testAvatar} />
            <Avatar {...args} size='large-round' src={testAvatar} />
        </div>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <Avatar {...args} size='big-square' src={testAvatar} />
        </div>
    </div>
);

export const Light = Template.bind({});
Light.args = {};
