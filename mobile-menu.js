/**
 * Mobile Menu Handler for ISCAS 2026 Website
 * Handles mobile navigation functionality across all pages
 */
(function() {
  "use strict";

  // Use event delegation to handle clicks on mobile nav toggle
  document.addEventListener('click', function(e) {
    if (e.target.matches('.mobile-nav-toggle') || e.target.closest('.mobile-nav-toggle')) {
      e.preventDefault()
      
      const toggleBtn = e.target.matches('.mobile-nav-toggle') ? e.target : e.target.closest('.mobile-nav-toggle')
      
      console.log('Mobile toggle clicked')
      
      // Wait for navbar content to load if needed and then toggle
      const waitForContentAndToggle = () => {
        // Look for the actual navbar element inside #navbar or find .navbar directly
        let navbarElement = document.querySelector('#navbar .navbar')
        if (!navbarElement) {
          navbarElement = document.querySelector('.navbar')
        }
        
        console.log('Navbar element found:', !!navbarElement)
        
        if (navbarElement && navbarElement.innerHTML.trim() !== '') {
          console.log('Navbar content loaded, toggling...')
          console.log('Current navbar classes:', navbarElement.className)
          
          // Toggle mobile menu on the actual navbar element
          navbarElement.classList.toggle('navbar-mobile')
          toggleBtn.classList.toggle('bi-list')
          toggleBtn.classList.toggle('bi-x')
          
          console.log('After toggle - navbar classes:', navbarElement.className)
          console.log('After toggle - button classes:', toggleBtn.className)
        } else {
          console.log('Waiting for navbar content...')
          setTimeout(waitForContentAndToggle, 100)
        }
      }
      
      waitForContentAndToggle()
    }
  })

  // Handle dropdown clicks in mobile mode
  document.addEventListener('click', function(e) {
    if (e.target.matches('.navbar .dropdown > a') || e.target.closest('.navbar .dropdown > a')) {
      let navbarElement = document.querySelector('#navbar .navbar')
      if (!navbarElement) {
        navbarElement = document.querySelector('.navbar')
      }
      
      if (navbarElement && navbarElement.classList.contains('navbar-mobile')) {
        e.preventDefault()
        const link = e.target.matches('.navbar .dropdown > a') ? e.target : e.target.closest('.navbar .dropdown > a')
        if (link.nextElementSibling) {
          link.nextElementSibling.classList.toggle('dropdown-active')
        }
      }
    }
  })

  // Close mobile nav when clicking on regular links
  document.addEventListener('click', function(e) {
    if (e.target.matches('.navbar a[href]:not(.mobile-nav-toggle)') || e.target.closest('.navbar a[href]:not(.mobile-nav-toggle)')) {
      let navbarElement = document.querySelector('#navbar .navbar')
      if (!navbarElement) {
        navbarElement = document.querySelector('.navbar')
      }
      
      if (navbarElement && navbarElement.classList.contains('navbar-mobile')) {
        const link = e.target.matches('.navbar a[href]:not(.mobile-nav-toggle)') ? e.target : e.target.closest('.navbar a[href]:not(.mobile-nav-toggle)')
        
        // Don't close if it's a dropdown parent that just toggles submenu
        if (!link.parentElement.classList.contains('dropdown') || link.getAttribute('href') !== '') {
          navbarElement.classList.remove('navbar-mobile')
          const navbarToggle = document.querySelector('.mobile-nav-toggle')
          if (navbarToggle) {
            navbarToggle.classList.remove('bi-x')
            navbarToggle.classList.add('bi-list')
          }
        }
      }
    }
  })

})()
