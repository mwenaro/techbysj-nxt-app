import { Img } from '../atoms';
export const metadata = {
  title: 'Techbysj - About page',
  description: 'Sample page for the site',
};

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen bg-slate-100 relative">
      <h2 className="text-center font-bold text-4xl p-10 capitalize">
        About us
      </h2>
      <h3 className="text-center semi-bold text-3xl text-black p-6">
        Imagine it, create it
      </h3>
      <div className="w-full relative h-[30rem] rounded-xl">
        <Img
          src="https://www.shutterstock.com/shutterstock/videos/1099458635/thumb/1.jpg?ip=x480"
          className="w-3/4 mx-auto block rounded h-full object-cover"
          alt=""
        />
      </div>
      <div className="rounded-2xl p-10 bg-white 2xl:absolute 2xl:w-[30rem] 2xl:top-[38rem] 2xl:right-80 w-4/5 block mt-10 mx-auto relative shadow-lg">
        <div className="text-skin-accent   flex gap-2 justify-center font-bold items-center text-xl pb-4">
          <p>Our mission </p>{' '}
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path>
          </svg>
        </div>
        <p>
          A daily commitment to serve our clients through passion, knowledge,
          and excellence.
        </p>
        <p></p>
      </div>
      <div className="rounded-2xl p-10 bg-white 2xl:absolute 2xl:w-[30rem] 2xl:top-[38rem] 2xl:left-80 w-4/5 block mt-10 mx-auto  relative shadow-xl">
        <div className="text-skin-accent   flex gap-2 justify-center font-bold items-center text-xl pb-4">
          <p>Our vision </p>{' '}
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path>
          </svg>
        </div>
        <p>
          To be known and recommended for optimising and streamlining businesses
          by using digital and technical innovation.
        </p>
        <p></p>
      </div>
    </section>
  );
}
