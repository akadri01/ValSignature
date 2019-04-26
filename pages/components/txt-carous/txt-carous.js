// change the css class name inside banner.scss file
import Link from "next/link";
export default () => {
    return (
      <section className="txt-carous">
        <Link href="/user/console">
          <a className="txt-carous">
            <h2>Publier des biens</h2>
            <p>Post an add to sell or rent your property!</p>
          </a>
        </Link>
      </section>
    );
  };