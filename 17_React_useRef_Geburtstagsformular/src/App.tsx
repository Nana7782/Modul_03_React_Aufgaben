import { useRef } from "react";

export default function App() {
  const vornameRef = useRef<HTMLInputElement>(null);
  const gebDatumRef = useRef<HTMLInputElement>(null);

  const checkGeburtstag = () => {
    const heutigesDatum = new Date();
    const inputDatum = new Date(gebDatumRef.current?.value ?? "");

    if (
      heutigesDatum.getDate() === inputDatum.getDate() &&
      heutigesDatum.getMonth() === inputDatum.getMonth()
    ) {
      alert(`Alles Gute zum Geburtstag, ${vornameRef.current?.value}!`);
    } else {
      alert(`Heute ist leider nicht dein Geburtstag`);
    }
    vornameRef.current!.value = "";
    gebDatumRef.current!.value = "";
  };
  return (
    <div>
      <h1>Geburtstagsformular 🥳</h1>
      <h3>
        Gib deinen Namen und Geburtstag ein und lass dir vom Browser
        gratulieren.... oder nicht 😉
      </h3>
      <div className="container">
        <label htmlFor="name">Vorname</label>
        <input type="text" id="name" ref={vornameRef} />
        <label htmlFor="date">Geburtstag</label>
        <input
          type="date"
          name="geburtstag"
          id="geburtstag"
          ref={gebDatumRef}
        />
        <button onClick={checkGeburtstag}>Habe ich heute Geburtstag?</button>
      </div>
    </div>
  );
}
