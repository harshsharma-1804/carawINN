import FleetCard from "../Cards/FleetCard";
import FleetData from "../../Data/FleetData.json";

function createFleetCard(product) {
    return <FleetCard key= {product.id} title={product.title} image={product.image} heading={product.heading} content={product.content}/>
}
export default function Fleet() {
    return(
        <div className="flex flex-wrap justify-center">
            {FleetData.map(createFleetCard)}
        </div>
    )
}