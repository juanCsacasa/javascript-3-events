// Función para renderizar el calendario de un mes específico
function renderCalendar(year, month) {
  const calendarContainer = document.getElementById("calendar");
  const date = new Date(year, month - 1, 1);
  const monthName = date.toLocaleString("default", { month: "long" });
  const yearNumber = date.getFullYear();

  const calendarHTML = `
  <div class="calendar-nav">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="nav-button" id="prev-month">
    <path d="M15 7.83l-4.59 4.58L15 16.41V13h5v-2h-5V7.83zm2 5.59L10.41 12 17 5.41V9h5v2h-5v3.42z"/>
    </svg>
    <h2>${monthName} ${yearNumber}</h2>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="nav-button" id="next-month">
    <path d="M9 16.41l4.59-4.59L9 7.83V11H4v2h5v3.17zm-2-5.58L13.59 12 7 18.59V15H2v-2h5z"/>
    </svg>
  </div>
    <table>
      <thead>
        <tr>
          <th>Sun</th>
          <th>Mon</th>
          <th>Tue</th>
          <th>Wed</th>
          <th>Thu</th>
          <th>Fri</th>
          <th>Sat</th>
        </tr>
      </thead>
      <tbody>
        ${generateCalendarDays(year, month)}
      </tbody>
    </table>
  `;

  calendarContainer.innerHTML = calendarHTML;

  const prevMonthButton = document.getElementById("prev-month");
  const nextMonthButton = document.getElementById("next-month");

  prevMonthButton.addEventListener("click", () => {
    const [prevYear, prevMonth] = getPreviousMonth(year, month);
    renderCalendar(prevYear, prevMonth);
  });

  nextMonthButton.addEventListener("click", () => {
    const [nextYear, nextMonth] = getNextMonth(year, month);
    renderCalendar(nextYear, nextMonth);
  });
}

// Función para generar el contenido de los días del calendario
function generateCalendarDays(year, month) {
  const firstDay = new Date(year, month - 1, 1).getDay();
  const lastDay = new Date(year, month, 0).getDate();

  let calendarContent = "";
  let currentDate = 1;

  for (let row = 0; row < 6; row++) {
    calendarContent += "<tr>";
    for (let col = 0; col < 7; col++) {
      if (row === 0 && col < firstDay) {
        calendarContent += "<td></td>";
      } else if (currentDate > lastDay) {
        calendarContent += "<td></td>";
      } else {
        calendarContent += `<td>${currentDate}</td>`;
        currentDate++;
      }
    }
    calendarContent += "</tr>";
  }

  return calendarContent;
}

// Función para obtener el mes anterior
function getPreviousMonth(year, month) {
  if (month === 1) {
    return [year - 1, 12];
  } else {
    return [year, month - 1];
  }
}

// Función para obtener el siguiente mes
function getNextMonth(year, month) {
  if (month === 12) {
    return [year + 1, 1];
  } else {
    return [year, month + 1];
  }
}

// Función para cargar el calendario del mes actual al cargar la página
function loadCalendar() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  renderCalendar(currentYear, currentMonth);
}

function showCalendar() {
  const calendarContainer = document.getElementById("calendar");

  // Verifica si el calendario ya está visible
  const isCalendarVisible = calendarContainer.style.display === "block";

  if (isCalendarVisible) {
    // Si el calendario está visible, ocúltalo
    calendarContainer.style.display = "none";
  } else {
    // Si el calendario no está visible, muéstralo
    calendarContainer.style.display = "block";

    // Obtén la fecha actual
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;

    // Renderiza el calendario actual
    renderCalendar(currentYear, currentMonth);
  }
}

export { showCalendar }


window.addEventListener("load", loadCalendar);
