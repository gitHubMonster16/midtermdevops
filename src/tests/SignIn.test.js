
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import SignIn from '../SignIn';
import Home from '../Home';
import expect from "expect";

test('SignIn accepts input and navigates to Home with name', () => {

    render(
        <MemoryRouter initialEntries={['/']}>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </MemoryRouter>
    );
    const input = screen.getByPlaceholderText(/enter name/i);
    const button = screen.getByText(/submit/i);

    fireEvent.change(input, { target: { value: 'Maria' } });
    fireEvent.click(button);

    expect(screen.getByText(/Welcome to the Home Page, Maria!/i)).toBeInTheDocument();
});
