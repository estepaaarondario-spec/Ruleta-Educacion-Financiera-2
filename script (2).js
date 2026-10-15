// =====================================================
// RULETA DE BABILONIA - EDUCACIÓN FINANCIERA
// Basada en el Manual de Educación Financiera de Banco Nación
// =====================================================

// -----------------------------------------------------
// 1. TEMAS Y PREGUNTAS
// Cada tema es un sector de la ruleta.
// En "o" (opciones) la PRIMERA es la correcta: el juego las mezcla solo.
// Para agregar preguntas o temas, copien el formato.
// -----------------------------------------------------

const temas = [
    {
        nombre: "Presupuesto", icono: "📜", color: "#1C3F94",
        preguntas: [
            { p: "¿Qué es un presupuesto?",
              o: ["Un método para organizar las entradas y salidas de dinero", "Un préstamo del banco", "Un tipo de tarjeta", "Un impuesto"],
              e: "Te permite planificar cuánto vas a gastar y cuánto vas a poder ahorrar." },
            { p: "¿Qué son los gastos \"hormiga\"?",
              o: ["Gastos pequeños que se olvidan de registrar, como el café en el bar", "El alquiler y las expensas", "Los medicamentos", "Las cuotas de un préstamo"],
              e: "Parecen mínimos, pero a fin de mes pueden sumar un monto grande." },
            { p: "¿Cuál de estos es un gasto imprescindible?",
              o: ["El alquiler de la vivienda", "Salir a comer afuera", "Un paseo de fin de semana", "El café en el bar"],
              e: "Los gastos imprescindibles se pagan sí o sí: alquiler, luz, gas, medicamentos." },
            { p: "¿Cuál es un objetivo financiero de corto plazo?",
              o: ["Reducir un gasto del mes o ahorrar para un viaje de fin de semana", "Comprar una moto", "Cambiar la heladera", "Ahorrar para la jubilación"],
              e: "Los objetivos de largo plazo, como comprar una moto, necesitan más tiempo de ahorro." }
        ]
    },
    {
        nombre: "Ahorro", icono: "🏺", color: "#8C2F1B",
        preguntas: [
            { p: "¿Qué es el ahorro?",
              o: ["La parte del ingreso que no se consume hoy para usarla en el futuro", "El dinero que se gasta en el mes", "Un préstamo a un amigo", "El interés de una tarjeta"],
              e: "Sirve para imprevistos, para tus objetivos y para tener más seguridad a futuro." },
            { p: "¿Qué es el ahorro formal?",
              o: ["Guardar tu dinero en una cuenta en un banco", "Guardarlo debajo del colchón", "Prestárselo a un conocido", "Gastarlo en el día"],
              e: "El ahorro informal (en casa) puede sufrir pérdidas, robo o deterioro." },
            { p: "¿Cuál es una ventaja de ahorrar en un banco?",
              o: ["Tu dinero está protegido y puede generar intereses", "No se puede retirar nunca", "Pagás más impuestos", "Solo sirve para el efectivo"],
              e: "Además accedés a descuentos, tarjetas, billeteras virtuales y otros servicios." },
            { p: "¿Qué cuenta bancaria gratuita podés abrir solo con tu DNI?",
              o: ["Caja de ahorro", "Cuenta corriente", "Plazo fijo UVA", "Préstamo personal"],
              e: "No necesitás contratar otros productos para abrir una caja de ahorro." }
        ]
    },
    {
        nombre: "Inversión", icono: "🪙", color: "#9A7014",
        preguntas: [
            { p: "¿Cuál es la alternativa de inversión más habitual y segura?",
              o: ["El plazo fijo", "Guardar efectivo en casa", "La tarjeta de crédito", "El pago mínimo"],
              e: "Es como prestarle dinero al banco por un tiempo, a cambio de intereses." },
            { p: "¿Cuál es el plazo mínimo de un plazo fijo tradicional?",
              o: ["30 días", "7 días", "60 días", "90 días"],
              e: "El plazo fijo en UVA, en cambio, tiene un plazo mínimo de 90 días." },
            { p: "¿Con qué se actualiza el plazo fijo en UVA?",
              o: ["Con la inflación", "Con el clima", "Con el precio de la nafta", "Con la tasa de la tarjeta"],
              e: "Así tus ahorros se mantienen por encima de la inflación y no perdés poder adquisitivo." },
            { p: "En un plazo fijo, ¿qué es la renovación parcial?",
              o: ["Se renueva el capital y los intereses van a tu cuenta", "Se renueva todo el dinero con los intereses", "Se cancela el plazo fijo", "Se pierde el interés"],
              e: "En la renovación total se vuelve a invertir el capital más el interés." }
        ]
    },
    {
        nombre: "Canales digitales", icono: "🗝️", color: "#2A6F77",
        preguntas: [
            { p: "La tarjeta de débito es como...",
              o: ["La llave de tu cuenta", "Un préstamo", "Un plazo fijo", "Un cheque"],
              e: "Con ella usás el cajero automático, hacés compras y retirás efectivo." },
            { p: "¿Qué podés hacer con la billetera virtual de tu banco?",
              o: ["Pagar con QR y hacer transferencias desde el celular", "Imprimir billetes", "Cambiar el CBU de tu cuenta", "Eliminar tus deudas"],
              e: "También consultás saldos, recargás transporte y pagás servicios." },
            { p: "¿Cuándo está disponible el Home Banking?",
              o: ["Las 24 horas, los 7 días de la semana", "Solo en horario bancario", "Solo de lunes a viernes", "Solo en la sucursal"],
              e: "Podés hacer tus trámites sin ir al banco ni al cajero." },
            { p: "¿Qué es la clave PIN?",
              o: ["La clave de 4 números de tu tarjeta de débito", "El número de tu cuenta", "Tu alias", "El interés de un préstamo"],
              e: "Memorizala y no la anotes en la tarjeta." }
        ]
    },
    {
        nombre: "Medios de pago", icono: "💳", color: "#5B3A8C",
        preguntas: [
            { p: "¿Cuántos dígitos tiene el CBU?",
              o: ["22", "16", "10", "4"],
              e: "El CBU identifica una cuenta bancaria y sus 22 números no se pueden cambiar." },
            { p: "¿Qué es el alias?",
              o: ["Palabras que elegís para recibir transferencias en lugar de usar números", "El número de tu tarjeta", "La clave del cajero", "Un tipo de préstamo"],
              e: "A diferencia del CBU, podés cambiar tu alias todas las veces que quieras." },
            { p: "¿Qué identifica el CVU?",
              o: ["Las cuentas virtuales de las apps de pago", "Las cuentas corrientes", "Los préstamos", "Los plazos fijos"],
              e: "Cumple la misma función que el CBU, pero para billeteras virtuales." },
            { p: "¿Qué pasa si pagás solo el pago mínimo de tu tarjeta de crédito?",
              o: ["El resto se acumula al mes siguiente y genera intereses", "Se cancela toda la deuda", "El banco te regala el saldo", "No se paga ningún interés"],
              e: "El pago mínimo no cancela la obligación de pago." }
        ]
    },
    {
        nombre: "Préstamos", icono: "🏛️", color: "#B8741A",
        preguntas: [
            { p: "¿Qué es el Costo Financiero Total (CFT)?",
              o: ["La suma de los intereses y todos los costos adicionales del préstamo", "Solo la tasa de interés", "El monto que te prestan", "El plazo del préstamo"],
              e: "Incluye impuestos, seguros y gastos administrativos, entre otros." },
            { p: "En un préstamo con tasa fija, ¿qué pagás?",
              o: ["El mismo monto en todas las cuotas", "Un monto distinto cada mes", "Solo intereses", "Nada hasta el final"],
              e: "En la tasa variable cambia el monto mensual y puede cambiar el plazo." },
            { p: "Si no usaste el préstamo, ¿en qué plazo podés darlo de baja sin costo?",
              o: ["10 días hábiles", "1 día", "6 meses", "No se puede"],
              e: "Rige desde que lo pediste, siempre que todavía no lo hayas usado." },
            { p: "¿Qué riesgo tiene un préstamo informal con un prestamista?",
              o: ["Condiciones difíciles de cumplir, plazos cortos y tasas elevadas", "Ninguno", "Es siempre más barato", "Tiene más garantías"],
              e: "Por eso conviene comparar las opciones de los bancos y entidades financieras." }
        ]
    },
    {
        nombre: "Seguridad", icono: "🛡️", color: "#3E5C2E",
        preguntas: [
            { p: "¿Cómo sabés si una página es segura?",
              o: ["Tiene un candado al lado de la dirección web oficial", "Tiene muchos colores", "Pide tu clave por mail", "Tiene publicidad"],
              e: "Verificá siempre el sitio oficial del banco." },
            { p: "Si te roban o perdés la tarjeta, ¿qué tenés que hacer?",
              o: ["Llamar al banco para que la bloqueen", "Esperar unos días", "Publicarlo en redes", "Cambiar el alias"],
              e: "Conviene tener los teléfonos del dorso de la tarjeta anotados aparte." },
            { p: "¿Cuál es una buena práctica con tu contraseña del cajero?",
              o: ["No usar tu fecha de nacimiento y mantenerla en secreto", "Anotarla en la tarjeta", "Compartirla con un amigo", "Usar tu año de nacimiento"],
              e: "Tiene que ser fácil de recordar para vos y difícil de adivinar para otros." },
            { p: "Te piden tus datos por mail o teléfono diciendo que son del banco. ¿Qué hacés?",
              o: ["Cortás y llamás a tu sucursal", "Das los datos rápido", "Respondés por redes", "Mandás una foto de la tarjeta"],
              e: "El banco nunca te pide información personal ni financiera por esos medios." }
        ]
    }
];

