import { all } from "redux-saga/effects";
import { ticketsWatcher } from "./ducks/tickets";

export default function* rootSaga() {
  yield all([ticketsWatcher()]);
}
