import { useState } from "react";
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import jsonData from "../../data/appData.json";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { topMenu } = jsonData;
  return (
    <>
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-12xl items-center justify-between p-6"
        aria-label="Global"
      >
        <div className="flex sm:flex-1 lg:flex-auto">
          <a href="/" className="-m-1.5 p-1.5">
            <img className="h-auto w-auto" src="./images/logo.png" alt="" />
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-9 ml-10 sm:max-w-m xl:max-w-auto flex-wrap">
          {topMenu.map((item, index) => {
            return (
              <a
                href="#"
                className="text-sm leading-6 text-gray-900 uppercase hover:text-slate-500"
                key={index}
                title={item}
              >
                {item}
              </a>
            );
          })}
        </div>

        <div className="flex lg:hidden">
          <div className="flex lg:justify-end gap-x-1">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              <UserIcon className="h-6 w-6" aria-hidden="true" />
            </a>
          </div>
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-x-1">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 relative"
          >
            <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
            <span className="absolute inset-0 text-center text-amber-500 drop-shadow-sm">
              0
            </span>
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            <UserIcon className="h-6 w-6" aria-hidden="true" />
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <img className="h-auto w-auto" src="./images/logo.png" alt="" />
            </a>

            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {topMenu.map((item, index) => {
                  return (
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      key={index}
                      title={item}
                    >
                      {item}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
    </>
  );
};
export default Header;
