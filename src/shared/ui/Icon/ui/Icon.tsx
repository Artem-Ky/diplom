import React, { memo, SVGProps } from 'react';
import cnBind from 'classnames/bind';
import cls from './Icon.module.scss';

export type IconSize = 'small' | 'medium' | 'large';

export type IconColor = 'white' | 'gray' | 'black' | 'light-gray';

export type IconTypeVariant = 'fill-no-stroke' | 'stroke-no-fill';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    icon: React.VFC<SVGProps<SVGSVGElement>>;
    variant?: IconTypeVariant;
    color?: IconColor;
    size?: IconSize;
    width?: number;
    height?: number;
}

export const Icon = memo((props: IconProps) => {
    const {
        className = '',
        icon: IconComponent,
        variant = 'fill-no-stroke',
        size = 'small',
        color = 'white',
        width,
        height,
        ...otherProps
    } = props;
    const cn = cnBind.bind(cls);

    return (
        <IconComponent
            style={{ height, width }}
            className={cn(
                cls.Icon,

                cls[variant],
                cls[size],
                cls[color],
                className,
            )}
            {...otherProps}
        />
    );
});
