// ProjectTests.js

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Layout, List, Typography, Input, Collapse, Button } from 'antd';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

const { Content } = Layout;
const { Text, Title } = Typography;
const { Search } = Input;
const { Panel } = Collapse;

const contentStyle = {
  textAlign: 'center',
  minHeight: 'calc(100vh - 60px)',
  lineHeight: '1.5',
  color: '#000',
  backgroundColor: '#f2f2f2',
  padding: '20px',
};

const listContainerStyle = {
  maxWidth: '1200px',
  margin: '0px auto',
  padding: '20px',
  border: '1px solid #d9d9d9',
  borderRadius: '8px',
  backgroundColor: '#fff',
};

const listItemStyle = {
  marginBottom: '10px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '5px',
};

const projectInfoStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  backgroundColor: '#fff',
  borderBottom: '1px solid #d9d9d9',
};

const projectNameStyle = {
  color: '#1e1f21',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '18px',
};

const statusStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  color: '#000',
  fontWeight: 'bold',
  padding: '10px 20px',
  backgroundColor: '#fff',
};

const collapseContentStyle = {
  padding: '20px',
  fontSize: '12px'
};

const ProjectTests = () => {
  const { projectName } = useParams();
  const [projectData, setProjectData] = useState(null);
  const [filteredTests, setFilteredTests] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    setProjectData(mockProjectData);
  }, [projectName]);

  useEffect(() => {
    if (projectData) {
      const filtered = projectData.tests.filter(test =>
        test.file.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredTests(filtered);
    }
  }, [projectData, searchText]);

  const getStatusIcon = (status) => {
    return status === 'passed' ? <CheckCircleOutlined style={{ color: 'green' }} /> : <CloseCircleOutlined style={{ color: 'red' }} />;
  };

  const handleSearch = (value) => {
    setSearchText(value);
  };

  if (!projectData) {
    return <Content style={contentStyle}>Loading...</Content>;
  }

  return (
    <Content style={contentStyle}>
      <Title level={2}>Project: {projectName}</Title>
      <div style={listContainerStyle}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Search
            placeholder="Search tests..."
            allowClear
            onChange={e => handleSearch(e.target.value)}
            style={{ width: '500px', padding: '2px', marginBottom: '10px' }}
          />
          <div>
            <Text>Total tests: {projectData.tests.length}</Text>&nbsp; | &nbsp;
            <Text>Passed: {projectData.tests.filter(test => test.status === 'passed').length}</Text>&nbsp; | &nbsp;
            <Text>Failed: {projectData.tests.filter(test => test.status === 'failed').length}</Text>&nbsp; | &nbsp;
            <Text>Total Time: {projectData.end - projectData.start} ms</Text>
          </div>
        </div>
        <List
          dataSource={filteredTests}
          renderItem={item => (
            <Collapse
              bordered={false}
              expandIcon={({ isActive }) => isActive ? null : <span></span>}
              collapseIcon={({ isActive }) => isActive ? null : <span>-</span>}
            >
              <Panel
                header={
                  <div style={projectInfoStyle}>
                    <Text style={projectNameStyle}>{item.file}</Text>
                    {getStatusIcon(item.status)}
                  </div>
                }
                key={item.uuid}
                style={listItemStyle}
                extra={
                  <Button type="link">
                    <Link to={`/test-details/${encodeURIComponent(item.name)}/${encodeURIComponent(item.file)}`} style={{ fontWeight: 'bold', color: '#000' }}>More</Link>
                  </Button>
                }
              >
                <div style={collapseContentStyle}>
                  <Text strong>{item.name}</Text><br />
                  <Text>Status: {item.status}</Text><br />
                  <Text>File: {item.file}</Text><br />
                  <Text>Line: {item.line}</Text><br />
                </div>
              </Panel>
            </Collapse>
          )}
        />
      </div>
    </Content>
  );
};

export default ProjectTests;


const mockProjectData = {
  "start": 1721050735409,
  "end": 1721050735429,
  "tests": [
    {
      "file": "global/specs/cards/test_cards_block_case_input_without_rights.spec.ts",
      "uuid": "1d36c65c-7b07-478b-b5f4-e0b7d945a2d2",
      "name": "Проверяет, что поле Дело блокируется при редактировании карточки, если у пользователя нет прав",
      "status": "failed",
      "line": "global/specs/cards/test_cards_block_case_input_without_rights.spec.ts:82"
    },
    {
      "file": "global/specs/cards/test_cards_block_journal_input_without_rights.spec.ts",
      "uuid": "1bd879f6-7ec8-49db-a143-f0dd71d2f4d3",
      "name": "Проверяет, что поле Журнал блокируется при редактировании карточки, если у пользователя нет прав",
      "status": "passed",
      "line": "global/specs/cards/test_cards_block_journal_input_without_rights.spec.ts:66"
    },
    {
      "file": "global/specs/cards/test_cards_block_journal_input_without_rights.spec.ts",
      "uuid": "1bd879f6-7ec8-49db-a143-f0dd71d2f4d3",
      "name": "Проверяет, что поле Журнал блокируется при редактировании карточки, если у пользователя нет прав",
      "status": "passed",
      "line": "global/specs/cards/test_cards_block_journal_input_without_rights.spec.ts:89"
    }
  ]
};