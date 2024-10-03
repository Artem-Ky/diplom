import { FC, memo } from 'react';
import cnBind from 'classnames/bind';
import cls from './Avatar.module.scss';
import { AppImage } from '../../AppImage/AppImage';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import { Icon } from '../../Icon';
import { Skeleton } from '../../Skeleton';

export type AvatarSize = 'small-round' | 'medium-round' | 'large-round' | 'big-square';

interface AvatarProps {
    classNames?: string[];
    src?: string;
    alt: string;
    size?: AvatarSize;
}

export const Avatar: FC<AvatarProps> = memo((props: AvatarProps) => {
    const {
        classNames = [],
        src = 'https://avatars.githubusercontent.com/u/143946153?v=4',
        size = 'medium-round',
        alt,
    } = props;
    const cn = cnBind.bind(cls);

    const errorFallBack = (
        <Icon
            classNames={[cn(
                cls.Avatar,
                cls[size],
                ...classNames.map((clsName) => cls[clsName] || clsName),
            )]}
            icon={ProfileIcon}
            color='black'
        />
    );
    const loadingFallBack = (
        <Skeleton
            className={cn(
                cls.Avatar,
                cls[size],
                ...classNames.map((clsName) => cls[clsName] || clsName),
            )}
        />
    );

    return (
        <AppImage
            errorFallback={errorFallBack}
            fallback={loadingFallBack}
            className={cn(
                cls.Avatar,
                cls[size],
                ...classNames.map((clsName) => cls[clsName] || clsName),
            )}
            src={src}
            alt={alt}
        />
    );
});
