import Twit from "./Twits";

const TwitList = (props) => {
    
    const { twits } = props;
 
    return (
        <ul>
            {/*Con esta linea ordenamos en orden inverso*/}
            {/*{twits.slice(0).reverse().map((obTwit, index) => { */}
            {twits.map((obTwit, index) => {
                const { title, content, img, autor } = obTwit
                
                return (
                    <li key={index}>
                       
                        <Twit title={title} content={content} 
                            img={img} alt={title} autor={autor}
                        />
                        
                    </li>

                );
            })}
        </ul>
    )
}

export default TwitList;