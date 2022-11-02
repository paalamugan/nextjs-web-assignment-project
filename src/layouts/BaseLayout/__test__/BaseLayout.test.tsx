import { createStore } from '@/redux/store';
import { renderWithProvider, screen, waitFor } from '@/test-utils';

import { BaseLayout } from '../BaseLayout';

let store: ReturnType<typeof createStore>;

describe('BaseLayout component', () => {
  beforeEach(() => {
    store = createStore();
  });

  describe('Render method', () => {
    it('should a render base layout', async () => {
      renderWithProvider(
        <BaseLayout>
          <h1>Hello World</h1>
        </BaseLayout>,
        { store },
      );

      await waitFor(() => {
        expect(screen.getByText('Hello World')).toBeInTheDocument();
      });
    });
  });
});
