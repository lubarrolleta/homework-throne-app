import React from "react";
import s from "./Content.module.scss";
const Content = (props) => {
  const { throne } = props;
//   console.log(throne);
  return (
    <div className={`container ${s.content}`}>
      <section className={s.contenido}>
        {throne === null && <h1>selecciona tu jugador favorito</h1>}
        {throne && (
          <>
            <section className={`${s.section} ${s.describe}`}>
              <h2>{throne?.fullName}</h2>
              <h2>{throne?.title}</h2>
              <h2>{throne?.family}</h2>
            </section>
            <section className={`${s.section} ${s.photo}`}>
                <img src={throne?.imageUrl} alt={`${throne?.fullName} ${throne?.title} ${throne?.family}`} />
            </section>
          </>
        )}
      </section>
    </div>
  );
};

export default Content;
