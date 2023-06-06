import "./SizeOptions.css"

const SizeOptions = (props) => {
    const {name, specific_size} = props;
    console.log(`SizeOptions.js -> props size name= ${name}`);

    return ( 
        <div className="sizeType">
            <span>{name}</span>
            <label>{specific_size}</label>
        </div>
    );
}
 
export default SizeOptions;