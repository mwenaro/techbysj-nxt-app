
export default function HeroSection() {
  return (
    <section id="home" className=" w-full  hero-image bg-no-repeat bg-right object-fit">
      <div className="bg-gradient-to-r from-skin-primary  w-full min-h-screen">
        <h1 className="md:text-8xl text-5xl md:leading-[8rem] leading-[5rem] md:w-1/2 w-full text-center font-bold text-slate-50 md:pt-48 pt-32 px-8">Developing your ideas into <span className="text-skin-accent">reality </span></h1>
        <h1 className="md:text-2xl text-2xl leading-[3rem] md:leading-[3rem]  md:w-1/2 w-3/4 text-left ml-12 pl-4 pt-8  text-white">From concept to deployment, we follow an agile development approach, ensuring timely delivery and seamless communication. </h1>
        <button className=" md:ml-60 mx-auto block w-60 text-slate-50 font-bold py-4 px-4  text-2xl bg-skin-accent md:mt-24 mt-10 mb-10 hover:border-2 hover:border-white hover:bg-transparent hover:border-solid hover rounded">Get in touch</button>
      </div>
    </section>
  )
}
