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
  fontSize: '12px',
  textAlign: 'left'
};

const projectRunData = [
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
      const groupedTests = projectData.tests.reduce((acc, test) => {
        if (!acc[test.name]) {
          acc[test.name] = [];
        }
        acc[test.name].push(test);
        return acc;
      }, {});

      const filtered = Object.values(groupedTests).filter(tests =>
        tests.some(test => test.file.toLowerCase().includes(searchText.toLowerCase()))
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

  const getProjectRunData = (projectName) => {
    const project = projectRunData.find(p => p.project_name === projectName);
    return project ? project.latest_run : 'N/A';
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
            style={{ width: '500px', padding: '2px', marginBottom: '1px' }}
          />
          <div style={{ marginBottom: '10px' }}>
            <Text>Total tests: {projectData.tests.length}</Text>&nbsp; | &nbsp;
            <Text>Passed: {projectData.tests.filter(test => test.status === 'passed').length}</Text>&nbsp; | &nbsp;
            <Text>Failed: {projectData.tests.filter(test => test.status === 'failed').length}</Text>&nbsp; | &nbsp;
            <Text>Total Time: {projectData.end - projectData.start} ms</Text>
          </div>
        </div>
        <div style={{ textAlign: 'right', marginBottom: '10px' }}>
          <Text strong>Run Time: {getProjectRunData(projectName)}</Text>
        </div>
        <List
          dataSource={filteredTests}
          renderItem={tests => (
            <Collapse
              bordered={false}
              expandIcon={({ isActive }) => isActive ? null : <span></span>}
              collapseIcon={({ isActive }) => isActive ? null : <span>-</span>}
            >
              <Panel
                header={
                  <div style={projectInfoStyle}>
                    <Text style={projectNameStyle}>{tests[0].file}</Text>
                    {getStatusIcon(tests.some(test => test.status === 'failed') ? 'failed' : 'passed')}
                  </div>
                }
                key={tests[0].uuid}
                style={listItemStyle}
                extra={
                  <Button type="link">
                    <Link to={`/test-details/${encodeURIComponent(tests[0].name)}/${encodeURIComponent(tests[0].file)}`} style={{ fontWeight: 'bold', color: '#000' }}>More</Link>
                  </Button>
                }
              >
                {tests.map(test => (
                  <div key={test.uuid} style={collapseContentStyle}>
                    <Text strong style={{ fontSize: '18px' }}>{test.name}</Text><br />
                    <Text>Status: {test.status}</Text><br />
                    <Text>Line: {test.line}</Text><br />
                  </div>
                ))}
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
