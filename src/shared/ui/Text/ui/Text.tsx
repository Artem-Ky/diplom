import { memo, ReactNode } from 'react';
import cnBind from 'classnames/bind';
import cls from './Text.module.scss';

export type TextColor = 'white' | 'black' | 'red';

export type TextAlign = 'right' | 'left' | 'center';

export type TextSize =
    | 'roboto-slab-700-24px-1-75lh'
    | 'sf-400-13-5px-1-5lh'

export type TextH = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    label?: string;
    labelId?: string;
    theme?: TextColor;
    align?: TextAlign;
    size?: TextSize;
    widthAuto?: boolean;
    children?: ReactNode;
    H?: TextH;

    'data-testid'?: string;
}

export const Text = memo((props: TextProps) => {
    const cn = cnBind.bind(cls);
    const {
        className,
        text,
        title,
        label,
        labelId,
        theme = 'black',
        align = 'left',
        size = 'sf-400-13-5px-1-5lh',
        widthAuto,
        children,
        H = 'h3',
        'data-testid': dataTestId = 'Text',
    } = props;

    return (
        <>
            {title && (
                <H
                    className={cn(
                        cls.title,
                        {
                            [cls.widthAuto]: widthAuto,
                            [cls[theme]]: true,
                            [cls[align]]: true,
                            [cls[size]]: true,
                        },
                        [className],
                    )}
                    data-testid={`${dataTestId}.Header`}
                >
                    {title}
                </H>
            )}
            {text && (
                <p
                    className={cn(
                        cls.text,
                        cls[size],
                        cls[theme],
                        cls[align],
                        {
                            [cls.widthAuto]: widthAuto,
                        },
                        [className],
                    )}
                    data-testid={`${dataTestId}.Paragraph`}
                >
                    {text}
                </p>
            )}
            {label && (
                <label
                    className={cn(
                        cls.text,
                        {
                            [cls.widthAuto]: widthAuto,
                            [cls[theme]]: true,
                            [cls[align]]: true,
                            [cls[size]]: true,
                        },
                        [className],
                    )}
                    htmlFor={labelId}
                    data-testid={`${dataTestId}.Label`}
                >
                    {label}
                </label>
            )}
            {children && (
                <div
                    className={cn(
                        cls.text,
                        {
                            [cls.widthAuto]: widthAuto,
                            [cls[theme]]: true,
                            [cls[align]]: true,
                            [cls[size]]: true,
                        },
                        [className],
                    )}
                    data-testid={`${dataTestId}.Children`}
                >
                    {children}
                </div>
            )}
        </>
    );
});
