import Footer from "components/Footer/Footer";
import Header from "layouts/components/Header/Header";

function DefaultLayout({children}) {
   return ( 
      <div>
         <Header/>
         {children}
         <Footer/>
      </div>
    );
}

export default DefaultLayout;