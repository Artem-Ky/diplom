import { useEffect, useState } from 'react';
import { Button } from '@/shared/ui/Button';

// компонент для тестирования errorBoundary
export const BugButton = () => {
    const [error, setError] = useState(false);

    const throwError = () => {
        setError((prev) => !prev);
    };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            variant='clear'
            onClick={throwError}
        >
            throw error
        </Button>
    );
};
