import { StrictMode } from 'react';
import {
  ApolloClient, InMemoryCache, ApolloProvider,
} from '@apollo/client';
import { ReactNotifications } from 'react-notifications-component';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { AuthProvider } from './providers/Auth.provider';
import '../static/styles.scss';
import { ContentProvider } from './providers/Content.provider';

export const client = new ApolloClient({
  uri: `${process.env.BACKEND_URL}/graphql`, // TODO use same backendurl here
  cache: new InMemoryCache(),
});

const root = createRoot(document.getElementById('root') as HTMLElement);
function Main() {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <ContentProvider>
          <ReactNotifications />
          <App />
        </ContentProvider>
      </AuthProvider>
    </ApolloProvider>
  );
}
const renderMain = (): void => {
  root.render(
    <StrictMode>
      <Main />
    </StrictMode>,
  );
};

renderMain();
