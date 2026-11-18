export type TopicId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface Topic {
  id: TopicId;
  code: string;
  name: string;
  color: string;
  bg: string;
}

const TOPICS: Topic[] = [
  { id: 1, code: "AExE01", name: "Basic Electrical & Electronics", color: "#1B365D", bg: "#E3EBF6" },
  { id: 2, code: "AExE02", name: "Digital Logic & Microprocessor", color: "#8A4B2E", bg: "#F3E6DB" },
  { id: 3, code: "ACtE03", name: "Programming Language & Applications", color: "#2E7A4C", bg: "#E2F1E7" },
  { id: 4, code: "ACtE04", name: "Computer Organization & Embedded Systems", color: "#7A2E6B", bg: "#F3E1EF" },
  { id: 5, code: "ACtE05", name: "Computer Networks & Security", color: "#A86A12", bg: "#F8EEDB" },
  { id: 6, code: "ACtE06", name: "Theory of Computation & Graphics", color: "#1F6F78", bg: "#DFF0F1" },
  { id: 7, code: "ACtE07", name: "DSA, Database & OS", color: "#B4232C", bg: "#F8E3E1" },
  { id: 8, code: "ACtE08", name: "Software Engineering & OOAD", color: "#4C4B9E", bg: "#E6E5F6" },
  { id: 9, code: "ACtE09", name: "AI & Neural Networks", color: "#3D6B1F", bg: "#E8F0DF" },
  { id: 10, code: "AALL10", name: "Project Planning, Design & Implementation", color: "#6B5A3E", bg: "#EDE7DA" },
];

export default TOPICS;
