import { Link } from "react-router-dom";

export default function Legal() {
  return (
    <div className="flex items-center justify-center gap-2.5 mt-5">
      <Link to="#" className="text-xs hover:underline">
        Terms of use
      </Link>
      <Link to="#" className="text-xs hover:underline">
        Privacy policy
      </Link>
    </div>
  );
}
