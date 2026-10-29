import {Student} from "@/data/students"

interface StatsPanelProps {
    students: Student[];
}
const StatsPanel = ({students}: StatsPanelProps) => {
    const totalStudents = students.length;

    const honourRoll = students.filter(
        (student) => student.average >= 80
    ).length;

    const gradeTwelve = students.filter(
        (student) => student.grade === 12
    ).length;
    return(
        <section>
            <p>Students: {totalStudents}</p>
            <p>Honour Roll: {honourRoll}</p>
            <p>Grade 12: {gradeTwelve}</p>
        </section>
    );
};

export default StatsPanel;