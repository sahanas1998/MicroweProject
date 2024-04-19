import React from 'react';

function Home() {
  return (
    <div>
      <div>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/800px-Good_Food_Display_-_NCI_Visuals_Online.jpg' height="100%" width="100%" alt="food display"/>
        <h4 className='p-3 text-center'>Launch fast your great products</h4>
      </div>
      <div className="container">
        <div className="row">
            <div className="col-sm-12 col-md-4 mb-3">
            <div className="card">
              <img src="https://5.imimg.com/data5/PN/LT/GLADMIN-28409022/south-indian-500x500.jpg" className="card-img-top" alt="food" width="400" height="300"/>
              <div className="card-body text-start">
                <h5 className="card-title">Breakfast</h5>
                <p className="card-text">Available from 6am to 11am</p>
                <a href="#" className="btn btn-primary">Go Menu</a>
              </div>
            </div>
          </div>
      <div className="col-sm-12 col-md-4 mb-3">
      <div className="card">
        <img src="https://noworriescurries.com.au/cdn/shop/articles/PHOTO-2021-02-01-12-44-49_1024x1024.jpg?v=1612149686" className="card-img-top" alt="food" width="400" height="300"/>
        <div className="card-body text-start">
          <h5 className="card-title">Lunch</h5>
          <p className="card-text">Available from 12pm to 3pm</p>
          <a href="#" className="btn btn-primary">Go Menu</a>
        </div>
      </div>
    </div>
        <div className="col-sm-12 col-md-4 mb-3">
      <div className="card">
        <img src="https://www.lacademie.com/wp-content/uploads/2022/01/indian-flatbread.jpg" className="card-img-top" alt="food" width="400" height="300"/>
        <div className="card-body text-start">
          <h5 className="card-title">Dinner</h5>
          <p className="card-text">Available from 6pm to 10pm</p>
          <a href="#" className="btn btn-primary">Go Menu</a>
        </div>
      </div>
    </div>
  </div>
      </div>
      <h4 className='p-3 text-center'>Launch fast your great products</h4>
      <div className="container">
        <div className="row">
          <Item title="Chicken Biryani" text="Basmathy Rice & Chicken & Raitha & Egg" img="https://saihomefood.in/cdn/shop/products/n7.jpg?v=1572348312"/>
          <Item title="Chicken Fried Rice" text="Basmathy Rice & Chicken-65 & chil paste" img="https://spiceeats.com/wp-content/uploads/2020/07/Chicken-Fried-Rice.jpg"/>
          <Item title="Chicken Koththu" text="Rotti & Chicken & Chil paste" img="https://www.shutterstock.com/image-photo/chicken-kottu-kerala-india-sri-600nw-2111347490.jpg"/>
          <Item title="Mutton Biryani" text="Basmathy Rice & Mutton & Raitha & Egg" img="https://www.masalakorb.com/wp-content/uploads/2017/02/Chicken-Biryani-Pressure-Cooker-Recipe-V1.jpg"/>
          <Item title="Fish Dum Biryani" text="Basmathy Rice & Fish & Raitha & curry" img="https://media.citizen.co.za/wp-content/uploads/2023/07/Homemade-fish-breyani.jpg"/>
          <Item title="Egg fried Rice" text="Basmathy Rice with egg & Chil paste & curry" img="https://www.australianeggs.org.au/assets/Uploads/Egg-fried-rice-2__ScaleWidthWzEyMDBd.jpg"/>
      </div>
      </div>
    </div>
  );
}
const Item = (props) => {
  return (
    <div className="col-sm-12 col-md-4 mb-3">
      <div className="card">
        <img src={props.img} className="card-img-top" alt="food" width="400" height="300"/>
        <div className="card-body text-start">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
