/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { FaceBookIcon, InstagramIcon, YoutobeIcon } from "components/Icon/Icon";
import LayoutSection from "../../Layout/LayoutSection";

const infoArtists = [
  {
    name: "Sương Trần",
    img: "//bizweb.dktcdn.net/100/485/241/themes/911577/assets/image_nghe_nhan_1.png?1700209535143",
  },
  {
    name: "Phát Trần",
    img: "//bizweb.dktcdn.net/100/485/241/themes/911577/assets/image_nghe_nhan_2.png?1700209535143",
  },
  {
    name: "An Nguyễn",
    img: "//bizweb.dktcdn.net/100/485/241/themes/911577/assets/image_nghe_nhan_3.png?1700209535143",
  },
];

function Artist() {
  return (
    <div
      style={{
        backgroundImage:
          "url(//bizweb.dktcdn.net/100/485/241/themes/911577/assets/background.jpg?1700209535143)",
      }}
    >
      <LayoutSection>
        <div>
          {/* title */}
          <div className="mb-6">
            <div className="flex gap-6 items-center">
              <div className="h-4 w-4 rounded-[50%] bg-red relative ">
                <span className="w-full h-full bg-primary rounded-[50%] absolute animate-ping "></span>
              </div>
              <div>
                <h1 className="font-32">Nghệ nhân của chúng tôi</h1>
                <p className="font-medium text-lg text-gray">
                  Gặp gỡ và cùng trò chuyện cùng các chuyên gia của chúng tôi!
                </p>
              </div>
            </div>
          </div>
          {/* body */}
          <div className="body grid grid-cols-3 gap-12">
            {/* item map */}
            {infoArtists.map((item, index) => {
              return (
                <div key={index} className="col-span-1 relative">
                  <div>
                    <img
                      className="rounded-t-xl"
                      src={item.img}
                    ></img>
                  </div>
                  <div className="text-center mt-5">
                    <span className="text-lg font-semibold block">
                     {item.name}
                    </span>
                    <span className="text-gray font-medium">
                      Nghệ nhân làng gốm{" "}
                    </span>
                  </div>
                  {/* icon seciety */}
                  <div className="absolute right-[-6%] top-[32%]">
                    <a href="https://www.facebook.com/">
                      <div className="button-s text-blueBold bg-white mb-2 hover:bg-slate-200 transition">
                        <FaceBookIcon height="32px" />
                      </div>
                    </a>
                    <a href=" https://zalo.me">
                      <div className="button-s text-red bg-white mb-2 hover:bg-slate-200 transition">
                        <YoutobeIcon height="32px" />
                      </div>
                    </a>
                    <a href="https://www.instagram.com/">
                      <div className="button-s text-[#e83e8c] bg-white mb-2 hover:bg-slate-200 transition">
                        <InstagramIcon height="32px" />
                      </div>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </LayoutSection>
    </div>
  );
}

export default Artist;
