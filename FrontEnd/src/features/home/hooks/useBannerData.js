import { useEffect, useState } from "react";
import { getTopicApi } from "../services/topicApi";
const useBannerData = () => {
  const [bannerData, setBannerData] = useState([]);
  useEffect(() => {
    const fetchTopic = async () => {
      const res = await getTopicApi();

      if (res && !res?.message) {
        setBannerData(res.data);
        console.log(bannerData);
      }
    };
    // fetchTopic();
  }, []);
  return bannerData;
};

export default useBannerData;

//  {
//       title:
//         "Ra mắt trang phục cặp đôi của Thiên Bồng Đại Nguyên Soái và Cao Thúy Lan, bạn đã sẵn sàng để sở hữu chưa!!!!",
//       description:
//         "Ra mắt trang phục cặp đôi của Thiên Bồng Đại Nguyên Soái và Cao Thúy Lan, bạn đã sẵn sàng để sở hữu chưa",
//       image: bannerImg,
//     },
//     {
//       title: "Banner 2",
//       description: "This is banner 2",
//       image:
//         "https://iforum-cn2.c.hihonor.com/cn/cn_data/images/13001/2024/8/7/68f8cf37-db69-453f-86c5-7899c0c4f1fd.jpg?imageId=161574",
//     },
//     {
//       title: "Banner 3",
//       description: "This is banner 3",
//       image:
//         "https://www.iwanboy.com/upload/image/20240719/afca5feec1484424b3767b8c5b896f14.png",
//     },
//     {
//       title: "Banner 4",
//       description: "This is banner 4",
//       image:
//         "https://and-static.ghzs.com/image/article/crawl/2024/06/24/6679765a8cc904c7cf053687.jpg?x-oss-process=image/format,webp",
//     },
//     {
//       title: "Banner 4",
//       description: "This is banner 4",
//       image:
//         "http://i.17173cdn.com/2fhnvk/YWxqaGBf/cms3/wwYCspbrFvyjnEn.jpg!a-3-540x.jpg",
//     },
