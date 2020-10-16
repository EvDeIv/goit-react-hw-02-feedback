import React from "react";
import Notification from "./Notification";
import PropTypes from "prop-types";

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  const styles = {
    display: "block",
  };
  return (
    <>
      <h2>Statistics</h2>
      {total > 0 ? (
        <>
          <span style={styles}>Good: {good}</span>
          <span style={styles}>Neutral: {neutral}</span>
          <span style={styles}>Bad: {bad}</span>
          <span style={styles}>Total: {total}</span>
          <span style={styles}>Percentage: {positivePercentage} %</span>
        </>
      ) : (
        <Notification />
      )}
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
