import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App, { SPOTIFY_AUTHENTICATE } from './App';

/**
 * @vitest-environment happy-dom
 */
describe('App.tsx', () => {
  it('render first App', () => {
    render(<App />);
    const ele = screen.getByRole('button');
    expect(ele).toBeInTheDocument();
    userEvent.click(ele);
    expect(ele).toHaveAttribute('href', SPOTIFY_AUTHENTICATE);
  });
});
