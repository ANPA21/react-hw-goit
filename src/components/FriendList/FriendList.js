import PropTypes from 'prop-types';
import { Friend } from 'components/Friend/Friend';
import { List, ListItem } from './FriendList.styled';
export const FriendList = ({ friends }) => {
  return (
    <List className="friend-list">
      {friends.map(friend => (
        <ListItem className="item" key={friend.id}>
          <Friend friend={friend} />
        </ListItem>
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
