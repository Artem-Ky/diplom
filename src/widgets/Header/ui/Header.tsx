import { FC } from 'react';
import { memo } from 'react';
import cls from './Header.module.scss';
import cnBind from 'classnames/bind';
import { HStack } from '@/shared/ui/Stack';
import { AppLink } from '@/shared/ui/Link';
import { Text } from '@/shared/ui/Text';
import { Icon } from '@/shared/ui/Icon';
import Map_marker from '@/shared/assets/icons/map_marker.svg'
import Phone from '@/shared/assets/icons/phone.svg'
import Time from '@/shared/assets/icons/time.svg'
import lk from '@/shared/assets/icons/arrowRight.svg'
import { Button } from '@/shared/ui/Button';

interface HeaderProps {
    className?: string;
}

export const Header: FC<HeaderProps> = memo((props: HeaderProps) => {
    const { className = '' } = props;
    const cn = cnBind.bind(cls);

    return (
        <header className={cls.Header}>
            <HStack
                align="center"
                fullHeight
                className={cn(className, 'container')}
                gap='xl'
            >
                <Button className={cls.header__link} color="black">
                    <Icon color='light-gray' size='medium' icon={Map_marker} />
                    <Text size='sf-400-13-5px-1-5lh'>Иваново</Text>
                </Button>
                <AppLink className={cls.header__link} color="black" to="tel:88005500600">
                    <Icon color='light-gray' size='medium' icon={Phone} />
                    <Text size='sf-400-13-5px-1-5lh'>8-800-5-500-600</Text>
                </AppLink>
                <AppLink className={cls.header__link} color="black" to="/">
                    <Icon color='light-gray' size='medium' variant='stroke-no-fill' icon={Time} />
                    <Text size='sf-400-13-5px-1-5lh'>Сегодня с 09:50 до 00:00</Text>
                </AppLink>
                <AppLink className={cn(cls.header__link, cls.last)} color="black" to="/">
                    <Icon color='light-gray' className={cls.Header__lkLink} icon={lk} />
                    <Text size='sf-400-13-5px-1-5lh'>Личный кабинет</Text>
                </AppLink>
            </HStack>
        </header>
    );
});
