import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter} from 'react-router-dom';
import Home from '../Home';

test('Home displays name passed via router state', () => {
    const state = { name: 'David' };

    render(
        <MemoryRouter initialEntries={[{ pathname: '/home', state }]}>
            <Home />
        </MemoryRouter>
    );

    expect(screen.getByText(/Welcome to the Home Page, David!/i)).toBeInTheDocument();
});
