import React from "react";

const SearchBar = (props) => (
    <div className="col-md-12">
        <div className="card p-3">
            <form className="form-group">
                <label for="cari">Pencarian</label>
                <input className="form-control" type="text" placeholder="Cari Podcast..." onChange={props.handleInput} id="cari" />
            </form>
        </div>
    </div>
)

export default SearchBar;