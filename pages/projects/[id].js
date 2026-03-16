import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "framer-motion";

// ── Project data ───────────────────────────────────────────────────────────────

const projectData = {
  Grocio: {
    title: "Grocio",
    subtitle: "AI-Powered Pantry Assistant",
    tags: ["Flutter", "Firebase", "OpenAI", "Dart"],
    description: [
      { type: "paragraph", content: "Grocio is an AI-based smart pantry management app that helps you track your groceries and household items, recommends recipes based on your pantry contents, and sends timely notifications for restocking and expiration dates." },
      { type: "heading", content: "Cloud-Powered Real-Time Database" },
      { type: "list", items: ["Built on Firebase Firestore for instantaneous data synchronization", "Multi-device support with real-time updates across all user devices", "Efficient data modeling for pantry items, recipes, and user preferences", "Offline-first architecture ensuring functionality without internet connection", "Automatic conflict resolution for concurrent updates"] },
      { type: "heading", content: "AI-Powered Kitchen Assistant" },
      { type: "list", items: ["Integration with OpenAI's GPT-3.5 Turbo model for intelligent interactions", "Dynamic recipe generation based on real-time pantry inventory, expiration dates, and available quantities", "Smart meal planning with contextual understanding of ingredients", "Natural language processing for conversational interaction", "Adaptive responses based on user's pantry state"] },
      { type: "heading", content: "Smart Notification System" },
      { type: "list", items: ["Multi-layered notification architecture using Flutter Local Notifications", "Background processing with WorkManager for reliable alerts", "Intelligent scheduling: expiration warnings, low inventory alerts, restocking suggestions", "Custom notification categories with different priority levels", "User-configurable notification preferences"] },
      { type: "heading", content: "Technical Implementation" },
      { type: "list", items: ["Integration with OpenAI's API for intelligent recipe suggestions", "Real-time Firestore data streams", "Background task scheduling", "Complex data synchronization", "RESTful API integration", "Offline data persistence"] },
      { type: "paragraph", content: "This project showcases my ability to integrate cutting-edge AI technology with practical mobile development, creating a powerful yet user-friendly application that solves real-world kitchen management challenges." },
    ],
    links: [
      { text: "GitHub Repository", url: "https://github.com/aryansri0208/grocio" },
      { text: "Demo Video", url: "https://drive.google.com/file/d/1Coia-gT1aSfaVD3nZtSiBza8D2H1K6AB/view?usp=sharing" },
    ],
    gallery: ["/grocio(1).png", "/grocio(2).png", "/grocio(3).png", "/grocio(4).png"],
  },
  Investment_Advisor: {
    title: "Investment Advisor",
    subtitle: "AI-Based Investment Predictions",
    tags: ["Python", "FastAPI", "Prophet", "Streamlit"],
    description: [
      { type: "paragraph", content: "Stock Advisor is a comprehensive financial analysis platform that empowers investors with sophisticated tools for stock market analysis and forecasting. The application seamlessly integrates real-time market data from Yahoo Finance with advanced technical analysis capabilities and machine learning predictions." },
      { type: "heading", content: "Real-time Market Analysis" },
      { type: "list", items: ["Live stock price tracking and visualization", "Interactive price charts with customizable time ranges", "Volume analysis for trading activity insights", "Multiple stock comparison and correlation analysis"] },
      { type: "heading", content: "Technical Analysis Tools" },
      { type: "list", items: ["Moving averages (10, 20, and 50-day) for trend identification", "Daily return calculations and distribution analysis", "Trading volume patterns and anomaly detection", "Correlation heatmaps for portfolio diversification"] },
      { type: "heading", content: "Advanced Forecasting" },
      { type: "list", items: ["Machine learning-powered price predictions using Facebook Prophet", "Trend decomposition and seasonality analysis", "Confidence intervals for forecasted values", "Rolling mean smoothing for better trend visualization"] },
      { type: "heading", content: "User Experience" },
      { type: "list", items: ["Clean, intuitive web interface built with Streamlit", "Fast, responsive backend powered by FastAPI", "Flexible data range selection", "Support for multiple stock analysis", "Export capabilities for data and visualizations"] },
      { type: "paragraph", content: "The application is built on a modern tech stack including FastAPI, Streamlit, and Prophet, making it both powerful and user-friendly. Designed for both casual investors and experienced traders requiring detailed technical analysis." },
    ],
    links: [
      { text: "GitHub Repository", url: "https://github.com/aryansri0208/stockadvisor" },
      { text: "Demo Video", url: "https://drive.google.com/file/d/1Mn1e9o7z5Ql0u09iYEFNn_Tz0X02S8dh/view?usp=sharing" },
    ],
    gallery: ["/AAPL_Prophet_Prediction.png"],
  },
  ECE_Soft: {
    title: "Trustworthy Module Registry",
    subtitle: "Node.js Package Evaluation CLI Tool",
    tags: ["Node.js", "TypeScript", "AWS", "DynamoDB", "S3"],
    description: [
      { type: "paragraph", content: "A sophisticated command-line application designed to evaluate and assess the trustworthiness of Node.js modules. It provides developers with a comprehensive analysis of packages based on multiple metrics, helping them make informed decisions about module adoption and ensuring project stability." },
      { type: "heading", content: "Package Evaluation Metrics" },
      { type: "list", items: ["Ramp-Up Time: Evaluates how quickly a new developer can become productive with the package", "Correctness: Assesses the reliability and accuracy of the package's functionality", "Bus Factor: Measures the risk associated with the number of maintainers", "Responsive Maintainers: Evaluates how actively maintainers respond to issues", "License Compatibility: Ensures the package's license aligns with project requirements"] },
      { type: "heading", content: "AWS Integration" },
      { type: "list", items: ["DynamoDB for package metadata storage — name, version, S3 keys, timestamps", "Regex-based package searches with pagination and batch operations", "S3 for secure file uploads/downloads with dynamic URL generation", "Automated cleanup processes and content type management"] },
      { type: "heading", content: "API Architecture" },
      { type: "list", items: ["Package Upload: Handles uploads with metadata extraction", "Package Retrieval: Efficient downloading and metadata access", "Package Updates: Manages version updates and metadata modifications", "Version Control: Semantic versioning validation", "Cost Calculation: Analyzes package costs and dependencies"] },
      { type: "heading", content: "Security and Performance" },
      { type: "list", items: ["Comprehensive input validation and robust error management", "Secure access to AWS resources with data integrity checks", "Efficient caching mechanisms and batch processing support", "Asynchronous operations and optimized AWS resource usage"] },
      { type: "paragraph", content: "This comprehensive system provides developers with the tools they need to make informed decisions about package adoption while ensuring the security and reliability of their Node.js applications." },
    ],
    links: [
      { text: "GitHub Repository", url: "https://github.com/aryansri0208/ECE-46100-Phase-2" },
      { text: "Project Documentation", url: "https://drive.google.com/file/d/1l_rcPhK-vZN5O31GZLzzKjK1DU5c-3RQ/view?usp=drive_link" },
    ],
    gallery: ["/Internal Package Management .jpg"],
  },
  ChessAI: {
    title: "Human-Centric Chess Move Prediction",
    subtitle: "Skill-Aware Neural Networks for Adaptive Chess AI",
    tags: ["PyTorch", "Python", "CNN", "Transformer", "Pygame"],
    description: [
      { type: "paragraph", content: "Maia is a sophisticated chess AI that combines deep learning with classical chess programming to create an adaptive engine capable of playing at various skill levels. The core innovation lies in its ability to understand and mimic human playing styles across different Elo ratings." },
      { type: "heading", content: "Neural Network Models" },
      { type: "list", items: ["MaiaCNN: A convolutional neural network processing chess positions as 12-channel tensors", "MaiaTransformer: A transformer-based model capturing long-range dependencies in chess positions", "EloAttentionModel: An advanced model incorporating player skill level into decision-making"] },
      { type: "heading", content: "Core Components" },
      { type: "list", items: ["Board Representation: Converts chess positions into tensor format (12×8×8) for neural network processing", "Move Prediction: Outputs probabilities for all 4672 possible legal moves", "Elo Conditioning: Adjusts playing strength based on desired skill level", "Attention Mechanism: Provides insights into how the model makes decisions"] },
      { type: "heading", content: "Training Pipeline" },
      { type: "list", items: ["Data preprocessing from PGN (Portable Game Notation) files", "Custom dataset handling with PyTorch", "Support for supervised and reinforcement learning", "Validation metrics including top-k accuracy", "Learning rate scheduling, early stopping, model checkpointing"] },
      { type: "heading", content: "User Interface" },
      { type: "list", items: ["Interactive GUI built with Pygame", "Real-time move visualization", "Move prediction visualization and attention pattern analysis", "Game replay functionality and performance metrics tracking"] },
      { type: "heading", content: "Performance" },
      { type: "list", items: ["High accuracy in move prediction", "Consistent playing strength at target Elo", "Realistic human-like playing style", "Efficient inference time"] },
      { type: "paragraph", content: "This project represents a comprehensive approach to chess AI development, combining modern deep learning techniques with classical chess programming principles to create an adaptive and educational chess engine." },
    ],
    links: [
      { text: "GitHub — Colab", url: "https://github.com/aryansri0208/ECE570-Maia-2Reimplementation" },
      { text: "GitHub — Project", url: "https://github.com/aryansri0208/ECE570-ChessAI" },
      { text: "Research Paper", url: "https://drive.google.com/file/d/1gnC-FuvcmfHiJd0qCiXzGjfcq1ag1wU2/view?usp=sharing" },
      { text: "Demo Video", url: "https://youtu.be/LEVqNCh-tCM" },
    ],
    gallery: ["/gui.png"],
  },
  ECE362Project: {
    title: "Gesture Controlled Brick Breaker",
    subtitle: "STM32F091 Microcontroller Game",
    tags: ["STM32", "C", "I2C", "SPI", "EEPROM"],
    description: [
      { type: "paragraph", content: "A detailed implementation of the classic Brick Breaker game on an STM32F091 microcontroller. The project integrates several hardware components and software modules to create an interactive gaming experience with gesture-based paddle control." },
      { type: "heading", content: "Project Overview" },
      { type: "list", items: ["Microcontroller: STM32F091 handles all game logic, sensor data, and display updates", "Display: TFT LCD via SPI renders the paddle, ball, bricks, score, and timer", "Gesture Control: APDS-9960 motion sensor detects hand movements over I2C", "Sound Effects: PWM/DAC driven buzzer for collision and brick-break audio feedback", "High Score Persistence: External I2C EEPROM (24CXX series) for non-volatile storage"] },
      { type: "heading", content: "Game Logic" },
      { type: "list", items: ["Gesture-controlled paddle using APDS-9960 sensor", "Collision detection between ball, paddle, bricks, and walls", "Grid of bricks with tracked state (present or broken)", "60-second countdown timer with real-time score display"] },
      { type: "heading", content: "Software Structure" },
      { type: "list", items: ["main.c: System initialization, display setup, and game loop", "display_game_function.c: Core game logic — drawing elements, collision handling", "Supporting modules: gesture detection, sound generation, EEPROM interaction"] },
      { type: "paragraph", content: "This project showcases a blend of hardware and software engineering, creating an engaging and interactive game experience on an embedded system." },
    ],
    links: [
      { text: "GitHub Repository", url: "https://github.com/aryansri0208/ECE362_Project_BallBreaker" },
      { text: "Demo Video", url: "https://drive.google.com/file/d/1ILIBFqoTis92irTvmE9FChc3i6F87m7S/view?usp=sharing" },
    ],
    gallery: ["/image.png"],
  },
  ECE368: {
    title: "Data Structures & Algorithms",
    subtitle: "Advanced Core CS Implementations in C",
    tags: ["C", "Algorithms", "Data Structures", "Graph Theory"],
    description: [
      { type: "paragraph", content: "A series of data structures and algorithms implementations — Shellsort, BST, HBT, graph pathfinding — with file I/O systems, tree manipulations (rerooting, balancing), and memory management techniques for efficient data processing and storage." },
      { type: "heading", content: "HW 1 — Shellsort" },
      { type: "list", items: ["Array-based and linked list-based Shellsort implementations", "Custom gap sequence generator (2^p × 3^q)", "Binary file I/O and performance tracking with comparison counting"] },
      { type: "heading", content: "HW 2 — Tree Layout System" },
      { type: "list", items: ["Binary tree for layout calculations", "Post-order traversal, dimension calculations, coordinate calculations", "Horizontal ('H') and vertical ('V') node types"] },
      { type: "heading", content: "HW 3 — Tree Manipulation & Rerooting" },
      { type: "list", items: ["Tree duplication and alternate visiting", "Rerooting with left/right turns", "Stack-based traversal with parent pointer support"] },
      { type: "heading", content: "HW 4 — Height-Balanced Binary Tree (HBT)" },
      { type: "list", items: ["AVL-like height balancing with BST validation", "Binary file I/O for tree serialization", "Bit fields for efficient storage (29-bit key, 3-bit balance)", "Search, insert, delete, rotation"] },
      { type: "heading", content: "HW 5 — Graph Pathfinding" },
      { type: "list", items: ["Dijkstra's algorithm with priority queue", "Weighted edges, board constraint support", "Path reconstruction and output"] },
      { type: "paragraph", content: "Each homework built upon the previous, progressing from basic sorting to complex graph-based pathfinding, with a consistent focus on memory management and file I/O." },
    ],
    links: [{ text: "GitHub Repository", url: "https://github.com/aryansri0208/ECE-368" }],
    gallery: ["/DSA.png"],
  },
  VIPResearch: {
    title: "Autonomous UAV Navigation",
    subtitle: "IEEE Maze Competition — SERIS Lab, Purdue University",
    tags: ["ROS2", "PX4", "Python", "Computer Vision", "Gazebo"],
    description: [
      { type: "paragraph", content: "This project investigates autonomous UAV navigation through complex maze environments by integrating ROS2, PX4, and Computer Vision techniques. Developed under the SERIS (Secure + Efficient + Reproducible Intelligent Systems) Lab at Purdue University for the 2024 IEEE UAV Maze Competition." },
      { type: "heading", content: "Technical Architecture" },
      { type: "list", items: ["UAV Platform: PX4 flight control firmware connected via ROS2 middleware", "Computer Vision: Obstacle recognition and wall-following capabilities", "Spatial Awareness: Enhanced perception in environments with no prior mapping", "Modular Design: Real-time communication between navigation components"] },
      { type: "heading", content: "Software Implementation" },
      { type: "list", items: ["NAV2 Planning Plugins: NavFn, RRT-based planners, memory-optimized pathfinding", "Gazebo simulation for drone behavior testing and plugin evaluation", "Time and accuracy benchmarking across planning strategies"] },
      { type: "heading", content: "Testing & Results" },
      { type: "list", items: ["Custom-built PVC and paper maze testbeds", "Over 60% maze completion rate in trials", "Drone resilience, collision-avoidance, and navigation precision metrics"] },
      { type: "heading", content: "Key Contributions" },
      { type: "list", items: ["Motion Planning: Efficient navigation algorithm development", "Deep Learning Components: AI-driven perception integration", "Software Architecture: Modular and scalable system design", "Testing Framework: Comprehensive evaluation methods"] },
      { type: "paragraph", content: "As software lead, I contributed to motion planning and deep learning components, achieving over 60% maze completion in trials. The work reflects a deep intersection of embedded systems, AI-driven perception, and real-time robotics." },
    ],
    links: [
      { text: "Research Poster", url: "https://docs.google.com/presentation/d/1OblPKfTTQifj61anK6l47aZSpbQi52Tb/edit?usp=sharing" },
    ],
    gallery: ["/UAV.png", "/UAV2.png"],
  },
  ECE362: {
    title: "Microprocessor Systems",
    subtitle: "STM32 and RISC-V Assembly Programming",
    tags: ["STM32", "C", "RISC-V", "Assembly", "Embedded"],
    description: [
      { type: "paragraph", content: "A collection of embedded systems lab assignments (ECE362) covering topics from GPIO to RISC-V assembly programming, with each lab focusing on different aspects of microcontroller development and low-level programming." },
      { type: "heading", content: "STM32 Microcontroller Labs" },
      { type: "list", items: ["Lab 1 — GPIO: Button input handling, LED output control, keypad interface", "Lab 2 — Interrupts: External interrupt handling, event-driven programming", "Lab 3 — Timers: Timer configuration, delays, timing operations", "Lab 4 — DAC: Digital-to-analog conversion, waveform generation", "Lab 5 — PWM: Pulse width modulation, motor control, duty cycle", "Lab 6 — SPI: Synchronous serial communication, master-slave devices", "Lab 7 — USART: Asynchronous data transmission, UART configuration"] },
      { type: "heading", content: "RISC-V Assembly Labs" },
      { type: "list", items: ["Lab 8 — Introduction to RISC-V: Architecture concepts, assembly fundamentals", "Lab 9 — Control Flow: Branching, looping, conditional execution", "Lab 10 — Functions: Stack management, function parameters, sorting, Fibonacci, binary search"] },
      { type: "paragraph", content: "Each lab builds from basic microcontroller concepts to complex topics. The first seven labs focus on STM32 programming; the final three shift to RISC-V assembly." },
    ],
    links: [{ text: "GitHub Repository", url: "https://github.com/aryansri0208/ECE362" }],
    gallery: ["/ECE362.jpeg"],
  },
  ECE570: {
    title: "Artificial Intelligence Coursework",
    subtitle: "Machine Learning & Deep Learning — ECE570",
    tags: ["PyTorch", "NumPy", "scikit-learn", "CNN", "Transformers"],
    description: [
      { type: "paragraph", content: "Comprehensive assignments covering machine learning and deep learning — from logistic regression and neural networks to CNNs, density estimation, and attention mechanisms. Implemented using NumPy, scikit-learn, and PyTorch on datasets including MNIST, CIFAR-10, and Breast Cancer." },
      { type: "heading", content: "Assignment 1 — Logistic Regression (scikit-learn)" },
      { type: "list", items: ["Logistic regression on Breast Cancer dataset", "Data normalization and model evaluation", "Manual accuracy vs built-in accuracy_score comparison"] },
      { type: "heading", content: "Assignment 2 — SGD & Neural Networks (NumPy)" },
      { type: "list", items: ["Logistic regression from scratch with SGD and binary cross-entropy", "3-layer neural network: ReLU & sigmoid activations, manual forward/backward prop"] },
      { type: "heading", content: "Assignment 3 — CNNs & Transfer Learning (PyTorch)" },
      { type: "list", items: ["2D convolution layer from scratch", "FC vs CNN comparison on MNIST", "CNNs on CIFAR-10 with transfer learning via fine-tuned ResNet-18", "Misclassification visualization, nearest-neighbor embedding space"] },
      { type: "heading", content: "Assignment 4 — Transformers & Self-Attention" },
      { type: "list", items: ["Positional encodings, scaled dot-product attention, self-attention modules", "Multi-head self-attention layers, transformer block sequence handling"] },
      { type: "heading", content: "Assignment 5 — Latent Representations" },
      { type: "list", items: ["Residual CNN on MNIST, intermediate feature extraction", "Clustering (K-means), nearest-neighbor matching, visualization"] },
      { type: "heading", content: "Assignment 6 — Density Estimation & GMMs" },
      { type: "list", items: ["Gaussian, Histogram, and KDE density estimators", "GMM with Expectation-Maximization (EM): random init, E-step, M-step"] },
      { type: "paragraph", content: "This coursework provided hands-on experience with fundamental ML concepts and modern deep learning, emphasizing both theoretical understanding and practical implementation." },
    ],
    links: [{ text: "GitHub Repository", url: "https://github.com/aryansri0208/ECE570" }],
    gallery: ["/ECE570.png"],
  },
  ECE39595: {
    title: "OOP Chess System (C++)",
    subtitle: "Hash Map & Chess Game — ECE39595",
    tags: ["C++", "OOP", "Templates", "Polymorphism"],
    description: [
      { type: "paragraph", content: "Demonstrates advanced OOP concepts through two major projects: a generic hash map and a complete chess game system — showcasing inheritance, polymorphism, and encapsulation." },
      { type: "heading", content: "Project 1 & 2 — Generic Hash Map" },
      { type: "list", items: ["Linked list-based collision handling with generic template class", "Dynamic capacity management with load factors and automatic resizing", "Insert, get_value, remove, key enumeration and sorting", "Implements the Rule of Three — copy constructor, assignment operator, destructor", "Dynamic resizing with capacity steps (209, 1021, 2039)", "Memory safety with proper cleanup"] },
      { type: "heading", content: "Project 3 — Chess Game" },
      { type: "list", items: ["Abstract base class (ChessPiece) with pure virtual movement validation", "Derived piece classes: King, Queen, Rook, Bishop, Knight, Pawn", "ChessBoard: 2D vector board, turn management, move validation, threat detection", "Special rules: en passant, check and checkmate detection", "Complete turn-based gameplay with board visualization"] },
      { type: "paragraph", content: "Comprehensive exploration of OOP concepts through practical implementations — from fundamental data structures to complex game logic." },
    ],
    links: [{ text: "GitHub Repository", url: "https://github.com/aryansri0208/ECE-39595" }],
    gallery: ["/ECE39595.png"],
  },
  ECE270: {
    title: "FPGA & SystemVerilog Projects",
    subtitle: "Digital Systems Design — ECE270",
    tags: ["FPGA", "SystemVerilog", "UART", "VGA", "RTL"],
    description: [
      { type: "paragraph", content: "A comprehensive series of FPGA development and digital systems design projects using SystemVerilog on the ICE40HX8K, covering UART communication to a fully implemented Lunar Lander game." },
      { type: "heading", content: "Hardware Platform" },
      { type: "list", items: ["FPGA: ICE40HX8K", "Environment: SystemVerilog, GTKWave, Make-based build system", "Interfaces: UART, VGA, GPIO"] },
      { type: "heading", content: "Lab Projects" },
      { type: "list", items: ["Lab 4 — UART: Transmitter/receiver modules, baud rate generator, state machines", "Lab 6 — Advanced UART: FIFO buffers, error detection/correction, timing analysis", "Lab 9 — FSM: Sequence detectors, synchronous/asynchronous resets, state encoding", "Lab 10 — Custom Processor: ALU, control unit, register file, instruction set design, pipeline", "Lab 11 — Lunar Lander Game: VGA controller, game state machine, physics in hardware, real-time display"] },
      { type: "heading", content: "Skills Demonstrated" },
      { type: "list", items: ["RTL Design and testbench development", "Synthesis, place & route, timing constraints", "Waveform analysis and functional testing", "Clock domain management and resource optimization"] },
      { type: "paragraph", content: "This series demonstrates comprehensive FPGA development experience, from basic digital circuits to complex systems, in hardware design using SystemVerilog." },
    ],
    links: [{ text: "GitHub Repository", url: "https://github.com/aryansri0208/ECE-270" }],
    gallery: ["/ECE270.png"],
  },
  ECE20875: {
    title: "Python for Data Science",
    subtitle: "Data Analysis & Machine Learning — ECE20875",
    tags: ["Python", "pandas", "scikit-learn", "NLP", "K-means"],
    description: [
      { type: "paragraph", content: "A wide range of data science topics from basic probability to advanced machine learning and NLP. Each assignment focuses on a different aspect of data analysis with hands-on implementation." },
      { type: "heading", content: "Assignments" },
      { type: "list", items: ["HW 2 — Histogram & Birthday Problem: probability, statistics, birthday paradox", "HW 3 — Statistical Distributions: normal, uniform, exponential, Wald distributions", "HW 4 — Function Composition & Stencils: functional programming, box filters", "HW 5 — Data Analysis: district and park survey data analysis", "HW 7 — Polynomial Fitting & Regularization: AAPL/GOOG stock data, cross-validation", "HW 8 — NLP: ngrams, lecture data processing", "HW 9 — Clustering: K-means (kmeans.py), Gaussian Mixture Models (gmm.py)", "HW 10 — Fashion MNIST: deep learning classification"] },
      { type: "heading", content: "Course Coverage" },
      { type: "list", items: ["Probability and Statistics (HW2, HW3)", "Functional Programming (HW4)", "Data Analysis (HW5)", "Machine Learning — regularization, clustering, deep learning (HW7, HW9, HW10)", "Natural Language Processing (HW8)"] },
      { type: "paragraph", content: "Assignments progress from basic programming concepts to advanced ML, providing a solid foundation in data science with hands-on real-world dataset experience." },
    ],
    links: [{ text: "GitHub Repository", url: "https://github.com/aryansri0208/ECE-20875" }],
    gallery: ["/ECE20875.png"],
  },
};

