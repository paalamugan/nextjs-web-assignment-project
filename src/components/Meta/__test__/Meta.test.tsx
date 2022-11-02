import { render, waitFor } from '@/test-utils';

import { Meta } from '..';

jest.mock('next/head');

describe('Meta component', () => {
  describe('Render method', () => {
    it('should a page title', async () => {
      const title = 'Random title';

      render(<Meta title={title} description="Random description" />);

      await waitFor(() => {
        expect(document.title).toEqual(title);
      });
    });
  });
});
