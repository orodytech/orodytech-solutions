import PropTypes from "prop-types";

function Heading({ children, version }) {
  return <h1 className={`heading heading-${version}`}>{children}</h1>;
}

Heading.defaultProps = {
  version: "primary",
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
};
export default Heading;
