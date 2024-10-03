import { FC, memo, useCallback } from 'react';
import cnBind from 'classnames/bind';
import { useSelector } from 'react-redux';
import { isBrowser, isMobile } from 'react-device-detect';
import { Input } from '@/shared/ui/Input';
import {
    Button
} from '@/shared/ui/Button';
import {
    Text,
} from '@/shared/ui/Text';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
// import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getRememberMe } from '../../model/selectors/getRememberMe/getRememberMe';
import { getUsername } from '../../model/selectors/getUsername/getUsername';
import { getPassword } from '../../model/selectors/getPassword/getPassword';
import { loginActions, loginReducer } from '../../model/slice/LoginSlice';
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading';
import cls from './LoginForm.module.scss';
import { HStack } from '@/shared/ui/Stack';

interface LoginFormProps {
    classNames?: string[];
    onSuccess: () => void;
}

const LoginForm: FC<LoginFormProps> = memo((props: LoginFormProps) => {
    const { classNames = [], onSuccess } = props;
    const cn = cnBind.bind(cls);
    const dispatch = useAppDispatch();
    const username = useSelector(getUsername);
    const password = useSelector(getPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginLoading);
    const rememberMe = useSelector(getRememberMe);

    const initialReducers: ReducersList = {
        loginForm: loginReducer,
    };

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );
    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onChangeRememberMe = useCallback(() => {
        dispatch(loginActions.setRememberMe(!rememberMe));
    }, [dispatch, rememberMe]);

    // const onLoginClick = useCallback(async () => {
    //     const result = await dispatch(
    //         loginByUsername({
    //             username,
    //             password,
    //             remember: rememberMe,
    //         }),
    //     );
    //     if (result.meta.requestStatus === 'fulfilled') {
    //         onSuccess();
    //     }
    // }, [dispatch, password, username, rememberMe, onSuccess]);

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <form
                className={cn(
                    cls.LoginForm,
                    ...classNames.map((clsName) => cls[clsName] || clsName),
                    { [cls.mobile]: isMobile },
                )}
            >
                {error && (
                    <Text
                        text="Вы ввели неправильный логин или пароль"
                        theme='black'
                        size='size_s_bold'
                        align='left'
                    />
                )}
                <label htmlFor="username" className="sr-only">
                    Введите имя
                </label>
                <Input
                    id="username"
                    name="username"
                    type="text"
                    size={isMobile ? 'large' : 'medium'}
                    autoFocus
                    placeholder="Имя"
                    {...(isMobile ? { fullWidth: true } : {})}
                    onChange={onChangeUsername}
                    value={username}
                />
                <label htmlFor="password" className="sr-only">
                    Введите пароль
                </label>
                <Input
                    id="password"
                    name="password"
                    type="password"
                    size={isMobile ? 'large' : 'medium'}
                    placeholder="Пароль"
                    {...(isMobile ? { fullWidth: true } : {})}
                    onChange={onChangePassword}
                    value={password}
                />
                {isBrowser && (
                    <label
                        htmlFor="rememberMe"
                        className={cn(cls.checkboxLabel)}
                    >
                        <Input
                            classNames={[cls.checkbox]}
                            id="rememberMe"
                            name="rememberMe"
                            type="checkbox"
                            placeholder="Запомнить меня?"
                            onChange={onChangeRememberMe}
                            checked={rememberMe}
                        />
                        Запомнить меня
                    </label>
                )}
                {isMobile && (
                    <HStack justify="end" align="center" gap="16c" fullWidth>
                        <Text
                            label="Запомнить меня"
                            labelId="rememberMe"
                            theme='black'
                            size='size_l_bold'
                            align='right'
                        />
                        <Input
                            classNames={[cls.checkbox]}
                            id="rememberMe"
                            name="rememberMe"
                            type="checkbox"
                            size='large'
                            placeholder="Запомнить меня?"
                            onChange={onChangeRememberMe}
                            checked={rememberMe}
                        />
                    </HStack>
                )}
                <Button
                    variant='outline'
                    outlineColor='outline-grey'
                    size='large'
                    classNames={[cls.LoginFormButton]}
                    // onClick={onLoginClick}
                    disabled={isLoading}
                    {...(isMobile ? { fullWidth: true } : { fullWidth: false })}
                    type="submit"
                >
                    Войти
                </Button>
            </form>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
