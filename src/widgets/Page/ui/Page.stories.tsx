import { StoryFn, Meta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Page } from './Page';

export default {
    title: 'widget/Page',
    component: Page,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Page>;

const Template: StoryFn<typeof Page> = (args) => <Page {...args} />;

const children = <div>page this is page</div>;

export const Light = Template.bind({});
Light.args = { children };
Light.decorators = [StoreDecorator({})];
