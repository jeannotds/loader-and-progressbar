import Link from "next/link";
import React from "react";
import loading from "./loading";

function about() {
  return (
    <>
      <div>
        <Link className="link" href="/">
          Acceuil
        </Link>
        <Link className="link" href="/about">
          Apropos
        </Link>
      </div>
      <div>
        <h1>A propos</h1>
        <p>
          dqsdqsdqsdqsd qsdqdqsd qdqdqsdqsd qsdqsd qsd qsdqsdqsdqs dqsdqsdq sdqs
          dqsdqsd qsdqsd qsd qsd
        </p>
      </div>
    </>
  );
}

export default about;



export async function getServerSideProps() {
    await loading()
  
    return {
      props: {},
    };
  }
  
