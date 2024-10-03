import { StoryFn, Meta } from '@storybook/react';
import { Text } from '../../Text/ui/Text';
import { Card, CardSize } from './Card';

export default {
    title: 'shared/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
        fullWidth: {
            control: 'boolean',
            description: 'Ширина карточки 100%',
        },
    },
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = (args) => (
    <div style={{ padding: 25, display: 'flex', columnGap: 10 }}>
        <Card size='small' {...args} />
        <Card size='medium' {...args} />
        <Card size='large' {...args} />
    </div>
);

export const Light = Template.bind({});
Light.args = {
    children: (
        <Text
            theme='black'
            title="test test test"
            text="test test test"
        />
    ),
};
