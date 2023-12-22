/* eslint-disable jsx-a11y/alt-text */
import LayoutSection from "../../Layout/LayoutSection";
import { InstagramIcon } from "components/Icon/Icon";

const imgs = [
  {
    img: "//bizweb.dktcdn.net/100/485/241/themes/911577/assets/image_ins_2.png?1700209535143",
  },
  {
    img: "//bizweb.dktcdn.net/100/485/241/themes/911577/assets/image_ins_3.png?1700209535143",
  },
  {
    img: "//bizweb.dktcdn.net/100/485/241/themes/911577/assets/image_ins_4.png?1700209535143",
  },
  
];
function Instagram() {
  return (
    <div
      className="bg-pinkLight mb-11"
      style={{
        backgroundImage:
          "url(https://bizweb.dktcdn.net/100/485/241/themes/911577/assets/background_module.png?1688630334113)",
      }}
    >
      <LayoutSection>
        <div>
          <div className="text-center">
            <h3 className="font-medium text-lg">
              Theo dõi instagram của chúng tôi
            </h3>
            <a
              href="https://www.instagram.com/"
              className="inline-block mb-8 px-3 hover:text-primaryLight text-primary text-2xl transition"
            >
              @sudesgomsu
            </a>
          </div>

          <div className="flex gap-4">
            {/* map */}
            {imgs.map((item,index) => {
              return (
                <a
                  key={index}
                  href="https://www.instagram.com/"
                  className="rounded-3xl relative group h-full overflow-hidden"
                >
                  <img src={item.img}></img>
                  <div className="flex_center hidden absolute group-hover:flex top-0 right-0 left-0 bottom-0 text-white rgba-6 smooth">
                    <InstagramIcon height="80px"/>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </LayoutSection>
    </div>
  );
}

export default Instagram;
