import React, { ReactNode } from 'react';

import { Title, Card, Content } from './styles';

interface LayoutProps {
  children: ReactNode;
  title: string;
  color: string;
}



function LayoutCard({ children, title, color }: LayoutProps) {
  const colors = {
    backgroundColor: color || 'orange',
    borderColor: color || 'orange'
  }
  return (
    <>
      <Card style={colors}>
        <Title>
          <p>{title}</p>
        </Title>
        <Content>
          {children}
        </Content>

      </Card>
    </>
  );
}

export default LayoutCard;
