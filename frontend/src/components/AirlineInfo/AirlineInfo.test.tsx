import { render, screen } from "@testing-library/react";
import AirlineInfo from "./AirlineInfo";
import { Ticket } from "../../types/types";

const mockTicket: Ticket = {
    id: "1",
    carrier: "SU",
    price: 100,
    segments: [
        { origin: "WAW", destination: "NYC", date: "2025-12-11T10:00:00.000Z", stops: [], duration: 120 },
        { origin: "NYC", destination: "WAW", date: "2025-12-11T18:00:00.000Z", stops: [], duration: 120 },
    ]
}

describe('AirlineInfo component', () => {
    let asFragment: () => DocumentFragment;

    beforeEach(() => {
        const renderResult = render(<AirlineInfo ticket={mockTicket} />);
        asFragment = renderResult.asFragment;
    })

    test('renders correct carrier name', () => {
        expect(screen.getByText(`${mockTicket.carrier} Airlines`)).toBeInTheDocument();
    });

    test('matches snapshot', () => {
        expect(asFragment()).toMatchSnapshot();
    });
})
