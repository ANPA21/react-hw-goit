import PropTypes from 'prop-types';
import { Profile } from 'components/profile/Profile';
import { List, Item } from './ProfileList.styled';
export const ProfileList = ({ items }) => {
  return (
    <List>
      {items.map(item => (
        <Item key={item.tag}>
          <Profile item={item} />
        </Item>
      ))}
    </List>
  );
};
ProfileList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ tag: PropTypes.string.isRequired })
  ).isRequired,
};
