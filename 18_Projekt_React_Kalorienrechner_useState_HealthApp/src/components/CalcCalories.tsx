import { useRef, useState } from "react";

export default function CalcCalories() {
  const [size, setSize] = useState(0);
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0);
  const [activity, setActivity] = useState(0.95);
  const [result, setResult] = useState(0);

  const genderRef = useRef<HTMLSelectElement>(null);

  const calculateBMR: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    let bmr;
    if (genderRef.current!.value === "male") {
      debugger;
      bmr = 66.47 + 13.7 * weight + 5 * size - 6.8 * age;
    } else {
      bmr = 655.1 + 9.6 * weight + 1.8 * size - 4.7 * age;
    }
    const totalCalories: number = bmr * activity;
    setResult(totalCalories);
  };
  return (
    <div>
      <h2>Test your daily Calorie Requirement</h2>
      <p>
        To determine your daily calorie requirement, we need some information
        about your age, gender, weight, height and activity level. Enter this
        information to calculate your individual requirements.
      </p>

      <form onSubmit={calculateBMR}>
        <label htmlFor="size">Body size (in cm)</label>
        <input
          type="number"
          name="size"
          onChange={(e) => setSize(Number(e.target.value))}
        />
        <label htmlFor="age">Age</label>
        <input
          type="number"
          name="age"
          onChange={(e) => setAge(Number(e.target.value))}
        />
        <label htmlFor="weight">Weight (in kg)</label>
        <input
          type="number"
          name="weight"
          onChange={(e) => setWeight(Number(e.target.value))}
        />
        <label htmlFor="activity">Activity</label>
        <select
          name="activity"
          onChange={(e) => setActivity(Number(e.target.value))}
        >
          <option value="0.95">Schlafen</option>
          <option value="1.2">Nur Sitzen oder Liegen</option>
          <option value="1.5">
            Ausschließlich sitzende Tätigkeit mit wenig oder keiner körperlichen
            Aktivität in der Freizeit, z.B. Büroarbeit
          </option>
          <option value="1.7">
            Sitzende Tätigkeit mit zeitweilig gehender oder stehender Tätigkeit,
            z.B. Studierende, Fließbandarbeitende, Laborfachkräfte,
            Berufskraftfahrende
          </option>
          <option value="1.9">
            Überwiegend gehende oder stehende Tätigkeit, z.B. Verkäufer:innen,
            Kellner:innen, Handwerker:innen, Mechaniker:innen
          </option>
          <option value="2.2">Körperlich anstrengede berufliche Arbeit</option>
        </select>
        <select
          name="gender"
          ref={genderRef}
          // value={gender}
          // onChange={(e) => setGender(e.target.value)}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <button>Calculate</button>
        <p>Dein täglicher Kalorienbedarf: {result.toFixed(2)} kcal</p>
      </form>
    </div>
  );
}
