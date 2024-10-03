import { FC, memo } from 'react';
import cnBind from 'classnames/bind';
import cls from './FirstSectionMainPage.module.scss';
import { VStack } from '@/shared/ui/Stack';
import {
    Text
} from '@/shared/ui/Text';

interface FirstSectionMainPageProps {
    classNames?: string[];
}

export const FirstSectionMainPage: FC<FirstSectionMainPageProps> = memo(
    (props: FirstSectionMainPageProps) => {
        const { classNames = [] } = props;
        const cn = cnBind.bind(cls);

        return (
            <div
                className={cn(
                    cls.FirstSectionMainPage,
                    ...classNames.map((clsName) => cls[clsName] || clsName),
                )}
            >
                <VStack gap="32r">
                    <Text
                        title="Банер во всю страницу"
                        H='h2'
                        size='size_xxl_title'
                        align='center'
                    />
                    123
                </VStack>

                <div className={cls.wrapperFloat}>
                    <Text
                        className={cls.floatText}
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Alias adipisci ut libero atque illum aut esse, corporis
                        ipsum doloremque autem eius hic ab nihil facere
                        recusandae, reprehenderit, provident sit at? Lorem ipsum
                        dolor sit amet consectetur, adipisicing elit. Magnam
                        labore officia maxime? Expedita voluptates iusto earum
                        ratione molestiae itaque magnam porro provident culpa,
                        maiores quae officiis, sapiente perferendis perspiciatis
                        incidunt! Lorem ipsum dolor sit, amet consectetur
                        adipisicing elit. Autem reiciendis necessitatibus
                        consequuntur harum officia itaque animi sit perspiciatis
                        suscipit exercitationem, fugiat ea accusantium quas cum
                        deleniti ut facilis minus aliquid?"
                    />
                </div>
            </div>
        );
    },
);
