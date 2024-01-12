import { menuItems } from './menuConfig';
import { SideMenuItem } from './SideMenuItem';

interface InavLinksProps {
  handleClose: () => void, userCount?: number, heartBeat?: string,
}
export function NavLinks(props: InavLinksProps) {
  const {
    handleClose,
  } = props;
  return (
    <div className="nav-list" style={{ width: '220px' }}>
      <p style={{ fontSize: '1px', marginBottom: '2px' }} />
      <div className="menu-item" style={{ backgroundColor: '#244a8bff' }}>
        <p style={{ color: '#fff', marginBottom: '2px', fontSize: '11pt' }}>

          <br />
        </p>
      </div>
      <div className="menu-item" style={{ backgroundColor: '#244a8bff', marginLeft: '0px' }}>
        <p style={{ color: '#fff', marginBottom: '2px', fontSize: '11pt' }}>

          <br />
          <br />

        </p>
      </div>
      {menuItems.map(
        (menu, index) => (
          <SideMenuItem
            key={index}
            menu={menu}
            index={index}
            handleClose={handleClose}
          />
        ),
      )}
      <p style={{ margin: 0, padding: 0, fontSize: '6pt' }}>&nbsp;</p>
    </div>
  );
}
