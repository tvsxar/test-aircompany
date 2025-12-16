import { Ticket, Filters } from "../../types/types";

const mockTickets: Ticket[] = [
    {
        id: "1",
        carrier: "S7",
        price: 100,
        segments: [
            { origin: "WAW", destination: "NYC", date: "2025-12-11T10:00:00.000Z", stops: ["HEL"], duration: 100 },
            { origin: "NYC", destination: "WAW", date: "2025-12-11T18:00:00.000Z", stops: [], duration: 220 },
        ]
    },
    {
        id: "2",
        carrier: "S3",
        price: 110,
        segments: [
            { origin: "WAW", destination: "NYC", date: "2025-11-11T12:00:00.000Z", stops: [], duration: 160 },
            { origin: "NYC", destination: "WAW", date: "2025-11-11T20:00:00.000Z", stops: ["HEL", "RMO"], duration: 200 },
        ]
    }
];

function getDisplayedTickets(tickets: Ticket[], filters: Filters) {
    const sortedTickets =
        filters.sort === "cheapest"
            ? [...tickets].sort((a, b) => a.price - b.price)
            : [...tickets].sort(
                (a, b) =>
                    a.segments[0].duration + a.segments[1].duration -
                    (b.segments[0].duration + b.segments[1].duration)
            );

    return sortedTickets.filter((ticket) =>
        !filters.stops.length
            ? true
            : filters.stops.some(
                (stop) =>
                    ticket.segments[0].stops.length === stop &&
                    ticket.segments[1].stops.length === stop
            )
    );
}

describe("TicketsPage logic", () => {
    test("sorts tickets by cheapest", () => {
        const filters: Filters = { stops: [], sort: "cheapest" };
        const result = getDisplayedTickets(mockTickets, filters);
        expect(result[0].price).toBeLessThanOrEqual(result[1].price);
    });

    test("sorts tickets by fastest", () => {
        const filters: Filters = { stops: [], sort: "fastest" };
        const result = getDisplayedTickets(mockTickets, filters);
        const duration0 = result[0].segments[0].duration + result[0].segments[1].duration;
        const duration1 = result[1].segments[0].duration + result[1].segments[1].duration;
        expect(duration0).toBeLessThanOrEqual(duration1);
    });

    test("filters tickets by stops", () => {
        const filters: Filters = { stops: [0], sort: "cheapest" };
        const result = getDisplayedTickets(mockTickets, filters);
        expect(result.every(ticket =>
            ticket.segments.some(seg => seg.stops.length === 0)
        )).toBe(true);
    });
});
