import React from "react";
import InputFilter from "./inputFilter";
import RepoCards from "./repoCard";

const DisplaySection = ({ repos, onSearch, filterFromDropDown }) => {
    return (
        <>
            <div className="git-display-main">
                <InputFilter
                    onSearch={onSearch}
                    filterFromDropDown={filterFromDropDown}
                />
                {
                    repos && repos.map((item, inx) => {
                        let { name, description, language, updated_at, license } = item;
                        let licenseName = "";
                        if (license) {
                            licenseName = license.name
                        }
                        return (
                            <RepoCards
                                key={inx}
                                name={name}
                                description={description}
                                language={language}
                                updated={updated_at}
                                license={licenseName}
                            />
                        )
                    })
                }
                {
                    repos.length <= 0 && <div>No Items to Display</div>
                }
            </div>
        </>
    )
}

export default DisplaySection;