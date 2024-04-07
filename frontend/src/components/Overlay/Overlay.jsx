import Button from "../Button/Button";

const Overlay = (props) => {
    const defaultClassName = "relative overlay-content bg-white p-10 rounded-lg h-0.8 w-1/3";
    const className = props.className ? `${defaultClassName} ${props.className}` : defaultClassName;
    return (
      <div className="overlay fixed top-0 left-0 h-full w-full flex justify-center items-center bg-black bg-opacity-80 z-50">
        <div className={`${className}`}>
            <div className="mt-3 h-full w-full overflow-x-scroll">
            {props.children}
            </div>
            <Button onClick={props.onClose} className="absolute top-2 right-4 !bg-transparent font-thin !text-black !text-xl hover:bg-transparent hover:font-extrabold duration-600 hover:scale-90 transition ease-in-out" content="&#x2715;"/>
        </div>
      </div>
    );
  };

export default Overlay;