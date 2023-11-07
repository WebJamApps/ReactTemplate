import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import { Beliefs } from '../containers/Beliefs';
import { Staff } from '../containers/Staff';
import { AppTemplate } from './AppTemplate';

export function App(): JSX.Element {
  return (
    <div id="App" className="App">
      <BrowserRouter>
        <AppTemplate>
          <Routes>
            <Route path="/" element={<Beliefs />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AppTemplate>
      </BrowserRouter>
    </div>
  );
}
