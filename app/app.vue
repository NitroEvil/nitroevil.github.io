<script setup>
import { ref, computed } from "vue";

const currentYear = computed(() => new Date().getFullYear());

const stats = ref([
  { value: "4+", label: "Technologies Mastered" },
  { value: "100%", label: "Self-Taught" },
  { value: ".NET", label: "Primary Stack" },
]);

const journeyPhases = ref([
  {
    icon: "🛠️",
    title: "IT Support Foundation",
    tech: "1st/2nd Line",
    description:
      "Started my tech career in IT support, helping users solve technical problems and gaining deep insights into system architecture and troubleshooting. This experience taught me the importance of user-centric solutions.",
  },
  {
    icon: "💻",
    title: "PowerShell Scripting",
    tech: "PowerShell",
    description:
      "Began automating repetitive tasks with PowerShell console applications, discovering the power of scripting and automation. This was my first step into actual programming and development.",
  },
  {
    icon: "🖼️",
    title: "Windows Forms Development",
    tech: "PowerShell + WinForms",
    description:
      "Evolved from console apps to building desktop applications with Windows Forms. Created GUI tools that made complex tasks accessible to non-technical users, bridging the gap between IT and end users.",
  },
  {
    icon: "🌐",
    title: "Web Development",
    tech: "Python + FastAPI",
    description:
      "Transitioned to web development using Python and FastAPI, learning about REST APIs, databases, and full-stack architecture. Built my first web applications and discovered the power of modern web technologies.",
  },
  {
    icon: "⚡",
    title: ".NET Mastery",
    tech: ".NET",
    description:
      "Found my calling with .NET development. The robust framework, powerful tooling, and comprehensive ecosystem made it the perfect fit. Now building enterprise-grade applications with C#, ASP.NET Core, and modern .NET technologies.",
  },
]);

const skillCategories = ref([
  {
    name: "Core Technologies",
    skills: ["C#", ".NET Core", "ASP.NET", "Entity Framework"],
  },
  {
    name: "Previous Experience",
    skills: ["Python", "FastAPI", "PowerShell", "WinForms"],
  },
  {
    name: "Web Development",
    skills: ["Vue.js", "Nuxt", "HTML/CSS", "JavaScript"],
  },
  {
    name: "Tools & Practices",
    skills: ["Git", "REST APIs", "SQL", "Docker"],
  },
  {
    name: "IT Background",
    skills: ["System Admin", "Troubleshooting", "User Support", "Automation"],
  },
  {
    name: "Soft Skills",
    skills: ["Problem Solving", "Self-Learning", "Adaptability", "Communication"],
  },
]);
</script>

