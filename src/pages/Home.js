import React,{useState,useEffect} from "react";
import BlogList from "../components/BlogList";
import './home.scss';

const Home = (props)=>{
    const [data,setData] = useState([])
    const fetchData = async ()=>{
        fetch("http://localhost:4000/blogs")
            .then(res=>{
                return res.json()
            })
            .then(val=>{
                setData([...val])
            }).catch(e=>console.log(e))
    }
    useEffect(()=>{
        setTimeout(fetchData,400)
    },[])
    console.log(data)
    return (
        <div className="home"  >
            {data?.length?data.map(val=>
                <BlogList key={val.id} id={val.id} date={val.date}  title={val.title}  />
            ):<>Loading...</>}
        </div>
    )
}
export default Home ;