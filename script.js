// menu mobile

document.getElementById('mobile-menu-btn').addEventListener("click", ()=>{
    const mobileMenu = document.getElementById("mobile-menu")
    mobileMenu.classList.toggle("hidden")
})

// funcionalidade do filtro

const filterButtons = document.querySelectorAll(".filter-btn")
const bikeCards = document.querySelectorAll(".bike-card")

filterButtons.forEach((button)=>{
    button.addEventListener("click", function (){
        const filter = this.getAttribute("data-filter")

        // update active button
        filterButtons.forEach((btn) =>{
            btn.classList.remove("active")
        })
        this.classList.add("active")

        // filter cards
        bikeCards.forEach((card)=>{
            if(filter ==="all" || card.getAttribute("data-category") === filter){
            card.style.display = "block"
            setTimeout(()=>{
                card.style.opacity = "1"
                card.style.transform = "translateY(0)"
            }, 100)
            } else {
                card.style.opacity = "0"
                card.style.transform = "translateY(20px)"
                setTimeout(()=>{
                    card.style.display="none"
                } , 300)
            }
        })
    })
})


// detalhes Bike

const bikeDetails = {
  "urban-pro": {
    title: "Urban Pro - Detalhes Completos",
    content: `
            <img src="fotos/urban-electric-bicycle-detailed-view.jpg" alt="Urban Pro" class="modal-image">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
                <div>
                    <h4 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.75rem; color: #2563eb;">Especificações Técnicas</h4>
                    <ul style="list-style: none; color: #374151;">
                        <li style="margin-bottom: 0.5rem;"><strong>Motor:</strong> 250W Brushless, traseiro</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Bateria:</strong> 36V 10Ah Samsung Lithium</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Autonomia:</strong> 45-60km (modo eco)</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Velocidade:</strong> até 25km/h</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Peso total:</strong> 22kg</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Carga máxima:</strong> 120kg</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Tempo de carga:</strong> 4-6 horas</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Freios:</strong> Disco hidráulico</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Pneus:</strong> 700x35c anti-furo</li>
                    </ul>
                </div>
                <div>
                    <h4 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.75rem; color: #2563eb;">Recursos Inclusos</h4>
                    <ul style="list-style: none; color: #374151;">
                        <li style="margin-bottom: 0.5rem;">✓ Display LCD multifuncional</li>
                        <li style="margin-bottom: 0.5rem;">✓ Luzes LED integradas</li>
                        <li style="margin-bottom: 0.5rem;">✓ Porta-bagagem traseiro</li>
                        <li style="margin-bottom: 0.5rem;">✓ Paralamas removíveis</li>
                        <li style="margin-bottom: 0.5rem;">✓ Campainha e espelho</li>
                        <li style="margin-bottom: 0.5rem;">✓ Carregador inteligente</li>
                        <li style="margin-bottom: 0.5rem;">✓ Chave de segurança</li>
                        <li style="margin-bottom: 0.5rem;">✓ Manual em português</li>
                        <li style="margin-bottom: 0.5rem;">✓ Kit de ferramentas básico</li>
                    </ul>
                    <div style="margin-top: 1.5rem; padding: 1rem; background: #dbeafe; border-radius: 0.5rem; border: 1px solid #93c5fd;">
                        <p style="color: #2563eb; font-weight: 600; font-size: 1.25rem;">Preço: R$ 3.299</p>
                        <p style="color: #6b7280; font-size: 0.875rem;">Em até 12x sem juros</p>
                    </div>
                </div>
            </div>
        `,
  },
  "mountain-x": {
    title: "Mountain X - Detalhes Completos",
    content: `
            <img src="fotos/mountain-electric-bicycle-detailed-view.jpg" alt="Mountain X" class="modal-image">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
                <div>
                    <h4 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.75rem; color: #2563eb;">Especificações Técnicas</h4>
                    <ul style="list-style: none; color: #374151;">
                        <li style="margin-bottom: 0.5rem;"><strong>Motor:</strong> 500W Mid-Drive Bafang</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Bateria:</strong> 48V 14Ah LG Lithium</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Autonomia:</strong> 60-80km</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Velocidade:</strong> até 32km/h</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Peso total:</strong> 26kg</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Suspensão:</strong> Dianteira 120mm</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Câmbio:</strong> Shimano 9 velocidades</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Freios:</strong> Disco hidráulico 180mm</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Pneus:</strong> 27.5" x 2.35" off-road</li>
                    </ul>
                </div>
                <div>
                    <h4 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.75rem; color: #2563eb;">Recursos Inclusos</h4>
                    <ul style="list-style: none; color: #374151;">
                        <li style="margin-bottom: 0.5rem;">✓ Display colorido Bafang</li>
                        <li style="margin-bottom: 0.5rem;">✓ Sensor de torque</li>
                        <li style="margin-bottom: 0.5rem;">✓ 5 modos de assistência</li>
                        <li style="margin-bottom: 0.5rem;">✓ Quadro alumínio reforçado</li>
                        <li style="margin-bottom: 0.5rem;">✓ Protetor de corrente</li>
                        <li style="margin-bottom: 0.5rem;">✓ Suporte para squeeze</li>
                        <li style="margin-bottom: 0.5rem;">✓ Pedais antiderrapantes</li>
                        <li style="margin-bottom: 0.5rem;">✓ Carregador rápido</li>
                        <li style="margin-bottom: 0.5rem;">✓ Garantia estendida</li>
                    </ul>
                    <div style="margin-top: 1.5rem; padding: 1rem; background: #dbeafe; border-radius: 0.5rem; border: 1px solid #93c5fd;">
                        <p style="color: #2563eb; font-weight: 600; font-size: 1.25rem;">Preço: R$ 4.899</p>
                        <p style="color: #6b7280; font-size: 0.875rem;">Em até 12x sem juros</p>
                    </div>
                </div>
            </div>
        `,
  },
  "cargo-max": {
    title: "Cargo Max - Detalhes Completos",
    content: `
            <img src="fotos/cargo-electric-bicycle-detailed-view.jpg" alt="Cargo Max" class="modal-image">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
                <div>
                    <h4 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.75rem; color: #2563eb;">Especificações Técnicas</h4>
                    <ul style="list-style: none; color: #374151;">
                        <li style="margin-bottom: 0.5rem;"><strong>Motor:</strong> 750W Rear Hub</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Bateria:</strong> 48V 17Ah Premium</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Autonomia:</strong> 80-100km</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Carga máxima:</strong> 150kg</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Peso total:</strong> 35kg</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Baú frontal:</strong> 60L capacidade</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Freios:</strong> Disco mecânico</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Pneus:</strong> 20" reforçados</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Estrutura:</strong> Aço carbono</li>
                    </ul>
                </div>
                <div>
                    <h4 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.75rem; color: #2563eb;">Recursos Inclusos</h4>
                    <ul style="list-style: none; color: #374151;">
                        <li style="margin-bottom: 0.5rem;">✓ Baú isolado térmico</li>
                        <li style="margin-bottom: 0.5rem;">✓ Cadeado integrado</li>
                        <li style="margin-bottom: 0.5rem;">✓ Luzes de sinalização</li>
                        <li style="margin-bottom: 0.5rem;">✓ Espelhos retrovisores</li>
                        <li style="margin-bottom: 0.5rem;">✓ Suporte para celular</li>
                        <li style="margin-bottom: 0.5rem;">✓ Capa de chuva</li>
                        <li style="margin-bottom: 0.5rem;">✓ Kit de reparo</li>
                        <li style="margin-bottom: 0.5rem;">✓ Manual comercial</li>
                        <li style="margin-bottom: 0.5rem;">✓ Suporte técnico 24h</li>
                    </ul>
                    <div style="margin-top: 1.5rem; padding: 1rem; background: #dbeafe; border-radius: 0.5rem; border: 1px solid #93c5fd;">
                        <p style="color: #2563eb; font-weight: 600; font-size: 1.25rem;">Preço: R$ 5.499</p>
                        <p style="color: #6b7280; font-size: 0.875rem;">Ideal para delivery</p>
                    </div>
                </div>
            </div>
        `,
  },
  "city-compact": {
    title: "City Compact - Detalhes Completos",
    content: `
            <img src="fotos/compact-folding-electric-bicycle-detailed-view.jpg" alt="City Compact" class="modal-image">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
                <div>
                    <h4 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.75rem; color: #2563eb;">Especificações Técnicas</h4>
                    <ul style="list-style: none; color: #374151;">
                        <li style="margin-bottom: 0.5rem;"><strong>Motor:</strong> 250W Hub compacto</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Bateria:</strong> 36V 8Ah removível</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Autonomia:</strong> 35-45km</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Velocidade:</strong> até 25km/h</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Peso total:</strong> 18kg</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Dobrada:</strong> 85x65x35cm</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Rodas:</strong> 20" dobráveis</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Freios:</strong> V-brake</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Tempo dobrar:</strong> 15 segundos</li>
                    </ul>
                </div>
                <div>
                    <h4 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.75rem; color: #2563eb;">Recursos Inclusos</h4>
                    <ul style="list-style: none; color: #374151;">
                        <li style="margin-bottom: 0.5rem;">✓ Sistema de dobra rápida</li>
                        <li style="margin-bottom: 0.5rem;">✓ Bateria removível</li>
                        <li style="margin-bottom: 0.5rem;">✓ Rodas de transporte</li>
                        <li style="margin-bottom: 0.5rem;">✓ Bolsa de transporte</li>
                        <li style="margin-bottom: 0.5rem;">✓ LED frontal e traseiro</li>
                        <li style="margin-bottom: 0.5rem;">✓ Campainha retrátil</li>
                        <li style="margin-bottom: 0.5rem;">✓ Pedais dobráveis</li>
                        <li style="margin-bottom: 0.5rem;">✓ Carregador portátil</li>
                        <li style="margin-bottom: 0.5rem;">✓ Manual ilustrado</li>
                    </ul>
                    <div style="margin-top: 1.5rem; padding: 1rem; background: #dbeafe; border-radius: 0.5rem; border: 1px solid #93c5fd;">
                        <p style="color: #2563eb; font-weight: 600; font-size: 1.25rem;">Preço: R$ 2.799</p>
                        <p style="color: #6b7280; font-size: 0.875rem;">Perfeita para apartamentos</p>
                    </div>
                </div>
            </div>
        `,
  },
  "trail-beast": {
    title: "Trail Beast - Detalhes Completos",
    content: `
           <img src="fotos/full-suspension-electric-mountain-bike-detailed-vi.jpg" alt="City Compact" class="modal-image">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
                <div>
                    <h4 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.75rem; color: #2563eb;">Especificações Técnicas</h4>
                    <ul style="list-style: none; color: #374151;">
                        <li style="margin-bottom: 0.5rem;"><strong>Motor:</strong> 750W Mid-Drive Bosch</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Bateria:</strong> 48V 17Ah Bosch</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Autonomia:</strong> 70-90km</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Velocidade:</strong> até 35km/h</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Peso total:</strong> 28kg</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Suspensão:</strong> Full 150mm</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Câmbio:</strong> Shimano XT 12v</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Freios:</strong> Shimano XT 203mm</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Pneus:</strong> 29" tubeless ready</li>
                    </ul>
                </div>
                <div>
                    <h4 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.75rem; color: #2563eb;">Recursos Inclusos</h4>
                    <ul style="list-style: none; color: #374151;">
                        <li style="margin-bottom: 0.5rem;">✓ Display Bosch Intuvia</li>
                        <li style="margin-bottom: 0.5rem;">✓ Modo Turbo e Sport</li>
                        <li style="margin-bottom: 0.5rem;">✓ Quadro carbono/alumínio</li>
                        <li style="margin-bottom: 0.5rem;">✓ Proteções completas</li>
                        <li style="margin-bottom: 0.5rem;">✓ Guidão ergonômico</li>
                        <li style="margin-bottom: 0.5rem;">✓ Selim profissional</li>
                        <li style="margin-bottom: 0.5rem;">✓ Kit tubeless</li>
                        <li style="margin-bottom: 0.5rem;">✓ Carregador rápido 4A</li>
                        <li style="margin-bottom: 0.5rem;">✓ Garantia premium 3 anos</li>
                    </ul>
                    <div style="margin-top: 1.5rem; padding: 1rem; background: #dbeafe; border-radius: 0.5rem; border: 1px solid #93c5fd;">
                        <p style="color: #2563eb; font-weight: 600; font-size: 1.25rem;">Preço: R$ 6.299</p>
                        <p style="color: #6b7280; font-size: 0.875rem;">Para trilhas extremas</p>
                    </div>
                </div>
            </div>
        `,
  },
  "smart-elite": {
    title: "Smart Elite - Detalhes Completos",
    content: `
            <img src="fotos/smart-connected-electric-bicycle-detailed-view.jpg" alt="Smart Elite" class="modal-image">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
                <div>
                    <h4 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.75rem; color: #2563eb;">Especificações Técnicas</h4>
                    <ul style="list-style: none; color: #374151;">
                        <li style="margin-bottom: 0.5rem;"><strong>Motor:</strong> 350W Mid-Drive inteligente</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Bateria:</strong> 48V 12Ah smart</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Autonomia:</strong> 60-75km</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Velocidade:</strong> até 25km/h</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Peso total:</strong> 24kg</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Conectividade:</strong> Bluetooth 5.0</li>
                        <li style="margin-bottom: 0.5rem;"><strong>GPS:</strong> Integrado</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Freios:</strong> Disco hidráulico</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Pneus:</strong> 700x38c puncture-proof</li>
                    </ul>
                </div>
                <div>
                    <h4 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.75rem; color: #2563eb;">Recursos Smart</h4>
                    <ul style="list-style: none; color: #374151;">
                        <li style="margin-bottom: 0.5rem;">✓ App ElectroBike exclusivo</li>
                        <li style="margin-bottom: 0.5rem;">✓ Rastreamento GPS</li>
                        <li style="margin-bottom: 0.5rem;">✓ Alarme anti-furto</li>
                        <li style="margin-bottom: 0.5rem;">✓ Estatísticas de uso</li>
                        <li style="margin-bottom: 0.5rem;">✓ Planejador de rotas</li>
                        <li style="margin-bottom: 0.5rem;">✓ Diagnóstico remoto</li>
                        <li style="margin-bottom: 0.5rem;">✓ Atualizações OTA</li>
                        <li style="margin-bottom: 0.5rem;">✓ Integração fitness</li>
                        <li style="margin-bottom: 0.5rem;">✓ Comunidade de usuários</li>
                    </ul>
                    <div style="margin-top: 1.5rem; padding: 1rem; background: #dbeafe; border-radius: 0.5rem; border: 1px solid #93c5fd;">
                        <p style="color: #2563eb; font-weight: 600; font-size: 1.25rem;">Preço: R$ 4.299</p>
                        <p style="color: #6b7280; font-size: 0.875rem;">Tecnologia do futuro</p>
                    </div>
                </div>
            </div>
        `,
  },
}


