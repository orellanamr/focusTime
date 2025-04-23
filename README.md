# FocusTime ⏳

FocusTime es una aplicación móvil basada en la técnica **Pomodoro**, diseñada para ayudarte a mantenerte enfocado en tus tareas y mejorar tu productividad. Con esta app, puedes establecer un tema en el que enfocarte, realizar sesiones de trabajo cronometradas y llevar un historial de tus logros.

---

## 🚀 Características

- **Agregar temas de enfoque**: Define en qué quieres trabajar.
- **Temporizador Pomodoro**: Realiza sesiones de trabajo cronometradas.
- **Historial de enfoque**: Lleva un registro de los temas en los que has trabajado.
- **Interfaz amigable**: Diseñada con React Native y `react-native-paper` para una experiencia fluida.
- **Persistencia de datos**: Guarda tu historial de enfoque usando `AsyncStorage`.

---

## 📸 Capturas de pantalla

### Pantalla principal
![FocusTime - Pantalla principal](./assets/screenshots/focus_main.png)

### Temporizador
![FocusTime - Temporizador](./assets/screenshots/focus_timer.png)

### Historial
![FocusTime - Historial](./assets/screenshots/focus_history.png)

*(Asegúrate de agregar las capturas de pantalla en la carpeta `assets/screenshots` y ajustar las rutas si es necesario.)*

---

## 🛠️ Tecnologías utilizadas

- **React Native**: Framework principal para el desarrollo de la app.
- **Expo**: Para facilitar el desarrollo y la ejecución.
- **react-native-paper**: Componentes UI modernos y accesibles.
- **AsyncStorage**: Para la persistencia de datos local.
- **JavaScript**: Lenguaje principal del proyecto.

---

## 📂 Estructura del proyecto
src/ ├── components/ │ ├── Countdown.js │ ├── RoundedButton.js ├── features/ │ ├── Focus.js │ ├── FocusHistory.js │ ├── Timer.js │ ├── Timing.js ├── utils/ │ ├── colors.js │ ├── sizes.js App.js


---

## ⚙️ Instalación y ejecución

Sigue estos pasos para ejecutar el proyecto en tu máquina local:

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/focustime.git
   cd focustime

2. Instala las dependencias:
        npm install

3. Inicia el proyecto con Expo:
        npm start

4. Escanea el código QR con la app de Expo Go en tu dispositivo móvil o usa un emulador.

🌟 Próximas mejoras
Notificaciones push: Recordatorios para iniciar o finalizar sesiones.
Sonidos relajantes: Agregar sonidos al iniciar o finalizar una sesión.
Tema oscuro: Para mejorar la experiencia en ambientes con poca luz.
Internacionalización: Soporte para múltiples idiomas.

🤝 Contribuciones
¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar la app, no dudes en abrir un issue o enviar un pull request.

📄 Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

