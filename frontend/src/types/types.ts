export interface Ticket {
  id: string;
  carrier: string;
  price: number;
  segments: {
    date: string;
    destination: string;
    duration: number;
    origin: string;
    stops: string[];
  }[];
}

export interface Filters {
  stops: number[];
  sort: "cheapest" | "fastest";
}
