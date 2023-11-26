import PropTypes from "prop-types";

export default function FormContainer({ children }) {
  const handleSubmit = () => {
    console.log();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      {children}
    </form>
  );
}

FormContainer.propTypes = {
  children: PropTypes.ReactNode,
};
