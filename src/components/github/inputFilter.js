import React from "react";

const InputFilter = ({ onSearch, filterFromDropDown }) => {
    return (
        <>
            <div className="input-main">
                <input onChange={onSearch} className="input-field" type="text" placeholder="Find a repository..." />
                <select onChange={filterFromDropDown} className="selectbox" name="" id="" defaultValue="">
                    <option value="" disabled>Type: All</option>
                    <option value="all">All</option>
                    <option value="fork">Forks</option>
                    <option value="archived">Archived</option>
                    <option value="sources">Sources</option>
                    <option value="mirrors">Mirrors</option>
                </select>
                <select onChange={filterFromDropDown} className="selectbox" name="" id="" defaultValue="">
                    <option value="" disabled>Language: All</option>
                    <option value="all">All</option>
                </select>
            </div>
        </>
    )
}

export default InputFilter;