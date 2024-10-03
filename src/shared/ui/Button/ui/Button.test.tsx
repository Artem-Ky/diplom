import { screen } from '@testing-library/react';
import { ComponentRender } from '@/shared/lib/tests/componentRender/ComponentRender';
import { Button } from './Button';

describe('Button', () => {
    test('Test render', () => {
        ComponentRender(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('Test Clear Theme', () => {
        ComponentRender(<Button variant='outline'>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('outline');
        screen.debug();
    });
});
