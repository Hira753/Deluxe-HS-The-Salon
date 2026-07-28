/* ==========================================================================
   DELUXE HS THE SALON - INTERACTIVE JAVASCRIPT (script.js)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initActiveNav();
  initGalleryLightbox();
  initFilters();
  initBookingServiceParam();
  initFormValidations();
  initSeeMoreReviews();
});

/* --- 1. Mobile Menu Toggle --- */
function initMobileMenu() {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');

  if (hamburgerBtn && mobileDrawer) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('open');
      if (isOpen) {
        mobileDrawer.classList.remove('open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        hamburgerBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
      } else {
        mobileDrawer.classList.add('open');
        hamburgerBtn.setAttribute('aria-expanded', 'true');
        hamburgerBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
      }
    });
  }
}

/* --- 2. Active Navigation Link Highlight --- */
function initActiveNav() {
  const currentPath = window.location.pathname;
  const pageName = currentPath.split('/').pop() || 'index.html';

  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === pageName || (pageName === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/* --- 3. Gallery Lightbox Modal --- */
let galleryItemsData = [];
let currentImageIndex = 0;

function initGalleryLightbox() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxClose = document.getElementById('lightbox-close');

  if (!galleryItems.length || !lightboxModal) return;

  // Build array of image data
  galleryItems.forEach((item, index) => {
    const img = item.querySelector('img');
    const title = item.getAttribute('data-title') || item.querySelector('.gallery-title')?.innerText || 'Deluxe HS Work';
    const desc = item.getAttribute('data-desc') || item.querySelector('.gallery-tag')?.innerText || 'Exclusive Salon Transformation';

    galleryItemsData.push({
      src: img ? img.src : '',
      title: title,
      desc: desc
    });

    item.addEventListener('click', () => {
      openLightbox(index);
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  lightboxModal.addEventListener('click', (e) => {
    if (e.target === lightboxModal) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (!lightboxModal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNextImage();
    if (e.key === 'ArrowLeft') showPrevImage();
  });
}

function openLightbox(index) {
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDesc = document.getElementById('lightbox-desc');

  if (!lightboxModal || !galleryItemsData[index]) return;

  currentImageIndex = index;
  const item = galleryItemsData[index];

  if (lightboxImg) lightboxImg.src = item.src;
  if (lightboxTitle) lightboxTitle.innerText = item.title;
  if (lightboxDesc) lightboxDesc.innerText = item.desc;

  lightboxModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightboxModal = document.getElementById('lightbox-modal');
  if (lightboxModal) {
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function showNextImage() {
  currentImageIndex = (currentImageIndex + 1) % galleryItemsData.length;
  openLightbox(currentImageIndex);
}

function showPrevImage() {
  currentImageIndex = (currentImageIndex - 1 + galleryItemsData.length) % galleryItemsData.length;
  openLightbox(currentImageIndex);
}

/* --- 4. Interactive Category Filtering --- */
function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const filterableCards = document.querySelectorAll('[data-category]');

  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      filterableCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = '';
          card.style.animation = 'fadeIn 0.4s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* --- 5. Booking Form URL Query Param Pre-fill --- */
function initBookingServiceParam() {
  const serviceSelect = document.getElementById('booking-service');
  if (!serviceSelect) return;

  const urlParams = new URLSearchParams(window.location.search);
  const selectedService = urlParams.get('service');

  if (selectedService) {
    for (let option of serviceSelect.options) {
      if (option.value.toLowerCase().includes(selectedService.toLowerCase()) || 
          selectedService.toLowerCase().includes(option.value.toLowerCase())) {
        option.selected = true;
        break;
      }
    }
  }

  // Set minimum date picker to today
  const dateInput = document.getElementById('booking-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }
}

/* --- 6. Form Validations & Submissions --- */
function initFormValidations() {
  // Contact Form Submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('contact-name')?.value.trim();
      const email = document.getElementById('contact-email')?.value.trim();
      const phone = document.getElementById('contact-phone')?.value.trim();
      const message = document.getElementById('contact-message')?.value.trim();

      if (!name || !phone || !message) {
        showToast('Please fill in all required fields (Name, Phone, and Message).', 'error');
        return;
      }

      showToast(`Thank you ${name}! Your inquiry has been received. Our team will contact you shortly.`, 'success');
      contactForm.reset();
    });
  }

  // Booking Form Submission
  const bookingForm = document.getElementById('booking-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('booking-name')?.value.trim();
      const phone = document.getElementById('booking-phone')?.value.trim();
      const email = document.getElementById('booking-email')?.value.trim();
      const service = document.getElementById('booking-service')?.value;
      const date = document.getElementById('booking-date')?.value;
      const time = document.getElementById('booking-time')?.value;
      const notes = document.getElementById('booking-notes')?.value.trim();

      if (!name || !phone || !service || !date || !time) {
        showToast('Please complete all required fields.', 'error');
        return;
      }

      // Show Confirmation Modal or Toast with WhatsApp option
      const bookingSummaryText = `New Appointment Booking:\n- Name: ${name}\n- Phone: ${phone}\n- Service: ${service}\n- Date: ${date}\n- Time: ${time}${notes ? '\n- Notes: ' + notes : ''}`;
      
      showBookingSuccessModal(name, service, date, time, bookingSummaryText);
      bookingForm.reset();
    });
  }
}

/* --- Helper: Toast Notification --- */
function showToast(message, type = 'success') {
  let toast = document.getElementById('toast-notification');
  
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }

  const iconClass = type === 'success' ? 'fa-solid fa-circle-check text-emerald-500' : 'fa-solid fa-triangle-exclamation text-amber-500';

  toast.innerHTML = `
    <i class="${iconClass}" style="font-size: 1.5rem; color: ${type === 'success' ? '#10B981' : '#F59E0B'}"></i>
    <div style="font-size: 0.875rem; color: #1F2937;">
      <strong>${type === 'success' ? 'Success!' : 'Notice'}</strong>
      <p style="margin-top: 0.2rem; color: #6B7280;">${message}</p>
    </div>
  `;

  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4500);
}

/* --- Helper: Booking Success Modal --- */
function showBookingSuccessModal(name, service, date, time, summaryText) {
  const waUrl = `https://wa.me/923013928585?text=${encodeURIComponent(summaryText)}`;

  const modalOverlay = document.createElement('div');
  modalOverlay.style.cssText = `
    position: fixed; inset: 0; z-index: 2500;
    background: rgba(0,0,0,0.7); backdrop-filter: blur(5px);
    display: flex; align-items: center; justify-content: center; padding: 1.5rem;
  `;

  modalOverlay.innerHTML = `
    <div style="
      background: #FFFFFF; border-radius: 20px; max-width: 500px; width: 100%;
      padding: 2.5rem; text-align: center; border: 1px solid #FBCFE8; box-shadow: 0 20px 40px rgba(0,0,0,0.2);
    ">
      <div style="
        width: 64px; height: 64px; background: #FCE7F0; color: #EC4899;
        border-radius: 50%; display: flex; align-items: center; justify-content: center;
        font-size: 2rem; margin: 0 auto 1.5rem auto;
      ">
        <i class="fa-solid fa-calendar-check"></i>
      </div>

      <h3 style="font-family: 'Playfair Display', serif; font-size: 1.8rem; font-weight: 700; color: #1F2937; margin-bottom: 0.5rem;">
        Appointment Reserved!
      </h3>

      <p style="font-size: 0.9rem; color: #6B7280; margin-bottom: 1.5rem; line-height: 1.5;">
        Thank you, <strong>${name}</strong>! Your appointment request for <strong>${service}</strong> on <strong>${date} at ${time}</strong> has been logged.
      </p>

      <div style="background: #FFF0F5; border: 1px solid #FBCFE8; border-radius: 12px; padding: 1rem; margin-bottom: 1.5rem; text-align: left; font-size: 0.85rem; color: #1F2937;">
        <strong>Salon Details:</strong><br>
        📍 Deluxe HS Executive Branch, D-Ground, Faisalabad<br>
        📞 Helpline: 0301-3928585
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.8rem;">
        <a href="${waUrl}" target="_blank" class="btn btn-primary btn-lg" style="width: 100%; text-decoration: none;">
          <i class="fa-brands fa-whatsapp"></i> Confirm Instant via WhatsApp
        </a>
        <button id="close-booking-modal" class="btn btn-secondary" style="width: 100%;">
          Close Window
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(modalOverlay);

  document.getElementById('close-booking-modal').addEventListener('click', () => {
    document.body.removeChild(modalOverlay);
  });
}

/* --- 7. See More Reviews Toggle --- */
function initSeeMoreReviews() {
  const seeMoreBtn = document.getElementById('see-more-reviews-btn');
  if (!seeMoreBtn) return;

  const initialHiddenCount = document.querySelectorAll('.review-card.review-hidden').length;
  if (initialHiddenCount > 0) {
    seeMoreBtn.innerHTML = `<i class="fa-solid fa-angles-down"></i> See More Client Reviews (${initialHiddenCount} More)`;
  }

  seeMoreBtn.addEventListener('click', () => {
    const hiddenCards = document.querySelectorAll('.review-card.review-hidden');
    if (hiddenCards.length > 0) {
      hiddenCards.forEach((card, index) => {
        card.classList.remove('review-hidden');
        card.style.animation = `fadeIn 0.4s ease ${index * 0.05}s both`;
      });
      seeMoreBtn.innerHTML = '<i class="fa-solid fa-angles-up"></i> Show Less Reviews';
    } else {
      const allCards = document.querySelectorAll('.review-card');
      allCards.forEach((card, index) => {
        if (index >= 4) {
          card.classList.add('review-hidden');
        }
      });
      seeMoreBtn.innerHTML = '<i class="fa-solid fa-angles-down"></i> See More Client Reviews (' + (allCards.length - 4) + ' More)';
      
      const reviewsSection = document.getElementById('client-reviews-section');
      if (reviewsSection) {
        reviewsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
}
