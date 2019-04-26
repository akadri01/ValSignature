import Link from "next/link";

export default () => {
  return (
    <section className="trioTabs">
      <Link href="/user/auth">
        <a className="trioTabs__tab">
          <h2>Valorys Signature</h2>
          <p>Valorys Signature</p>
        </a>
      </Link>
    </section>
  );
};
