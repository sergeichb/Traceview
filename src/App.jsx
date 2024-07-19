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
        <Route path="/test-details/:testName/:testFile/:uuid" element={<TestDetails projectData={mockProjectData} />} />
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
      "line": "global/specs/cards/test_cards_block_case_input_without_rights.spec.ts:82",
      "steps": [
        {
          "status": "passed",
          "stage": "pending",
          "start": 1702895902170,
          "name": "locator.getByTestId('protocols').locator('.fx-grid-row').filter({ hasText: 'FTP' }).isVisible",
          "stop": 1702895902172
        },
        {
          "status": "passed",
          "stage": "pending",
          "start": 1702895902173,
          "name": "locator.getByTestId('protocols').locator('.fx-grid-row').filter({ hasText: 'FTP' }).click",
          "stop": 1702895902207
        },
        {
          "status": "failed",
          "stage": "pending",
          "start": 1702895902208,
          "name": "page.reload",
          "stop": 1702895902258
        }
      ]
    },
    {
      "file": "global/specs/cards/test_cards_block_journal_input_without_rights.spec.ts",
      "uuid": "1bd879f6-7ec8-49db-a143-f0dd71d2f4d3",
      "name": "Проверяет, что поле Журнал блокируется при редактировании карточки, если у пользователя нет прав",
      "status": "passed",
      "line": "global/specs/cards/test_cards_block_journal_input_without_rights.spec.ts:66",
      "steps": [
        {
          "status": "passed",
          "stage": "pending",
          "start": 1702895902170,
          "name": "locator.getByTestId('protocols').locator('.fx-grid-row').filter({ hasText: 'FTP' }).isVisible",
          "stop": 1702895902172
        },
        {
          "status": "passed",
          "stage": "pending",
          "start": 1702895902173,
          "name": "locator.getByTestId('protocols').locator('.fx-grid-row').filter({ hasText: 'FTP' }).click",
          "stop": 1702895902207
        },
        {
          "status": "passed",
          "stage": "pending",
          "start": 1702895902208,
          "name": "page.reload",
          "stop": 1702895902258
        }
      ],
      "attachments": [
        {
          "name": "test_cards_storage_filter_state_from_toolbar_all-expected.png",
          "type": "image/png"
        },
        {
          "name": "test_cards_storage_filter_state_from_toolbar_all-actual.png",
          "type": "image/png"
        },
        {
          "name": "test_cards_storage_filter_state_from_toolbar_all-diff.png",
          "type": "image/png"
        }
      ]
    },
    {
      "file": "global/specs/cards/test_cards_block_journal_input_without_rights.spec.ts",
      "uuid": "1bd879f6-7ec8-49db-a143-f0dd71d2f4d3",
      "name": "Проверяет, что поле Журнал блокируется при редактировании карточки, если у пользователя нет прав",
      "status": "passed",
      "line": "global/specs/cards/test_cards_block_journal_input_without_rights.spec.ts:89",
      "steps": [
        {
          "status": "passed",
          "stage": "finished",
          "start": 1721050893994,
          "name": "Before Hooks",
          "stop": 1721050896566
        },
        {
          "status": "passed",
          "stage": "finished",
          "start": 1721050896572,
          "name": "locator.getByTestId('globalTabPanel').locator('.fx",
          "stop": 1721050897974
        },
        {
          "status": "passed",
          "stage": "finished",
          "start": 1721050897973,
          "name": "locator.getByTestId('globalTabPanel').locator('.fx",
          "stop": 1721050898157
        },
        {
          "status": "passed",
          "stage": "finished",
          "start": 1721050898158,
          "name": "locator.getByTestId('UsersTab').getByTestId('creat",
          "stop": 1721050898199
        },
        {
          "status": "passed",
          "stage": "finished",
          "start": 1721050898200,
          "name": "locator.all(.fx-menu >> .fx-menu-btn)",
          "stop": 1721050898221
        },
        {
          "status": "passed",
          "stage": "finished",
          "start": 1721050898222,
          "name": "locator.textContent(.fx-menu >> .fx-menu-btn >> nt",
          "stop": 1721050898235
        },
        {
          "status": "passed",
          "stage": "finished",
          "start": 1721050898235,
          "name": "locator.getAttribute(.fx-menu >> .fx-menu-btn >> n",
          "stop": 1721050898240
        },
        {
          "status": "passed",
          "stage": "finished",
          "start": 1721050898240,
          "name": "locator.textContent(.fx-menu >> .fx-menu-btn >> nt",
          "stop": 1721050898244
        },
        {
          "status": "passed",
          "stage": "finished",
          "start": 1721050898245,
          "name": "locator.click(.fx-menu >> .fx-menu-btn >> nth=1)",
          "stop": 1721050898290
        },
        {
          "status": "passed",
          "stage": "finished",
          "start": 1721050898291,
          "name": "locator.fill(.fx-form >> internal:has-text=\"Создан",
          "stop": 1721050898307
        },
        {
          "status": "passed",
          "stage": "finished",
          "start": 1721050898307,
          "name": "locator.fill(.fx-form >> internal:has-text=\"Создан",
          "stop": 1721050898333
        },
        {
          "status": "passed",
          "stage": "finished",
          "start": 1721050898333,
          "name": "locator.fill(.fx-form >> internal:has-text=\"Создан",
          "stop": 1721050898345
        },
        {
          "status": "passed",
          "stage": "finished",
          "start": 1721050898345,
          "name": "locator.click(.fx-form >> internal:has-text=\"Созда",
          "stop": 1721050898387
        },
        {
          "status": "passed",
          "stage": "finished",
          "start": 1721050898388,
          "name": "locator.all(ul.fx-list-container >> internal:role=",
          "stop": 1721050898392
        },
        {
          "status": "passed",
          "stage": "finished",
          "start": 1721050898393,
          "name": "locator.textContent(ul.fx-list-container >> intern",
          "stop": 1721050898397
        },
        {
          "status": "passed",
          "stage": "finished",
          "start": 1721050898397,
          "name": "locator.click(ul.fx-list-container >> internal:rol",
          "stop": 1721050898431
        },
        {
          "status": "passed",
          "stage": "finished",
          "start": 1721050898431,
          "name": "locator.click(.fx-form >> internal:has-text=\"Созда",
          "stop": 1721050898465
        },
        {
          "status": "passed",
          "stage": "finished",
          "start": 1721050898465,
          "name": "locator.click(.fx-form >> internal:has-text=\"Созда",
          "stop": 1721050898503
        },
        {
          "status": "passed",
          "stage": "finished",
          "start": 1721050898503,
          "name": "locator.setChecked(.fx-form >> internal:has-text=\"",
          "stop": 1721050898550
        }
      ]
    }
  ]
};