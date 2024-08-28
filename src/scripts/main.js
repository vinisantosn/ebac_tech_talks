AOS.init();

const dataDoEvento = new Date("Sep 4, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();
console.log(timeStampDoEvento);

const contAsHoras = setInterval(function () {
  const agora = new Date();
  const timeStampDoAtual = agora.getTime();
  const distanciaAteoEvento = timeStampDoEvento - timeStampDoAtual;

  const diasEmMs = 1000 * 60 * 60 * 24;
  const horasEmMs = 1000 * 60 * 60;
  const minutosEmMs = 1000 * 60;

  const diasAteEvento = Math.floor(distanciaAteoEvento / diasEmMs);
  const horasAteEvento = Math.floor(
    (distanciaAteoEvento % diasEmMs) / horasEmMs
  );
  const minutosAteEvento = Math.floor(
    (distanciaAteoEvento % horasEmMs) / minutosEmMs
  );
  const segundosAteEvento = Math.floor(
    (distanciaAteoEvento % minutosEmMs) / 1000
  );

  document.getElementById(
    "contador"
  ).innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s `;

  if (distanciaAteoEvento < 0) {
    clearInterval(contAsHoras);
    document.getElementById("contador").innerHTML = "Evento expirado";
  }
}, 1000);
