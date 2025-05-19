import './index.css';
// import Heroimg from "../public/kidsmath.jpg";

function Loginbody(){
    return(

<body id="bodimg" class="min-h-screen  bg-cover bg-center  text-white  "   >
  <div   class="bg-black min-h-screen flex flex-col md:flex-row p-10 md:p-20 " >
    
    <div class="flex-1 flex flex-col justify-center">
      <h1 class="text-5xl md:text-6xl font-bold mb-6">MultiMaster</h1>
      <p class="text-lg text-gray-300 max-w-md mb-8 italic">
        Learn, explore, and master multiplication. Choose a mode to get started with practice or guided help from our AI chatbot.
      </p>
      <a href="/" class="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">Explore</a>
    </div>

 
    <div class="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 md:mt-0">
      <a href="/main/basic" class="relative group overflow-hidden rounded-xl shadow-lg">
        <img src="../basic.png" alt="imageforbasic" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        <div class="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300 flex flex-col justify-end p-4">
          <h2 class="text-xl font-bold text-white text-xl">Basic Multiplication</h2>
          <p class="text-sm text-gray-200 italic " >learn elementry multiplication easily</p>
        </div>
      </a>
      <a href="advanced.html" class="relative group overflow-hidden rounded-xl shadow-lg">
        <img src="../advance.webp" alt="for advnace" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        <div class="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300 flex flex-col justify-end p-4">
          <h2 class="text-xl font-bold text-white text-xl">Advanced Multiplication</h2>
          <p class="text-sm text-gray-200 italic">learn complex and difficult multiplication easily</p>
        </div>
      </a>
      <a href="chatbot.html" class="relative group overflow-hidden rounded-xl shadow-lg sm:col-span-2">
        <img src="../chatbot.avif" alt="for gpt" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        <div class="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300 flex flex-col justify-end p-4">
          <h2 class="text-xl font-bold text-white">Chatbot</h2>
          <p class="text-sm text-gray-200 italic">Talk to our AI for math guidance and help.</p>
        </div>
      </a>
    </div>

  </div>
</body>



    )
};

export default Loginbody;