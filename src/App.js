
import './App.css';

import React, {Component} from 'react';
import axios from 'axios';
import ListFile from './ListFile';

import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";

class App extends Component{
   state={
     selectedFile: null,
     fileUploadedSuccessfully: false
   }

   onFileChange = event =>{
     this.setState({selectedFile: event.target.files[0]});
   }
   onFileUpoload = async () => {
    const formData = new FormData();
    formData.append(
      'demo file',
      this.state.selectedFile,
      this.state.selectedFile.name
    );
    //call api
    await axios
      .post(
        'https://magirovyd0.execute-api.us-east-1.amazonaws.com/prod/file-upload-resource',
        formData
      )
      .then((res) => {
        console.log(res);
        this.setState({ selectedFile: null });
        this.setState({ fileUploadedSuccessfully: true });
      });
  };

  //list 
/*
  getObject(file){
    const s3 = this.app.s3;

    const options  ={
        Bucket: BUCKET,
        Key: _.get(file, 'name')
    };

   return s3.getObject(options).createReadStream();




}
/*
   onFileUpoload= async() =>{
    let x;
     const formData= new FormData();
     formData.append(
       "demo file",
       this.state.selectedFile,
       this.state.selectedFile.name
     )
      //call api
      x= await axios.post("https://magirovyd0.execute-api.us-east-1.amazonaws.com/prod/file-upload-resource", formData).then(()=>{
     this.setState({selectedFile: null});
      this.setState({fileUploadedSuccessfully: true});
      });
     
      console.log(x.status);   
      
   }*/
    fileData= () =>{
      
      if(this.state.selectedFile){
        return(
        <div>
          <h2>File details:</h2>
          <p>File name: {this.state.selectedFile.name}</p>
          <p>File type: {this.state.selectedFile.type}</p>
          <p>Last modified: {" "}
          {this.state.selectedFile.lastModifiedDate.toDateString()}</p>
        </div>
      )
      }
      
      else if(this.state.fileUploadedSuccessfully){
        return(
          <div>
            <br />
            <h4>Your file uploaded successfully!!</h4>
            
          </div>
        )
      }
      else{
        return(
          <div>
            <br />
            <h4>
              choose a file then press upload
            </h4>
          </div>
        )
      }
    }

   

   render() {
    //let navigate= useNavigate();
    return(
      
      <div className="container">
      <h2>Upload File</h2>
      <h3>File uploaded to AWS</h3>
   
          <div>
            <input type="file" onChange={this.onFileChange} />

            <button onClick={this.onFileUpoload} >Upload
            </button>
          </div>  

    {this.fileData()}
   
   

    </div>

 
    )
   }
}
/*
 <button onClick={()=>{
      navigate("/listFile")
    }}
    />

      <BrowserRouter>
      <Routes>
          <Route path="/listFile" element={<ListFile/>} />
          
          </Routes>
     </BrowserRouter>
      */
export default App;
