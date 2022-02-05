import { InputWithLabel } from "./InputWithLabel";
import styles from "./SearchForm.module.css";

const SearchForm = ({ searchTerm, onSearchInput, onSearchSubmit }) => (
  <form onSubmit={onSearchSubmit} className={styles.searchForm}>
    <InputWithLabel
      id="search"
      value={searchTerm}
      onInputChange={onSearchInput}
    >
      <strong>Search:</strong>
    </InputWithLabel>
    <button type="button" disabled={!searchTerm} className="button buttonLarge">
      Submit
    </button>
  </form>
);

export { SearchForm };
