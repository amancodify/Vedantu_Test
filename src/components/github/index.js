import React, { useState, useEffect } from "react";
import axios from 'axios';
import SideBar from "./sideBar";
import DisplaySectionComp from "./displaySection";
import GitTabs from "./tabs";
import gitLogo from "../../assets/git.png";

const GithubPage = () => {

    const [userData, setUserData] = useState({});
    const [userRepos, setUserRepos] = useState([]);
    const [repoSearchResult, setRepoSearchResult] = useState([]);

    useEffect(
        () => {
            axios.get(`https://api.github.com/users/supreetsingh247`)
                .then(res => {
                    setUserData(res.data);
                });
        }, []
    );

    let { name, login, bio, avatar_url, followers, following, company, location, email, repos_url } = userData;

    useEffect(
        () => {
            axios.get(repos_url)
                .then(res => {
                    setUserRepos(res.data);
                    setRepoSearchResult(res.data);
                });
        }, [repos_url]
    );

    const onSearch = (e) => {
        let searchval = e.target.value.toLowerCase();
        let newData = userRepos.filter((item) => {
            let { name, language } = item;
            if (!language) {
                language = "";
            }
            return (name.toLowerCase().includes(searchval) || language.toLowerCase().includes(searchval));
        })
        setRepoSearchResult(newData);
    }

    const filterOptions = ["fork", "archived"];

    const filterFromDropDown = (e) => {
        let filterVal = e.target.value;
        if (filterOptions.includes(filterVal)) {
            let newData = userRepos.filter((item) => {
                return (item[filterVal]);
            })
            setRepoSearchResult(newData);
        } else {
            setRepoSearchResult(userRepos);
        }
    }

    return (
        <div className="page-container">
            <div className="black-bar">
                <img src={gitLogo} alt="" />
                <input className="git-input" type="text" placeholder="Search or jump to..." />
                <div className="navitem">Pull requests</div>
                <div className="navitem">Issues</div>
                <div className="navitem">Marketplace</div>
                <div className="navitem">Explore</div>
            </div>
            <GitTabs />
            <div className="main-container">
                <div className="sub-container">
                    <SideBar
                        avatarImg={avatar_url}
                        name={name}
                        login={login}
                        bio={bio}
                        followers={followers}
                        following={following}
                        company={company}
                        location={location}
                        email={email || "supreetsingh.247@gmail.com"}
                    />
                    <DisplaySectionComp
                        repos={repoSearchResult || []}
                        onSearch={onSearch}
                        filterFromDropDown={filterFromDropDown}
                    />
                </div>
            </div>
        </div>
    )
}

export default GithubPage;