import { gql, useQuery } from '@apollo/client';
import commonUtils from 'src/lib/commonUtils';

export const TEST_GQL = gql`
  query Gqldocs {
    gqldocs {
      title
      author
    }
  }
`;

export const Page2 = (): JSX.Element => {
  const { loading, error, data } = useQuery(TEST_GQL);
  commonUtils.setTitleAndScroll('Page 2', window.screen.width);
  if (loading) return <p>Loading...</p>;
  if (error) {
    return (
      <p>
        Error :
        {' '}
        {error.message}
      </p>
    );
  }
  return (
    <div>
      <h1>Page 2</h1>
      <div>
        <p>Some page two content here.</p>
        {data ? <p>{JSON.stringify(data)}</p> : null}
      </div>
    </div>
  );
};
