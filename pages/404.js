import React from "react";
import Layout1 from "../components/Layout/Layout1";
import Link from "next/link";
function PageNotFound() {
  return (
    <>
      <Layout1>
        <h1 className="text-center text-3xl font-extrabold text-[red]">404</h1>
        <h1 className="text-center text-3xl font-extrabold text-[red]">
          PAGE NOT FOUND
        </h1>
        <p className="text-center">
          We haven`t found this page, there is something wrong with your
          internet connection
        </p>
        <form className="text-center">
          <input
            type="text"
            placeholder="Search what you were interested in"
            className="w-[60%] border border-solid border-[red] px-4 py-1"
          />
        </form>
        <div>
          <h4 className="text-center">
            Go back to
            <Link href="Blog" passHref>
              <span className="mx-2 text-[red]">Blog</span>
            </Link>
            or
            <Link href="/" passHref>
              <span className="mx-2 text-[red]">Home</span>
            </Link>
          </h4>
        </div>
      </Layout1>
    </>
  );
}

export default PageNotFound;
