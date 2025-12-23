import { render, screen } from "@testing-library/react";
import FlightInfo from "./FlightInfo";
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

describe('FlightInfo component', () => {
    let asFragment: () => DocumentFragment;

    beforeEach(() => {
        const renderResult = render(<FlightInfo ticket={mockTicket} />);
        asFragment = renderResult.asFragment;
    })

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

    test('renders stop Chips', () => {
        mockTicket.segments.forEach(segment => {
            segment.stops.forEach(stop => {
                const stopChip = `Пересадка: ${stop}`;
                expect(screen.getByText(stopChip)).toBeInTheDocument();
            })
        })
    });

    test('matches snapshot', () => {
        expect(asFragment()).toMatchSnapshot();
    });
})

describe('FlightInfo component - loading state', () => {
    test('shows loading text when ticket is not provided', () => {
        render(<FlightInfo ticket={undefined as any} />);
        expect(screen.getByText(/Loading ticket info.../i)).toBeInTheDocument();
    });
});
