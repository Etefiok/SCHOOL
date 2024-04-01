import {useState, useRef } from "react"
import "./Adddetails.css" 


function AddDetails() {
    const TitleRef=useRef();
    const[title, setTitle] = useState("");
    const DescriptionRef=useRef();
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("")
    const ImgRef=useRef();
    const RatingRef=useRef();
    const [rate, setRate] = useState(0) 

    
    function save(){
        setTitle(TitleRef.current.value);
        setDescription(DescriptionRef.current.value );
        setImage(ImgRef.current.value);
        setRate(RatingRef.current.value);
       TitleRef.current.value = "";
       DescriptionRef.current.value = "";
       ImgRef.current.value = "";
       RatingRef.current.value="";

    }

    // function handleDescriptionChange(){
    //    setDescription(DescriptionRef.current.value );
    // }


       return(
        <div >
          
            {<img src={image} width="250px"/>}
            <h6>{title}</h6>
            <p>{description}</p>
            <p>{rate}</p>
            

            

           <div className="inputgap">
            <input placeholder="Title"type="text" ref={TitleRef} />
            <input placeholder="Description" type="text" ref={DescriptionRef} />
            <input placeholder="Img URL" type="text" ref={ImgRef} />
            <input placeholder="Rating" type="number" ref={RatingRef} />
            <button  onClick={save} >Save</button>
            </div>



        </div>
    )
};


export default AddDetails