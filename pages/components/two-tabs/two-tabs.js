import Link from "next/link";

export default () => {
  return (
    <section className="twoTabs">
 
      <Link href="/properties?advert_type=sale">
        <a className="twoTabs__tab">
          <h2>Rejoignez le Club Vip !</h2>
          <p>texte pour tester</p>
        </a>
      </Link>
      <Link href="/properties?advert_type=rent">
        <a className="twoTabs__tab">
          <h2>Sollicitez votre chasseur immobilier virtuel !</h2>
          <p>texte pour tester</p>
        </a>
      </Link>
    </section>
  );
};