<template>
  <div class="min-h-screen bg-gray-950 text-gray-50">
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 z-50 border-b border-gray-800/50 bg-gray-950/80 backdrop-blur-sm">
      <UContainer>
        <div class="flex items-center justify-between py-4">
          <a href="#" class="text-lg font-semibold tracking-tight">NitroEvil</a>
          <div class="flex gap-6">
            <UButton to="#about" variant="ghost" color="gray" size="sm">About</UButton>
            <UButton to="#journey" variant="ghost" color="gray" size="sm">Journey</UButton>
            <UButton to="#skills" variant="ghost" color="gray" size="sm">Skills</UButton>
            <UButton to="#contact" variant="ghost" color="gray" size="sm">Contact</UButton>
          </div>
        </div>
      </UContainer>
    </nav>

    <!-- Hero Section -->
    <section class="pt-32 pb-20">
      <UContainer>
        <div class="space-y-6">
          <UBadge color="emerald" variant="subtle" size="md">Self-Taught Developer</UBadge>
          <h1 class="text-balance text-6xl font-bold leading-tight tracking-tight lg:text-7xl">NitroEvil</h1>
          <p class="max-w-2xl text-pretty text-xl leading-relaxed text-gray-400 lg:text-2xl">
            .NET Developer specialized in building scalable applications. Transformed from IT support to full-stack
            development through continuous learning and hands-on experience.
          </p>
          <div class="flex gap-4 pt-4">
            <UButton to="#journey" color="emerald" size="lg">View My Journey</UButton>
            <UButton to="#contact" variant="outline" color="gray" size="lg">Get In Touch</UButton>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20">
      <UContainer>
        <div class="grid gap-12 lg:grid-cols-2">
          <div class="space-y-6">
            <h2 class="text-4xl font-bold tracking-tight">About Me</h2>
            <div class="space-y-4 text-pretty leading-relaxed text-gray-400">
              <p>
                I'm a self-taught developer who believes in the power of continuous learning and practical
                problem-solving. My journey into development wasn't traditional, but it has given me a unique
                perspective on building software.
              </p>
              <p>
                Starting from 1st and 2nd line IT support, I developed a deep understanding of user needs and system
                troubleshooting. This foundation has proven invaluable in creating solutions that are both technically
                sound and user-friendly.
              </p>
              <p>
                Today, I specialize in .NET development, building robust backend systems and full-stack applications
                that solve real-world problems.
              </p>
            </div>
          </div>
          <div class="flex items-center">
            <div class="w-full space-y-4">
              <UCard v-for="stat in stats" :key="stat.label">
                <div class="text-3xl font-bold text-emerald-400">{{ stat.value }}</div>
                <div class="mt-1 text-sm text-gray-400">{{ stat.label }}</div>
              </UCard>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Journey Section -->
    <section id="journey" class="py-20">
      <UContainer>
        <h2 class="mb-12 text-4xl font-bold tracking-tight">Development Journey</h2>
        <div class="space-y-8">
          <UCard v-for="(phase, index) in journeyPhases" :key="index" :ui="{ body: { padding: 'p-8' } }">
            <div class="mb-4 flex items-start justify-between">
              <div class="flex items-center gap-4">
                <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10 text-2xl">
                  {{ phase.icon }}
                </div>
                <div>
                  <h3 class="text-xl font-semibold">{{ phase.title }}</h3>
                  <p class="text-sm text-gray-500">Phase {{ index + 1 }}</p>
                </div>
              </div>
              <UBadge color="emerald" variant="subtle">{{ phase.tech }}</UBadge>
            </div>
            <p class="text-pretty leading-relaxed text-gray-400">{{ phase.description }}</p>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-20">
      <UContainer>
        <h2 class="mb-12 text-4xl font-bold tracking-tight">Technical Skills</h2>
        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <UCard v-for="category in skillCategories" :key="category.name">
            <template #header>
              <h3 class="text-lg font-semibold">{{ category.name }}</h3>
            </template>
            <div class="flex flex-wrap gap-2">
              <UBadge v-for="skill in category.skills" :key="skill" color="gray" variant="soft">
                {{ skill }}
              </UBadge>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20">
      <UContainer>
        <UCard :ui="{ body: { padding: 'p-12' } }">
          <div class="text-center">
            <h2 class="mb-4 text-4xl font-bold tracking-tight">Let's Work Together</h2>
            <p class="mx-auto mb-8 max-w-2xl text-pretty text-lg leading-relaxed text-gray-400">
              I'm always interested in hearing about new projects and opportunities. Whether you have a question or just
              want to say hi, feel free to reach out.
            </p>
            <div class="flex flex-wrap justify-center gap-4">
              <UButton
                to="https://github.com/NitroEvil"
                target="_blank"
                variant="outline"
                color="gray"
                size="lg"
                icon="i-heroicons-code-bracket"
              >
                GitHub
              </UButton>
              <UButton
                to="https://www.linkedin.com/in/tc93/"
                target="_blank"
                variant="outline"
                color="gray"
                size="lg"
                icon="i-heroicons-user-group"
              >
                LinkedIn
              </UButton>
            </div>
          </div>
        </UCard>
      </UContainer>
    </section>

    <!-- Footer -->
    <footer class="border-t border-gray-800 py-8">
      <UContainer>
        <p class="text-center text-sm text-gray-500">© {{ currentYear }} NitroEvil. Built with Nuxt & Vue.</p>
      </UContainer>
    </footer>
  </div>
</template>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>
