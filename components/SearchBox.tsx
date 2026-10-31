
"use client";

/*
 * File: SearchBox.tsx
 * Author: Nathan Foran
 * Date: October 29, 2026
 *
 * SearchBox.tsx displays a text input for searching students by name.
 * It receives the current search text and a callback through its props.
 * When the user types, it passes the updated text to the parent component.
 * StudentPortal owns the search state and performs the actual filtering.
 * The component returns a controlled search input styled with Tailwind CSS.
 */

interface SearchBoxProps {
    searchText: string;
    onSearchChange: (value: string) => void;
}

const SearchBox = ({ searchText, onSearchChange }: SearchBoxProps) => {
    // Search input
    return (
        <div className="w-full">
            <label
                htmlFor="student-search"
                className="mb-2 block text-sm font-medium text-gray-700"
            >
                Search students
            </label>

            <input
                id="student-search"
                type="text"
                value={searchText}
                onChange={(event) => onSearchChange(event.target.value)}
                placeholder="Search by first or last name..."
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
        </div>
    );
};

export default SearchBox;