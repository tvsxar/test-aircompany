const ticketsMockStore = {};

export const fetchSearchId = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`search_${Date.now()}`), 200);
  });
};

export const fetchTickets = async (searchId) => {
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
            price: Math.floor(Math.random() * 100) * 10,
            carrier: ["SU", "AF", "BA", "LH"][Math.floor(Math.random() * 4)],
            segments: [
              {
                origin: "WAW",
                destination: "NYC",
                date: "2025-12-11T10:00:00.000Z",
                stops: ["HEL", "PAR"].slice(0, Math.floor(Math.random() * 2)),
                duration: Math.floor(Math.random() * 500) + 60,
              },
              {
                origin: "NYC",
                destination: "MOW",
                date: "2025-12-11T18:00:00.000Z",
                stops: ["AMS", "LON"].slice(0, Math.floor(Math.random() * 2)),
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
