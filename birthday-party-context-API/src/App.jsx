import React, { useState } from 'react';
import { Button, Card, Col, Row } from 'antd';
import Account from './Account';
import { UserContext } from './UserContext';

const jack = {
  name: "Jack George",
  course: 'Full Stack Development'
}

const peter = {
  name: "Peter Parker",
  course: "DevOps"
}

function App() {
  const [user, setUser] = useState(jack);

  const changeUser = () => {
    if (user === jack) {
      setUser(peter);
    } else {
      setUser(jack);
    }
  }
  return (
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Profile name changes" bordered={false}>
          <UserContext.Provider value={user} >
            <Account />
          </UserContext.Provider>
          <Button type="primary" onClick={changeUser}>Change User</Button>
        </Card>
      </Col>
    </Row>
  )
}

export default App;