function Button(props){
    const defaultClassName = "bg-blue-700 text-xs p-2 hover:bg-blue-900 rounded-md transition transform";
    const className = props.className ? `${defaultClassName} ${props.className}` : defaultClassName;
    return (
        <button 
        onClick={props.onClick}
        onChange={props.onChange}
        onSubmit={props.onSubmit}
        onMouseOver={props.onMouseOver}
        onMouseOut={props.onMouseOut}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        className={className}>
        {props.content}
        </button>
    )
}

export default Button;