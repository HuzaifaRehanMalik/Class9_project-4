import Image from "next/image";
export default function Herosection() {
  return (
    <main>
      <h1 className="text-center text-4xl font-extrabold md:text-8xl ">MY STORE</h1>
      <p className="text-center text-2xl font-bold md:text-4xl ">Welcome to my store</p>
      <div className=" flex flex-col justify-center items-center py-10 text-center md:flex-row">
        <div className="px-4 w-80 ">
          <Image src="/p-1.webp" alt="Product-1" width="300" height="50" className="border-2 border-black " />
          <div className="text-center font-semibold">
            Safeguard Handwash
          </div>
          <div className="text-center font-bold">
            Price:500
          </div>
          <button className="bg-blue-600 border-2 border-black rounded-lg px-4 py-2 text-center">BUY</button>
        </div>
        <div className="px-4 w-80">
          <Image src="/p-2.jpeg" alt="Product-2" width="300" height="50" className="border-2 border-black "/>
          <div className="text-center font-semibold">
            Lemonmax Bar
          </div>
          <div className="text-center font-semibold">
            Price:20
          </div>
          <button className="bg-blue-600 border-2 border-black rounded-lg px-4 py-2 text-center">BUY</button>
        </div>
        <div className="px-4 w-80">
          <Image src="/p-3.jpeg" alt="Product-3" width="300" height="50" className="border-2 border-black " />
          <div className="text-center font-semibold">
            Lux Soap
          </div>
          <div className="text-center font-semibold">
            Price:100
          </div>
          <button className="bg-blue-600 border-2 border-black rounded-lg px-4 py-2 text-center">BUY</button>
        </div>
        <div className="px-4 w-80">
          <Image src="/p-4.jpeg" alt="Product-4" width="300" height="50" className="border-2 border-black " />
          <div className="text-center font-semibold">
            Dettol Soap
          </div>
          <div className="text-center font-semibold">
            Price:150
          </div>
          <button className="bg-blue-600 border-2 border-black rounded-lg px-4 py-2 text-center">BUY</button>

        </div>
      </div>
    </main>
  );
}