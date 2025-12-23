export default function formatTime(dateStr: string, duration: number) {
  const departure = new Date(dateStr);
  const arrival = new Date(departure.getTime() + duration * 60 * 1000);
  return `${departure.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  })} – ${arrival.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  })}`;
};
