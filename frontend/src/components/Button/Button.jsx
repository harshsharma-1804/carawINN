function Button(props){
    const defaultClassName = "bg-red-700 p-2 text-xs text-white rounded-md hover:bg-red-900 transition transform";
    const className = props.className ? `${defaultClassName} ${props.className}` : defaultClassName;
    return (
        <button className={className}>{props.content}</button>
    )
}

export default Button;