interface Provider {
  index: string;
  title: string;
  symbol: string;
  description: string;
  image_url: string;
  country: string[];
  category: string[];
  pubDate: string;
}
type AppProps = {
  newsList: Array<Provider>;
};

const NewsPage = ({ newsList }: AppProps) => {
  console.log(newsList);
  return (
    <>
      <div className="d-flex p-2 flex-wrap">
        {newsList.map((item, index) => {
          return (
            <div className="card" style={{ width: "18rem" }} key={index}>
              <img
                className="card-img-top"
                src={item.image_url}
                alt="Sunset in the mountains"
              />
              <div className="card-body">
                <div className="font-bold text-xl mb-2">{item.title}</div>
                <p className="text-gray-700 text-base">{item.description}</p>
                {/* <a classNameName="font-bold text-x" href={item.url}>
                    Read More
                  </a> */}
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-1 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {item.country[0]}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-1 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {item.category[0]}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>)
};

export default NewsPage;
