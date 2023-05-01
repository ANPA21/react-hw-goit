import PropTypes from 'prop-types';
import { Profile } from 'components/Profile/Profile';
import { List } from './ProfileList.styled';
export const ProfileList = ({ items }) => {
  return (
    <List>
      {items.map(item => (
        <Profile item={item} />
      ))}
    </List>
  );
};
ProfileList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ tag: PropTypes.string.isRequired })
  ).isRequired,
};
