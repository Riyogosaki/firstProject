import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  createProduct: async (newProduct) =>  {
    // Validate the input
    if (!newProduct.name || !newProduct.image || !newProduct.price) {
      return { success: false, message: "Please provide all fields" };
    }

      const res = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify(newProduct),
      });

      const data = await res.json();
      set((state) => ({ products: [...state.products, data.data] })); // Append the new product
      return { success: true, message: "Product created successfully" };
    },
    fetchProducts:async () => {
      const res = await fetch("http://localhost:5000/api/products");
      const data = await res.json();
      set({products: data.data});
    }
}));
