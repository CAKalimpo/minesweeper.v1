import React from "react";
import PropTypes from "prop-types";
import Retry from '../assets/retry.png';
import Start from '../assets/red-dot.png';



const Header = props => {
  let minutes = Math.floor(props.time / 60);
  let formattedSeconds = props.time - minutes * 60 || 0;

  formattedSeconds =
    formattedSeconds < 10 ? `0${formattedSeconds}` : formattedSeconds;
  let time = `${minutes}:${formattedSeconds}`;
  let status =
    props.status === "running" || props.status === "waiting" ? (
      <button className="start"><img src={Start} alt="start-now" className="dot-svg"/></button>
    ) : (
      <button className="retry"><img src={Retry} alt="try again" className="retry-svg"/></button>
    );
  return (
    <div className="board-head">
      <div className="flag-count">{props.flagsUsed}</div>
      <button className="reset" onClick={props.reset}>
        {status}
      </button>
      <div className="timer">{time}</div>
    </div>
  );
};

Header.propTypes = {
  time: PropTypes.number.isRequired,
  flagsUsed: PropTypes.number.isRequired
};

export default Header;