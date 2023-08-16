import { Footer } from "flowbite-react";

import { codingLogo, greekstatue } from "../assets";
import {
  BsDribbble,
  BsGithub,
  BsInstagram,
  BsTwitch,
  BsYoutube,
} from "react-icons/bs";

export default function FooterWithSocialMediaIcons() {
  return (
    <Footer container className='bg-transparent backdrop-blur-[5px] pt-0'>
      <div className='w-full px-11'>
        <hr className='mb-4 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent opacity-75 dark:opacity-100' />
        <div className='grid w-full mb-5 gap-4 justify-evenly items-center sm:flex sm:justify-between md:flex md:grid-cols-1 text-white'>
          <div className='flex justify-center'>
            <img
              src={greekstatue}
              alt='greek-icon'
              className=' h-[150px] w-[150px]'
            />
          </div>

          <div className='grid grid-cols-2 gap-8 mb-4 sm:mt-4 sm:grid-cols-2 sm:gap-6'>
            <div className='drop-shadow-[0_0_2px_#000]'>
              <Footer.Title className='text-white' title='Made using' />
              <Footer.LinkGroup col>
                <Footer.Link className='text-white' href='https://react.dev/'>
                  ReactJS
                </Footer.Link>
                <Footer.Link
                  className='text-white'
                  href='https://tailwindcss.com'>
                  Tailwind CSS
                </Footer.Link>
                <Footer.Link className='text-white' href='https://threejs.org/'>
                  ThreeJS
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div className='drop-shadow-[0_0_2px_#000]'>
              <Footer.Title className='text-white' title='FOLOW ME' />
              <Footer.LinkGroup col>
                <Footer.Link
                  className='text-white'
                  href='https://github.com/usbaliendev'>
                  Github
                </Footer.Link>
                <Footer.Link
                  className='text-white'
                  href='https://www.youtube.com/@usbaliendev'>
                  Youtube
                </Footer.Link>
                <Footer.Link
                  className='text-white'
                  href='https://biolinky.co/usbaliendev'>
                  Mais Links
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>

        <div className='grid w-full justify-evenly items-center sm:flex sm:justify-between md:flex md:grid-cols-1 text-white'>
          <Footer.Copyright
            className='text-white drop-shadow-[0_0_2px_#000]'
            by='usbalien.dev'
            href='#'
            year={2023}
          />
          <div className='mt-4 flex space-x-6 sm:mt-0 sm:justify-center drop-shadow-[0_0_2px_#000]'>
            <Footer.Icon
              className='text-white'
              href='https://github.com/usbaliendev'
              icon={BsGithub}
            />
            <Footer.Icon
              className='text-white'
              href='https://www.youtube.com/@usbaliendev'
              icon={BsYoutube}
            />
            <Footer.Icon
              className='text-white'
              href='https://twitch.tv/usbkayden7'
              icon={BsTwitch}
            />
            <Footer.Icon
              className='text-white'
              href='https://dribbble.com/usbangelodev'
              icon={BsDribbble}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
