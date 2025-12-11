import { call, put, takeLatest } from "redux-saga/effects";
import { setTickets, setLoading, setError } from "./ticketsSlice";
import { fetchSearchId, fetchTickets } from "./mockTicketsApi";

function* fetchTicketsWorker(action) {
  try {
    yield put(setLoading(true));
    const searchId = yield call(fetchSearchId);

    let allTickets = [];
    let done = false;

    while (!done) {
      try {
        const { tickets, stop } = yield call(fetchTickets, searchId);
        console.log("New tickets:", tickets);
        allTickets = [...allTickets, ...tickets];
        done = stop;
      } catch (err) {
        console.warn("One tickets request failed, retrying...");
      }
    }

    yield put(setTickets(allTickets));
  } catch (error) {
    yield put(setError(error.message));
  } finally {
    yield put(setLoading(false));
  }
}

export function* ticketsWatcher() {
  console.log("ticketsWatcher STARTED");
  yield takeLatest("tickets/fetchTickets", fetchTicketsWorker);
}
