export default function GameCard({ title, img, url, rateper, ratetext, price, nprice, ratecount, mscore }) {
    const off = Math.round(((nprice - price) / nprice) * 100);


    return (
        <>
            <div className="col-12 col-sm-6 col-lg-4">
                <div className="card game-card">
                    <div className="card-img-wrapper">
                        <img src={img} className="card-img-top" alt={title} />
                        <div className="metacritic-badge" style={{ backgroundColor: "#66cc33" }}>{mscore}</div>
                    </div>
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{title}</h5>

                        <div className="steam-stats">
                            <div className="d-flex justify-content-between align-items-center mb-1">
                                <span className="steam-rating-text" style={{ color: "#0d6efd" }}><i className="fab fa-steam me-2"></i>{ratetext}</span>
                                <span className="text-white fw-bold small">{rateper}%</span>
                            </div>
                            <div className="progress ">
                                <div className={`progress-bar ${rateper < 30 ? "bg-danger" : "bg-primary"}`}
                                    role="progressbar" style={{ width: `${rateper}%` }}></div>
                            </div>
                            <div className="d-flex justify-content-between mt-2 text-muted small">
                                <span>Reviews:</span>
                                <span>{ratecount}</span>
                            </div>
                        </div>

                        <div className="card-footer-custom">
                            <div className="d-flex align-items-center">
                                <span className="discount-badge">-{off}%</span>
                                <div>
                                    <div className="original-price">${nprice}</div>
                                    <div className="price-tag">${price}</div>
                                </div>
                            </div>
                            <a href={`https://store.steampowered.com/app/${url}`} className="btn btn-buy">
                                BUY <i className="fas fa-shopping-cart ms-1"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}