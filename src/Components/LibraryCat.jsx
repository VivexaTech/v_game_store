import { useGlobal } from "../StoreData";
import GameCard from "./GameCards";
import { useParams } from "react-router-dom"
export default function LibraryCat() {
    const { deals } = useGlobal();

    const uniqueCategories = deals.filter((item, index, arr) => {
        return arr.findIndex(obj => obj.storeID === item.storeID) === index;

    })

    return (
        <>
            {
                uniqueCategories.map((item) => (
                    <div key={item.storeID}>


                        <div className="container mt-5" id="store-grid" >
                            <div className="row g-4">

                            </div>
                        </div>
                    </div>
                ))
            }

        </>
    )
}