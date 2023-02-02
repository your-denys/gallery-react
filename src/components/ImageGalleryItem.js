
export const ImageGalleryItem = ({picture, name, showIdModel, onClick}) => {
    return(
        <>
        {picture.map(({id, webformatURL }) => (
      
                <li onClick={onClick} className='ImageGalleryItem' key={id}>
                    <img className='ImageGalleryItem-image' onClick={() => showIdModel(id)} src={webformatURL} alt ={name}/>
                </li>   
           
          ))}

        </>
    )
}