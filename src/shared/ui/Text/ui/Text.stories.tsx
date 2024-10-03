import { StoryFn, Meta } from '@storybook/react';
import { Text} from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
        // Контроль цвета текста
        // color: {
        //     control: 'select',
        //     options: Object.values(TextColor),
        //     description: 'Цвет текста',
        // },
        // // Контроль положения текста
        // align: {
        //     control: 'select',
        //     options: Object.values(TextAlign),
        //     description: 'положение текста',
        // },
        widthAuto: {
            control: 'boolean',
            description: 'ширина авто',
        },
    },
} as Meta<typeof Text>;

const Template: StoryFn<typeof Text> = (args) => (
    <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '25px',
            flexWrap: 'wrap',
            padding: '10px',
        }}
    >
        <div>
            <span>SIZE S: </span>
            <Text {...args} size='size_s' />
        </div>
        <div>
            <span>SIZE S_BOLD: </span>
            <Text {...args} size='size_s_bold' />
        </div>
        <div>
            <span>SIZE M: </span>
            <Text {...args} size='size_m' />
        </div>
        <div>
            <span>SIZE M_BOLD: </span>
            <Text {...args} size='size_m_bold' />
        </div>
        <div>
            <span>SIZE L: </span>
            <Text {...args} size='size_l' />
        </div>
        <div>
            <span>SIZE L_BOLD: </span>
            <Text {...args} size='size_l_bold' />
        </div>
        <div>
            <span>SIZE XL: </span>
            <Text {...args} size='size_xl_title' />
        </div>
        <div>
            <span>SIZE XXL: </span>
            <Text {...args} size='size_xxl_title' />
        </div>
    </div>
);

export const Light = Template.bind({});
Light.args = {
    text: 'Пример ТЕКСТА',
};

export const LightTittle = Template.bind({});
LightTittle.args = {
    text: 'Пример ЗАГОЛОВКА',
};

