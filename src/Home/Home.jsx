import React from "react";
import "./home.css";
import Product from "../Product/Product";
import airfryer from "../images/airfryer.jpg";
import desk from "../images/desk.jpg";
import coffee from "../images/coffee.jpg";
import jacket from "../images/jacket.jpg";
import chair from "../images/chair.jpg";
import tv from "../images/tv.jpg";
import Stepper from "../Stepper/Stepper";
import {nanoid} from "nanoid";


export default function Home() {
 
  return (
    <div>
      <Stepper />
      <div className="container">
        <div className=" row row-2">
          <Product
           id={nanoid()}
            title={"Ultrean Large Air Fryer"}
            content={
              "Ultrean Large Air Fryer 8.5 Quart, Electric Hot Airfryer XL Oven Oilless Cooker with 7 Presets, LCD Digital Touch Screen and Nonstick Detachable Basket, UL Certified, Cook Book, 1700W (Red)"
            }
            price={59.99}
            starNumber={4}
            img={airfryer}
          />
          <Product
          id={nanoid()}
            title={"Desk Storage Organizer"}
            content={
              "submatches Under Desk Drawer Organizer Slide Out, Hidden Self- adhesive Under Desk Storage Drawer with 2 Layers, Add a Drawer Under Table Storage Pencil Drawer for Office/Classroom/Home, White"
            }
            price={26.99}
            starNumber={4}
            img={desk}
          />
        </div>
        <div className="row row-3">
          <Product
        id={nanoid()}
            title={"Coffeemaker"}
            content={
              "Mr. Coffee Coffee Maker with Auto Pause and Glass Carafe, 12 Cups, Black"
            }
            price={16.4}
            starNumber={5}
            img={coffee}
          />
          <Product
          id={nanoid()}
            title={"Denim Jacket"}
            content={"Levi's Women's Baggy Trucker"}
            price={59.99}
            starNumber={4}
            img={jacket}
          />
          <Product
         id={nanoid()}
            title={"Tall Office Chair"}
            content={
              "Tall Office Chair, Drafting Chair, Standing Desk Chair, High Adjustable Office Mesh Chair, Ergonomic Counter Height Computer Rolling Chair with Flip-up Armrests and Foot-Ring for Bar Height Desk"
            }
            price={69.88}
            starNumber={3}
            img={chair}
          />
        </div>
        <div className="row ">
          <Product
          id={nanoid()}
            title={"LCD"}
            content={
              "VIZIO 24-inch D-Series Full HD 1080p Smart TV with Apple AirPlay and Chromecast Built-in, Alexa Compatibility, D24f-J09, 2022 Model"
            }
            price={111.68}
            starNumber={5}
            img={tv}
          />
          
        </div>
       
      </div>
    </div>
  );
}
