import { FC } from 'react';
import cnBind from 'classnames/bind';
import { Button } from '@/shared/ui/Button';
import { VStack } from '@/shared/ui/Stack';
import cls from './PageError.module.scss';

interface PageErrorProps {
    classNames?: string[];
}

export const PageError: FC<PageErrorProps> = (props) => {
    const { classNames = [] } = props;
    const cn = cnBind.bind(cls);

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <VStack
            justify="center"
            align="center"
            classNames={[
                cn(
                    cls.PageError,
                    ...classNames.map((clsName) => cls[clsName] || clsName),
                ),
            ]}
        >
            <p>Произошла непредвиденная ошибка</p>
            <Button onClick={reloadPage}>Обновить страницу</Button>
        </VStack>
    );
};
