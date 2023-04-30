import PropTypes from 'prop-types';
import { Fragment } from 'react';

export const Friend = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <Fragment>
      <span className="status"></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </Fragment>
  );
};

Friend.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
