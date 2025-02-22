import { FC, memo, ReactNode } from 'react';
import cnBind from 'classnames/bind';
import {
    Popover as HPopover,
    PopoverButton as HPopoverButton,
    PopoverPanel as HPopoverPanel,
} from '@headlessui/react';
import { useAutoFloating } from '@/shared/lib/hooks/useAutoFloating/useAutoFloating';
import { HStack } from '../../../Stack';
import { Text } from '../../../Text';
import cls from './Popover.module.scss';
import clsPopups from '../../styles/popupsStyle.module.scss';

interface PopoverProps {
    classNames?: string[];
    offset?: number;
    fullWidth?: boolean;
    fullWidthContent?: boolean;
    trigger: ReactNode;
    children: ReactNode;
}

export const Popover: FC<PopoverProps> = memo((props: PopoverProps) => {
    const {
        classNames = [],
        fullWidth,
        fullWidthContent,
        trigger,
        children,
        offset = 15,
    } = props;
    const cn = cnBind.bind(cls);

    const { refs, floatingStyles } = useAutoFloating({ floatOffset: offset });

    return (
        <HPopover
            className={cn(
                clsPopups.Popups,
                cls.Popover,
                ...classNames.map((clsName) => cls[clsName] || clsName),
                { [clsPopups.fullWidth]: fullWidth },
            )}
        >
            <HPopoverButton as="div" ref={refs.setReference}>
                <HStack justify="center" align="center" gap="4c">
                    <Text
                        size='size_m'
                        align='center'
                        theme='black'
                    >
                        {trigger}
                    </Text>
                </HStack>
            </HPopoverButton>
            <HPopoverPanel
                as="div"
                ref={refs.setFloating}
                style={floatingStyles}
                className={cn(clsPopups.menuPopups, cls.Panel, {
                    [clsPopups.fullWidthContent]: fullWidthContent,
                })}
            >
                {children}
            </HPopoverPanel>
        </HPopover>
    );
});
