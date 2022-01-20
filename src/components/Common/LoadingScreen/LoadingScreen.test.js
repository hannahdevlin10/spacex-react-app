import React from 'react';
import { render } from '@testing-library/react';
import LoadingScreen from './LoadingScreen';

it('Check container for animation loads', () => {
    const { container } = render(<LoadingScreen />)
     // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toHaveClass('loading-screen-container')
});