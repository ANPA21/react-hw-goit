import PropTypes from 'prop-types';
import {
  Desc,
  Wrapper,
  Image,
  DescText,
  DescTitle,
  Stats,
  StatsItem,
  StatsTitle,
  StatsText,
} from './profile.styled.js';
export const Profile = ({
  item: { tag, username, location, avatar, stats },
}) => {
  return (
    <Wrapper className="profile">
      <Desc className="description">
        <Image src={avatar} alt={username} className="avatar" />
        <DescTitle className="name">{username}</DescTitle>
        <DescText className="tag">@{tag}</DescText>
        <DescText className="location">{location}</DescText>
      </Desc>

      <Stats className="stats">
        <StatsItem>
          <StatsTitle className="label">Followers</StatsTitle>
          <StatsText className="quantity"> {stats.followers}</StatsText>
        </StatsItem>
        <StatsItem>
          <StatsTitle className="label">Views</StatsTitle>
          <StatsText className="quantity"> {stats.views}</StatsText>
        </StatsItem>
        <StatsItem>
          <StatsTitle className="label">Likes</StatsTitle>
          <StatsText className="quantity"> {stats.likes}</StatsText>
        </StatsItem>
      </Stats>
    </Wrapper>
  );
};

Profile.propTypes = {
  item: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
