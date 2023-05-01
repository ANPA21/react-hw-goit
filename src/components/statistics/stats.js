import PropTypes from 'prop-types';
import {
  StatTitle,
  Statistics,
  StatList,
  StatListItem,
  ItemLabel,
  ItemInfo,
} from './Stats.styled';
export const Stats = ({ title, data }) => {
  return (
    <Statistics className="statistics">
      {title && <StatTitle className="title">{title}</StatTitle>}

      <StatList className="stat-list">
        {data.map((item, index) => (
          <StatListItem className="label" key={item.id} id={index}>
            <ItemLabel className="label">{item.label}</ItemLabel>
            <ItemInfo className="percentage">{item.percentage}%</ItemInfo>
          </StatListItem>
        ))}
      </StatList>
    </Statistics>
  );
};

Stats.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
