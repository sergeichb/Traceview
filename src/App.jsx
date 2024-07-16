import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppHeader from './components/layout/AppHeader';
import AppContent from './components/layout/AppContent';
import ProjectTests from './components/layout/ProjectTests';
import TestDetails from './components/layout/TestDetails'; 

function App() {
  return (
    <Router>
      <AppHeader />
      <Routes>
        <Route path="/" element={<AppContent />} />
        <Route path="/project/:projectName" element={<ProjectTests />} />
        <Route path="/test-details/:testName/:testFile" element={<TestDetails projectData={mockProjectData} />} />
      </Routes>
    </Router>
  );
}

export default App;


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