import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Page1 } from 'src/containers/Page1';

describe('Page1', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<BrowserRouter><Page1 /></BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
