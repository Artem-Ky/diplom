import { StoryFn, Meta } from '@storybook/react';
import { Popover } from './Popover';

export default {
    title: 'shared/Popups/Popover',
    component: Popover,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Popover>;

const Template: StoryFn<typeof Popover> = (args) => <Popover {...args} />;

const trigger = <button type="button">click</button>;
const children = (
    <div>
        <div>1111111</div>
        <div>2222222</div>
        <div>3333333</div>
        <div>4444444</div>
    </div>
);

export const Light = Template.bind({});
Light.args = { trigger, children };

