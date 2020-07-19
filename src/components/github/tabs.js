import React from "react";
import overviewIcon from "../../assets/overview.png";
import repoIcon from "../../assets/repos.png";
import projectsIcon from "../../assets/projects.png";

const GitTabs = () => {
    return (
        <>
            <div className="tabs-main">
                <div className="tab-item">
                    <img className="icon" src={overviewIcon} alt="" />
                    <div className="text">Overview</div>
                </div>
                <div className="tab-item repo">
                    <img className="icon" src={repoIcon} alt="" />
                    <div className="text">Repositories</div>
                </div>
                <div className="tab-item projects">
                    <img className="icon" src={projectsIcon} alt="" />
                    <div className="text">Projects</div>
                </div>
            </div>
        </>
    )
}

export default GitTabs;