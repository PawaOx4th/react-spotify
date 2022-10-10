import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

/**
 * @vitest-environment happy-dom
 */
describe('App.tsx', () => {
  it('render first App', () => {
    render(<App />);
    expect(screen.getByLabelText('input')).toMatchInlineSnapshot(`
      <label
        aria-label="input"
        for="input"
      >
        <input
          defaultvalue="0"
          id="input"
          type="text"
        />
      </label>
    `);
  });
});
