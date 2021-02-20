export function compareDate(x: string, y: string): number {
	return new Date(y).getTime() - new Date(x).getTime();
}

type PrettyDate = { weekday: string; day: number; month: string; year: number; complete: string };
export function createPrettyDate(date: undefined): undefined;
export function createPrettyDate(date: string | Date): PrettyDate;
export function createPrettyDate(date: string | undefined): PrettyDate | undefined;
export function createPrettyDate(date: string | Date | undefined): PrettyDate | undefined {
	if (!date) return undefined;
	const dateFormat = new Date(date);
	const weekday = dateFormat.toLocaleDateString('default', { weekday: 'long' });
	const day = dateFormat.getDate();
	const month = dateFormat.toLocaleDateString('default', { month: 'long' });
	const year = dateFormat.getFullYear();
	return { weekday, day, month, year, complete: `${day} ${month} ${year}` };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function sortCompare(x: any, y: any) {
	if (x.date !== y.date) {
		return compareDate(x.date, y.date);
	} else if (x.updated !== y.updated) {
		return compareDate(x.updated, y.updated);
	} else if (x.year && y.year && x.year !== y.year) {
		return y.year - x.year;
	}
	return x.title.localeCompare(y.title);
}

export function splitAt(index: number, text: string): [string, string] {
	return [text.slice(0, index), text.slice(index + 1)];
}
