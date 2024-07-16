import React from 'react';
import { useParams } from 'react-router-dom';
import { Layout, Typography } from 'antd';

const { Content } = Layout;
const { Title, Text } = Typography;

const contentStyle = {
  textAlign: 'center',
  minHeight: 'calc(100vh - 60px)',
  lineHeight: '1.5',
  color: '#000',
  backgroundColor: '#f2f2f2',
  padding: '20px',
};

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '20px',
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
};

const TestDetails = ({ projectData }) => {
  const { testName, testFile } = useParams();

  const test = projectData.tests.find(test => test.name === decodeURIComponent(testName) && test.file === decodeURIComponent(testFile));

  if (!test) {
    return (
      <Content style={contentStyle}>
        <div style={containerStyle}>
          <Title level={4}>Test not found</Title>
        </div>
      </Content>
    );
  }

  return (
    <Content style={contentStyle}>
      <div style={containerStyle}>
        <Title level={2}>{test.name}</Title>
        <Text>File: {test.file}</Text><br />
        <Text>Status: {test.status}</Text><br />
      </div>
    </Content>
  );
};

export default TestDetails;
