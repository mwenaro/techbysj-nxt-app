import { Img } from "../atoms";

export default function Footer() {
  return (
    <footer>
      <div className="px-4 pt-16 bg-[#0d0452] text-white   sm:max-w-xl min-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2"><a href="/" aria-label="Go home" title="Company" className="inline-flex items-center">
            <Img src="/static/media/logowhite.d8099912bb4ba6d711f6.png" className="w-32 object-fit" alt="" /></a>
            <div className="mt-6 lg:max-w-sm">
              <p className="text-sm text-white">Empower Your Digital Journey with Techbysj.
                Unleash Your Potential with Our Tech Services.  Contact us now to Explore Endless Possibilities!.</p></div>
          </div><div className="space-y-2 text-sm"><p className="text-base font-bold tracking-wide text-white">Contacts</p>
            <div className="flex"><p className="mr-1 text-white">Phone:</p><a href="tel:+254 717084877" aria-label="Our phone" title="Our phone" className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">+254 717084877</a></div>
            <div className="flex"><p className="mr-1 text-white">Email:</p><a href="mailto:nolojiaschool@gmail.com" aria-label="Our email" title="Our email" className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">nolojiaschool@gmail.com</a>
            </div><div className="flex"><p className="mr-1 text-white">Address:</p><a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" aria-label="Our address" title="Our address" className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">Mombasa</a></div>
          </div><div><span className="text-base font-bold tracking-wide text-white">Social</span><div className="flex items-center mt-1 space-x-3"><a href="https://www.tiktok.com/@_nolojia" className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path></svg></a><a href="https://www.instagram.com/_nolojia/" className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"><svg viewBox="0 0 30 30" fill="currentColor" className="h-6"><circle cx="15" cy="15" r="4"></circle><path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"></path></svg></a><a href="https://web.facebook.com/nolojia?_rdc=1&amp;_rdr" className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"><svg viewBox="0 0 24 24" fill="currentColor" className="h-5"><path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"></path></svg></a><a href="https://www.youtube.com/@nolojia6079" className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"><svg fill="currentColor" className="h-10" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M24.325 8.309s-2.655-.334-8.357-.334c-5.517 0-8.294.334-8.294.334A2.675 2.675 0 0 0 5 10.984v10.034a2.675 2.675 0 0 0 2.674 2.676s2.582.332 8.294.332c5.709 0 8.357-.332 8.357-.332A2.673 2.673 0 0 0 27 21.018V10.982a2.673 2.673 0 0 0-2.675-2.673zM13.061 19.975V12.03L20.195 16l-7.134 3.975z"></path></g></svg></a></div><p className="mt-4 text-sm text-white">Follow us on our social media platforms</p></div></div>
        <div className="flex flex-col-reverse justify-center pt-5 pb-10 border-t lg:flex-row">
          <p className="text-sm text-white text-center">© Copyright 2023 Techbysj. All rights reserved.
          </p>
        </div></div>

    </footer>
  )
}
