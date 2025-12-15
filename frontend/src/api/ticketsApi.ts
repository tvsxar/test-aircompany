interface TicketsMockStoreType {
  [searchId: string]: {
    callCount: number;
  };
}

interface Ticket {
  id: string,
  carrier: string,
  price: number,
  segments: {
    date: string,
    destination: string,
    duration: number,
    origin: string,
    stops: string[]
  }[]
}

interface FetchTicketsResponse {
  tickets: Ticket[],
  stop: boolean
}

const ticketsMockStore: TicketsMockStoreType = {};

export const fetchSearchId = async (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`hg6${Date.now()}`), 200);
  });
};

export const fetchTickets = async (searchId: string): Promise<FetchTicketsResponse> => {
  if (!ticketsMockStore[searchId]) {
    ticketsMockStore[searchId] = { callCount: 0 };
  }

  return new Promise((resolve, reject) => {
    const fail = Math.random() < 0.2;

    setTimeout(() => {
      if (fail) {
        reject(new Error("Network Error"));
        return;
      }

      const store = ticketsMockStore[searchId];
      store.callCount++;

      resolve({
        tickets: [
          {
            id: `${searchId}_${store.callCount}_${Math.floor(
              Math.random() * 10000
            )}`,
            price: Math.floor(Math.random() * 100) * 10,
            carrier: ["SU", "AF", "BA", "LH"][Math.floor(Math.random() * 4)],
            segments: [
              {
                origin: "WAW",
                destination: "NYC",
                date: "2025-12-11T10:00:00.000Z",
                stops: ["HEL", "PAR", "BUH"].slice(
                  0,
                  Math.floor(Math.random() * 4)
                ),
                duration: Math.floor(Math.random() * 500) + 60,
              },
              {
                origin: "NYC",
                destination: "WAW",
                date: "2025-12-11T18:00:00.000Z",
                stops: ["AMS", "LON", "CZH"].slice(
                  0,
                  Math.floor(Math.random() * 4)
                ),
                duration: Math.floor(Math.random() * 500) + 60,
              },
            ],
          },
        ],
        stop: store.callCount >= 10,
      });
    }, 500);
  });
};
