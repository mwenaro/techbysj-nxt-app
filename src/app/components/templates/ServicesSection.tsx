export default function ServicesSection() {
  return (
    <section
      id="services"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div className="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <span className="relative">Services</span>
          </span>
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Our services are quality
        </p>
      </div>
      <div className="grid gap-8 row-gap-10 lg:grid-cols-2">
        <div className="max-w-md mx-auto text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 mx-auto sm:w-24 sm:h-24">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              version="1.1"
              viewBox="0 0 16 16"
              className="block mx-auto w-24"
              height="30"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 15c-0.984 0-1.92-0.203-2.769-0.57l3.643-4.098c0.081-0.092 0.126-0.21 0.126-0.332v-1.5c0-0.276-0.224-0.5-0.5-0.5-1.765 0-3.628-1.835-3.646-1.854-0.094-0.094-0.221-0.146-0.354-0.146h-2c-0.276 0-0.5 0.224-0.5 0.5v3c0 0.189 0.107 0.363 0.276 0.447l1.724 0.862v2.936c-1.813-1.265-3-3.366-3-5.745 0-1.074 0.242-2.091 0.674-3h1.826c0.133 0 0.26-0.053 0.354-0.146l2-2c0.094-0.094 0.146-0.221 0.146-0.354v-1.21c0.634-0.189 1.305-0.29 2-0.29 1.1 0 2.141 0.254 3.067 0.706-0.065 0.055-0.128 0.112-0.188 0.172-0.567 0.567-0.879 1.32-0.879 2.121s0.312 1.555 0.879 2.121c0.569 0.569 1.332 0.879 2.119 0.879 0.049 0 0.099-0.001 0.149-0.004 0.216 0.809 0.605 2.917-0.131 5.818-0.007 0.027-0.011 0.055-0.013 0.082-1.271 1.298-3.042 2.104-5.002 2.104z"></path>
            </svg>
          </div>
          <h6 className="mb-3 text-xl font-bold leading-5">Web Development</h6>
          <p className="mb-3 text-sm text-gray-900">
            we offer comprehensive web development services to help businesses
            establish HashLink strong online presence and achieve their digital
            goals. Our team of skilled web developers utilizes the latest web
            technologies, frameworks, and best practices to create web solutions
            that are visually appealing, user-friendly, and optimized for
            performance
          </p>
          <a
            aria-label=""
            className="btn-services inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            href="/#contact"
          >
            Learn more
          </a>
        </div>
        <div className="max-w-md mx-auto text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 mx-auto sm:w-24 sm:h-24">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              version="1.1"
              viewBox="0 0 16 16"
              className="block mx-auto w-24"
              height="30"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.5 0h-7c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h7c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM6 0.75h4v0.5h-4v-0.5zM8 15c-0.552 0-1-0.448-1-1s0.448-1 1-1 1 0.448 1 1-0.448 1-1 1zM12 12h-8v-10h8v10z"></path>
            </svg>
          </div>
          <h6 className="mb-3 text-xl font-bold leading-5">
            Mobile Development
          </h6>
          <p className="mb-3 text-sm text-gray-900">
            From iOS to Android, we have the expertise to build mobile apps that
            deliver seamless experiences, engage users, and drive results.
            Whether you need HashLink native app, HashLink cross-platform
            solution, or HashLink mobile-optimized web app, we have the skills
            and creativity to bring your vision to life. Our team of experienced
            mobile developers harness the latest technologies and industry best
            practices to create mobile applications that are fast,
            user-friendly, and visually captivating.
          </p>
          <a
            aria-label=""
            className="btn-services inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            href="/#contact"
          >
            Learn more
          </a>
        </div>
        <div className="max-w-md mx-auto text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 mx-auto sm:w-24 sm:h-24">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              role="img"
              viewBox="0 0 24 24"
              className="block mx-auto w-24"
              height="30"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title></title>
              <path d="M4.25.3C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm11.31 5.13h2.03c.05-.01.09.03.1.07v9.54c0 .18.01.38.02.6.02.21.03.41.04.58 0 .07-.03.13-.1.16-.52.22-1.07.38-1.63.48-.5.09-1.02.14-1.54.14-.74.01-1.48-.14-2.15-.45-.63-.29-1.15-.77-1.51-1.36-.37-.61-.55-1.37-.55-2.28-.01-.74.18-1.47.55-2.11.38-.65.93-1.19 1.59-1.55.7-.39 1.54-.58 2.53-.58.05 0 .12 0 .21.01s.19.01.31.02V5.54c0-.07.03-.11.1-.11zm-8.93.86h1.95c.06-.01.12.03.13.1.01.01.01.02.01.03v10.26c0 .11-.05.16-.14.16H6.62c-.09 0-.13-.05-.13-.16V6.42c0-.09.05-.13.14-.13zm8.23 4.24c-.39 0-.78.08-1.13.26-.34.17-.63.42-.85.74-.22.32-.33.75-.33 1.27-.01.35.05.7.17 1.03.1.27.25.51.45.71.19.18.42.32.68.4.27.09.55.13.83.13.15 0 .29-.01.42-.02.13.01.25-.01.36-.05v-4.4c-.09-.02-.18-.04-.27-.05-.11-.01-.22-.02-.33-.02z"></path>
            </svg>
          </div>
          <h6 className="mb-3 text-xl font-bold leading-5">Graphic Design</h6>
          <p className="mb-3 text-sm text-gray-900">
            Our team of talented graphic designers combines artistic flair with
            strategic thinking to craft designs that leave HashLink lasting
            impression. Whether it&apos;s creating eye-catching logos, designing
            engaging social media graphics, crafting compelling marketing
            materials, or developing captivating UI/UX designs, we strive for
            perfection in every pixel. With our innovative and forward-thinking
            approach, we transform your ideas into compelling visual
            experiences.
          </p>
          <a
            aria-label=""
            className="btn-services inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            href="/#contact"
          >
            Learn more
          </a>
        </div>
        <div className="max-w-md mx-auto text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 mx-auto sm:w-24 sm:h-24">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="block mx-auto w-24"
              height="30"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M120.998 40.998v37.943C136.22 89.471 146 109.278 146 131.001c0 13.71-3.901 26.65-10.598 36.985 3.465 1.35 7.106 2.85 10.15 4.172l122.352-22.783 5.918 54.842-111.748 23.219c-.862 16.261-2.45 32.262-5.289 51.566h336.217V40.998zM96 88.998c-16.595 0-32.002 17.747-32.002 42.004 0 24.257 15.407 42.002 32.002 42.002 16.595 0 32.002-17.745 32.002-42.002S112.595 88.998 96 88.998zm156.096 81.629l-108.592 20.22c-14.24-5.602-4.956-3.035-21.469-8.517-7.476 5.469-16.33 8.672-26.035 8.672-8.6 0-16.53-2.523-23.428-6.9-8.59 3.564-17.655 8.09-25.736 12.654-12.992 7.338-23.722 13.211-27.838 16.033v130.213h20.004V232h17.996v263.002h30.004V326h17.996v169.002h26.004v-171.84l.154-.824c9.514-50.64 12.588-77.384 13.461-109.656l109.56-22.766zm-98.153 126.375c-.952 5.682-1.991 11.64-3.146 17.996H478v-17.996zM208 344.998c-16.595 0-32.002 17.747-32.002 42.004 0 18.198 8.67 32.73 20.01 38.855 3.599-1.662 7.482-2.706 11.68-2.851 4.633-.16 8.98.767 13.052 2.42 10.968-6.352 19.262-20.63 19.262-38.424 0-24.257-15.407-42.004-32.002-42.004zm112 0c-16.595 0-32.002 17.747-32.002 42.004 0 18.198 8.67 32.73 20.01 38.855 3.599-1.662 7.482-2.706 11.68-2.851 4.633-.16 8.98.767 13.052 2.42 10.968-6.352 19.262-20.63 19.262-38.424 0-24.257-15.407-42.004-32.002-42.004zm112 0c-16.595 0-32.002 17.747-32.002 42.004 0 18.198 8.67 32.73 20.01 38.855 3.599-1.662 7.482-2.706 11.68-2.851 4.633-.16 8.98.767 13.052 2.42 10.968-6.352 19.262-20.63 19.262-38.424 0-24.257-15.407-42.004-32.002-42.004zm-223.688 95.996c-3.844.133-8.907 2.93-14.3 8.785-5.394 5.855-10.696 14.25-15.125 22.76-4.226 8.12-7.609 16.16-10.06 22.463h85.339c-3.04-6.436-7.138-14.549-12.133-22.711-5.298-8.658-11.511-17.138-17.668-22.957-6.157-5.819-11.8-8.487-16.053-8.34zm112 0c-3.844.133-8.907 2.93-14.3 8.785-5.394 5.855-10.696 14.25-15.125 22.76-4.226 8.12-7.609 16.16-10.06 22.463h85.339c-3.04-6.436-7.138-14.549-12.133-22.711-5.298-8.658-11.511-17.138-17.668-22.957-6.157-5.819-11.8-8.487-16.052-8.34zm112 0c-3.844.133-8.907 2.93-14.3 8.785-5.394 5.855-10.696 14.25-15.125 22.76-4.226 8.12-7.609 16.16-10.06 22.463h85.339c-3.04-6.436-7.138-14.549-12.133-22.711-5.298-8.658-11.511-17.138-17.668-22.957-6.157-5.819-11.8-8.487-16.052-8.34z"></path>
            </svg>
          </div>
          <h6 className="mb-3 text-xl font-bold leading-5">Training</h6>
          <p className="mb-3 text-sm text-gray-900">
            At Nolojia, we believe in empowering individuals with the skills and
            knowledge they need to succeed in the ever-evolving world of
            technology. Our comprehensive training programs are designed to
            equip you with the tools and expertise you need to thrive in the
            digital age. Whether you want to learn software engineering, master
            graphic design, or gain HashLink deep understanding of data
            analytics, our experienced instructors will guide you every step of
            the way. Join Us Today!
          </p>
          <a
            aria-label=""
            className="btn-services inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            href="/#contact"
          >
            Learn more
          </a>
        </div>
        <div className="max-w-md mx-auto text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 mx-auto sm:w-24 sm:h-24">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="block mx-auto w-24"
              height="30"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M21.41 11.41l-8.83-8.83c-.37-.37-.88-.58-1.41-.58H4c-1.1 0-2 .9-2 2v7.17c0 .53.21 1.04.59 1.41l8.83 8.83c.78.78 2.05.78 2.83 0l7.17-7.17c.78-.78.78-2.04-.01-2.83zM6.5 8C5.67 8 5 7.33 5 6.5S5.67 5 6.5 5 8 5.67 8 6.5 7.33 8 6.5 8z"></path>
            </svg>
          </div>
          <h6 className="mb-3 text-xl font-bold leading-5">
            Digital Marketing
          </h6>
          <p className="mb-3 text-sm text-gray-900">
            Are you ready to take your online presence to the next level? Our
            tech company offers cutting-edge digital marketing solutions that
            drive results. From search engine optimization (SEO) and
            pay-per-click (PPC) advertising to social media management and
            content marketing, our team of experienced digital marketers knows
            how to make your brand stand out in the crowded digital landscape.
          </p>
          <a
            aria-label=""
            className="btn-services inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            href="/#contact"
          >
            Learn more
          </a>
        </div>
        <div className="max-w-md mx-auto text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 mx-auto sm:w-24 sm:h-24">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="block mx-auto w-24"
              height="30"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-5h2v5zm4 0h-2v-3h2v3zm0-5h-2v-2h2v2zm4 5h-2V7h2v10z"></path>
            </svg>
          </div>
          <h6 className="mb-3 text-xl font-bold leading-5">Data Analytics</h6>
          <p className="mb-3 text-sm text-gray-900">
            Data analytics is more than just crunching numbers. It&aps;s about
            turning data into insights and using those insights to make informed
            decisions that drive your business forward. Our team of experts uses
            cutting-edge tools and techniques to help you harness the power of
            your data, identify patterns and trends, and make data-driven
            decisions that can have HashLink real impact on your bottom line.
          </p>
          <a
            aria-label=""
            className="btn-services inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            href="/#contact"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}
