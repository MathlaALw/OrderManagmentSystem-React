const FashionCard = ({ item }) => {
  return (
    <div className="col-md-4 mb-3">
      <div className="card h-100">
        <div className="card-body">
          <h6 className="card-title">{item.title}</h6>

          <p className="mb-1 text-muted">{item.brand}</p>

          <p className="mb-1">
            Price: <strong>${item.priceAfterDiscount ?? item.price}</strong>
          </p>

          <p className="mb-0">
            ⭐ {item.ratingsAverage}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FashionCard;
