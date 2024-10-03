import { RouteProps } from 'react-router-dom';
import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { UserRole } from '@/entities/User';
import {
    AppRoutes,
    getRouteAbout,
    getRouteAdmin,
    getRouteMain,
} from '@/shared/const/router';

export type appRouteProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
};

export const routeConfig: Record<AppRoutes, appRouteProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: getRouteAbout(),
        element: <AboutPage />,
    },
    [AppRoutes.ADMIN_PANEL]: {
        path: getRouteAdmin(),
        // element: <AdminPanelPage />,
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.MANAGER],
    },
    //
    [AppRoutes.Not_Found]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
