import { useGlobal } from "../StoreData";
import GameCard from "./GameCards";
import Header from "./Header";
import HeroSec from "./Herosec";

export default function GameData() {
    const { deals } = useGlobal();

    return (
        <>
            <div className="container" id="store-grid" >

                <div className="row mb-5 pt-2">
                    <div className="col-12 text-center section-header">
                        <h2 className="display-5 fw-bold">TRENDING <span style={{ color: "var(--accent-color)" }}>NOW</span></h2>
                        <p className="text-muted mt-2">Top rated and best-selling titles of the week.</p>
                    </div>
                </div>

                <div className="row g-4">
                    {
                        deals.map((item) => (
                            <GameCard key={item.dealID} title={item.internalName} img={item.thumb} url={item.steamAppID} rateper={item.steamRatingPercent} ratecount={item.steamRatingCount} ratetext={item.steamRatingText} price={item.salePrice} nprice={item.normalPrice} mscore={item.metacriticScore} />
                        ))
                    }
                </div>
            </div>
        </>
    );
}
