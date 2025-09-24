import React from "react";

function Filters(props) {
  function onSubmit(e){ e.preventDefault(); }
  return (
    <form className="filters" onSubmit={onSubmit}>
      <label className="block">
        Search
        <input
          type="text"
          value={props.search}
          onChange={function(e){ props.onSearchChange(e.target.value); }}
          placeholder="search"
        />
      </label>

      <label className="block">
        Category
        <select
          value={props.category}
          onChange={function(e){ props.onCategoryChange(e.target.value); }}
        >
          <option>All</option>
          <option>Rice</option>
          <option>Noodle</option>
          <option>Soup</option>
          <option>Bread</option>
          <option>Vegetables</option>
        </select>
      </label>

      <button type="button" onClick={props.onReset}>Reset</button>
    </form>
  );
}
export default Filters;
