import React ,{useState} from "react";
import './CreateBlog.scss';
import { Editor } from '@tinymce/tinymce-react'; 
import axios from "axios";

const CreateBlog = ()=>{
    const [title,setTitle] = useState("")
    const [body,setBody] = useState(``)
    const handleEditorChange = (e) => {
        setBody(e.target.getContent())
      }
      const handleSubmit=()=>{
        let date = new Date()
        if(!!title&&!!body)
        axios.post('http://localhost:4000/blogs', {
    title: title,
    body: body,
    email:"sharmahritik2002@gmail.com",
    author:"Hritik Sharma",
    date: date.getDay()+" "+date.getMonth()+" "+date.getFullYear()
}).then(resp => {
    console.log(resp.data);
}).catch(error => {
    console.log(error);
});else console.log(title,body)
      }
    return (
        <div className="createBlog"  >
            <span>Title</span>
            <input type={"text"} value={title} onChange={(e)=>setTitle(e.target.value)} />
            <span>Body</span>
            <Editor
        initialValue=""
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image', 
            'charmap print preview anchor help',
            'searchreplace visualblocks code',
            'insertdatetime media table paste wordcount'
          ],
          toolbar:
            'undo redo | formatselect | bold italic | \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent |image | help'
        }}
        apiKey="kzma8v0n5fmo0o62s5j4z3re9kffnaylg8cq7iwbg54hozra"
        onChange={handleEditorChange}
      />
            <button onClick={handleSubmit}  >Add Blog</button>
        </div>
    )
}

export default CreateBlog ;