/* eslint-disable react/button-has-type */
import { ButtonHTMLAttributes, FC, memo } from 'react';
import cnBind from 'classnames/bind';
import cls from './Button.module.scss';

export type ButtonArrowIcon = 'arrowTop' | 'arrowBottom' | 'arrowLeft' | 'arrowRight'

export type ButtonVariant = 'clear' | 'outline'

export type ButtonColor = 'no-color' | 'white' | 'black';

export type ButtonOutlineColor = 'outline-black' | 'outline-grey' | 'outline-success' | 'outline-error';

export type ButtonSize = 'no-size' | 'x-small' | 'small' | 'medium' | 'large';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    //  дополнительные классы для кнопки

    className?: string;

    //  вариант кнопки

    variant?: ButtonVariant;

    //  тип кнопки

    type?: 'button' | 'submit' | 'reset';

    //  если true то width 100%

    fullWidth?: boolean;

    //  цвет кнопки

    color?: ButtonColor;

    //  размер кнопки

    size?: ButtonSize;

    //  наличие стрелки

    arrow?: ButtonArrowIcon

    //  цвет обводки

    outlineColor?: ButtonOutlineColor;

    //  кнопка будет квадратной (по высоте)

    isSquare?: boolean;

    //  отключить кнопку
    disabled?: boolean;
}

export const Button: FC<ButtonProps> = memo((props: ButtonProps) => {
    const {
        children,
        arrow = '',
        variant = 'clear',
        type = 'button',
        fullWidth = false,
        color = 'no-color',
        size = 'no-size',
        outlineColor = 'outline-grey',
        disabled,
        isSquare,
        className,
        ...otherProps
    } = props;
    const cn = cnBind.bind(cls);

    return (
        <button
            type={type}
            disabled={disabled}
            className={cn(
                cls.Button,
                className,
                cls[arrow],
                cls[size],
                cls[color],
                cls[outlineColor],
                cls[variant],
                { [cls.square]: isSquare },
                { [cls.fullWidth]: fullWidth },
                {[cls.arrow]: arrow !== ''},
                {[cls[arrow]]: arrow !== ''},
            )}
            {...otherProps}
        >
            {children}
        </button>
    );
});
