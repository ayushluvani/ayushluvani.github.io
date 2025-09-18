// Advanced Neural Network Animation System
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all futuristic components
    initializeNeuralNetwork();
    initializeHolographicEffects();
    initializeNavigation();
    initializeTypewriter();
    initializeScrollAnimations();
    initializeThemeToggle();
    initializeMatrixRain();
    initializeQuantumParticles();
});

// Neural Network Background System
function initializeNeuralNetwork() {
    const neuralContainer = document.createElement('div');
    neuralContainer.id = 'neural-network';
    document.body.appendChild(neuralContainer);
    
    const nodes = [];
    const connections = [];
    const nodeCount = 50;
    
    // Create neural nodes
    for (let i = 0; i < nodeCount; i++) {
        createNeuralNode(neuralContainer, nodes);
    }
    
    // Create connections between nodes
    createNeuralConnections(neuralContainer, nodes, connections);
    
    // Animate energy pulses
    setInterval(() => {
        createEnergyPulse(neuralContainer, nodes);
    }, 2000);
    
    // Update neural network periodically
    setInterval(() => {
        updateNeuralNetwork(nodes, connections);
    }, 100);
}

function createNeuralNode(container, nodes) {
    const node = document.createElement('div');
    node.className = 'neural-node';
    
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    
    node.style.left = x + 'px';
    node.style.top = y + 'px';
    
    const nodeData = {
        element: node,
        x: x,
        y: y,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        energy: Math.random()
    };
    
    nodes.push(nodeData);
    container.appendChild(node);
}

function createNeuralConnections(container, nodes, connections) {
    nodes.forEach((node, i) => {
        nodes.slice(i + 1).forEach(otherNode => {
            const distance = Math.sqrt(
                Math.pow(node.x - otherNode.x, 2) + 
                Math.pow(node.y - otherNode.y, 2)
            );
            
            if (distance < 150) {
                const connection = document.createElement('div');
                connection.className = 'neural-connection';
                
                const angle = Math.atan2(otherNode.y - node.y, otherNode.x - node.x);
                connection.style.width = distance + 'px';
                connection.style.left = node.x + 'px';
                connection.style.top = node.y + 'px';
                connection.style.transform = `rotate(${angle}rad)`;
                
                connections.push({
                    element: connection,
                    node1: node,
                    node2: otherNode,
                    distance: distance
                });
                
                container.appendChild(connection);
            }
        });
    });
}

function createEnergyPulse(container, nodes) {
    if (nodes.length === 0) return;
    
    const randomNode = nodes[Math.floor(Math.random() * nodes.length)];
    const pulse = document.createElement('div');
    pulse.className = 'energy-pulse';
    
    pulse.style.left = randomNode.x + 'px';
    pulse.style.top = randomNode.y + 'px';
    
    container.appendChild(pulse);
    
    setTimeout(() => {
        if (pulse.parentNode) {
            pulse.parentNode.removeChild(pulse);
        }
    }, 2000);
}

function updateNeuralNetwork(nodes, connections) {
    nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;
        
        // Boundary collision
        if (node.x < 0 || node.x > window.innerWidth) node.vx *= -1;
        if (node.y < 0 || node.y > window.innerHeight) node.vy *= -1;
        
        // Keep within bounds
        node.x = Math.max(0, Math.min(window.innerWidth, node.x));
        node.y = Math.max(0, Math.min(window.innerHeight, node.y));
        
        node.element.style.left = node.x + 'px';
        node.element.style.top = node.y + 'px';
        
        // Energy fluctuation
        node.energy += (Math.random() - 0.5) * 0.1;
        node.energy = Math.max(0, Math.min(1, node.energy));
        
        const intensity = 0.3 + node.energy * 0.7;
        node.element.style.opacity = intensity;
    });
}

