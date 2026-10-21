"use client";

import { useEffect, useState } from "react";

// The footer is prerendered at build time, so refresh the year in the browser.
export function CurrentYear() {
	const [year, setYear] = useState(() => new Date().getFullYear());

	useEffect(() => {
		setYear(new Date().getFullYear());
	}, []);

	return <>{year}</>;
}
