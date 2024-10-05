import "./featuredProperties.css"

const FeaturedProperties = () => {
    return (
        <div>
            <h1 className="title">Featured Properties</h1>
            <div className="fpList">
                <div className="fpListItem">
                    <img src="https://cf.bstatic.com/xdata/images/hotel/square240/10688980.jpg?k=a3bb814522e8b1b60ed9b04a241c584705334d5e7a7da89ae70c8a0ef72424fd&o=" alt="" className="fpImg" />
                    <h2 className="fpName">Shantai Hotel</h2>
                    <div className="fpTitles">
                        <p className="fpCity">Pune</p>
                        <h3 className="fpPrice">₹6500</h3>
                    </div>
                </div>
                <div className="fpListItem">
                    <img src="https://cf.bstatic.com/xdata/images/hotel/square240/18068240.jpg?k=0655f35ba94d8c77508b045ba8f30d21445a321ff6e3e33a5ccda85de55f32e3&o=" alt="" className="fpImg" />
                    <h2 className="fpName">The Lalit Hotel</h2>
                    <div className="fpTitles">
                        <p className="fpCity">Mumbai</p>
                        <h3 className="fpPrice">₹9000</h3>
                    </div>
                </div>
                <div className="fpListItem">
                    <img src="https://cf.bstatic.com/xdata/images/hotel/square240/560049988.jpg?k=67ed351502e9c311dc3f63efb7d900943ec91e6536cbcdfbfdf139640d096219&o=" alt="" className="fpImg" />
                    <h2 className="fpName">The Palette</h2>
                    <div className="fpTitles">
                        <p className="fpCity">Pune</p>
                        <h3 className="fpPrice">₹4500</h3>
                    </div>
                </div>
                <div className="fpListItem">
                    <img src="https://cf.bstatic.com/xdata/images/hotel/square240/547167254.jpg?k=74e0389270d8b0b3048c018adf16018d5218d56d153943719f6e269e33ee09fa&o=" alt="" className="fpImg" />
                    <h2 className="fpName">The FabHotel</h2>
                    <div className="fpTitles">
                        <p className="fpCity">Pune</p>
                        <h3 className="fpPrice">₹5000</h3>
                    </div>
                </div>
                <div className="fpListItem">
                    <img src="https://cf.bstatic.com/xdata/images/hotel/square600/531732579.webp?k=df9d17c4371175b0e4a60e390083280c837d5e94dacc7d9ae6db48728b5fb5ff&o=" alt="" className="fpImg" />
                    <h2 className="fpName">Leman Lock</h2>
                    <div className="fpTitles">
                        <p className="fpCity">Pune</p>
                        <h3 className="fpPrice">₹10000</h3>
                    </div>
                </div>
                <div className="fpListItem">
                    <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=" alt="" className="fpImg" />
                    <h2 className="fpName">Apart Hotel</h2>
                    <div className="fpTitles">
                        <p className="fpCity">Pune</p>
                        <h3 className="fpPrice">₹8000</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProperties