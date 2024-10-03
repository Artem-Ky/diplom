import { FC, memo } from 'react';
import { Page } from '@/widgets/Page';
import { FirstSectionMainPage } from './FirstSectionMainPage/FirstSectionMainPage';

const MainPage: FC = memo(() => (
    <Page data-testid="MainPage">
        <FirstSectionMainPage />
    </Page>
));

export default MainPage;
