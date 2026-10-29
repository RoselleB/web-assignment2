
/*
 * File: page.tsx
 * Author: Nathan Foran
 * Date: October 29, 2026
 *
 * Page.tsx defines the main page of the Student Portal application.
 * It imports and displays the StudentPortal component.
 * StudentPortal manages the student interface and its interactions.
 * * The page uses the Next.js App Router.
 */

import StudentPortal from "@/components/StudentPortal";

const Home = () => {
  return <StudentPortal />;
};

export default Home;