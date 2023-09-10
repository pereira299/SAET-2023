import CardProduct from "../Cards/CardProduct";
import Label from "../Label";

const Products = () => {
  const products = [
    {
      id: 1,
      title: "Produto A",
      description: "Descrição do produto A",
      image: "https://via.placeholder.com/150",
      price: 10.0,
    },
    {
      id: 2,
      title: "Produto B",
      description: "Descrição do produto B",
      image: "https://via.placeholder.com/150",
      price: 20.0,
    },
    {
      id: 3,
      title: "Produto C",
      description: "Descrição do produto C",
      image: "https://via.placeholder.com/150",
      price: 30.0,
    },
    {
      id: 4,
      title: "Produto D",
      description: "Descrição do produto D",
      image: "https://via.placeholder.com/150",
      price: 40.0,
    },
    {
      id: 5,
      title: "Produto E",
      description: "Descrição do produto E",
      image: "https://via.placeholder.com/150",
      price: 50.0,
    },
    {
      id: 6,
      title: "Produto F",
      description: "Descrição do produto F",
      image: "https://via.placeholder.com/150",
      price: 60.0,
    },
    {
      id: 7,
      title: "Produto G",
      description: "Descrição do produto G",
      image: "https://via.placeholder.com/150",
      price: 70.0,
    },
    {
      id: 8,
      title: "Produto H",
      description: "Descrição do produto H",
      image: "https://via.placeholder.com/150",
      price: 80.0,
    },
  ];

  const productColors = ["border-cyan-600",  "border-orange-400", "border-orange-700", "border-white"];
  return (
    <section id="products" className="p-5 flex flex-col items-center">
      <Label text="Produtos" />
      <ul className="flex flex-row justify-between flex-wrap w-10/12 mt-20 items-center h-[50vh]">
        {products.map((product, i) => (
          <li key={product.id} className="w-3/12">
            <CardProduct product={product} color={productColors[i % 4]} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Products;
