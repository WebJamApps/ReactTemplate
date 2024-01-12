import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import { Page2, TEST_GQL } from 'src/containers/Page2';

describe('Staff', () => {
  it('renders correctly', () => {
    const mocks = [
      {
        request: {
          query: TEST_GQL,
          variables: {
            name: 'Buck',
          },
        },
        result: {
          data: {
            dog: { id: '1', name: 'Buck', breed: 'bulldog' },
          },
        },
      },
    ];
    const tree:any = renderer
      .create(
        <MockedProvider mocks={mocks} addTypename={false}>
          <BrowserRouter><Page2 /></BrowserRouter>
        </MockedProvider>)
      .toJSON();
    expect(tree.children[0]).toBe('Loading...');
  });
});
