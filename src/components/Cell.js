import React from "react";
import Mine from '../assets/expl.png'

const Cell = props => {
  let cell = () => {
    if (props.data.isOpen) {
      if (props.data.hasMine) {
        return (
          <div
            className="cell open"
            onContextMenu={e => {

              e.preventDefault();
            }}
            onClick={() => props.open(props.data)}
          >
            <img src={Mine}alt="mine" className="mine-svg"/>
          </div>
        );
      } else if (props.data.count === 0) {
        return (
          <div
            className="cell open"
            onContextMenu={e => {
              e.preventDefault();
              props.flag(props.data);
            }}
            onClick={() => props.open(props.data)}
          />
        );
      } else {
        return (
          <div
            className="cell open"
            onContextMenu={e => {
              e.preventDefault();
            }}
            onClick={() => props.open(props.data)}
          >
            {props.data.count}
          </div>
        );
      }
    } else if (props.data.hasFlag) {
      return (
        <div
          className="cell open-flag"
          onContextMenu={e => {
            e.preventDefault();
            props.flag(props.data);
          }}
          onClick={() => props.open(props.data)}
        >
          <span><i className="icon ion-flag"></i></span>
        </div>
      );
    } else {
      return (
        <div
          className="cell"
          onContextMenu={e => {
            e.preventDefault();
            props.flag(props.data);
          }}
          onClick={() => props.open(props.data)}
        />
      );
    }
  };
  return cell();
};

export default Cell;