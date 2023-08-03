import React from 'react';
import './Dashboard.css';
import { NavLink } from 'react-router-dom';
import backGroundImg from '../images/group1 (3).jpeg';
import { BiLogOut, BiSolidLike } from 'react-icons/bi';
import { BsFillTelephoneFill, BsShareFill } from 'react-icons/bs';
import { MdMiscellaneousServices } from 'react-icons/md';
import { FaStore, FaCommentDots } from 'react-icons/fa';
import { AiFillLike } from 'react-icons/ai';
import { ImShare } from 'react-icons/im';
const Dashboard = () => {



    return (
        <div>
            <div className="dashboard">
                <div className="sidebar">
                    <h2>Dashboard Menu</h2>
                    <ul>
                        <li >
                            <NavLink className='link' to='/store'><FaStore className='dashboard-icon' />  Store  </NavLink>
                        </li>
                        <li><NavLink className='link' to='/services'><MdMiscellaneousServices className='dashboard-icon' />services</NavLink></li>
                        <li><NavLink className='link' to='/contact'><BsFillTelephoneFill className='dashboard-icon' />Contact</NavLink></li>
                        <li><NavLink className='link' to='/'>
                            <BiLogOut className='dashboard-icon' />Logout</NavLink></li>
                        <li >
                            <NavLink className='link' to='#'><BiSolidLike className='dashboard-icon' />  Like  </NavLink>
                        </li>
                        <li >
                            <NavLink className='link' to='/store'><BsShareFill className='dashboard-icon' />  Share  </NavLink>
                        </li>
                    </ul>
                </div>

                {/* <!-- Main Content Area --> */}
                <div className="main-content">
                    <h1>Welcome to the Pet Veterinary Shop</h1>
                    <div className="content-grid grid-three-column">
                        <div className='content-card like-card'>
                            <div>
                                <AiFillLike className='content-icon like' />
                            </div>
                            <h2>Total like</h2>
                            <h1>1200</h1>
                        </div>
                        <div className='content-card comments-card'>
                            <div>
                                <FaCommentDots className='content-icon comments' />
                            </div>
                            <h2>Total Comments</h2>
                            <h1>1200</h1>
                        </div>

                        <div className='content-card share-card'>
                            <div>
                                <ImShare className='content-icon share' />
                            </div>
                            <h2>Total Share</h2>
                            <h1>1200</h1>
                        </div>
                        {/* <!-- This is where the pet and service information will be displayed --> */}
                        {/* <!-- You can use React components here to dynamically render the content --> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
