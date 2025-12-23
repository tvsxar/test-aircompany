import { render, screen } from "@testing-library/react";
import TicketsFilter from "./TicketsFilter";
import { Filters } from "../../types/types";
import userEvent from "@testing-library/user-event";

describe('TicketFilter component', () => {
    const setFiltersMock = jest.fn();

    const initialFilters: Filters = { stops: [0, 2], sort: 'cheapest' };

    let asFragment: () => DocumentFragment;

    beforeEach(() => {
        setFiltersMock.mockClear();

        const renderResult = render(<TicketsFilter filters={initialFilters} setFilters={setFiltersMock} />);
        asFragment = renderResult.asFragment;
    });

    test('renders all checkboxes', () => {
        expect(screen.getByText("Количество пересадок")).toBeInTheDocument();

        expect(screen.getByLabelText("Прямой рейс")).toBeInTheDocument();
        expect(screen.getByLabelText("1 пересадка")).toBeInTheDocument();
        expect(screen.getByLabelText("2 пересадки")).toBeInTheDocument();
        expect(screen.getByLabelText("3 пересадки")).toBeInTheDocument();
    });

    test('checkboxes reflect initial filters', () => {
        expect(screen.getByLabelText("Прямой рейс")).toBeChecked();
        expect(screen.getByLabelText("2 пересадки")).toBeChecked();

        expect(screen.getByLabelText("1 пересадка")).not.toBeChecked();
        expect(screen.getByLabelText("3 пересадки")).not.toBeChecked();
    });

    test('clicking checkbox updates filters', async () => {
        const user = userEvent.setup();
        await user.click(screen.getByLabelText('1 пересадка'));
        await user.click(screen.getByLabelText("Прямой рейс"));

        expect(setFiltersMock.mock.calls[0][0]).toEqual({ stops: [0, 2, 1], sort: 'cheapest' });
        expect(setFiltersMock.mock.calls[1][0]).toEqual({ stops: [2, 1], sort: 'cheapest' });
    });

    test("matches snapshot", () => {
        expect(asFragment()).toMatchSnapshot();
    });
})