const PUNTOS_POR_ACIERTO = 100;
const SEGUNDOS_GIRO = 4;


// -----------------------------------------------------
// 2. VARIABLES DEL JUEGO
// -----------------------------------------------------

let puntaje = 0;
let respondidas = 0;
let rotacionActual = 0;
let preguntaActual = null;
let usadas = temas.map(() => new Set());   // preguntas ya respondidas por tema
const totalPreguntas = temas.reduce((n, t) => n + t.preguntas.length, 0);
const grados = 360 / temas.length;


// -----------------------------------------------------
// 3. ELEMENTOS DEL HTML
// -----------------------------------------------------

const $ = id => document.getElementById(id);
const ruleta = $("ruleta"), botonGirar = $("botonGirar");
const tarjeta = $("tarjetaPregunta"), pantallaFinal = $("final");


// -----------------------------------------------------
// 4. DIBUJAR LA RULETA (colores y nombres salen de "temas")
// -----------------------------------------------------

function dibujarRuleta() {
    const tramos = temas.map((t, i) =>
        `${t.color} ${i * grados}deg ${(i + 1) * grados}deg`);
    ruleta.style.background = `conic-gradient(${tramos.join(", ")})`;

    temas.forEach((t, i) => {
        const medio = i * grados + grados / 2;
        const et = document.createElement("div");
        et.className = "sector";
        et.innerHTML = `<span>${t.icono}</span>${t.nombre}`;
        // Se coloca en el medio del sector y se deja derecho para poder leerlo
        et.style.transform =
            `translate(-50%, -50%) rotate(${medio}deg) translateY(-118px) rotate(${-medio}deg)`;
        ruleta.appendChild(et);
    });
}


