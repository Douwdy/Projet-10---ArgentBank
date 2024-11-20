import { render, screen } from '@testing-library/react';
import Dashboard from './index';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Balance from '../../components/Balance';
import UserInfoForm from '../../components/UserInfoForm';

jest.mock('../../components/Nav');
jest.mock('../../components/Footer');
jest.mock('../../components/Balance');
jest.mock('../../components/UserInfoForm');

describe('Dashboard', () => {
    beforeEach(() => {
        Nav.mockImplementation(() => <div>Mocked Nav</div>);
        Footer.mockImplementation(() => <div>Mocked Footer</div>);
        Balance.mockImplementation(() => <div>Mocked Balance</div>);
        UserInfoForm.mockImplementation(() => <div>Mocked UserInfoForm</div>);
    });

    test('renders Nav component', () => {
        render(<Dashboard />);
        expect(screen.getByText('Mocked Nav')).toBeInTheDocument();
    });

    test('renders UserInfoForm component', () => {
        render(<Dashboard />);
        expect(screen.getByText('Mocked UserInfoForm')).toBeInTheDocument();
    });

    test('renders Balance component', () => {
        render(<Dashboard />);
        expect(screen.getByText('Mocked Balance')).toBeInTheDocument();
    });

    test('renders Footer component', () => {
        render(<Dashboard />);
        expect(screen.getByText('Mocked Footer')).toBeInTheDocument();
    });
});