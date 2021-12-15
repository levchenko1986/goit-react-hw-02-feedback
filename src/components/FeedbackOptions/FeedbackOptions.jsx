import PropTypes from "prop-types";
import styles from "./FeedbackOptions.module.css";

function FeedbackOptions({ options, onLeaveFeedback }) {
  const button = options.map((button) => (
    <li key={button}>
      <button
        className={styles.btns}
        type="button"
        value={button}
        onClick={() => onLeaveFeedback(button)}
      >
        {button}
      </button>
    </li>
  ));
  return <ul className={styles.btns}>{button}</ul>;
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
