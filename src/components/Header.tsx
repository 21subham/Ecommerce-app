"use client";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import Form from "next/form";

function Header() {
  const { user } = useUser();

  console.log(user);

  return (
    <header className="flex flex-wrap justify-between items-center px-4 py-2">
      {/* top row */}
      <div>
        <Link
          href="/"
          className="text-2xl font-bold text-blue-500 hover:opacity-50 cursor-pointer mx-auto sm:mx-0"
        >
          Trend Bazaar
        </Link>
        <Form
          action="/search"
          className="w-full sm:w-auto sm:flex-1 sm: mx-4 mt-2 sm:mt-0"
        >
          <input
            type="text"
            name="query"
            placeholder="search products"
            className="bg-gray-100 text-gray-800 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border w-full max-w-4xl"
          />
        </Form>
      </div>
    </header>
  );
}

export default Header;
