import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetailsSection from "../../components/Product/ProductDetailsSection";
import ProductDetails from "../../components/Product/ProductDetails";
import ProductDescription from "../../components/Product/ProductDescription";
import ProductHighlights from "../../components/Product/ProductHighlights";

const getRandomDemoText = (demoTexts) => {
  const randomIndex = Math.floor(Math.random() * demoTexts.length);
  return demoTexts[randomIndex];
};

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [demoText, setDemoText] = useState({});

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchDemoTexts = async () => {
      try {
        const response = await fetch("/demoTexts.json");
        const data = await response.json();
        setDemoText(getRandomDemoText(data));
      } catch (error) {
        console.error("Error fetching demo texts:", error);
      }
    };

    fetchDemoTexts();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        const product = data.find((p) => p.id == id);
        setProduct(product);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-screen-2xl container mx-auto mt-28 xl:px-28 px-4">
      <div className="flex items-center gap-2 pt-8 text-Black/50">
        <a href="/">Home</a>
        <a href="/shop" className="font-semibold text-Black/75">
          / Shop
        </a>
      </div>

      <ProductDetailsSection
        image={product.image}
        title={product.title}
        description={demoText.description}
        price={product.price}
      />

      <ProductDetails details={demoText.details} />
      <ProductDescription description={demoText.description} />
      <ProductHighlights highlights={demoText.highlights} />
    </div>
  );
};

export default SingleProduct;
