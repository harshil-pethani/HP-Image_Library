import React, { useState, useEffect } from 'react';
import Card from './Components/Card';
import './App.css';

const App = () => {
  const [imgName, setImgName] = useState();
  const [amount, setAmount] = useState(15);
  const [images, setImages] = useState([]);

  const NewImgName = (e) => {
    setImgName(e.target.value);
  }

  const newAmount = (e) => {
    setAmount(e.target.value);
  }
  
  const url = `https://pixabay.com/api/?key=21737638-661a032e869dfd0eb39ee55ee&q=${imgName}&image_type=photo&per_page=${amount}&safesearch=true`;

  async function getdata(){
    if(imgName !== '')
    {
      const res = await fetch(url);
      const resdata = await res.json();
      setImages(resdata.hits);
      console.log(resdata.hits);
    }else
    {
      setImages([]);
    }
  };

  useEffect(() => {
    getdata();
  }, [imgName, amount]);


  return (
    <>
      <div className="title">
        <h1>Welcome To HP - Image Library</h1>
      </div>
      <div className="mainbox">
        <div className="searchbox">
          <input type="text" onChange={NewImgName} name="imgname" placeholder="Image Name" id="" />
        </div>
        <div className="selectbox">
          <select onChange={newAmount} value={amount} name="amount" id="amount">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="30">30</option>
            <option value="50">50</option>
          </select>
        </div>
        <div className="images">
          {
            images.map((img,index) => {
              return (
                < Card key={index} imglink={img.previewURL} largeimg={img.largeImageURL} likes={img.likes} comments={img.comments} downloads={img.downloads}/>
              )
            })
          }
        </div>
      </div>
    </>
  );
}

export default App;

