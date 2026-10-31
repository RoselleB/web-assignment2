
"use client";

/*
 * File: AddStudent.tsx
 * Author: Nathan Foran
 * Date: October 29, 2026
 *
 * AddStudent.tsx displays inputs for a student's first name, last name,
 * grade and average. It receives the current input values and event
 * callbacks through its props. When the user changes an input, the
 * component sends the new value to StudentPortal. It also provides an
 * Add student button that asks the parent to add the student.
 */

interface AddStudentProps {
    firstName: string;
    lastName: string;
    grade: number;
    average: number;
    onFirstNameChange: (value: string) => void;
    onLastNameChange: (value: string) => void;
    onGradeChange: (value: number) => void;
    onAverageChange: (value: number) => void;
    onAddStudent: () => void;
}

const AddStudent = ({
    firstName,
    lastName,
    grade,
    average,
    onFirstNameChange,
    onLastNameChange,
    onGradeChange,
    onAverageChange,
    onAddStudent,
}: AddStudentProps) => {
    // Student input fields
    return (
        <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-xl font-semibold text-gray-900">
                Add a student
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                    <label
                        htmlFor="first-name"
                        className="mb-1 block text-sm font-medium text-gray-700"
                    >
                        First name
                    </label>
                    <input
                        id="first-name"
                        type="text"
                        value={firstName}
                        onChange={(event) => onFirstNameChange(event.target.value)}
                        placeholder="First name"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    />
                </div>

                <div>
                    <label
                        htmlFor="last-name"
                        className="mb-1 block text-sm font-medium text-gray-700"
                    >
                        Last name
                    </label>
                    <input
                        id="last-name"
                        type="text"
                        value={lastName}
                        onChange={(event) => onLastNameChange(event.target.value)}
                        placeholder="Last name"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    />
                </div>

                <div>
                    <label
                        htmlFor="student-grade"
                        className="mb-1 block text-sm font-medium text-gray-700"
                    >
                        Grade
                    </label>
                    <select
                        id="student-grade"
                        value={grade}
                        onChange={(event) => onGradeChange(Number(event.target.value))}
                        className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    >
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                        <option value={11}>11</option>
                        <option value={12}>12</option>
                    </select>
                </div>

                <div>
                    <label
                        htmlFor="student-average"
                        className="mb-1 block text-sm font-medium text-gray-700"
                    >
                        Average
                    </label>
                    <input
                        id="student-average"
                        type="number"
                        min={0}
                        max={100}
                        value={average}
                        onChange={(event) => onAverageChange(Number(event.target.value))}
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    />
                </div>
            </div>

            <button
                type="button"
                onClick={onAddStudent}
                className="mt-5 rounded-lg bg-blue-700 px-5 py-2.5 font-medium text-white transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
                Add student
            </button>
        </section>
    );
};

export default AddStudent;