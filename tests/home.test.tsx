import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import Home from '../app/page';
vi.mock('@clerk/nextjs', () => {
  const mockedFunctions = {
    auth: () =>
      new Promise<{ userId: string }>((resolve) =>
        resolve({ userId: 'jkghjfhjgfgskjdgfkjhsf' })
      ),
    clerkProvider: ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    ),
    useUser: () => ({
      isSignedIn: true,
      user: {
        id: 'user_2NNEqL2nrIRdJ194ndJqAHwEfxC',
        fullName: 'Charles Harris',
      },
    }),
  };
  return mockedFunctions;
});

vi.mock('next/font/google', () => {
  return {
    Inter: () => {
      {
        className: 'inter';
      }
    },
  };
});

test(`Home`, async () => {
  render(await Home());
  expect(screen.getByText('Get Started')).toBeTruthy();
});
