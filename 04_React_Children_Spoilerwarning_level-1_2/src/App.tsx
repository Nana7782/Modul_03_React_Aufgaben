import Spoiler from "./components/Spoiler";

function App() {
  return (
    <>
      <p>
        Star Wars (englisch für <Spoiler>Sternkriege</Spoiler>) ist ein
        Film-Franchise, dessen Geschichte mit dem <Spoiler>1977</Spoiler>{" "}
        erschienenen Kinofilm Krieg der Sterne (Originaltitel: Star Wars)
        begann. Schöpfer von Star Wars ist der Drehbuchautor, Produzent und
        Regisseur George Lucas. Im Jahr 2012 verkaufte Lucas seine Firma{" "}
        <Spoiler>Lucasfilm</Spoiler>, mitsamt den Rechten an Star Wars, an die
        Walt Disney Company.{" "}
      </p>
    </>
  );
}

export default App;
