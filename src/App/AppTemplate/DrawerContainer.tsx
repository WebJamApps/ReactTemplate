import { NavLinks } from './NavLinks';
import './index.scss';

interface IdrawerContainerProps {
  handleKeyPress: (arg0:any)=>void, className:any, userCount?:number,
  heartBeat?:string, handleClose:()=>void
}
export function DrawerContainer(props:IdrawerContainerProps) {
  const {
    className, handleClose, handleKeyPress,
  } = props;
  return (
    <div tabIndex={0} role="button" id="sidebar" onClick={handleClose} onKeyPress={handleKeyPress} className={className}>
      <div className="drawer" style={{ backgroundColor: '#c0c0c0', zIndex: -1, position: 'relative' }}>
        <div className="navImage" />
        <NavLinks
          handleClose={handleClose}
        />
      </div>
    </div>
  );
}