// modal Opçoes //

function openModal(bikeId){
    const modal = document.getElementById("modal")
    const modalTitle = document.getElementById("modal-title")
    const modalContent = document.getElementById("modal-content")

    const bike = bikeDetails[bikeId]
    if(bike){
        modalTitle.textContent = bike.title
        modalContent.innerHTML = bike.content
        modal.classList.remove("hidden")
        document.body.style.overflow = "hidden"
    }
}

function closeModal(){
    const modal= document.getElementById('modal')
    modal.classList.add("hidden")
    document.body.style.overflow = "auto"
}

// fechar modal quando clicar na parte de fora

document.getElementById("modal").addEventListener("click", function(e) {
    if(e.target === this) {
        closeModal()
    }
})

//navegação pelos links

document.querySelectorAll('a[href^="#"]').forEach((anchor)=>{
    anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute("href"))
        if(target){
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            })
        }

        // close mobile menu if open
        document.getElementById("mobile-menu").classList.add("hidden")
    })
})



//header scroll effect

window.addEventListener("scroll", () =>{
    const header= document.querySelector("header")
    if(window.scrollY > 100){
        header.classList.add("bg-white/95", "backdrop-blur-sm")
    } else {
        header.classList.remove("bg-white/95", "backdrop-blur-sm")
    }
})

