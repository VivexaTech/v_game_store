import { useGlobal } from "../StoreData";
import { Link } from "react-router-dom";

export default function SearchBox({ search,url }) {
  const { deals } = useGlobal();

  if (!search) return null;

  const results = deals.filter(game =>
    game.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="search-results position-absolute bg-dark w-100 mt-5 rounded">
      {results.slice(0, 5).map(game => (
        <Link
          key={game.dealID}
          to={`https://store.steampowered.com/app/${game.steamAppID}`}
          className="text-decoration-none text-white"
        >
          <div className="d-flex align-items-center p-2 border-bottom">
            <img
              src={game.thumb}
              alt={game.title}
              width="50"
              className="me-2 rounded"
            />
            <span>{game.title}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
