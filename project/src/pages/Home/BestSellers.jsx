import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import "../../App.css";

const fetchProducts = async () => {
  const response = await fetch("products.json");
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return await response.json();
};

const BestSellers = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const bestSellers = products.filter(
    (product) => product.status === "Best Sellers"
  );

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4">
      <div className="text-center">
        <h2 className="text-3xl font-semibold capitalize mb-5">Best Sellers</h2>
        <p className="text-black/75 capitalize md:w-2/3 mx-auto mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus arcu
          nunc, fermentum quis sapien in, placerat scelerisque risus. Class
          aptent taciti sociosqu ad litora torquent per
        </p>
      </div>

      <div className="mb-16">
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 40 },
              1024: { slidesPerView: 4, spaceBetween: 50 },
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            {bestSellers.map((product) => (
              <SwiperSlide key={product.id}>
                <Link to={`/shop/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="mx-auto w-full hover:scale-105 transition-all duration-300"
                  />
                </Link>
                <div className="mt-4 px-4">
                  <h4 className="text-base font-semibold mb-2">
                    {product.title}
                  </h4>
                  <div className="flex justify-between">
                    <p className="text-black/50">{product.category}</p>
                    <p className="font-semibold">${product.price}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default BestSellers;
