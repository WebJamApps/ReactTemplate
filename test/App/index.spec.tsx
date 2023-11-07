import renderer from 'react-test-renderer';
import { App } from 'src/App';
import commonUtils from 'src/lib/commonUtils';

describe('App component', () => {
  it('is defined', () => {
    expect(App).toBeDefined();
  });
  it('renders the component', () => {
    commonUtils.setTitleAndScroll = jest.fn();
    const href = 'http://localhost:7777';
    const reload = jest.fn();
    Object.defineProperty(window, 'location', {
      value: {
        href, assign: () => { }, reload, origin: href,
      },
      writable: true,
    });
    const app = renderer.create(<App />).toJSON();
    expect(app).toMatchSnapshot();
  });
});
