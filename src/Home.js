import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
       <div className="home__container">

         <img className="home__image" src="./images/Home1.jpg" alt="Front-discount-pic" />

          <div className="home__row">
              <Product id="1" title='Highlander Olive Green Slim Fit Casual Shirt' price={469.00} 
              image="./images/products/1.jpg" rating={5}/>
              <Product id="2" title='Roadster Men Black & White Checked Pure Cotton Casual Sustainable Shirt' price={524.00} 
              image="./images/products/2.jpg" rating={5}/>
              <Product id="3" title='Roadster Men Blue Regular Fit Faded Casual Denim Sustainable Shirt' price={809.00} 
              image="./images/products/3.jpg" rating={3}/>
              <Product id="4" title='HIGHLANDER Men White & Blue Slim Fit Printed Casual Shirt' price={527.00} 
              image="./images/products/4.jpg" rating={4}/>
              {/* product */}
           
          </div>

          <div className="home__row">
              <Product id="5" title='WROGN Men Blue Slim Fit Mid-Rise Clean Look Stretchable Jeans' price={1959.00} 
              image="./images/products/5.jpg" rating={4}/>
              <Product id="6" title='WROGN Men Black Slim Fit Mid-Rise Clean Look Jeans' price={1439.00} 
              image="./images/products/6.jpg" rating={3}/>
              <Product id="7" title='Calvin Klein Jeans Men Black Skinny Fit Stretchable Jeans' price={6999.00} 
              image="./images/products/7.jpg" rating={5}/>
              {/* product */}

          </div>

          <div className="home__row">
              <Product id="8" title='Fire-Boltt Ninja Unisex Touch to Wake SpO2 Smartwatch 07BSWAAY - Black' price={1999.00} 
              image="./images/products/8.jpg" rating={5}/>
              <Product id="9" title='NOISE Fit Evolve 2 Smartwatch - Charcaol Black' price={3999.00} 
              image="./images/products/9.jpg" rating={4}/>
              {/* product */}

          </div>

          <div className="home__row">
              <Product id="10" title='AfroJack Men Green & White Woven Design Sneakers' price={799.00} 
              image="./images/products/10.jpg" rating={4}/>
              <Product id="11" title='Tommy Hilfiger Men White Leather Sneakers' price={6999.00} 
              image="./images/products/11.jpg" rating={4}/>
              <Product id="12" title='Nike Women White & Pink Woven Design Air Zoom Pegasus 38 Running Shoes' price={11495.00} 
              image="./images/products/12.jpg" rating={4}/>
              <Product id="13" title='HRX White Air Running Shoes' price={2499.00} 
              image="./images/products/13.jpg" rating={4}/>
              {/* product */}

          </div>
          
       </div>
    </div>
  );
}

export default Home;