// -----------------------------------------------------
// 5. GIRAR LA RULETA
// El sector ganador se sortea entre los temas con preguntas
// pendientes y la ruleta frena realmente sobre ese sector.
// -----------------------------------------------------

botonGirar.addEventListener("click", girarRuleta);

function girarRuleta() {
    botonGirar.disabled = true;
    tarjeta.classList.add("oculto");

    const disponibles = temas
        .map((t, i) => i)
        .filter(i => usadas[i].size < temas[i].preguntas.length);
    const sector = disponibles[Math.floor(Math.random() * disponibles.length)];

    // Punto de la ruleta que debe quedar bajo la flecha (dentro del sector)
    const punto = (sector + 0.15 + Math.random() * 0.7) * grados;
    const destino = (360 - punto) % 360;
    const falta = (destino - (rotacionActual % 360) + 360) % 360;

    rotacionActual += 5 * 360 + falta;
    ruleta.style.transform = `rotate(${rotacionActual}deg)`;

    setTimeout(() => mostrarPregunta(sector), SEGUNDOS_GIRO * 1000 + 100);
}


// -----------------------------------------------------
// 6. MOSTRAR LA PREGUNTA DEL TEMA SORTEADO
// -----------------------------------------------------

function mezclar(lista) {
    return lista.map(x => ({ x, r: Math.random() }))
                .sort((a, b) => a.r - b.r)
                .map(o => o.x);
}

