import { useState } from "react";
import { Avatar } from "./Avatar";
import { ModalDialog } from "./ModalDialog";

interface User {
  address: string;
  badgesEarned: number;
}
const users: User[] = [
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
  {
    address: "0x1123",
    badgesEarned: 2,
  },
  {
    address: "0x2123",
    badgesEarned: 1,
  },
  {
    address: "0x3123",
    badgesEarned: 3,
  },
  {
    address: "0x4123",
    badgesEarned: 3,
  },
  {
    address: "0x5123",
    badgesEarned: 2,
  },
  {
    address: "0x6123",
    badgesEarned: 3,
  },
  {
    address: "0x7123",
    badgesEarned: 4,
  },
];
export const UserAvatars = () => {
  const [activeUser, setActiveUser] = useState<User | null>(null);

  return (
    <div className="flex justify-between flex-wrap gap-x-2 gap-y-12">
      <ModalDialog
        isOpen={!!activeUser}
        closeModal={() => setActiveUser(null)}
      />

      {users.map((user) => (
        <div onClick={() => setActiveUser(user)}>
          <Avatar address={user.address} badgesEarned={user.badgesEarned} />
        </div>
      ))}
    </div>
  );
};
