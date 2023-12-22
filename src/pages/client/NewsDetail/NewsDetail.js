/* eslint-disable jsx-a11y/alt-text */
import CategorySlide from 'components/Category/CategorySlide';
import FormCommentNews from 'components/Form/FormComment/FormComment';
import { AdminIcon, ClockIcon } from 'components/Icon/Icon';
import NewsItem from 'components/NewsItem/NewsItem';
import NewSideBar from 'components/NewsSlideBar/NewSideBar';
import { useState } from 'react';

const listnew = [
  {
    img: 'https://bizweb.dktcdn.net/100/485/241/articles/blog2.jpg?v=1685960411533',
    date: '10 tháng 06 2023',
    title: 'Mẹo phát hiện ly cốc bát đĩa nhiễm độc và cách phòng tránh',
    desc: 'Mẹo nhận biết ly cốc bát đĩa nhiễm độc: Hoa văn càng sặc sỡ thì hàm lượng chì càng lớn Bởi thuỷ tinh nung trên 1.000 độ C thường không có màu.'
  },
  {
    img: 'https://bizweb.dktcdn.net/100/485/241/articles/blog3.jpg?v=1685960815727',
    date: '10 tháng 06 2023',
    title: 'Tinh hoa nghề gốm xưa và nay',
    desc: 'Xuất hiện cách đây hàng ngàn năm, nghề Gốm không chỉ cho thấy tiến bộ vượt bậc trong thiết kế sản xuất ra những công cụ phục vụ cuộc sống mà'
  },
  {
    img: 'https://bizweb.dktcdn.net/100/485/241/articles/blog1.jpg?v=1685959536597',
    date: '10 tháng 06 2023',
    title: 'Bí quyết bảo quản bộ ấm chén uống trà trông như mới',
    desc: 'Các bộ ấm trà được làm từ sứ cao cấp, sứ mạ vàng luôn là lựa chọn hàng đầu của rất nhiều khách hàng trung và thượng lưu hiện nay, bởi chất lượng   '
  },
  {
    img: 'https://bizweb.dktcdn.net/100/485/241/articles/untitled-2-78569c99-6c36-4f83-aa4f-8f56f2fc98a7.png?v=1686381509860',
    date: '10 tháng 06 2023',
    title: 'Cách bảo quản đồ gốm sứ đúng cách tại nhà',
    desc: 'Cách bảo quản đồ gốm sứ đúng cách tại nhà đơn giản nhất định phải biết. Chỉ với các mẹo vặt cùng nguyên liệu đơn giản sẽ giúp chúng ta có các sản'
  },
  {
    img: 'https://bizweb.dktcdn.net/100/485/241/articles/untitled-2-9fae433b-702b-488b-8238-67daf692d02c.png?v=1686380575807',
    date: '10 tháng 06 2023',
    title: 'Nồi sứ dưỡng sinh – cuộc cách mạng từ chiếc nồi đất',
    desc: 'Cuộc sống hiện đại đã đưa đến các dụng cụ nấu nướng tiện lợi nhưng tiềm ẩn nhiều nguy cơ về sức khỏe được ủ mầm qua thời gian dài. Nồi bằng'
  },
  {
    img: 'https://bizweb.dktcdn.net/100/485/241/articles/untitled-2.png?v=1686380115927',
    date: '10 tháng 06 2023',
    title: 'Để biến gian bếp "chán đời" thành bếp chuẩn Instagram!',
    desc: 'Đừng nghĩ rằng để có gian bếp lung linh, đạt chuẩn background sống ảo thì bạn cần bỏ ra số tiền kha khá mới cải tổ thành công. Thực ra, có một chiêu'
  }
];
function NewsDetail() {
  const [comments, SetComents] = useState([]);
  console.log(comments);
  const date = new Date();
  
  const onSubmit = (values) => {
    SetComents([...comments, values]);
  };
  return (
    <div className=''>
      <div className=''>
        <CategorySlide title='Tin Tức Detail' />
        <div className='w-1180'>
          <div>
            <div className='grid grid-cols-3 gap-7'>
              <div className='col-span-2'>
                <div>
                  <h1 className='font-bold text-3xl mb-4'>Tinh hoa nghề gốm xưa và nay</h1>

                  <div className='mb-[10px]'>
                    <div className='flex gap-6 mb-[10px] font-semibold'>
                      <div className='text-primaryLight flex items-center gap-2'>
                        <ClockIcon />
                        <span className='text-black text-sm'>10 tháng 06 2023</span>
                      </div>

                      <div>
                        <div className='text-primaryLight flex items-center gap-2'>
                          <AdminIcon />
                          <span className='text-black text-sm'> Huỳnh Nguyễn Hồng Liêm</span>
                        </div>
                      </div>
                    </div>
                    <p className='text-sm font-medium'>
                      Xuất hiện cách đây hàng ngàn năm, nghề Gốm không chỉ cho thấy tiến bộ vượt bậc trong thiết kế
                      sản xuất ra những công cụ phục vụ cuộc sống mà còn cho thấy trí sáng tạo và đôi bàn tay khéo
                      léo của người thợ gốm Việt Nam. Trải qua bao thăng trầm cùng với thời gian, những làng gốm
                      nổi tiếng xưa vẫn được gìn giữ và lưu truyền tới ngày nay như: Làng Gốm Bát Tràng, làng Gốm
                      Chu Đậu, làng Gốm Bàu Trúc
                    </p>
                  </div>

                  <div className='text-sm font-medium '>
                    <h4 className='font-16'>Tinh hoa Gốm xưa</h4>
                    <p className='mt-3'>
                      Gốm cổ truyền Việt Nam có cách đây hàng ngàn năm. Gốm xuất hiện trong những di chỉ thuộc văn
                      hóa Hòa Bình, văn hóa Bắc Sơn, văn hóa Hạ Long và trong di chỉ thuộc hậu kỳ đồ đá mới Phùng
                      Nguyên, giai đoạn Đồng Đậu, giai đoạn Gò Mun... Đặc biệt, đến thời Lý - Trần (thế kỷ XI -
                      XIV) nghề gốm Việt Nam đã có bước phát triển vượt bậc từ kỹ thuật đến chất men. Các sản phẩm
                      gốm thời Lý - Trần có họa tiết đa dạng, tinh xảo mang lại giá trị thẩm mỹ rất cao và là niềm
                      khao khát của nhiều quốc gia trên thế giới. Theo tài liệu giới thiệu “Lịch sử nghề gốm ở Thổ
                      Hà” của Ty Văn hóa Hà Bắc và tài liệu “Tìm hiểu nghề gốm ở Bát Tràng”, tư liệu đánh máy của
                      Viện Mỹ thuật, năm 1964, vào khoảng thời Lý - Trần có ba người đỗ Thái học được cử đi sứ nhà
                      Tống (Trung Quốc) là Hứa Vĩnh Kiều, người làng Bồ Bát (Thanh Hóa), Đào Trí Tiến, người làng
                      Thổ Hà (Hà Bắc), Lưu Phong Tú, người làng Kẻ Sặt (Hải Dương) đã học được nghề sứ gốm. Khi về
                      nước, ba ông chọn ngày lành tháng tốt lập đàn ở bên sông Hồng làm lễ truyền nghề cho dân
                      làng. Để truyền nghề, ông Kiều về làng Bồ Bát chuyên chế các hàng gốm sắc trắng; ông Tiến về
                      làng Thổ Hà chuyên chế các hàng gốm sắc đỏ; ông Tú về làng Phù Lãng chuyên chế các hàng gốm
                      sắc vàng, thẫm.
                    </p>
                    <p className='mb-3'>
                      Ở thời Lý, nghề gốm nổi tiếng đứng đầu là Gốm hoa nâu, tiếp đến là Gốm men vàng và xanh lục.
                      Gốm hoa nâu mang đậm yếu tố Phật giáo thời bấy giờ, những đề tài về hoa sen, hoa cúc được
                      khắc họa trên đồ gốm lúc hiện thực lúc thi vị hóa. Hoa văn hình rồng thời Lý trên gốm mang
                      nét đặc trưng với đường nét mềm mại, uốn lượn tinh xảo. Gốm hoa nâu có cốt gốm dày thô, chắc
                      chắn.
                    </p>
                    <p className='mb-3'>
                      Đến thời Trần, nghề gốm phát triển các dòng men trắng, xanh ngọc, hoa nâu nhưng tiêu biểu
                      nhất là dòng gốm hoa lam với màu men trắng đục họa tiết màu xanh lam. Hoa văn trang trí là
                      hoa dây lá, hoa sen, chim muông. Hoa văn hình rồng thời Trần trên gốm đã có thay đổi so với
                      thời Lý với những đường nét, dáng vẻ khỏe khoắn, uốn lượn tự do không thanh mảnh và gò bó như
                      rồng thời Lý.
                    </p>
                    <p className='mb-3'>
                      Nghề gốm thời Lý - Trần phát triển mạnh ở nhiều tỉnh. Mỗi vùng quê gốm có kỹ nghệ và mặt hàng
                      gốm đặc trưng riêng tạo nên sự đa dạng và phong phú của nghề gốm Việt Nam. Những trung tâm sứ
                      gốm xuất hiện từ thời Lý-Trần đến nay vẫn còn hưng thịnh có thể kể đến như: Làng gốm Bát
                      Tràng Hà Nội; làng gốm Chu Đậu (Hải Dương); Thổ Hà, Phù Lãng (Bắc Ninh)…
                    </p>
                  </div>
                  <div className='text-sm font-medium'>
                    <h1 className='font-16'>Giữ gìn và phát triển hồn gốm Việt</h1>
                    <p className='mb-3 mt-3'>
                      Trải qua hàng ngàn năm, nghề gốm lúc thịnh, lúc suy, song các thế hệ người làm gốm vẫn gìn
                      giữ phát triển thổi hồn vào từng sản phẩm gốm Việt. Sản phẩm gốm ngày nay khá đa dạng từ gốm
                      thô bằng đất nung đến những đồ gia dụng và trang trí tinh tế với nhiều sắc men phong phú. Mỗi
                      sản phẩm gốm ngày nay không chỉ thể hiện bàn tay khéo léo, sự tinh tế, sáng tạo của người thợ
                      mà những giá trị văn hóa truyền thống của người dân Việt Nam luôn được lưu giữ trong từng sản
                      phẩm gốm, mang tâm hồn Việt.
                    </p>
                    <p className='mb-3'>
                      Khác với nghề gốm truyền thống, gốm sứ hiện đại với sự tiến bộ về công nghệ dây chuyền sản
                      xuất, các sản phẩm gốm được làm toàn bộ bằng máy móc và sử dụng kỹ thuận in nung gốm ở nhiệt
                      độ cao, mực in sẽ được giữ vĩnh viễn, bền theo thời và đảm bảo sức khỏe cho người dùng. Với
                      kỹ thuật in nhiệt, sản phẩm in không bị bong tróc và nứt mẻ. Sản phẩm gốm khá đa dang về mẫu
                      mã, chủng loại và có nhiều công dụng hơn.
                    </p>
                    <p className='mb-3'>
                      Theo dòng thời gian, tinh hoa nghề gốm Việt Nam không dừng lại mà tiếp tục phát triển vươn ra
                      thế giới và trở thành niềm tự hào cho người Việt. Tiêu biểu có làng gốm Bát Tràng (Hà Nội)
                      được hình thành và phát triển từ thời nhà Lý, đến nay gốm Bát Tràng đã trở thành thương hiệu
                      có tiếng, có phong cách riêng, giàu bản sắc. Các sản phẩm của làng nghề gốm Bát Tràng đa dạng
                      về dòng men, chủng loại, màu sắc, thiết kế… Bên cạnh việc phát triển sản phẩm đại trà, nhiều
                      nghệ nhân, thợ giỏi với bàn tay khéo léo cùng sự đam mê đã sáng tạo ra nhiều sản phẩm gốm sứ
                      độc đáo. Những người thợ tài hoa đã phục chế thành công nhiều tác phẩm gốm sứ cổ như: Gốm sứ
                      đời Lý, đời Trần, đời Nguyễn…, khôi phục và chế tác nhiều công thức men đặc sắc. Đặc biệt
                      những năm gần đây, nhờ ứng dụng khoa học, cải tiến kỹ thuật công nghệ các sản phẩm gốm Bát
                      Tràng liên tục được cải tiến mẫu mã, chất lượng ngày càng cao, đáp ứng được thị hiếu tiêu
                      dùng và phục vụ tín ngưỡng của khách hàng trong nước và chinh phục được nhiều thị trường quốc
                      tế.
                    </p>
                    <p className='mb-3'>
                      Ngoài làng gốm Bát Tràng, làng gốm Chu Đậu (huyện Nam Sách, tỉnh Hải Dương) lưu giữ một dòng
                      gốm đẹp của Việt Nam. Gốm Chu Đậu phát triển rực rỡ từ thế kỷ 14 đến thế kỷ 17 và sau hơn ba
                      thế kỷ bị thất truyền, gốm Chu Đậu ngày nay đang hồi sinh, trở thành mặt hàng thủ công mỹ
                      nghệ có giá trị ở cả thị trường trong nước và thị trường xuất khẩu. Phương pháp chế tác gốm
                      Chu Đậu hiện đã đạt trình độ cao. Các sản phẩm được thể hiện trên chất liệu men trắng hoa
                      lam, men ngọc, hay men mầu tam thái với dáng vẻ đến họa tiết, hoa văn trang trí... đều mang
                      dấu ấn bản sắc, tinh hoa văn hóa Việt với tính nghệ thuật cao, miêu tả khung cảnh thiên nhiên
                      và cuộc sống của cư dân đồng bằng châu thổ sông Hồng.
                    </p>
                    <p className='mb-3'>
                      Ngày nay việc gìn giữ và phát triển tinh hoa gốm Việt tuy còn gặp nhiều khó khăn và thách
                      thức nhưng với trí tuệ, bàn tay, khối óc của những nghệ nhân, những làng gốm vẫn đỏ lửa lò
                      nung để cho ra những sản phẩm đặc sắc gốm Việt và con đường gốm sứ tiếp tục viết nên những
                      tinh hoa của nghề gốm xưa và nay./.
                    </p>
                  </div>
                </div>
              </div>

              <div className='col-span-1'>
                <NewSideBar />
              </div>
            </div>
            {/* bình luận */}
            <div>
              <div className='p-2 mt-16'>
                <h1 className='font-bold text-2xl text-primary'>VIẾT BÌNH LUẬN CỦA BẠN</h1>

                <FormCommentNews onSubmit={onSubmit} comments={comments} />

                <div className='pl-3'>
                  {comments && (
                    <div className='font-medium mt-3 pb-4'>
                      <span>Bình luận </span>
                      <span>{`(${comments.length})`}</span>
                    </div>
                  )}
                  {comments.map((comment, index) => {
                    return (
                      <div className='flex mb-5' key={index}>
                        <div className='h-16 w-16'>
                          <img src='https://www.gravatar.com/avatar/d83b29102a25972c094a42b1f9c80da1?s=110&d=identicon'></img>
                        </div>
                        <div className='flex flex-col ml-[10px] font-normal'>
                           <span className='font-semibold'>{comment.fullName}</span>
                           <span className='text-sm'>
                              <span>{date.getDate()}/</span>
                              <span>{date.getMonth() + 1}/</span>
                              <span>{date.getFullYear()}</span>
                           </span>
                           <span className='text-sm'>{comment.content}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* tin tức liên quan */}
            <div>
              <div className='mt-8'>
                <h1 className='font-32'>Tin liên quan</h1>
                <div className='p-2 flex gap-5 overflow-x-auto'>
                  {listnew.map((item, index) => {
                    return (
                      <div className='w-[32%] flex-shrink-0' key={index}>
                        <NewsItem data={item} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsDetail;
