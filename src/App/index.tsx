import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import { Page1 } from '../containers/Page1';
import { Page2 } from '../containers/Page2';
import { AppTemplate } from './AppTemplate';

export function App(): JSX.Element {
  return (
    <div id="App" className="App">
      <BrowserRouter>
        <AppTemplate>
          <Routes>
            <Route path="/" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AppTemplate>
      </BrowserRouter>
    </div>
  );
}