// Matrix Rain Effect
function initializeMatrixRain() {
    const matrixCanvas = document.createElement('canvas');
    matrixCanvas.id = 'matrix-rain';
    matrixCanvas.style.position = 'fixed';
    matrixCanvas.style.top = '0';
    matrixCanvas.style.left = '0';
    matrixCanvas.style.width = '100%';
    matrixCanvas.style.height = '100%';
    matrixCanvas.style.zIndex = '-3';
    matrixCanvas.style.opacity = '0.1';
    matrixCanvas.style.pointerEvents = 'none';
    
    document.body.appendChild(matrixCanvas);
    
    const ctx = matrixCanvas.getContext('2d');
    matrixCanvas.width = window.innerWidth;
    matrixCanvas.height = window.innerHeight;
    
    const matrixChars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const fontSize = 14;
    const columns = matrixCanvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(0);
    
    function drawMatrix() {
        ctx.fillStyle = 'rgba(10, 10, 15, 0.05)';
        ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
        
        ctx.fillStyle = '#00ff41';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > matrixCanvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(drawMatrix, 50);
}

// Quantum Particle System
function initializeQuantumParticles() {
    const quantumContainer = document.createElement('div');
    quantumContainer.id = 'quantum-particles';
    quantumContainer.style.position = 'fixed';
    quantumContainer.style.top = '0';
    quantumContainer.style.left = '0';
    quantumContainer.style.width = '100%';
    quantumContainer.style.height = '100%';
    quantumContainer.style.zIndex = '-4';
    quantumContainer.style.pointerEvents = 'none';
    
    document.body.appendChild(quantumContainer);
    
    for (let i = 0; i < 30; i++) {
        createQuantumParticle(quantumContainer);
    }
}

function createQuantumParticle(container) {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = Math.random() * 3 + 1 + 'px';
    particle.style.height = particle.style.width;
    particle.style.borderRadius = '50%';
    particle.style.background = getRandomNeonColor();
    particle.style.boxShadow = `0 0 10px ${getRandomNeonColor()}`;
    
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.animation = `quantumFloat ${Math.random() * 20 + 10}s linear infinite`;
    
    container.appendChild(particle);
}

function getRandomNeonColor() {
    const colors = ['#00f5ff', '#ff007f', '#39ff14', '#bf00ff', '#ff4500', '#0066ff'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Holographic UI Effects
function initializeHolographicEffects() {
    // Add holographic scan lines
    const scanLines = document.createElement('div');
    scanLines.className = 'holographic-scanlines';
    scanLines.style.position = 'fixed';
    scanLines.style.top = '0';
    scanLines.style.left = '0';
    scanLines.style.width = '100%';
    scanLines.style.height = '100%';
    scanLines.style.background = `
        repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 245, 255, 0.02) 2px,
            rgba(0, 245, 255, 0.02) 4px
        )
    `;
    scanLines.style.zIndex = '1000';
    scanLines.style.pointerEvents = 'none';
    scanLines.style.animation = 'scanlineMove 2s linear infinite';
    
    document.body.appendChild(scanLines);
}

// HUD-Style Navigation functionality
function initializeNavigation() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navbar) {
        // HUD navbar effects on scroll
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            
            if (scrolled > 100) {
                navbar.style.background = 'rgba(10, 10, 15, 0.95)';
                navbar.style.borderBottom = '1px solid rgba(0, 245, 255, 0.5)';
                navbar.style.boxShadow = '0 0 40px rgba(0, 245, 255, 0.2)';
            } else {
                navbar.style.background = 'rgba(10, 10, 15, 0.9)';
                navbar.style.borderBottom = '1px solid rgba(0, 245, 255, 0.3)';
                navbar.style.boxShadow = '0 0 30px rgba(0, 245, 255, 0.1)';
            }
        });
    }

    // Active link highlighting
    const sections = document.querySelectorAll('section');
    if (sections.length > 0 && navLinks.length > 0) {
        const observerOptions = {
            threshold: 0.3,
            rootMargin: '-100px 0px -100px 0px'
        };

        const navObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            navObserver.observe(section);
        });
    }
}

// Futuristic Typewriter effect for hero section
function initializeTypewriter() {
    const roleElement = document.querySelector('.role');
    if (!roleElement) return;
    
    const roles = [
        'QUANTUM DEVELOPER',
        'NEURAL ARCHITECT', 
        'DIGITAL ALCHEMIST',
        'CODE SORCERER',
        'DATA WHISPERER',
        'FUTURE BUILDER'
    ];
    
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isPaused = false;

    function typeRole() {
        const currentRole = roles[roleIndex];
        
        if (!isDeleting && charIndex < currentRole.length) {
            roleElement.textContent += currentRole.charAt(charIndex);
            charIndex++;
            setTimeout(typeRole, 100);
        } else if (isDeleting && charIndex > 0) {
            roleElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeRole, 50);
        } else {
            if (!isDeleting && !isPaused) {
                isPaused = true;
                setTimeout(() => {
                    isDeleting = true;
                    isPaused = false;
                    typeRole();
                }, 2000);
            } else if (isDeleting) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                setTimeout(typeRole, 500);
            }
        }
    }

    typeRole();
}

// Scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add animation classes to elements
    document.querySelectorAll('.section-header, .skill-category, .project-card, .timeline-item').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Theme toggle functionality
function initializeThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            // For this futuristic theme, we'll just add a pulse effect
            themeToggle.style.transform = 'rotate(360deg) scale(1.2)';
            setTimeout(() => {
                themeToggle.style.transform = '';
            }, 300);
        });
    }
}

// Add CSS animations for the new components
const style = document.createElement('style');
style.textContent = `
    @keyframes scanlineMove {
        0% { transform: translateY(-100%); }
        100% { transform: translateY(100vh); }
    }
    
    @keyframes quantumFloat {
        0% { 
            transform: translateY(100vh) translateX(0) rotate(0deg);
            opacity: 0;
        }
        10% { 
            opacity: 1;
        }
        90% { 
            opacity: 1;
        }
        100% { 
            transform: translateY(-100px) translateX(100px) rotate(360deg);
            opacity: 0;
        }
    }
    
    .fade-in {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease-out;
    }
    
    .fade-in.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);