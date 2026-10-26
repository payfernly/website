export type GlossaryTerm = {
	slug: string;
	term: string;
	summary: string;
	body: string[];
	related?: { href: string; label: string };
};

export const GLOSSARY_TERMS: GlossaryTerm[] = [
	{
		slug: "form-941",
		term: "Form 941",
		summary:
			"The quarterly federal payroll tax return employers file with the IRS to report wages, withholding and FICA taxes.",
		body: [
			"Form 941, the Employer's Quarterly Federal Tax Return, is how you tell the IRS what you paid your employees in a quarter and how much federal tax came out of it.",
			"It reports total wages, the federal income tax you withheld, and both the employee and employer shares of Social Security and Medicare taxes. The totals have to line up with the tax deposits you made during the quarter.",
			"It's due by the last day of the month after each quarter ends: April 30, July 31, October 31 and January 31.",
		],
		related: { href: "/blog/form-941-explained", label: "Read: Form 941, explained" },
	},
	{
		slug: "gross-pay",
		term: "Gross pay",
		summary: "Everything an employee earns in a pay period, before any taxes or deductions come out.",
		body: [
			"Gross pay is the full amount an employee earns for a pay period before anything is taken out.",
			"For an hourly employee, that's hours worked times their rate, plus any overtime. For a salaried employee, it's their annual salary divided by the number of pay periods. Bonuses, commissions and tips count too.",
			"Payroll taxes and most deductions are calculated from gross pay, which is why it's the first number on a pay stub.",
		],
	},
	{
		slug: "net-pay",
		term: "Net pay",
		summary: "What an employee actually takes home after taxes and deductions are subtracted from gross pay.",
		body: [
			"Net pay is the amount that lands in an employee's bank account: gross pay minus taxes and deductions.",
			"The usual subtractions are federal, state and local income tax withholding, Social Security and Medicare taxes, and benefit deductions such as health insurance premiums or 401(k) contributions.",
			"If an employee asks why their paycheck is smaller than they expected, the gap between gross pay and net pay is where the answer is.",
		],
	},
];

export function getGlossaryTerm(slug: string): GlossaryTerm | undefined {
	return GLOSSARY_TERMS.find((t) => t.slug === slug);
}

export function glossaryByLetter(): { letter: string; terms: GlossaryTerm[] }[] {
	const sorted = [...GLOSSARY_TERMS].sort((a, b) =>
		a.term.localeCompare(b.term, "en-US", { sensitivity: "base", numeric: true }),
	);
	const groups: { letter: string; terms: GlossaryTerm[] }[] = [];
	for (const term of sorted) {
		const letter = term.term.charAt(0).toUpperCase();
		const last = groups[groups.length - 1];
		if (last && last.letter === letter) last.terms.push(term);
		else groups.push({ letter, terms: [term] });
	}
	return groups;
}
