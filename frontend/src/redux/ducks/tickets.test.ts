import { runSaga } from "redux-saga";
import reducer, {
  setTickets,
  setLoading,
  setError,
  fetchTicketsWorker,
} from "./tickets";
import * as api from "../../api/ticketsApi";
import { Ticket } from "../../types/types";

const mockTickets: Ticket[] = [
  {
    id: "1",
    carrier: "S7",
    price: 100,
    segments: [
      {
        origin: "WAW",
        destination: "NYC",
        date: "2025-12-11T10:00:00.000Z",
        stops: ["HEL"],
        duration: 100,
      },
      {
        origin: "NYC",
        destination: "WAW",
        date: "2025-12-11T18:00:00.000Z",
        stops: [],
        duration: 220,
      },
    ],
  },
  {
    id: "2",
    carrier: "S3",
    price: 110,
    segments: [
      {
        origin: "WAW",
        destination: "NYC",
        date: "2025-11-11T12:00:00.000Z",
        stops: [],
        duration: 160,
      },
      {
        origin: "NYC",
        destination: "WAW",
        date: "2025-11-11T20:00:00.000Z",
        stops: ["HEL", "RMO"],
        duration: 200,
      },
    ],
  },
];

describe("tickets reducer", () => {
  test("setTickets sets tickets correctly", () => {
    const initialState = { tickets: [], loading: false, error: null };
    const action = setTickets(mockTickets);
    const state = reducer(initialState, action);
    expect(state.tickets).toEqual(mockTickets);
  });

  test("setLoading sets loading correctly", () => {
    const initialState = { tickets: [], loading: false, error: null };
    const action = setLoading(true);
    const state = reducer(initialState, action);
    expect(state.loading).toEqual(true);
  });

  test("setError sets error correctly", () => {
    const initialState = { tickets: [], loading: false, error: null };
    const action = setError("Error message");
    const state = reducer(initialState, action);
    expect(state.error).toBe("Error message");
  });
});

describe("tickets saga", () => {
  const fetchSearchIdMock = jest.spyOn(api, "fetchSearchId");
  const fetchTicketsMock = jest.spyOn(api, "fetchTickets");

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("fetchTicketsWorker success flow", async () => {
    fetchSearchIdMock.mockResolvedValue("search-123");
    fetchTicketsMock.mockResolvedValue({ tickets: mockTickets, stop: true });

    const dispatched: any[] = [];

    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      fetchTicketsWorker
    ).toPromise();

    expect(dispatched).toContainEqual(setLoading(true));
    expect(dispatched).toContainEqual(setTickets(mockTickets));
    expect(dispatched).toContainEqual(setLoading(false));
  });

  test("fetchTicketsWorker error flow", async () => {
    fetchSearchIdMock.mockRejectedValue(new Error("Network error"));

    const dispatched: any[] = [];

    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      fetchTicketsWorker
    ).toPromise();

    expect(dispatched).toContainEqual(setLoading(true));
    expect(dispatched).toContainEqual(setError("Network error"));
    expect(dispatched).toContainEqual(setLoading(false));
  });
});
