import { ProfileList } from './profile/ProfileList';
import users from '../user.json';
import { Stats } from './statistics/stats';
import data from '../data.json';
import { FriendList } from './friend-list/FriendList';
import friends from '../friends.json';
import { Transactions } from './transactions/Transactions';
import transactions from '../transactions.json';
export const App = () => {
  return (
    <div>
      <ProfileList items={users} />
      <Stats title="Statistics" data={data} />
      <FriendList friends={friends} />
      <Transactions items={transactions} />
    </div>
  );
};
