import {FC} from 'react';
import './searchHeader.scss';
import Navigation from '../../Header/Nav/nav';



interface HeaderProps{
    imageUrl: string,
}

const SearchHeader:FC<HeaderProps> = ({
    imageUrl
}) =>{

    return(
        <section className="sheader">
            <div className="sheader-wrap d-flex flex-column" style={{background:`url(${imageUrl}) no-repeat`}}>
                {/* {<Navigation />} // треба добавити SetmodalActive*/}  
                {/* <img src={imageUrl} alt="postimage" /> */}
                
            </div>            
        </section>
    );
}

export default SearchHeader;