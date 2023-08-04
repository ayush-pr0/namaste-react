const ShimmerCard = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-image"></div>
      <div className="shimmer-content">
        <div className="shimmer-title"></div>
        <div className="shimmer-subtitle"></div>
        <div className="shimmer-microtitle"></div>
      </div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <>
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
    </>
  );
};

export default Shimmer;
