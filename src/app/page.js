import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative h-screen">
        <Image src="/heroImg.jpg" alt="hero" layout="fill" objectFit="cover" />
        <div className="container mx-auto">
          <div className="absolute top-[20rem] right-[2rem] my-4 ">
            <h1 className="py-2 text-5xl text-white font-bold">
              Welcome to My Blog
            </h1>
            <p className="pb-2 text-2xl text-white font-bold">
              Explore my latest thoughts and articles.
            </p>
            <p className="text-xl text-blue-300">Visit Blogs</p>
          </div>
        </div>
      </div>
    </>
  );
}
