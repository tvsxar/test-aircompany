import { Ticket } from "../../types/types";

const mockTickets: Ticket[] = [
  { 
    id: "1", carrier: "S7", price: 100, segments: [
      { origin: "WAW", destination: "NYC", date: "2025-12-11T10:00:00.000Z", stops: ["HEL"], duration: 100 },
      { origin: "NYC", destination: "WAW", date: "2025-12-11T18:00:00.000Z", stops: [], duration: 220 }
    ] 
  },
  { 
    id: "2", carrier: "S3", price: 110, segments: [
      { origin: "WAW", destination: "NYC", date: "2025-11-11T12:00:00.000Z", stops: [], duration: 160 },
      { origin: "NYC", destination: "WAW", date: "2025-11-11T20:00:00.000Z", stops: ["HEL", "RMO"], duration: 200 }
    ] 
  }
];

function getSelectedTicket(tickets: Ticket[], id: string | undefined): Ticket | null {
  if (!id) return null;
  return tickets.find(ticket => ticket.id === id) || null;
}

describe("TicketInfoPage logic", () => {
  test("returns the correct ticket by id", () => {
    expect(getSelectedTicket(mockTickets, "1")?.id).toBe("1");
    expect(getSelectedTicket(mockTickets, "2")?.id).toBe("2");
  });

  test("returns null if id does not match", () => {
    expect(getSelectedTicket(mockTickets, "3")).toBeNull();
  });

  test("returns null if id is undefined", () => {
    expect(getSelectedTicket(mockTickets, undefined)).toBeNull();
  });
});