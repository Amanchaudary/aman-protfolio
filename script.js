// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Navigation menu toggle
  const hamburger = document.querySelector(".hamburger")
  const navLinks = document.querySelector(".nav-links")

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active")
    hamburger.classList.toggle("active")
  })

  // Close menu when clicking on a link
  const navItems = document.querySelectorAll(".nav-links a")
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navLinks.classList.remove("active")
      hamburger.classList.remove("active")
    })
  })

  // Active link on scroll
  const sections = document.querySelectorAll("section")
  const navLi = document.querySelectorAll(".nav-links li a")

  window.addEventListener("scroll", () => {
    let current = ""

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id")
      }
    })

    navLi.forEach((li) => {
      li.classList.remove("active")
      if (li.getAttribute("href") === `#${current}`) {
        li.classList.add("active")
      }
    })
  })

  // Theme toggle
  const themeToggle = document.querySelector(".theme-toggle")
  const body = document.body

  // Check for saved theme preference
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark")
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>'
  }

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark")

    if (body.classList.contains("dark")) {
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>'
      localStorage.setItem("theme", "dark")
    } else {
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>'
      localStorage.setItem("theme", "light")
    }
  })

  // Project filtering
  const filterBtns = document.querySelectorAll(".filter-btn")
  const projectItems = document.querySelectorAll(".project-item")

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Remove active class from all buttons
      filterBtns.forEach((btn) => {
        btn.classList.remove("active")
      })

      // Add active class to clicked button
      this.classList.add("active")

      const filter = this.getAttribute("data-filter")

      projectItems.forEach((item) => {
        if (filter === "all") {
          item.style.display = "block"
        } else if (item.getAttribute("data-category") === filter) {
          item.style.display = "block"
        } else {
          item.style.display = "none"
        }
      })
    })
  })

  // Form submission
  const contactForm = document.getElementById("contactForm")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form values
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const subject = document.getElementById("subject").value
      const message = document.getElementById("message").value

      // Simple form validation
      if (name && email && subject && message) {
        // In a real application, you would send this data to a server
        alert("Thank you for your message! I will get back to you soon.")
        contactForm.reset()
      } else {
        alert("Please fill in all fields.")
      }
    })
  }

  // Smooth scrolling for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        })
      }
    })
  })

  // Add animation on scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(".skill-item, .project-item, .about-image, .about-text")

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (elementPosition < windowHeight - 100) {
        element.style.opacity = "1"
        element.style.transform = "translateY(0)"
      }
    })
  }

  // Set initial styles for animation
  const elementsToAnimate = document.querySelectorAll(".skill-item, .project-item, .about-image, .about-text")
  elementsToAnimate.forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(20px)"
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease"
  })

  // Run animation on scroll
  window.addEventListener("scroll", animateOnScroll)

  // Run animation on initial load
  animateOnScroll()
})