function mostrarPregunta(indiceTema) {
    const tema = temas[indiceTema];
    const pendientes = tema.preguntas
        .map((q, i) => i)
        .filter(i => !usadas[indiceTema].has(i));
    const indicePregunta = pendientes[Math.floor(Math.random() * pendientes.length)];
    const q = tema.preguntas[indicePregunta];

    preguntaActual = { indiceTema, indicePregunta };

    $("categoria").textContent = tema.icono + " " + tema.nombre;
    $("categoria").style.background = tema.color;
    $("tema").textContent = "Tema: " + tema.nombre;
    $("pregunta").textContent = q.p;
    $("resultado").textContent = "";
    $("explicacion").textContent = "";

    const contenedor = $("opciones");
    contenedor.innerHTML = "";

    // La opción correcta es la primera del banco; se mezclan al mostrarlas
    mezclar(q.o.map((texto, i) => ({ texto, correcta: i === 0 })))
        .forEach(op => {
            const boton = document.createElement("button");
            boton.textContent = op.texto;
            boton.className = "opcion";
            boton.dataset.correcta = op.correcta;
            boton.addEventListener("click", () => comprobarRespuesta(boton));
            contenedor.appendChild(boton);
        });

    tarjeta.classList.remove("oculto");
    tarjeta.scrollIntoView({ behavior: "smooth", block: "center" });
}


// -----------------------------------------------------
// 7. COMPROBAR RESPUESTA
// -----------------------------------------------------

function comprobarRespuesta(botonElegido) {
    const acerto = botonElegido.dataset.correcta === "true";
    const q = temas[preguntaActual.indiceTema].preguntas[preguntaActual.indicePregunta];

    usadas[preguntaActual.indiceTema].add(preguntaActual.indicePregunta);
    respondidas++;

    document.querySelectorAll(".opcion").forEach(b => {
        b.disabled = true;
        if (b.dataset.correcta === "true") b.classList.add("correcta");
    });

    if (acerto) {
        puntaje += PUNTOS_POR_ACIERTO;
        $("resultado").textContent = `✅ ¡Correcto! +${PUNTOS_POR_ACIERTO} monedas`;
    } else {
        botonElegido.classList.add("incorrecta");
        $("resultado").textContent = "❌ Respuesta incorrecta";
    }
    $("explicacion").textContent = "💡 " + q.e;

    actualizarMarcador();

    if (respondidas === totalPreguntas) {
        setTimeout(mostrarFinal, 1800);
    } else {
        botonGirar.disabled = false;
    }
}


// -----------------------------------------------------
// 8. MARCADOR, FINAL Y REINICIO
// -----------------------------------------------------

function actualizarMarcador() {
    $("puntaje").textContent = puntaje;
    $("contador").textContent = respondidas;
    $("total").textContent = totalPreguntas;
}

function mostrarFinal() {
    const maximo = totalPreguntas * PUNTOS_POR_ACIERTO;
    const porcentaje = Math.round(puntaje / maximo * 100);
    let mensaje = "Título: Esclavo de la deuda. ¡Seguí practicando: una bolsa llena empieza con una decisión!";
    if (porcentaje >= 80) mensaje = "Título: El hombre más rico de Babilonia. ¡Tu bolsa nunca estará flaca!";
    else if (porcentaje >= 50) mensaje = "Título: Mercader próspero. Ya sabés conservar parte de lo que ganás.";

    $("mensajeFinal").textContent =
        `Monedas reunidas: ${puntaje} de ${maximo} (${porcentaje}%). ${mensaje}`;
    tarjeta.classList.add("oculto");
    pantallaFinal.classList.remove("oculto");
    pantallaFinal.scrollIntoView({ behavior: "smooth", block: "center" });
}

$("botonReiniciar").addEventListener("click", () => {
    puntaje = 0;
    respondidas = 0;
    usadas = temas.map(() => new Set());
    pantallaFinal.classList.add("oculto");
    botonGirar.disabled = false;
    actualizarMarcador();
});


// -----------------------------------------------------
// 9. INICIO
// -----------------------------------------------------

dibujarRuleta();
actualizarMarcador();
