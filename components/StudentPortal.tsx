"use client";

/*
 * File: StudentPortal.tsx
 * Author: Nathan Foran
 * Date: October 29, 2026
 *
 * StudentPortal.tsx manages the student portal's main state and interactions.
 * It stores the student list, search text and new-student input values.
 * It handles adding students, removing students and clearing the list.
 * It filters students by first or last name using the search text.
 * It passes data and callback functions to child components.
 */

import { useState } from "react";
import SearchBox from "@/components/SearchBox";
import AddStudent from "@/components/AddStudent";

// Temporary Student type until the shared data file is available.
interface Student {
    id: number;
    firstName: string;
    lastName: string;
    grade: number;
    average: number;
}

const StudentPortal = () => {
    // Student list and search 
    const [students, setStudents] = useState<Student[]>([]);
    const [searchText, setSearchText] = useState("");

    // New student input 
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [grade, setGrade] = useState(9);
    const [average, setAverage] = useState(70);

    // Add a student 
    const handleAddStudent = () => {
        if (!firstName.trim() || !lastName.trim()) {
            return;
        }

        const newStudent: Student = {
            id: Date.now(),
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            grade,
            average,
        };

        setStudents((currentStudents) => [...currentStudents, newStudent]);

        // Reset the input fields
        setFirstName("");
        setLastName("");
        setGrade(9);
        setAverage(70);
    };

    // Remove a student by ID
    const handleRemoveStudent = (id: number) => {
        setStudents((currentStudents) =>
            currentStudents.filter((student) => student.id !== id)
        );
    };

    // Clear all students
    const handleClearStudents = () => {
        setStudents([]);
    };

    // Filter students by first or last name
    const filteredStudents = students.filter((student) => {
        const fullName =
            `${student.firstName} ${student.lastName}`.toLowerCase();

        return fullName.includes(searchText.trim().toLowerCase());
    });

    return (
        <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
            <header>
                <h1 className="text-3xl font-bold text-gray-900">
                    Student Portal
                </h1>
                <p className="mt-2 text-gray-600">
                    Manage students and view their academic information.
                </p>
            </header>

            <AddStudent
                firstName={firstName}
                lastName={lastName}
                grade={grade}
                average={average}
                onFirstNameChange={setFirstName}
                onLastNameChange={setLastName}
                onGradeChange={setGrade}
                onAverageChange={setAverage}
                onAddStudent={handleAddStudent}
            />

            <SearchBox
                searchText={searchText}
                onSearchChange={setSearchText}
            />

            <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                    <h2 className="text-xl font-semibold text-gray-900">
                        Students ({filteredStudents.length})
                    </h2>

                    <button
                        type="button"
                        onClick={handleClearStudents}
                        className="rounded-lg border border-red-300 px-4 py-2 text-sm font-medium text-red-700 transition hover:bg-red-50"
                    >
                        Clear all students
                    </button>
                </div>

                {filteredStudents.length === 0 ? (
                    <p className="py-6 text-center text-gray-500">
                        {students.length === 0
                            ? "No students have been added yet."
                            : "No students match your search."}
                    </p>
                ) : (
                    <div className="space-y-3">
                        {filteredStudents.map((student) => (
                            <div
                                key={student.id}
                                className="flex flex-wrap items-center justify-between gap-4 rounded-lg border border-gray-200 p-4"
                            >
                                <div>
                                    <h3 className="font-semibold text-gray-900">
                                        {student.firstName} {student.lastName}
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        Grade {student.grade} · Average: {student.average}%
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => handleRemoveStudent(student.id)}
                                    className="rounded-lg px-3 py-2 text-sm font-medium text-red-700 hover:bg-red-50"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
};

export default StudentPortal;