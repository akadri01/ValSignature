import { Picture } from "react-responsive-picture";
import SearchForm from "./_search-form.js";

export default () => (
  <section className="banner">
    <Picture
      sources={[
        {
          srcSet: "/static/images/photos/banner-tablet.jpg",
          media: "(max-width: 890px)"
        },
        {
          srcSet: "/static/images/photos/banner-desktop2.jpg",
          type: "image/jpg"
        }
      ]}
      style={{ width: "100%" }}
      alt="Rechercher des biens en France"
    />
    <SearchForm />
  </section> 
);
