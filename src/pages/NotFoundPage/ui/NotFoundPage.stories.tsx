import { StoryFn, Meta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NotFoundPage } from './NotFoundPage';

export default {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof NotFoundPage>;

const Template: StoryFn<typeof NotFoundPage> = () => <NotFoundPage />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];
