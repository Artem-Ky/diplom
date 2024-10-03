import { FC, memo } from 'react';
import { Page } from '@/widgets/Page';
import cls from './NotFoundPage.module.scss';

export const NotFoundPage: FC = memo(() => (
    <Page data-testid="NotFoundPage" classNames={[cls.NotFoundPage]}>Страница не найдена</Page>
));
