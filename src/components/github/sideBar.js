import React from "react";
import compIcon from "../../assets/company.png";
import locIcon from "../../assets/location.png";
import emailIcon from "../../assets/email.png";
import starIcon from "../../assets/star.png";

const SideBar = ({ avatarImg, name, login, bio, followers, following, company, location, email }) => {
    return (
        <>
            <div className="sidebar-main">
                <img className="avatar-img" src={avatarImg} alt="" />
                <div className="name">{name}</div>
                <div className="username">{login}</div>
                <div className="bio">{bio}</div>
                <div className="followbtn-main">
                    <div className="follow-btn">Follow</div>
                    <span className="dots">...</span>
                </div>

                <div className="followers-main">
                    <div className="followers"><b>{followers}</b> followers . <b>{following}</b> following . <img className="star-icon" src={starIcon} alt=""/> <b>7</b></div>
                </div>
                <div className="company">
                    <img className="icon" src={compIcon} alt="" />
                    <div className="text">{company}</div>
                </div>
                <div className="location">
                    <img className="icon" src={locIcon} alt="" />
                    <div className="text">{location}</div>
                </div>
                <div className="email">
                    <img className="icon" src={emailIcon} alt="" />
                    <div className="text">{email}</div>
                </div>
            </div>
        </>
    )
}

export default SideBar;