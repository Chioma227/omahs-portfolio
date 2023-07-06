import htmlLogo from "../../app/components/assets/icons/html.png";
import cssLogo from "../../app/components/assets/icons/css.png";
import jsLogo from "../../app/components/assets/icons/JavaScript.png";
import scssLogo from "../../app/components/assets/icons/scss.png";
import tailwindLogo from "../../app/components/assets/icons/tailwind.png";
import gitLogo from "../../app/components/assets/icons/Git-logo.png";
import githubLogo from "../../app/components/assets/icons/github.png";
import reactLogo from "../../app/components/assets/icons/react.png";
import nextLogo from "../../app/components/assets/icons/nextjs.png";
import framerLogo from "../../app/components/assets/icons/f-motion.png";

export default function handler(req, res) {
  if (req.method === "GET") {
    const data = [
      {
        icon: htmlLogo,
      },
      {
        icon: cssLogo,
      },
      {
        icon: jsLogo,
      },
      {
        icon: tailwindLogo,
      },
      {
        icon: scssLogo,
      },
      {
        icon: reactLogo,
      },
      {
        icon: nextLogo,
      },
      {
        icon: framerLogo,
      },
      {
        icon: gitLogo,
      },
      {
        icon: githubLogo,
      },
    ];
    res.status(200).json(data);
  } else {
    res.status(405).end();
  }
}
