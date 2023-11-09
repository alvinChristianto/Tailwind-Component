import React from "react";

//example : https://dribbble.com/shots/23012007-Minimalist-Shop-Books-Category-Page-eCommerce-Exploration
// online implementation : https://play.tailwindcss.com/kdQor4XRDd

function Grid4() {
  return (
    <div class="bg-white">
      <div class="mx-auto w-11/12 pt-4">
        <h1 class="py-4 text-4xl font-bold tracking-wider text-slate-900">
          Fiction
        </h1>
        <div class="flex justify-between">
          <p class="py-4 text-sm font-bold text-slate-800 underline underline-offset-4">
            Filter & Sort
          </p>
          <p class="py-4 text-sm font-normal text-slate-500">8420 Items</p>
        </div>

        <div class="grid grid-cols-2 justify-items-stretch gap-1 md:grid-cols-4">
          {/* <!-- first content --> */}
          <div class="h-80 rounded-sm bg-slate-100">
            <div class="flex h-48 items-center justify-center bg-slate-300">
              <div class="mobl:w-36 h-36 w-24 bg-slate-500 md:w-28">
                <img
                  src="https://images.unsplash.com/photo-1550399105-05c4a7641b02?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  class="h-full w-full border border-b-gray-900 object-cover"
                />
              </div>
            </div>
            <div class="p-2">
              <p class="pb-2 text-base font-semibold capitalize">
                Book full of life
              </p>
              <p class="text-xs italic text-slate-700">
                The book that hold someone`s life
              </p>
              <p class="text-sm font-normal capitalize">George Dwell</p>
              <p class="text-sm font-normal capitalize">$44,00</p>
            </div>
          </div>
          {/* <!-- second content --> */}
          <div class="h-80 rounded-sm bg-slate-100">
            <div class="flex h-48 items-center justify-center bg-slate-300">
              <div class="mobl:w-36 h-36 w-24 bg-slate-500 md:w-28">
                <img
                  src="https://images.unsplash.com/photo-1485368510545-b1f4bcd02d0d?q=80&w=1586&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  class="h-full w-full border border-b-gray-900 object-cover"
                />
              </div>
            </div>
            <div class="p-2">
              <p class="pb-2 text-base font-semibold capitalize">
                Saphhire emerald
              </p>
              <p class="text-xs italic text-slate-700">Sapphire emeral scale</p>
              <p class="text-sm font-normal capitalize">George Dwell</p>
              <p class="text-sm font-normal capitalize">$44,00</p>
            </div>
          </div>
          {/* <!-- third content --> */}
          <div class="h-80 rounded-sm bg-slate-100">
            <div class="flex h-48 items-center justify-center bg-slate-300">
              <div class="mobl:w-36 h-36 w-24 bg-slate-500 md:w-28">
                <img
                  src="https://plus.unsplash.com/premium_photo-1681681061533-1a45be326fb0?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  class="h-full w-full border border-b-gray-900 object-cover"
                />
              </div>
            </div>
            <div class="p-2">
              <p class="pb-2 text-base font-semibold capitalize">
                Women library
              </p>
              <p class="text-xs italic text-slate-700">
                watch women watch book
              </p>
              <p class="text-sm font-normal capitalize">George Dwell</p>
              <p class="text-sm font-normal capitalize">$44,00</p>
            </div>
          </div>
          {/* <!-- fourth content --> */}
          <div class="h-80 rounded-sm bg-slate-100">
            <div class="flex h-48 items-center justify-center bg-slate-300">
              <div class="mobl:w-36 h-36 w-24 bg-slate-500 md:w-28">
                <img
                  src="https://images.unsplash.com/photo-1699519305116-0010bda85e69?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  class="h-full w-full border border-b-gray-900 object-cover"
                />
              </div>
            </div>
            <div class="p-2">
              <p class="pb-2 text-base font-semibold capitalize">animal farm</p>
              <p class="text-xs italic text-slate-700">
                The penguin English Library
              </p>
              <p class="text-sm font-normal capitalize">George Dwell</p>
              <p class="text-sm font-normal capitalize">$44,00</p>
            </div>
          </div>
          {/* <!-- fifth content --> */}
          <div class="h-80 rounded-sm bg-slate-100">
            <div class="flex h-48 items-center justify-center bg-slate-300">
              <div class="mobl:w-36 h-36 w-24 bg-slate-500 md:w-28">
                <img
                  src="https://images.unsplash.com/photo-1485368510545-b1f4bcd02d0d?q=80&w=1586&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  class="h-full w-full border border-b-gray-900 object-cover"
                />
              </div>
            </div>
            <div class="p-2">
              <p class="pb-2 text-base font-semibold capitalize">animal farm</p>
              <p class="text-xs italic text-slate-700">
                The penguin English Library
              </p>
              <p class="text-sm font-normal capitalize">George Dwell</p>
              <p class="text-sm font-normal capitalize">$44,00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grid4;