//intersection observer for animations

const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.style.opacity ="1"
            entry.target.style.transform ="translateY(0)"
        }
    })
}, observerOptions)

//observe bike cards for animations
document.querySelectorAll(".bike-card").forEach((card)=>{
    card.style.opacity ="0"
    card.style.transform = "translateY(30px)"
    card.style.transition= "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(card)
})

// smooth scroll to section function

function scrollToSection(sectionId){
    const section = document.getElementById(sectionId)
    if(section){
        section.scrollIntoView({
            behavior: "smooth",
            block: "start",
        })
    }
}

//Enhanced CTA button funcionality

document.addEventListener("DOMContentLoaded", ()=>{
    // ver modelos
    const viewModelsButtons = document.querySelectorAll("button")
    viewModelsButtons.forEach((button)=>{
        if(button.textContent.includes("Ver modelos")){
            button.addEventListener("click", ()=> scrollToSection("models"))
        }
    })


 // Agendar Test Drive 

 const testDriveButtons = document.querySelectorAll("button")
 testDriveButtons.forEach((button)=>{
    if(button.textContent.includes("Agendar Test Drive")){
        button.addEventListener("click",()=>{
            showNotification()
        })
    }
  })
})

// Active navigation highlighting
function updateActiveNavigation(){
    const sections = document.querySelectorAll("section[id]")
    const navLinks = document.querySelectorAll('nav a[href^="#"]')

    let currentSection =""

    sections.forEach((section)=>{
        const sectionTop = section.offsetTop - 100
        const sectionHeight= section.offsetHeight

        if(window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight){
            currentSection = section.getAttribute("id")
        }
    })

    navLinks.forEach((link)=>{
        link.classList.remove("text-blue-600", "font-semibold")
        if(link.getAttribute("href") === `#${currentSection}`){
            link.classList.add("text-blue-600", "font-semibold")
        }
    })
}


