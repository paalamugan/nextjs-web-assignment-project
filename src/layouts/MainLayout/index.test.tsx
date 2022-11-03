import { createStore } from '@/redux/store';
import { renderWithProvider, screen, waitFor } from '@/test-utils';

import { MainLayout } from '.';

let store: ReturnType<typeof createStore>;

describe('MainLayout component', () => {
  beforeEach(() => {
    store = createStore();
  });

  describe('Render method', () => {
    it('should a render base layout', async () => {
      renderWithProvider(
        <MainLayout>
          <h1>Hello World</h1>
        </MainLayout>,
        { store },
      );

      await waitFor(() => {
        expect(screen.getByText('Hello World')).toBeInTheDocument();
      });
    });
  });
});
