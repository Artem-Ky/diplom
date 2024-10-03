import { FC, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { BrowserView, MobileView } from 'react-device-detect';
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from '@/entities/User';
import { DropDown } from '@/shared/ui/Popups';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar } from '@/shared/ui/Avatar';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { DropdownItem } from '@/shared/ui/Popups/components/DropDown/ui/DropDown';
import { getRouteAdmin } from '@/shared/const/router';

interface AvatarDropDownProps {
    classNames?: string[];
}

export const AvatarDropDown: FC<AvatarDropDownProps> = memo(
    (props: AvatarDropDownProps) => {
        const { classNames = [] } = props;
        const authData = useSelector(getUserAuthData);
        const dispatch = useAppDispatch();
        const isAdmin = useSelector(isUserAdmin);
        const isManager = useSelector(isUserManager);

        const isAdminPanelAvaible = isAdmin || isManager;

        const onLogOut = useCallback(() => {
            dispatch(userActions.logout());
        }, [dispatch]);

        if (!authData) {
            return null;
        }

        const optionsList: DropdownItem[] = [
            ...(isAdminPanelAvaible
                ? [
                    {
                        content: 'Админка',
                        href: getRouteAdmin(),
                    },
                ]
                : []),
            {
                content: 'Профиль',
                href: '#',
            },
            {
                content: 'Выйти',
                contentColor: 'red',
                onClick: onLogOut,
            },
        ];

        return (
            <>
                <BrowserView>
                    <DropDown
                        classNames={classNames}
                        items={optionsList}
                        trigger={(
                            <Avatar
                                size='medium-round'
                                src={authData.avatar}
                                alt="Ваш аватар"
                            />
                        )}
                    />
                </BrowserView>
                <MobileView>
                    <VStack gap="4r" align="center" justify="center">
                        <DropDown
                            classNames={classNames}
                            items={optionsList}
                            trigger={(
                                <Avatar
                                    size='small-round'
                                    src={authData.avatar}
                                    alt="Ваш аватар"
                                />
                            )}
                        />
                        <Text theme='black' size='size_s'>
                            Профиль
                        </Text>
                    </VStack>
                </MobileView>
            </>
        );
    },
);
