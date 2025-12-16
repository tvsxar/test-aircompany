import { render, screen } from "@testing-library/react";
import TicketsList from "./TicketsList";
import { Ticket } from "../../types/types";
import { BrowserRouter } from "react-router-dom";

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
]

describe('TicketsList component', () => {
    let asFragment: () => DocumentFragment;

    beforeEach(() => {
        const renderResult = render(
            <BrowserRouter>
                <TicketsList tickets={mockTickets} />
            </BrowserRouter>
        );
        asFragment = renderResult.asFragment;
    });

    test('render all tickets', () => {
        const links = screen.getAllByRole("link");
        expect(links).toHaveLength(mockTickets.length);
    });

    test('each ticket links to the correct ticket page', () => {
        const links = screen.getAllByRole("link");
        links.forEach((link, index) => {
            expect(link).toHaveAttribute('href', `/ticket/${mockTickets[index].id}`);
        });
    });

    test("matches snapshot", () => {
        expect(asFragment()).toMatchSnapshot();
    });
})