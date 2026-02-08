// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CorePrompt title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CorePrompt/i);
    expect(titleElement).toBeInTheDocument();
});
