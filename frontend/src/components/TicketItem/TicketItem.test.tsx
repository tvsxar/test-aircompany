import { render, screen } from "@testing-library/react";
import TicketItem from "./TicketItem";
import { Ticket } from "../../types/types";
import formatTime from '../../utils/formatTime';

const mockTicket: Ticket = {
    id: "1",
    carrier: "S7",
    price: 100,
    segments: [
        { origin: "WAW", destination: "NYC", date: "2025-12-11T10:00:00.000Z", stops: ["HEL"], duration: 100 },
        { origin: "NYC", destination: "WAW", date: "2025-12-11T18:00:00.000Z", stops: [], duration: 220 },
    ]
}

const formatStops = (stops: string[]) =>
    stops.length ? stops.join(", ") : "Без пересадок";

describe('TicketItem component', () => {
    let asFragment: () => DocumentFragment;

    beforeEach(() => {
        const renderResult = render(<TicketItem ticket={mockTicket} />);
        asFragment = renderResult.asFragment;
    })

    test('renders ticket price', () => {
        expect(screen.getByText(`$${mockTicket.price}`)).toBeInTheDocument();
    });

    test('renders airline name', () => {
        expect(screen.getByText(`${mockTicket.carrier} Airlines`)).toBeInTheDocument();
    });

    test('renders flight origin and destinations', () => {
        mockTicket.segments.forEach(segment => {
            const routeText = `${segment.origin} → ${segment.destination}`;
            expect(screen.getByText(routeText)).toBeInTheDocument();
        })
    });

    test('renders flight time', () => {
        mockTicket.segments.forEach(segment => {
            const timeText = formatTime(segment.date, segment.duration);
            expect(screen.getByText(timeText)).toBeInTheDocument();
        })
    });

    test('renders flight duration', () => {
        mockTicket.segments.forEach(segment => {
            const durationText = `${Math.floor(segment.duration / 60)}ч ${segment.duration % 60}м`;
            expect(screen.getByText(durationText)).toBeInTheDocument();
        })
    });

    test('renders stops correctly', () => {
        mockTicket.segments.forEach(segment => {
            const stopsText = formatStops(segment.stops);
            expect(screen.getByText(stopsText)).toBeInTheDocument();
        })
    });

    test("matches snapshot", () => {
        expect(asFragment()).toMatchSnapshot();
    });
})
