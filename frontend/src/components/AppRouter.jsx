import TicketInfoPage from '../pages/TicketInfoPage';
import TicketsPage from '../pages/TicketsPage';
import { Routes, Route } from 'react-router-dom';

function AppRouter() {
  return (
    <Routes>
      <Route path='/' element={<TicketsPage />} />
      
      <Route path='/ticket/:id' element={<TicketInfoPage />} />
    </Routes>
  )
}

export default AppRouter
