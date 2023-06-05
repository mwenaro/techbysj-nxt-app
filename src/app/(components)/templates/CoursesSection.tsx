export default function CoursesSection() {
  return (
    <section id="courses" className="bg-blue-50 dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
          explore our <br /> awesome{' '}
          <span className="underline decoration-blue-500">Courses</span>
        </h1>
        <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
          Our courses are set to start on 15th May. To enroll click on the
          forward arrow on the course you wish to enroll for here.
        </p>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          <div className="shadow p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
            <span className="inline-block text-blue-500 dark:text-blue-400">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="30"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM8 1c-1.573 0-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4s.875 1.755 1.904 2.223C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777C13.125 5.755 14 5.007 14 4s-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1Z"></path>
                <path d="M2 7v-.839c.457.432 1.004.751 1.49.972C4.722 7.693 6.318 8 8 8s3.278-.307 4.51-.867c.486-.22 1.033-.54 1.49-.972V7c0 .424-.155.802-.411 1.133a4.51 4.51 0 0 0-4.815 1.843A12.31 12.31 0 0 1 8 10c-1.573 0-3.022-.289-4.096-.777C2.875 8.755 2 8.007 2 7Zm6.257 3.998L8 11c-1.682 0-3.278-.307-4.51-.867-.486-.22-1.033-.54-1.49-.972V10c0 1.007.875 1.755 1.904 2.223C4.978 12.711 6.427 13 8 13h.027a4.552 4.552 0 0 1 .23-2.002Zm-.002 3L8 14c-1.682 0-3.278-.307-4.51-.867-.486-.22-1.033-.54-1.49-.972V13c0 1.007.875 1.755 1.904 2.223C4.978 15.711 6.427 16 8 16c.536 0 1.058-.034 1.555-.097a4.507 4.507 0 0 1-1.3-1.905Z"></path>
              </svg>
            </span>
            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
              Data Science
            </h1>
            <p className="text-gray-500 dark:text-gray-300">
              Learn Data Science using python. The course entails in-depth
              training on Nympy, Pandas, Matplotlib, Searborn, Plotly and many
              more modules. Enroll today.
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://docs.google.com/forms/d/e/1FAIpQLSeFa5Jy2Qcf9Fh5C8v-_TbaZiEK41DDnPElz-XrCYGdV_utqQ/viewform?usp=sf_link"
              className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </a>
          </div>
          <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
            <span className="inline-block text-blue-500 dark:text-blue-400">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="30"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"></path>
              </svg>
            </span>
            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
              Web Development
            </h1>
            <p className="text-gray-500 dark:text-gray-300">
              Are your ready to be a web developer? Get started on this course
              and learn how to develop responsive websites using HTML, CSS and
              JavaScript.
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://docs.google.com/forms/d/e/1FAIpQLScuJ1uWPvt2u4WUZQ3atjfh6jZP7ntX7WouPFYN9xhWdZ_HAg/viewform?usp=sf_link"
              className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </a>
          </div>
          <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
            <span className="inline-block text-blue-500 dark:text-blue-400">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                role="img"
                viewBox="0 0 24 24"
                height="30"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title></title>
                <path d="M4.25.3C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm11.31 5.13h2.03c.05-.01.09.03.1.07v9.54c0 .18.01.38.02.6.02.21.03.41.04.58 0 .07-.03.13-.1.16-.52.22-1.07.38-1.63.48-.5.09-1.02.14-1.54.14-.74.01-1.48-.14-2.15-.45-.63-.29-1.15-.77-1.51-1.36-.37-.61-.55-1.37-.55-2.28-.01-.74.18-1.47.55-2.11.38-.65.93-1.19 1.59-1.55.7-.39 1.54-.58 2.53-.58.05 0 .12 0 .21.01s.19.01.31.02V5.54c0-.07.03-.11.1-.11zm-8.93.86h1.95c.06-.01.12.03.13.1.01.01.01.02.01.03v10.26c0 .11-.05.16-.14.16H6.62c-.09 0-.13-.05-.13-.16V6.42c0-.09.05-.13.14-.13zm8.23 4.24c-.39 0-.78.08-1.13.26-.34.17-.63.42-.85.74-.22.32-.33.75-.33 1.27-.01.35.05.7.17 1.03.1.27.25.51.45.71.19.18.42.32.68.4.27.09.55.13.83.13.15 0 .29-.01.42-.02.13.01.25-.01.36-.05v-4.4c-.09-.02-.18-.04-.27-.05-.11-.01-.22-.02-.33-.02z"></path>
              </svg>
            </span>
            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
              Graphics Design
            </h1>
            <p className="text-gray-500 dark:text-gray-300">
              Learn graphics designing using Adobe Photoshop, Adobe Illustrator
              and Corel draw. Enroll today.
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfMnEXBQ1YJmCKGQ00LLUcQEMqUhJu98_tf6CbbcL9ffGT2jQ/viewform"
              className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </a>
          </div>
          <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
            <span className="inline-block text-blue-500 dark:text-blue-400">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                role="img"
                viewBox="0 0 24 24"
                height="30"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title></title>
                <path d="M24 13.2v-6l-6-3.6-6 3.6-6-3.6-6 3.6v6l12 7.2zM8.4 10.8H6v2.4H4.8v-2.4H2.4V9.6h2.4V7.2H6v2.4h2.4zm7.2 2.4a1.2 1.2 0 01-1.2-1.2c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2 0 .66-.54 1.2-1.2 1.2zm3.6-2.4A1.2 1.2 0 0118 9.6c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2 0 .66-.54 1.2-1.2 1.2Z"></path>
              </svg>
            </span>
            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
              Game Development
            </h1>
            <p className="text-gray-500 dark:text-gray-300">
              Do you have a desire to create your own game? Learn gaming by
              creating your own game logics and graphics. Enroll today.
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://docs.google.com/forms/d/e/1FAIpQLScaQhhKFBLjBsXz-zrll_auVDjVtmmxayPTT6UAeDD0YJuvfQ/viewform?usp=sf_link"
              className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </a>
          </div>
          <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
            <span className="inline-block text-blue-500 dark:text-blue-400">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                role="img"
                viewBox="0 0 24 24"
                height="30"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title></title>
                <path d="M16.146 0v24l6.134-4.886V3.334zM13.293 18.758l-4.939 2.157V2.086l4.939 1.462zM1.721 18.205l3.78-.999V5.188l-3.762-.606z"></path>
              </svg>
            </span>
            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
              Digital Marketting
            </h1>
            <p className="text-gray-500 dark:text-gray-300">
              Do you want to manage businesses through marketting digitally? Our
              digital marketting course will give you the knowledge and skill
              needed to market online.
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://docs.google.com/forms/d/e/1FAIpQLSf7024Jh3OpWhdsJOwal-fiRejKmK9rRIxfEw81sez6DCjppA/viewform?usp=sf_link"
              className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </a>
          </div>
          <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
            <span className="inline-block text-blue-500 dark:text-blue-400">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="30"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z"></path>
                <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z"></path>
              </svg>
            </span>
            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
              Robotics
            </h1>
            <p className="text-gray-500 dark:text-gray-300">
              Do you want to learn robotics? We help you learn how to code and
              build your first robots for successful careers in hi-tech fields.
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfnGpQH3RNjsEKmXwkkHqWobkE3kmNFpzu5fd2Q02LlciCe4Q/viewform?usp=sf_link"
              className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
