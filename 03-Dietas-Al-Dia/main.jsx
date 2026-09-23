import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const patient = {
  name: "María González",
  diagnosis: "Diabetes tipo 2",
  allergy: "Maní"
};

const diets = [
  {
    id: 1,
    name: "Dieta Mediterránea",
    description: "Alimentación equilibrada basada en frutas, verduras, cereales y proteínas magras.",
    calories: "1800 kcal/día",
    duration: "30 días",
    safe: true,
    ingredients: "Verduras, frutas, pescado, legumbres, aceite de oliva"
  },
  {
    id: 2,
    name: "Dieta con maní",
    description: "Plan alimentario que incluye alimentos derivados del maní.",
    calories: "1750 kcal/día",
    duration: "30 días",
    safe: false,
    ingredients: "Verduras, cereales, frutos secos y maní"
  }
];

function App() {
  const [screen, setScreen] = useState("login");
  const [selectedDiet, setSelectedDiet] = useState(null);
  const [assigned, setAssigned] = useState(false);

  const go = (next) => setScreen(next);

  if (screen === "login") {
    return (
      <main className="center">
        <section className="card login">
          <div className="logo">D</div>
          <h1>Dietas al Día</h1>
          <p className="muted">Gestión de tratamientos nutricionales</p>
          <button onClick={() => go("patients")}>Iniciar sesión</button>
        </section>
      </main>
    );
  }

  if (screen === "patients") {
    return (
      <Layout title="Mis pacientes">
        <section className="card patient" onClick={() => go("history")}>
          <div>
            <h2>{patient.name}</h2>
            <p>{patient.diagnosis}</p>
            <span className="tag">Paciente activo</span>
          </div>
          <span className="arrow">›</span>
        </section>
      </Layout>
    );
  }

  if (screen === "history") {
    return (
      <Layout title="Historia clínica">
        <section className="card">
          <h2>{patient.name}</h2>
          <div className="grid">
            <div><b>Diagnóstico</b><span>{patient.diagnosis}</span></div>
            <div><b>Alergia</b><span className="danger">{patient.allergy}</span></div>
            <div><b>Estado</b><span>Seguimiento nutricional</span></div>
            <div><b>Objetivo</b><span>Tratamiento seguro</span></div>
          </div>
          <button onClick={() => go("diets")}>Ver dietas compatibles</button>
        </section>
      </Layout>
    );
  }

  if (screen === "diets") {
    return (
      <Layout title="Dietas compatibles">
        <div className="notice">
          <b>Revisa las alertas antes de confirmar.</b>
          <span>El paciente presenta alergia al maní.</span>
        </div>
        {diets.map((diet) => (
          <section className={`card diet ${diet.safe ? "safe" : "unsafe"}`} key={diet.id}>
            <div className="diet-head">
              <div>
                <h2>{diet.name}</h2>
                <p>{diet.description}</p>
              </div>
              <span className={`status ${diet.safe ? "ok" : "bad"}`}>
                {diet.safe ? "Compatible" : "Alerta"}
              </span>
            </div>
            {!diet.safe && <p className="danger">⚠ Contiene {patient.allergy}. No seleccionar.</p>}
            <button
              disabled={!diet.safe}
              onClick={() => {
                setSelectedDiet(diet);
                go("detail");
              }}
            >
              Ver ficha técnica
            </button>
          </section>
        ))}
      </Layout>
    );
  }

  if (screen === "detail" && selectedDiet) {
    return (
      <Layout title="Ficha técnica">
        <section className="card">
          <span className="status ok">Compatible</span>
          <h2>{selectedDiet.name}</h2>
          <p>{selectedDiet.description}</p>
          <div className="grid">
            <div><b>Aporte calórico</b><span>{selectedDiet.calories}</span></div>
            <div><b>Duración</b><span>{selectedDiet.duration}</span></div>
            <div><b>Componentes</b><span>{selectedDiet.ingredients}</span></div>
            <div><b>Paciente</b><span>{patient.name}</span></div>
          </div>
          <button onClick={() => go("confirm")}>Continuar con esta dieta</button>
          <button className="secondary" onClick={() => go("diets")}>Volver</button>
        </section>
      </Layout>
    );
  }

  if (screen === "confirm" && selectedDiet) {
    return (
      <Layout title="Confirmación">
        <section className="card">
          <h2>Confirmar asignación</h2>
          <p>Paciente: <b>{patient.name}</b></p>
          <p>Dieta: <b>{selectedDiet.name}</b></p>
          <div className="success-box">✓ No se detectaron incompatibilidades para esta dieta.</div>
          <button onClick={() => { setAssigned(true); go("complete"); }}>
            Confirmar tratamiento
          </button>
          <button className="secondary" onClick={() => go("diets")}>Cancelar</button>
        </section>
      </Layout>
    );
  }

  if (screen === "complete") {
    return (
      <main className="center">
        <section className="card complete">
          <div className="check">✓</div>
          <h1>Asignación completada</h1>
          <p>La dieta fue asignada correctamente a {patient.name}.</p>
          <button onClick={() => { setAssigned(false); setSelectedDiet(null); go("patients"); }}>
            Volver a mis pacientes
          </button>
        </section>
      </main>
    );
  }
}

function Layout({ title, children }) {
  return (
    <main className="app">
      <header>
        <div className="brand"><span className="logo small">D</span> Dietas al Día</div>
        <span className="user">Médico nutricionista</span>
      </header>
      <section className="content">
        <p className="eyebrow">ASIGNACIÓN DE TRATAMIENTO</p>
        <h1>{title}</h1>
        {children}
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
