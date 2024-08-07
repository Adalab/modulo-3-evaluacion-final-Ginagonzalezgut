import "../scss/components/MessageNotFound.scss";
import { Link } from "react-router-dom";

function MessageNotFound() {
  return (
    <div className="messageNotFound">
      <p className="messageNotFound__title">Welcome to the club, pal!</p>
      <p className="messageNotFound__text">
        The page that you are looking for possibly never existed!
      </p>
      <p className="messageNotFound__number">404</p>
      <Link className="messageNotFound__link" to={"/"}>
        Back to home
      </Link>
    </div>
  );
}

export default MessageNotFound;
