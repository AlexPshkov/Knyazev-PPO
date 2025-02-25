import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900">
    <!-- Header -->
    <header class="backdrop-blur-sm bg-gray-800/80 shadow-lg">
      <div class="max-w-4xl mx-auto py-8 px-4 flex items-center gap-6">
        <img 
          src="./my_avatar.png"
          alt="Profile Avatar" 
          class="w-auto h-24"
        />
        <div>
          <h1 class="text-4xl font-bold text-white hover:text-blue-400 transition-colors duration-300">
            Саша Крашенинников
          </h1>
          <p class="text-xl text-gray-300 mt-2">Студент группы ПС-42</p>
        </div>
      </div>
    </header>

    <main class="max-w-4xl mx-auto py-8 px-4 space-y-8">
      <!-- About Me -->
      <section class="section">
        <h2 class="section-title">Обо мне</h2>
        <p class="text-gray-300">
          Студент, увлеченный программированием и разработкой программного обеспечения. Имею опыт работы с различными языками программирования и технологиями.
        </p>
      </section>

      <!-- Skills -->
      <section class="section">
        <h2 class="section-title">Скилы</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="skill-tag flex items-center gap-2">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" class="w-6 h-6" alt="Java" />
            Java
          </div>
          <div class="skill-tag flex items-center gap-2">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" class="w-6 h-6" alt="C#" />
            C# (.Net)
          </div>
          <div class="skill-tag flex items-center gap-2">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" class="w-6 h-6" alt="Git" />
            Git
          </div>
          <div class="skill-tag flex items-center gap-2">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" class="w-6 h-6" alt="Docker" />
            Docker
          </div>
          <div class="skill-tag flex items-center gap-2">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" class="w-6 h-6" alt="Linux" />
            Linux
          </div>
          <div class="skill-tag flex items-center gap-2">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" class="w-6 h-6" alt="React" />
            React
          </div>
          <div class="skill-tag flex items-center gap-2">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" class="w-6 h-6" alt="Angular" />
            Angular
          </div>
          <div class="skill-tag flex items-center gap-2">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" class="w-6 h-6" alt="SQL" />
            SQL
          </div>
        </div>
      </section>

      <!-- Education -->
      <section class="section">
        <h2 class="section-title">Образование</h2>
        <div class="bg-gray-800/90 backdrop-blur-sm p-4 rounded-lg shadow-sm mt-4">
          <h3 class="text-lg font-semibold text-white">КОГОБУ СШ с УИОП</h3>
          <p class="text-gray-400">Образование: 11 классов</p>
          <p class="text-gray-400">Год окончания: 2021</p>
        </div>
        <div class="bg-gray-800/90 backdrop-blur-sm p-4 rounded-lg shadow-sm">
          <h3 class="text-lg font-semibold text-white">ПГТУ</h3>
          <p class="text-gray-400">Курс: 4 (учусь)</p>
          <p class="text-gray-400">Начало обучения: 2021</p>
        </div>
      </section>

      <!-- Contact -->
      <section class="section">
        <h2 class="section-title">Контактная информация</h2>
        <div class="space-y-2">
          <p class="text-gray-300">
            <span class="font-semibold">Email:</span> 
            <a href="mailto:[your-email]" class="text-blue-400 hover:text-blue-300 transition-colors duration-300">contact@alexpshkov.ru</a>
          </p>
          <p class="text-gray-300">
            <span class="font-semibold">Site:</span> 
            <a href="#" class="text-blue-400 hover:text-blue-300 transition-colors duration-300">https://alexpshkov.ru</a>
          </p>
          <p class="text-gray-300">
            <span class="font-semibold">Telegram:</span> 
            <a href="#" class="text-blue-400 hover:text-blue-300 transition-colors duration-300">https://t.me/AlexPshkov</a>
          </p>
          <p class="text-gray-300">
            <span class="font-semibold">GitHub:</span> 
            <a href="#" class="text-blue-400 hover:text-blue-300 transition-colors duration-300">https://github.com/AlexPshkov</a>
          </p>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800/80 backdrop-blur-sm mt-12">
      <div class="max-w-4xl mx-auto py-4 px-4 text-center text-gray-400">
        © ${new Date().getFullYear()} Alexander Krasheninnikov
      </div>
    </footer>
  </div>
`