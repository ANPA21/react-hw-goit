import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { BsFillCircleFill } from 'react-icons/bs';
import { Status, Image, Name } from './Friend.styled';

export const Friend = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <Fragment>
      <Status className="status" status={isOnline}>
        <BsFillCircleFill />
      </Status>
      <Image className="avatar" src={avatar} alt={name} width="48" />
      <Name className="name">{name}</Name>
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
