import { Avatar } from "./Avatar";

const users = [
  {
    address: "0x1",
    badgesEarned: 2,
  },
  {
    address: "0x2",
    badgesEarned: 1,
  },
  {
    address: "0x3",
    badgesEarned: 3,
  },
  {
    address: "0x4",
    badgesEarned: 1,
  },
  {
    address: "0x5",
    badgesEarned: 2,
  },
  {
    address: "0x6",
    badgesEarned: 3,
  },
  {
    address: "0x7",
    badgesEarned: 4,
  },
];
export const UserAvatars = () => {
  return (
    <div className="flex justify-between">
      {users.map((user) => (
        <Avatar address={user.address} badgesEarned={user.badgesEarned} />
      ))}
    </div>
  );
};
