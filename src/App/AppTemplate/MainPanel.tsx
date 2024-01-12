import { HeaderSection } from './HeaderSection';

export function MainPanel({ children, onClick, onKeyPress }:any) {
  return (
    <div className="main-panel">
      <span
        onClick={onClick}
        onKeyPress={onKeyPress}
        id="mobilemenutoggle"
        tabIndex={0}
        role="button"
      >
        <i className="fas fa-bars" />
      </span>
      <div className="mainPanel">
        <div className="swipe-area" />
        <HeaderSection />
        <div style={{ width: 'auto' }} id="contentBlock" className="content-block">
          {children}
        </div>
      </div>
    </div>
  );
}
