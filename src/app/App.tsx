import { Suspense, useEffect } from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { isMobile } from 'react-device-detect';
import { NavBar } from '@/widgets/NavBar';
import { getUserInited, userActions } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Router } from './providers/router';
import { Header } from '@/widgets/Header';

const App = () => {
    const dispatch = useAppDispatch();
    const userInited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app')}>
            <Suspense fallback="">
                <div className="content-page">
                    <div className={`content ${isMobile ? 'mobile' : ''}`}>
                        <Header />
                        {/* <NavBar /> */}
                        {userInited && <Router />}
                        {/* <MobileView>
                            <MobileNavigate />
                        </MobileView> */}
                    </div>
                </div>
            </Suspense>
        </div>
    );
};

export default App;
