import React from 'react';

const Card = (props) => {
    const viewImg = (link) => {
        const root = document.getElementById('root');
        const div = document.createElement('div');
        const img = document.createElement('img');
        const i = document.createElement('i');
        i.classList.add('fas','fa-times-circle');
        i.onclick = () => {
            root.removeChild(root.childNodes[0]);
        }
        
        img.src = link;
        div.appendChild(img);
        div.appendChild(i);
        div.classList.add('fullImg');
        root.insertBefore(div,root.childNodes[0]);
    }

    return (
        <>
            <div className="card">
                <img src={props.imglink} alt="" />
                <div className="content">
                    <div className="para">
                        <i className="fas fa-heart"> {props.likes}</i>
                        <i className="fas fa-comment"> {props.comments}</i>
                        <i className="fas fa-arrow-alt-circle-down"> {props.downloads}</i>
                    </div>
                    <div className="btn">
                        <i onClick={()=>viewImg(props.largeimg)} className="fas fa-search-plus"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;