import React from 'react';
import { render, screen } from '@testing-library/react';
import Banner from './index';

describe('Banner component', () => {
    test('renders banner image', () => {
        render(<Banner />);
        const bannerImage = screen.getByAltText(/Bank tree/i);
        expect(bannerImage).toBeInTheDocument();
    });

    test('renders banner headings', () => {
        render(<Banner />);
        const heading1 = screen.getByText(/No fees./i);
        const heading2 = screen.getByText(/No minimum deposit./i);
        const heading3 = screen.getByText(/High interest rates./i);
        expect(heading1).toBeInTheDocument();
        expect(heading2).toBeInTheDocument();
        expect(heading3).toBeInTheDocument();
    });

    test('renders banner paragraph', () => {
        render(<Banner />);
        const paragraph = screen.getByText(/Open a savings account with Argent Bank today!/i);
        expect(paragraph).toBeInTheDocument();
    });
});