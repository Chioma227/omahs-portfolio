import iconOne from "../../app/components/assets/icons/Group 2.svg";
import iconTwo from "../../app/components/assets/icons/Group 1935.svg";
import iconThree from "../../app/components/assets/icons/Group 1938.svg";
import iconFour from "../../app/components/assets/icons/Icons.svg";

export default function handler(req, res) {
  if (req.method === "GET") {
    const data = [
      {
        id: 1,
        width: 80,
        height: 80,
        icon: iconOne,
        header: "Responsive Design",
        text: "Creating websites that adapt and display well accross various devices and screen sizes.",
        class: "radial",
      },
      {
        id: 2,
        width: 80,
        height: 80,
        icon: iconTwo,
        header: "Version Control",
        text: "Ability to collaborate effectively and track project history with Git and GitHub.",
        class: "linear-to-b",
      },
      {
        id: 3,
        width: 80,
        height: 80,
        icon: iconThree,
        header: "Debugging and Problem Solving",
        text: "Possesses a strong problem-solving skill and an ability to identify and fix issues in code.",
        class: "linear-to-t",
      },
      {
        id: 4,
        width: 80,
        height: 80,
        icon: iconFour,
        header: "Communication and Collaboration",
        text: "Ability to communicate and collaborate with team members to ensure smooth project execution.",
        class: "linear-to-r",
      },
    ];
    res.status(200).json(data);
  } else {
    res.status(405).end();
  }
}
