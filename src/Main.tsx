import { StrictMode } from 'react';
import { ReactNotifications } from 'react-notifications-component';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { AuthProvider } from './providers/Auth.provider';
import '../static/styles.scss';
import { ContentProvider } from './providers/Content.provider';

const root = createRoot(document.getElementById('root') as HTMLElement);
function Main() {
  return (
    <AuthProvider>
      <ContentProvider>
        <ReactNotifications />
        <App />
      </ContentProvider>
    </AuthProvider>
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
