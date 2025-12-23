import { render, screen } from "@testing-library/react";
import TicketsSortButtons from "./TicketsSortButtons";
import { Filters } from "../../types/types";
import userEvent from "@testing-library/user-event";

describe('TicketsSortButtons component', () => {
    const setFiltersMock = jest.fn();

    const initialFilters: Filters = { stops: [0, 2], sort: 'cheapest' };

    let asFragment: () => DocumentFragment;

    beforeEach(() => {
        setFiltersMock.mockClear();

        const renderResult = render(<TicketsSortButtons filters={initialFilters} setFilters={setFiltersMock} />);
        asFragment = renderResult.asFragment;
    });

    test('renders all buttons', () => {
        expect(screen.getByRole('button', { name: /самый дешёвый/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /самый быстрый/i })).toBeInTheDocument();
    });

    test('pressed button equals to sort filter', () => {
        expect(screen.getByText(/самый дешёвый/i)).toHaveAttribute('aria-pressed', 'true');
        expect(screen.getByText(/самый быстрый/i)).toHaveAttribute('aria-pressed', 'false');
    });

    test('clicking active button does not call setFilters', async () => {
        const user = userEvent.setup();
        await user.click(screen.getByText(/самый дешёвый/i));

        expect(setFiltersMock).not.toHaveBeenCalled();
    });

    test('clicking inactive button updates filters', async () => {
        const user = userEvent.setup();
        await user.click(screen.getByText(/самый быстрый/i));

        expect(setFiltersMock).toHaveBeenCalledWith({ stops: [0, 2], sort: 'fastest' });
    });

    test("matches snapshot", () => {
        expect(asFragment()).toMatchSnapshot();
    });
})