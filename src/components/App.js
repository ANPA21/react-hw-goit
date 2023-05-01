import { ProfileList } from './ProfileList/ProfileList';
import users from '../user.json';
import { Stats } from './Statistics/stats';
import data from '../data.json';
import { FriendList } from './FriendList/FriendList';
import friends from '../friends.json';
import { Transactions } from './transactions/Transactions';
import transactions from '../transactions.json';
import { GlobalStyle } from './GlobalStyle';
export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <ProfileList items={users} />
      <Stats title="Statistics" data={data} />
      <FriendList friends={friends} />
      <Transactions items={transactions} />
    </div>
  );
};
