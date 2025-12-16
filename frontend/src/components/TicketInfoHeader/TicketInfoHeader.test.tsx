import { render, screen } from "@testing-library/react";
import TicketInfoHeader from "./TicketInfoHeader";
import { Ticket } from "../../types/types";

const mockTicket: Ticket = {
    id: "1",
    carrier: "S7",
    price: 100,
    segments: [
        { origin: "WAW", destination: "NYC", date: "2025-12-11T10:00:00.000Z", stops: ["HEL"], duration: 100 },
        { origin: "NYC", destination: "WAW", date: "2025-12-11T18:00:00.000Z", stops: [], duration: 220 },
    ]
}

describe('TicketInfoHeader component', () => {
    let asFragment: () => DocumentFragment;

    beforeEach(() => {
        const renderResult = render(<TicketInfoHeader ticket={mockTicket} />);
        asFragment = renderResult.asFragment;
    })

    test('renders ticket price', () => {
        expect(screen.getByText(`$${mockTicket.price}`)).toBeInTheDocument();
    });

    test('renders airline name', () => {
        expect(screen.getByText(`${mockTicket.carrier} Airlines`)).toBeInTheDocument();
    });

    test('renders Buy Ticket button', () => {
        expect(screen.getByRole('button', { name: /купить билет/i })).toBeInTheDocument();
    });

    test("matches snapshot", () => {
        expect(asFragment()).toMatchSnapshot();
    });
})