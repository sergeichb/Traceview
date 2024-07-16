import React, { useEffect, useState } from 'react';
import { Layout, List, Typography } from 'antd';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Content } = Layout;
const { Text, Title } = Typography;

const contentStyle = {
  textAlign: 'center',
  minHeight: 'calc(100vh - 60px)',
  lineHeight: '1.5',
  color: '#000',
  backgroundColor: '#f2f2f2',
  padding: '20px',
};

const listWrapperStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '20px',
  border: '1px solid #d9d9d9',
  borderRadius: '8px',
  backgroundColor: '#fff',
};

const listContainerStyle = {
  margin: '0 auto',
};

const listItemStyle = {
  textAlign: 'left',
  padding: '20px',
  backgroundColor: '#fff',
  borderRadius: '5px',
  marginBottom: '10px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '22px',
};

const projectInfoStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
};

const projectLinkStyle = {
  color: '#1e1f21',
  cursor: 'pointer',
  fontWeight: 'bold',
  marginRight: '30px',
  fontSize: '18px',
};

const statusStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  color: '#000',
  fontWeight: 'bold',
};

const data = [
  {
    project_name: "pu_v5",
    latest_run: "03.07.2024 10:50",
    status: "failed"
  },
  {
    project_name: "rm_v5",
    latest_run: "13.04.2024 10:10",
    status: "passed"
  },
  {
    project_name: "web_odg",
    latest_run: "12.02.2024 00:30",
    status: "passed"
  }
];

const AppContent = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(data); 
  }, []);

  const getStatusIcon = (status) => {
    return status === 'passed' ? <CheckCircleOutlined style={{ color: 'green' }} /> : <CloseCircleOutlined style={{ color: 'red' }} />;
  };

  return (
    <Content style={contentStyle}>
      <Title level={2}>Projects</Title>
      <div style={listWrapperStyle}>
        <div style={listContainerStyle}>
          <List
            dataSource={projects}
            renderItem={item => (
              <List.Item style={listItemStyle}>
                <div style={projectInfoStyle}>
                  <Link to={`/project/${item.project_name}`}>
                    <Text style={projectLinkStyle}>
                      {item.project_name}
                    </Text>
                  </Link>
                  <Text style={{ fontWeight: 'bold', color: '#000' }}>{item.latest_run}</Text>
                </div>
                <div style={statusStyle}>
                  <Text>Status: {item.status}</Text>
                  {getStatusIcon(item.status)}
                </div>
              </List.Item>
            )}
          />
        </div>
      </div>
    </Content>
  );
};

export default AppContent;
