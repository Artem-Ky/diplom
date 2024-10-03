import {
    DetailedHTMLProps,
    FC,
    forwardRef,
    HTMLAttributes,
    ReactNode,
} from 'react';
import cnBind from 'classnames/bind';
import cls from './Flex.module.scss';
import { TestProps } from '@/shared/types/tests';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type Side = 'top' | 'right' | 'bottom' | 'left' | 'default';
export type FlexShrink = '0' | '0.5' | '1';
export type FlexGrow = '0' | '0.5' | '1';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexWrap = 'wrap' | 'nowrap';
export type FlexGap =
    | '0'
    | 'xs'
    | 's'
    | 'm'
    | 'l'
    | 'xl'

const justifyClasses: Record<FlexJustify, string> = {
    start: cls.justifyStart,
    center: cls.justifyCenter,
    end: cls.justifyEnd,
    between: cls.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
    start: cls.alignStart,
    center: cls.alignCenter,
    end: cls.alignEnd,
};

const shrinkClasses: Record<FlexShrink, string> = {
    0: cls.shrinkNone,
    0.5: cls.shrinkMedium,
    1: cls.shrinkDefault,
};

const growClasses: Record<FlexGrow, string> = {
    0: cls.growNone,
    0.5: cls.growMedium,
    1: cls.growDefault,
};

const directionClasses: Record<FlexDirection, string> = {
    row: cls.directionRow,
    column: cls.directionColumn,
};

const wrapClasses: Record<FlexWrap, string> = {
    wrap: cls.wrap,
    nowrap: cls.noWrap,
};

const sideClasses: Record<Side, string> = {
    default: '',
    top: cls.marginAutoBottom,
    right: cls.marginAutoLeft,
    bottom: cls.marginAutoTop,
    left: cls.marginAutoRight,
};

const gapClasses: Record<FlexGap, string> = {
    '0': '',
    'xs': cls['gap-xs'],
    's': cls['gap-s'],
    'm': cls['gap-m'],
    'l': cls['gap-l'],
    'xl': cls['gap-xl'],
};

type DivProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>;

export interface FlexProps extends DivProps, TestProps {
    className: string;
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction: FlexDirection;
    gap?: FlexGap;
    wrap?: FlexWrap;
    side?: Side;
    shrink?: FlexShrink;
    grow?: FlexGrow;
    autoWidth?: boolean;
    autoHeight?: boolean;
    fullWidth?: boolean;
    fullHeight?: boolean;
}

export const Flex: FC<FlexProps> = forwardRef((props: FlexProps, ref) => {
    const {
        className = '',
        children,
        justify = 'start',
        align = 'center',
        direction = 'row',
        gap = '0',
        wrap = 'nowrap',
        side = 'default',
        shrink = '1',
        grow = '0',
        autoWidth,
        autoHeight,
        fullWidth,
        fullHeight,
    } = props;
    const cn = cnBind.bind(cls);

    const classes = [
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        wrapClasses[wrap],
        shrinkClasses[shrink],
        growClasses[grow],
        sideClasses[side],
        gap && gapClasses[gap],
    ];

    return (
        <div
            ref={ref}
            data-testid={props['data-testid']}
            className={cn(
                cls.Flex,
                className,
                classes,
                {
                    [cls.autoWidth]: autoWidth,
                    [cls.autoHeight]: autoHeight,
                    [cls.fullWidth]: fullWidth,
                    [cls.fullHeight]: fullHeight,
                },
            )}
        >
            {children}
        </div>
    );
});
