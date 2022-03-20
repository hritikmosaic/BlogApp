import React from "react";
import { useNavigate } from "react-router-dom";
import './BlogList.scss';

const BlogList = ({title,date,id})=>{
    const navigate = useNavigate()
    const handleClick = (e)=>{
        console.log("navigate")
        navigate("/blog/"+id)
    }
    return (
        <div className="blogList" onClick={handleClick}  >
            <p className="date" >{date}</p>
            <p className="title" >{title}</p>
        </div>
    )
}

export default BlogList;