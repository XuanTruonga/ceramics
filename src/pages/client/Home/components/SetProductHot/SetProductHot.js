/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import LayoutSection from "../../Layout/LayoutSection";

const setProduct = [
  {
    img: "//bizweb.dktcdn.net/100/485/241/themes/911577/assets/image_set_1.png?1700209535143",
    price: "5.850.000đ",
    name: "Set sản phẩm trang trí",
  },
  {
    img: "//bizweb.dktcdn.net/100/485/241/themes/911577/assets/image_set_2.png?1700209535143",
    price: " 10.850.000đ",
    name: "Set sản phẩm gia dụng",
  },
  {
    img: "//bizweb.dktcdn.net/100/485/241/themes/911577/assets/image_set_3.png?1700209535143",
    price: " 6.050.000đ",
    name: "Set ấm tách trà",
  },
];

function SetProductHot() {
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
          {/* title */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex_center gap-6">
              <div className="h-4 w-4 rounded-[50%] bg-red relative ">
                <span className="w-full h-full bg-primary rounded-[50%] absolute animate-ping"></span>
              </div>
              <h1 className="font-32">Set sản phẩm nổi bật</h1>
            </div>
          </div>
          {/* body */}
          <div className="grid grid-cols-3 gap-10">
            {/* map item */}  
            {setProduct.map((item, index) => {
              return (
                <div key={index} className="col-span-1">
                  <a href="#" className="overflow-hidden rounded-xl block">
                    <img
                      className="rounded-xl hover:scale-110 transition"
                      src={item.img}
                    ></img>
                  </a>
                  <div className="text-center">
                    <span className="font-semibold text-lg mt-4 mb-2 block">
                      {item.name}
                    </span>
                    <div className="p-[3px 15px] bg-white inline-block">
                      <span className="font-medium mr-1">Giá:</span>
                      <span className="text-red font-extrabold text-[20px]">
                        {item.price}
                      </span>
                    </div>
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

export default SetProductHot;
