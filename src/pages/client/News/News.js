import CategorySlide from 'components/Category/CategorySlide';
import NewsItem from 'components/NewsItem/NewsItem';
import NewSideBar from 'components/NewsSlideBar/NewSideBar';
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
function News() {
   return (
      <div className=''>
         <CategorySlide title='Tin tức' />
         <div className='w-1180 p-[24px_0_40px_0]'>
            <div className='grid grid-cols-3 gap-10 w-full'>
               <div className='col-span-2'>
                  <div className='grid grid-cols-2 gap-8'>
                     {/* map news*/}
                     {listnew.map((item, index) => {
                        return (
                           <div key={index} className='grid-cols-1 '>
                              <NewsItem data={item} />
                           </div>
                        );
                     })}
                  </div>
               </div>
               {/* sildebar */}
               <div className='col-span-1'>
                  <NewSideBar />
               </div>
            </div>
         </div>
      </div>
   );
}

export default News;
