import {
    FC, memo, useCallback, useState,
} from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@/shared/ui/Button';
import { LoginModal } from '@/features/AuthByUsername';
import { getUserAuthData } from '@/entities/User';
import { HStack } from '@/shared/ui/Stack';
import { AvatarDropDown } from '@/features/AvatarDropDown';
import cls from './NavBar.module.scss';

export const NavBar: FC = memo(() => {
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModalOpen(false);
    }, []);

    const onOpenModal = useCallback(() => {
        setIsAuthModalOpen(true);
    }, []);

    if (authData) {
        return (
            <header className={cls.NavBar} id="navbarBrowser">
                <HStack gap="20c" justify="end" align="center" fullHeight>
                    <AvatarDropDown />
                </HStack>
            </header>
        );
    }

    return (
        <header className={cls.NavBar}>
            <HStack gap="20c" justify="end" fullHeight>
                {isAuthModalOpen && (
                    <LoginModal
                        isOpen={isAuthModalOpen}
                        onClose={onCloseModal}
                    />
                )}
                <Button variant='clear' onClick={onOpenModal}>
                    Войти
                </Button>
            </HStack>
        </header>
    );
});
