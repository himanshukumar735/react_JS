import React from "react";
import ProductCard from "./ProductCard";

function PracticePropsApp() {
  return (
    <div className="min-h-screen bg-zinc-900 flex justify-center items-center flex-col ">
      <div>
        <h1 className=" text-white text-4xl font-medium mb-4" >Gadget Store Showcase</h1>
      </div>

      <div className="flex justify-center items-center flex-row gap-8 flex-wrap">

        <ProductCard
          imgSrc="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
          title="Premium Wireless Headphones"
          description="Experience high-fidelity audio with active noise cancellation
        and an ultra-comfortable 40-hour battery life workspace setup."
          isAvailable={true}
        />

        <ProductCard
          imgSrc="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
          title="Premium Wireless Headphones"
          description="Experience high-fidelity audio with active noise cancellation
        and an ultra-comfortable 40-hour battery life workspace setup."
          isAvailable={true}
        />

        <ProductCard
          imgSrc="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
          title="Premium Wireless Headphones"
          description="Experience high-fidelity audio with active noise cancellation
        and an ultra-comfortable 40-hour battery life workspace setup."
          isAvailable={true}
        />

        <ProductCard
          imgSrc="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
          title="Premium Wireless Headphones"
          description="Experience high-fidelity audio with active noise cancellation
        and an ultra-comfortable 40-hour battery life workspace setup."
          isAvailable={true}
        />

        <ProductCard
          imgSrc="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
          title="Premium Wireless Headphones"
          description="Experience high-fidelity audio with active noise cancellation
        and an ultra-comfortable 40-hour battery life workspace setup."
          isAvailable={true}
        />

      </div>

    </div>
  )
}

export default PracticePropsApp
