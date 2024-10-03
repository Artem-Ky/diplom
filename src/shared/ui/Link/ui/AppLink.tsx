import cnBind from 'classnames/bind';
import { Link, LinkProps } from 'react-router-dom';
import { FC, HTMLAttributeAnchorTarget, memo } from 'react';
import cls from './AppLink.module.scss';

export type AppLinkColor = 'white' | 'black';

interface AppLinkProps extends LinkProps {
    className: string;
    color?: AppLinkColor;
    target?: HTMLAttributeAnchorTarget;
    href?: string;
    fullHeight?: boolean;
    autoHeight?: boolean;
    fullWidth?: boolean;
}

export const AppLink: FC<AppLinkProps> = memo((props: AppLinkProps) => {
    const {
        className = '',
        children,
        target,
        fullHeight,
        autoHeight,
        fullWidth,
        color = 'black',
        to,
        href,
        ...otherProps
    } = props;
    const cn = cnBind.bind(cls);

    if (target && target === '_blank') {
        return (
            <a
                href={href}
                target={target}
                className={cn(
                    cls.AppLink,
                    className,
                    [cls[color]],
                    {
                        [cls.fullHeight]: fullHeight,
                        [cls.autoHeight]: autoHeight,
                        [cls.fullWidth]: fullWidth,
                    },
                )}
                {...otherProps}
            >
                {children}
            </a>
        );
    }

    return (
        <Link
            to={to}
            target={target}
            className={cn(
                cls.AppLink,
                className,
                [cls[color]],
                {
                    [cls.fullHeight]: fullHeight,
                    [cls.autoHeight]: autoHeight,
                    [cls.fullWidth]: fullWidth,
                },
            )}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
