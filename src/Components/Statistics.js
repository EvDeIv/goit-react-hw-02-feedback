import React from "react";
import Notification from "./Notification";

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <>
      <h2>Statistics</h2>
      {total > 0 ? (
        <>
          <span>Good: {good}</span>
          <span>Neutral: {neutral}</span>
          <span>Bad: {bad}</span>
          <span>Total: {total}</span>
          <span>Percentage: {positivePercentage} %</span>
        </>
      ) : (
        <Notification />
      )}
    </>
  );
}
