import PropTypes from 'prop-types';

import { Profile } from './Profile';

export const ProfileList = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.tag}>
          <Profile item={item} />
        </li>
      ))}
    </ul>
  );
};
ProfileList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ tag: PropTypes.string.isRequired })
  ).isRequired,
};
