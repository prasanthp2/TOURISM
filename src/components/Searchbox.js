import "./Searchbox.css";

export const Searchbox = (props) => {
  return (
    <>
      <div className="sb-container">
        <div className="sbox">
          <input
            type="search"
            placeholder="Search your destination"
            onChange={props.handleOnChange}
          />
        </div>
      </div>
    </>
  );
};
