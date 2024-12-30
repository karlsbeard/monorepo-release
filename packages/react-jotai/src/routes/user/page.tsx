import { List } from "antd"
import styled from '@modern-js/runtime/styled';

const getAvatar = (users: Array<{ name: string; email: string }>) =>
  users.map((user) => ({
    ...user,
    avatar: `https://api.dicebear.com/7.x/pixel-art/svg?seed=${user.name}`,
  }));

const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border: 4px solid #0ef;
  border-radius: 50%;
`

const mockData = getAvatar([
  { name: "Thomas", email: "w.kccip@bllmfbgv.dm" },
  { name: "Chow", email: "f.lfqljnlk@ywoefljhc.af" },
  { name: "Bradley", email: "d.wfovsqyo@gpkcjwjgb.fr" },
  { name: "Davis", email: '"t.kqkoj@utlkwnpwk.nu' },
]);

export default function User() {
  return (
    <div>
      <List
        dataSource={mockData}
        renderItem={({ name, email, avatar }) => (
          <List.Item key={name}>
            <List.Item.Meta
              avatar={<Avatar src={avatar} />}
              title={name}
              description={email}
            ></List.Item.Meta>
          </List.Item>
        )}
      ></List>
    </div>
  );
}
