"use client";

/*
 * File: StudentPortal.tsx
 * Author: Nathan Foran
 * Date: October 30, 2026
 *
 * StudentPortal manages the student portal's main state and interactions.
 * It stores the student list, search text and new-student input values.
 * It handles adding students, removing students and clearing the list.
 * It filters students by first or last name using the search text.
 * It passes data and callback functions to child components.
 */

import { useState } from "react";
import SearchBox from "@/components/SearchBox";
import AddStudent from "@/components/AddStudent";
import StudentList from "@/components/StudentList";
import StatsPanel from "@/components/StatsPanel";
import { students as initialStudents, type Student } from "@/data/students";

const StudentPortal = () => {
    // Student list and search
    const [students, setStudents] = useState<Student[]>(initialStudents);
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
            id: students.length > 0
                ? Math.max(...students.map((student) => student.id)) + 1
                : 1,
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
            <header id="overview">
                <h1 className="text-3xl font-bold text-gray-900">
                    Student Portal
                </h1>
                <p className="mt-2 text-gray-600">
                    Manage students and view their academic information.
                </p>
            </header>

            <StatsPanel students={students} />

            <section id="add-student">
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
            </section>

            <SearchBox
                searchText={searchText}
                onSearchChange={setSearchText}
            />

            <section
                id="students"
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
            >
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

                <StudentList
                    students={filteredStudents}
                    onRemove={handleRemoveStudent}
                />
            </section>
        </main>
    );
};

export default StudentPortal;