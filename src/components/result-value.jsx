import React from "react";
import "./result-value.css";

export default function ResultValue(props) {
  return (
    <div className={"result-value " + props.className}>
      <div className="result-value__buttons-block">
        <button
          className="result-value__button result-value__button_reduce"
          onClick={props.onDecrease || null}
        >
          <svg
            className="result-value__button-icon result-value__button-icon_reduce"
            id="Capa_1"
            viewBox="0 0 551.13 551.13"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m275.565 361.679-223.897-223.896h-51.668l275.565 275.565 275.565-275.565h-51.668z" />
          </svg>
        </button>
        <button
          className="result-value__button result-value__button_increase"
          onClick={props.onIncrease || null}
        >
          <svg
            className="result-value__button-icon result-value__button-icon_increase"
            id="Capa_1"
            viewBox="0 0 551.13 551.13"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m275.565 361.679-223.897-223.896h-51.668l275.565 275.565 275.565-275.565h-51.668z" />
          </svg>
        </button>
      </div>
      <h2 className="result-value__value h2">{props.value}</h2>
      <p className="result-block__desc text">{props.desc}</p>
    </div>
  );
}
