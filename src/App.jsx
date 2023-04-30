import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import FriendList from "./components/FriendList/FriendList";
import Profile from "./components/Profile/profile.jsx";

import friends from "./components/FriendList/friends.json";
import users from "./components/Profile/user.json";
import transactions from "./components/TransactionHistory/Transactions.json";

function App() {
  return (
    <div>
      <Profile user={users} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
