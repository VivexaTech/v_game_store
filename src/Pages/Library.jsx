import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useGlobal } from "../StoreData";
import GameCard from "../Components/GameCards";
import { useParams } from "react-router-dom";

export default function Library() {
  const { deals } = useGlobal();
  const { gamecat } = useParams(); // storeID

  const filtered = deals.filter(
    item => item.storeID === gamecat
  );
  const gamesToShow = gamecat? deals.filter(item => item.storeID === gamecat): deals;
  return (
    <>
      <Header />

      <div className="container mt-5">
        <div className="row g-4">
                                <div className="row mb-1 pt-2">
                                    <div className="col-12 text-center section-header">
                                        <h2 className="display-5 fw-bold">Store ID: {gamecat} <span style={{ color: "var(--accent-color)" }}>NOW</span></h2>
                                        <p className="text-muted mt-2">Top rated and best-selling titles of the week.</p>
                                    </div>
                                </div>
          {gamesToShow.map(game => (
            <>
            <GameCard
              key={game.dealID}
              title={game.title}
              img={game.thumb}
              url={game.steamAppID}
              rateper={game.steamRatingPercent}
              ratecount={game.steamRatingCount}
              ratetext={game.steamRatingText}
              price={Number(game.salePrice)}
              nprice={Number(game.normalPrice)}
              mscore={game.metacriticScore}
            />
            </>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
