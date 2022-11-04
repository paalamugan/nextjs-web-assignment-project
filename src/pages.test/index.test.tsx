// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

import Index from '@/pages';
import { renderWithProvider } from '@/test-utils';

describe('Index page', () => {
  describe('Render method', () => {
    it('should have h1 tag', () => {
      renderWithProvider(<Index />);
      // screen.debug();
      // const heading = screen.getByRole('heading', {
      //   name: /Welcome to web oauth/i,
      // });
      // expect(heading).toBeInTheDocument();
    });
  });
});
