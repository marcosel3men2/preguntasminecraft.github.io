// Elementos DOM
const loadingScreen = document.getElementById('loading-screen');
const menuScreen = document.getElementById('menu-screen');
const gameScreen = document.getElementById('game-screen');
const gameoverScreen = document.getElementById('gameover-screen');
const progressFill = document.querySelector('.progress-fill');
const loadingText = document.querySelector('.loading-text');
const playButton = document.getElementById('play-button');
const totalScoreDisplay = document.getElementById('total-score');
const currentScoreDisplay = document.getElementById('current-score');
const finalScoreDisplay = document.getElementById('final-score');
const hearts = document.querySelectorAll('.heart');
const questionElement = document.getElementById('question');
const optionButtons = document.querySelectorAll('.option-btn');
const restartButton = document.getElementById('restart-button');
const menuButton = document.getElementById('menu-button');

// Variables del juego
let totalScore = 0;
let currentScore = 0;
let lives = 3;
let currentQuestionIndex = 0;
let questions = [];

// Preguntas sobre Minecraft
const minecraftQuestions = [
    {
        question: "¿En qué año se lanzó la primera versión de Minecraft?",
        options: ["2009", "2010", "2011", "2012"],
        answer: 0
    },
    {
        question: "¿Cuál es el nombre del plano final en Minecraft?",
        options: ["The End", "The Nether", "The Aether", "The Void"],
        answer: 0
    },
    {
        question: "¿Qué mob hostil explota cuando se acerca al jugador?",
        options: ["Zombie", "Skeleton", "Creeper", "Spider"],
        answer: 2
    },
    {
        question: "¿Qué material se necesita para crear una antorcha?",
        options: ["Madera y hierro", "Carbón y palo", "Piedra y palo", "Redstone y palo"],
        answer: 1
    },
    {
        question: "¿Qué bloque se usa para crear un portal al Nether?",
        options: ["Bedrock", "Obsidiana", "Netherrack", "End Stone"],
        answer: 1
    },
    {
        question: "¿Cuál es el mob más alto de Minecraft?",
        options: ["Iron Golem", "Enderman", "Ghast", "Ender Dragon"],
        answer: 2
    },
    {
        question: "¿Qué material es necesario para crear un bloque de beacon?",
        options: ["Diamante", "Esmeralda", "Obsidiana", "Netherite"],
        answer: 0
    },
    {
        question: "¿Cuántos bloques de obsidiana se necesitan para un portal al Nether?",
        options: ["8", "10", "12", "14"],
        answer: 2
    },
    {
        question: "¿Qué mob deja caer lana al morir?",
        options: ["Cerdo", "Oveja", "Vaca", "Pollo"],
        answer: 1
    },
    {
        question: "¿Cuántos lingotes de hierro se necesitan para crear un yunque?",
        options: ["10", "21", "27", "31"],
        answer: 3
    },
    {
        question: "¿Qué objeto se necesita para domesticar a un lobo?",
        options: ["Hueso", "Carne", "Zanahoria", "Manzana"],
        answer: 0
    },
    {
        question: "¿Cuál es el mineral más raro en Minecraft?",
        options: ["Diamante", "Esmeralda", "Netherite", "Redstone"],
        answer: 2
    },
    {
        question: "¿Qué mob hostil aparece solo en el océano?",
        options: ["Guardian", "Drowned", "Elder Guardian", "Squid"],
        answer: 2
    },
    {
        question: "¿Cuál de estos no es un bioma en Minecraft?",
        options: ["Desierto", "Tundra", "Sabana", "Volcán"],
        answer: 3
    },
    {
        question: "¿Qué objeto se usa para curar a un aldeano zombie?",
        options: ["Poción de curación", "Manzana dorada", "Poción de debilidad", "Leche"],
        answer: 1
    }
];

// Guardar y cargar puntuación
function saveScore() {
    localStorage.setItem('minecraftQuizScore', totalScore);
}

function loadScore() {
    const savedScore = localStorage.getItem('minecraftQuizScore');
    if (savedScore !== null) {
        totalScore = parseInt(savedScore);
        totalScoreDisplay.textContent = totalScore;
    }
}

// Simular carga
function simulateLoading() {
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress > 100) progress = 100;
        
        progressFill.style.width = `${progress}%`;
        loadingText.textContent = `Cargando... ${Math.floor(progress)}%`;
        
        if (progress === 100) {
            clearInterval(interval);
            setTimeout(() => {
                showScreen(menuScreen);
            }, 500);
        }
    }, 200);
}

