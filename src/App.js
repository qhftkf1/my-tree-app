import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>        
  );
}

export default App;
// Router를 사용하는 이유
/* 
 React는 아래와 같은 이슈가 있다. 
 1) React는 SPA이므로 새로고침을 하면 현재 페이지의 상태를 잃는다. 
 2) 브라우저의 기본 기능이 페이지 이동 기능이 상실된다. 
 이를 해결하기 위해 React Router를 사용한다. 
*/