import React from 'react';
import { useParams } from 'react-router-dom';
import { Layout, Typography, Collapse } from 'antd';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

const { Content } = Layout;
const { Title, Text } = Typography;
const { Panel } = Collapse;

const contentStyle = {
  textAlign: 'left',
  minHeight: 'calc(100vh - 60px)',
  lineHeight: '1.5',
  color: '#000',
  backgroundColor: '#f2f2f2',
  padding: '20px',
};

const listContainerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '20px',
  border: '1px solid #d9d9d9',
  borderRadius: '8px',
  backgroundColor: '#fff',
};

const collapseContentStyle = {
  padding: '20px',
  fontSize: '14px',
  textAlign: 'left',
};

const stepHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontWeight: 'bold',
  fontSize: '16px',
};

const TestDetails = ({ projectData }) => {
  const { uuid } = useParams();

  if (!projectData) {
    return <Content style={contentStyle}>Loading...</Content>;
  }

  const test = projectData.tests.find(test => test.uuid === uuid);

  if (!test) {
    return <Content style={contentStyle}>Test not found</Content>;
  }

  const getStatusIcon = (status) => {
    return status === 'passed' ? <CheckCircleOutlined style={{ color: 'green' }} /> : <CloseCircleOutlined style={{ color: 'red' }} />;
  };

  return (
    <Content style={contentStyle}>
      <div style={listContainerStyle}>
        <Title level={2}>{test.name}</Title>
        <Text strong>Status: {test.status}</Text><br />
        <Text strong>Line: {test.line}</Text><br />
        <Title level={3}>Steps:</Title>
        <Collapse>
          {test.steps.map((step, index) => (
            <Panel
              header={
                <div style={stepHeaderStyle}>
                  <span>{step.name}</span>
                  {getStatusIcon(step.status)}
                </div>
              }
              key={index}
              style={collapseContentStyle}
            >
              <div>
                <Text>Status: {step.status}</Text><br />
                <Text>Stage: {step.stage}</Text><br />
                <Text>Start: {new Date(step.start).toLocaleString()}</Text><br />
                <Text>Stop: {new Date(step.stop).toLocaleString()}</Text><br />
                <Text>Duration: {step.stop - step.start} ms</Text>
              </div>
            </Panel>
          ))}
        </Collapse>
      </div>
    </Content>
  );
};

export default TestDetails;
