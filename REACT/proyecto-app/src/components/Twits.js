
const Twit = (props) => {

    const {  title, content, img, autor } = props;
    //console.log(img)

    return (
        <article>
            <h3>{title}</h3>
            <p>{content}</p>
            <img alt={title} src={img} />
            <h5>{autor}</h5>
        </article>
    )
}

export default Twit;