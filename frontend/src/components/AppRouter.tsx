import TicketInfoPage from '../pages/TicketInfoPage/TicketInfoPage';
import TicketsPage from '../pages/TicketsPage/TicketsPage';
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
