import { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { mobileNavigateItemType } from '../../model/types/mobileNavigate';
import { getUserAuthData } from '@/entities/User';
import { AppLink } from '@/shared/ui/Link';
import { Icon } from '@/shared/ui/Icon';
import { Text } from '@/shared/ui/Text';
import { VStack } from '@/shared/ui/Stack';

interface MobileNavigateNavItemProps {
    Item: mobileNavigateItemType;
}

export const MobileNavigateNavItem: FC<MobileNavigateNavItemProps> = memo(
    (props: MobileNavigateNavItemProps) => {
        const { Item } = props;

        const isAuth = useSelector(getUserAuthData);

        if (Item.authOnly && !isAuth) {
            return null;
        }

        return (
            <li>
                <AppLink theme='black' to={Item.path}>
                    <VStack gap="4r" align="center" justify="center">
                        <Icon
                            icon={Item.Icon}
                            variant={Item.IconType}
                            size='small'
                            color='black'
                        />
                        <Text
                            size='size_s'
                            theme='black'
                            text={Item.text}
                        />
                    </VStack>
                </AppLink>
            </li>
        );
    },
);
