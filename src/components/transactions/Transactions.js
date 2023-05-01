import PropTypes from 'prop-types';
import {
  Column,
  Data,
  Table,
  TableBody,
  TableBodyRow,
  TableHead,
  TableHeader,
} from './Transactions.styled';
export const Transactions = ({ items }) => {
  return (
    <Table className="transaction-history">
      <TableHead>
        <Column>
          <TableHeader>Type</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Currency</TableHeader>
        </Column>
      </TableHead>

      <TableBody>
        {items.map((item, index) => (
          <TableBodyRow key={item.id}>
            <Data index={index}>{item.type}</Data>
            <Data index={index}>{item.amount}</Data>
            <Data index={index}>{item.currency}</Data>
          </TableBodyRow>
        ))}
      </TableBody>
    </Table>
  );
};
Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