// Mostrar pantalla
function showScreen(screen) {
    // Ocultar todas las pantallas
    loadingScreen.classList.remove('active');
    menuScreen.classList.remove('active');
    gameScreen.classList.remove('active');
    gameoverScreen.classList.remove('active');
    
    // Mostrar solo la pantalla solicitada
    screen.classList.add('active');
    
    // Asegurarse de que la interfaz de juego esté correctamente configurada
    if (screen === gameScreen) {
        updateLives();
        currentScoreDisplay.textContent = currentScore;
    }
}

// Comenzar juego
function startGame() {
    lives = 3;
    currentScore = 0;
    currentQuestionIndex = 0;
    
    // Actualizar visuales
    updateLives();
    currentScoreDisplay.textContent = currentScore;
    
    // Mezclar preguntas
    questions = [...minecraftQuestions].sort(() => Math.random() - 0.5);
    
    // Mostrar la primera pregunta
    showQuestion();
    
    // Mostrar pantalla de juego
    showScreen(gameScreen);
}

// Mostrar pregunta
function showQuestion() {
    if (currentQuestionIndex >= questions.length) {
        // Si se acabaron las preguntas, mezclamos de nuevo
        questions = [...minecraftQuestions].sort(() => Math.random() - 0.5);
        currentQuestionIndex = 0;
    }
    
    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;
    
    // Llenar opciones
    question.options.forEach((option, index) => {
        optionButtons[index].textContent = option;
        optionButtons[index].classList.remove('correct', 'incorrect');
        optionButtons[index].disabled = false;
    });
}

// Verificar respuesta
function checkAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    const correct = selectedIndex === question.answer;
    
    // Deshabilitar botones
    optionButtons.forEach(button => {
        button.disabled = true;
    });
    
    // Marcar respuesta
    if (correct) {
        optionButtons[selectedIndex].classList.add('correct');
        currentScore += 5;
        currentScoreDisplay.textContent = currentScore;
    } else {
        optionButtons[selectedIndex].classList.add('incorrect');
        optionButtons[question.answer].classList.add('correct');
        lives--;
        updateLives();
    }
    
    // Pasar a la siguiente pregunta o terminar el juego
    setTimeout(() => {
        if (lives <= 0) {
            endGame();
        } else {
            currentQuestionIndex++;
            showQuestion();
        }
    }, 1500);
}

// Actualizar vidas
function updateLives() {
    hearts.forEach((heart, index) => {
        if (index < lives) {
            heart.style.opacity = 1;
        } else {
            heart.style.opacity = 0.3;
        }
    });
}

// Finalizar juego
function endGame() {
    totalScore += currentScore;
    saveScore();
    
    totalScoreDisplay.textContent = totalScore;
    finalScoreDisplay.textContent = currentScore;
    
    showScreen(gameoverScreen);
}

// Event Listeners
playButton.addEventListener('click', startGame);

optionButtons.forEach((button, index) => {
    button.addEventListener('click', () => checkAnswer(index));
});

restartButton.addEventListener('click', startGame);

menuButton.addEventListener('click', () => {
    showScreen(menuScreen);
});

// Verificar parámetros URL para accesos directos
function handleURLParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const action = urlParams.get('action');
    
    if (action === 'play') {
        // Iniciar juego directamente
        setTimeout(() => {
            showScreen(menuScreen);
            startGame();
        }, 500);
    } else if (action === 'score') {
        // Mostrar pantalla de puntuación
        setTimeout(() => {
            showScreen(menuScreen);
        }, 500);
    } else if (action === 'handler=open-file') {
        // Manejar apertura de archivo
        console.log('Manejando archivo de puntuación');
        // Implementación futura para importar/exportar puntuaciones
    }
}

// Inicializar el juego
document.addEventListener('DOMContentLoaded', () => {
    loadScore();
    
    // Verificar si hay parámetros en la URL
    if (window.location.search) {
        handleURLParams();
    } else {
        simulateLoading();
    }
    
    // Registrar para actualizaciones del manifest
    if ('onappinstalled' in window) {
        window.addEventListener('appinstalled', (event) => {
            console.log('¡Aplicación instalada correctamente!');
        });
    }
    
    // Detectar si ya está instalada como PWA
    if (window.matchMedia('(display-mode: standalone)').matches || 
        window.matchMedia('(display-mode: fullscreen)').matches ||
        window.navigator.standalone === true) {
        console.log('PWA está siendo ejecutada en modo app');
    }
});

// Evitar el scrolling en dispositivos móviles
window.addEventListener('touchmove', (e) => {
    if (e.touches.length > 1) {
        e.preventDefault();
    }
}, { passive: false }); 