import UsersPage from '@/pages/users';
import { render } from '@/test-utils';

describe('Users Page Render', () => {
  it('should render', () => {
    render(<UsersPage />);
    expect(document.title).toBe('Users | Web OAuth');
  });
});