// ── Primitives ─────────────────────────────────────────────────────────────────

function Tag({ children }) {
  return (
    <span className="font-mono text-[11px] text-[#5a5450] border border-[#1e1e1e] px-2 py-0.5 rounded-sm">
      {children}
    </span>
  );
}

function renderBlock(block, i) {
  switch (block.type) {
    case "paragraph":
      return (
        <p key={i} className="text-[#5a5450] text-sm leading-relaxed">
          {block.content}
        </p>
      );
    case "heading":
      return (
        <h3 key={i} className="font-mono text-xs tracking-[0.18em] uppercase text-[#c9a96e] mt-8 mb-3">
          {block.content}
        </h3>
      );
    case "list":
      return (
        <ul key={i} className="space-y-2">
          {block.items.map((item, j) => (
            <li key={j} className="flex gap-3 text-[#5a5450] text-sm leading-relaxed">
              <span className="text-[#2a2520] shrink-0 mt-0.5">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    default:
      return null;
  }
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function ProjectPage() {
  const router = useRouter();
  const { id } = router.query;
  const project = projectData[id];

  if (!id) return null;

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-6">
        <div className="text-center">
          <p className="font-mono text-xs tracking-[0.18em] uppercase text-[#c9a96e] mb-4">404</p>
          <h1 className="font-serif text-4xl text-[#e8e0d4] mb-6">Project not found</h1>
          <Link href="/#projects" className="font-mono text-xs tracking-[0.18em] uppercase text-[#5a5450] hover:text-[#c9a96e] transition-colors">
            ← Back to projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-6 py-24">

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <Link
            href="/#projects"
            className="font-mono text-xs tracking-[0.18em] uppercase text-[#3a3530] hover:text-[#c9a96e] transition-colors duration-200"
          >
            ← Projects
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <p className="font-mono text-xs tracking-[0.18em] uppercase text-[#c9a96e] mb-4">
            {project.subtitle}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-[#e8e0d4] leading-tight mb-6">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </motion.div>

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className={`grid gap-3 mb-12 ${project.gallery.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}
          >
            {project.gallery.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${project.title} screenshot ${i + 1}`}
                className="w-full object-cover border border-[#1e1e1e]"
              />
            ))}
          </motion.div>
        )}

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-4 mb-14"
        >
          {project.description.map((block, i) => renderBlock(block, i))}
        </motion.div>

        {/* Links */}
        {project.links && project.links.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="border-t border-[#1e1e1e] pt-10 flex flex-wrap gap-4"
          >
            {project.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-mono text-xs tracking-[0.18em] uppercase px-6 py-3 transition-colors duration-200 ${
                  i === 0
                    ? "bg-[#c9a96e] text-[#0a0a0a] hover:bg-[#e8e0d4]"
                    : "border border-[#1e1e1e] text-[#5a5450] hover:border-[#c9a96e] hover:text-[#c9a96e]"
                }`}
              >
                {link.text} ↗
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
