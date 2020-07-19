import React from "react";
import starIcon from "../../assets/star.png";
import licenseIcon from "../../assets/license.png";

const COLOR_MAP = {
    "JavaScript": "yellow-color",
    "CSS": "blue-color",
    "HTML": "red-color"
}


const RepoCard = ({ name, description, language, updated, license }) => {
    var d = new Date(updated);
    let colorClass = COLOR_MAP[language];
    return (
        <>
            <div className="card-main">
                <div className="left">
                    <a href="#url" className="name">{name}</a>
                    <div className="desc">{description}</div>
                    <div className="display-row">
                        {
                            language &&
                            <div className="language">
                                <div className={`color-dot ${colorClass}`}></div>
                                <span className="text">{language}</span>
                            </div>
                        }
                        {
                            license && <span className="date license"><img className="license-icon" src={licenseIcon} alt="" />{license}</span>
                        }
                        <span className="date">Updated on {d.toDateString()}</span>
                    </div>
                </div>
                <div className="right">
                    <div className="star-btn">
                        <img className="star-icon" src={starIcon} alt="" />
                        <span>Star</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RepoCard;