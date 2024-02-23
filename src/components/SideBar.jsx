import React from "react";
import { Link } from "react-router-dom";

export const SideBar = () => {
  const manaagerLinks = [
    {
      id: 1,
      title: "Dashboard",
      icon: "nc-icon nc-chart-pie-35",
      link: "/manager/dashboard",
    },
    {
      id: 2,
      title: "Add Project",
      icon: "nc-icon nc-circle-09",
      link: "/manager/addProject",
    },
    {
        id: 3,
        title: "View All Projects",
        icon: "nc-icon nc-circle-09",
        link: "/manager/viewProjects",
    },
  ];

  const developerLinks = [
    {
      id: 1,
      title: "Dashboard",
      icon: "nc-icon nc-chart-pie-35",
      link: "/developer/dashboard",
    },
    {
      id: 2,
      title: "View Modules",
      icon: "nc-icon nc-circle-09",
      link: "/developer/add-project",
    },
  ];

  const pathName = window.location.pathname;
  return (
    <div className="sidebar" data-image="../assets/img/sidebar-5.jpg">
      {/*
    Tip 1: You can change the color of the sidebar using: data-color="purple | blue | green | orange | red"
  
    Tip 2: you can also add an image using data-image tag
      */}
      <div className="sidebar-wrapper">
        <div className="logo">
          <a href="http://www.creative-tim.com" className="simple-text">
            Creative Tim
          </a>
        </div>
        <ul className="nav">
          {pathName.includes("manager")
            ? manaagerLinks.map((link) => (
                <li key={link.id} className="nav-item">
                  <Link className="nav-link" to={link.link}>
                    <i className={link.icon} />
                    <p>{link.title}</p>
                  </Link>
                </li>
              ))
            : developerLinks.map((link) => (
                <li key={link.id} className="nav-item">
                  <a className="nav-link" href={link.link}>
                    <i className={link.icon} />
                    <p>{link.title}</p>
                  </a>
                </li>
              ))}
        </ul>
      </div>
      <div
        className="sidebar-background"
        style={{ backgroundImage: "url(../assets/img/sidebar-5.jpg)" }}
      />
    </div>
  );
};