//update active navigation on scroll

window.addEventListener("scroll", updateActiveNavigation)

// initialize active navigation

document.addEventListener("DOMContentLoaded", updateActiveNavigation)


//notification functions

function showNotification(){
    //create notification overlay
    const overlay = document.createElement("div")
    overlay.className = "notification-overlay"

    //create notification content
    overlay.innerHTML = `
    <div class="notification-box">
      <div class="notification-icon">
        🚴‍♂️
      </div>
      <h3 class="notification-title">Test Drive em Breve!</h3>
      <p class="notification-message">
        Estamos preparando uma experiência incrível para você testar nossas bicicletas elétricas. 
        Em breve você poderá agendar seu test drive online!
      </p>
      <div class="notification-buttons">
        <button class="notification-btn notification-btn-primary" onclick="closeNotification()">
          Entendi
        </button>
        <button class="notification-btn notification-btn-secondary" onclick="closeNotification()">
          Fechar
        </button>
      </div>
    </div>
  `

  // add to body
  document.body.appendChild(overlay)

  //show with animation
  setTimeout(()=>{
    overlay.classList.add("show")
  }, 10)

  //store reference for closing
  window.currentNotification = overlay
}


function closeNotification(){
    const overlay = window.currentNotification
    if(overlay){
        overlay.classList.remove("show")
        setTimeout(()=>{
            if(overlay.parentNode){
                overlay.parentNode.removeChild(overlay)
            }
            window.currentNotification = null
        }, 300)
    }
}