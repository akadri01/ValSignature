import Link from "next/link";


export default () => (

    <section className="twoTabs">
    
      <Link href="/properties?advert_type=sale">
        <a className="twoTabs__tab1">
        
          
          <h2>Sollicitez le chasseur immobilier virtuel !</h2>
          <h3>A partir de vos critères classés par catégorie : prioritaires, intermédiaires et rédhibitoires, il sélectionne pour vous les biens les plus proches de vos attentes.</h3>
          <p> LANCEZ VOTRE RECHERCHE MAINTENANT</p>
        </a>
      </Link>
      <Link href="/properties?advert_type=rent">
        <a className="twoTabs__tab2">
        
          
          <h2>Rejoignez le Club Vip !</h2>
          <h3>Bénéficiez d’opportunités d’investissement « hors marché » et échangez avec une sélection de professionnels pour accompagner chaque étape de vos projets.</h3>
          <p>INSCRIVEZ VOUS MAINTENANT</p>
        </a>
      </Link>
      <Link href="/properties?advert_type=rent">
        <a className="twoTabs__tab3">
        
            
          <h2>Confiez-nous la vente de vos biens !</h2>
          <h3>Simple et rapide profitez d’une estimation gratuite. Tout mandat exclusif vous donne accès à des services dédiés : plans 3D, photos professionnelles, visites virtuelles.</h3>
          <p>FAITES ESTIMER VOTRE BIEN MAINTENANT</p>
        </a>
      </Link>
    </section>
  
);