import React ,{useState,useEffect} from "react";
import './BlogDetails.scss'
import { useParams } from "react-router-dom";

const BlogDetail = ()=>{
    const [blog,setBlog] = useState(null)
    const [notFound,setNotFound] = useState(false)
    const fetchData = async (id)=>{
        setNotFound(false)
        fetch("http://localhost:4000/blogs/"+id)
            .then(res=>{
                return res.json()
            })
            .then(val=>{
                setBlog(val)
                console.log(val,"ti is f")
            }).catch(e=>console.log(e))
    }
    useEffect(()=>{
        if(!!Number(param.id))
           fetchData(param.id)
        else setNotFound(true)
    },[])
    const param = useParams()
    console.log(param)
    return (
        <div  className="blogDetails"  >
            blog details
            {notFound&&<div>No blog found</div>}
        </div>
    )
}

export default BlogDetail;