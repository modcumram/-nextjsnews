import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch,faHome,faHospital,faNewspaper } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <a className="navbar-brand">
         
         <FontAwesomeIcon icon={faNewspaper} style={{fontSize: '24px'}}/> NextJS News
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link href="/"><a className="nav-link">หน้าหลัก</a></Link>
            </li>
            <li className="nav-item">
              <Link href="/about"><a className="nav-link">เกี่ยวกับเรา</a></Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                ผลงานของเรา
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item">ออกแบบเว็บไซต์</a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item">กราฟฟิก</a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item">โมบายแอพ</a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link">ติดต่อเรา</a>
            </li>
            <li className="nav-item">
            <Link href="/login"><a className="nav-link">ลงทะเบียน</a></Link>
            </li>
            <li className="nav-item mx-auto">
              <a className="btn btn-md btn-primary">เข้าสู่ระบบ</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
