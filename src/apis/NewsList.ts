import axios from "axios";

export const NewsList = async (
  setData: React.Dispatch<React.SetStateAction<never[]>>
) => {
  await axios
    .get(
      "https://newsdata.io/api/1/news?apikey=pub_54474c7ef971ade318cb7cb7c4222a0bdc06&q=crypto&language=en",
    )
    .then((resp) => {
      setData(resp.data.results);
    });
};
