import React, { useState } from 'react';

const Search = () => {
    const [imgName, setImgName] = useState('');
    const [amount, setAmount] = useState(15);

    const NewImgName = (e) => {
        setImgName(e.target.value);
        console.log(imgName);
    }

    const newAmount = (e) => {
        setAmount(e.target.value);
        console.log(amount);
    }

    return (
        <>
            <div className="searchbox">
                <input type="text" onChange={NewImgName} value={imgName} name="imgname" placeholder="Image Name" id="" />
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
        </>
    )
}

export default Search;