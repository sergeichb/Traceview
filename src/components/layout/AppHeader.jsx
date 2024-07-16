import React from 'react';
import { Layout } from 'antd';

const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  textAlign: 'center',
  color: '#000',  
  height: 130,
  paddingInline: 128,
  lineHeight: '64px',
  backgroundColor: '#f2f2f2',
};

const logoStyle = {
  height: '100px',  
  objectFit: 'contain',  
};

export default function AppHeader() {
  return (
    <Layout.Header style={headerStyle}>
      <img src="/norsi.svg" alt="Company Logo" style={logoStyle} />
    </Layout.Header>
  );
}
