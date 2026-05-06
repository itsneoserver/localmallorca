# MASTER INSTRUCTION BLOCK

Sí. Te dejo los **bloques de instrucciones en orden correcto** para enviar junto al HTML actual. La idea es que puedas pegar primero este documento y después el HTML completo.

---

# **MASTER INSTRUCTION BLOCK**

## **MallorcasLocal HTML Transformation Brief**

### **Objetivo general**

Transforma el HTML actual de **MallorcasLocal** en una página completa, profesional y estructurada con múltiples secciones principales:

Home  
Book  
Private Services  
World Cup  
Inquiries / Contact

La nueva versión debe mantener la identidad visual actual, pero reorganizar el contenido, los links, las actividades y los componentes de forma más clara, escalable y orientada a conversión.

La página debe funcionar como una landing web premium para reservas directas por WhatsApp, experiencias en Mallorca, servicios privados, eventos especiales y solicitudes personalizadas.

---

# **1\. Project Identity**

Project name: MallorcasLocal  
Tagline: Book Mallorca like a local  
Business model: WhatsApp-based booking platform for Mallorca experiences  
Main CTA: Book through WhatsApp  
WhatsApp number: 34644075065  
Tone: Premium, direct, local, trustworthy, not tourist-trap  
Design style: Silent luxury, dark premium, clean, editorial, mobile-first

La web debe transmitir:

Mallorca experiences curated by locals  
Direct WhatsApp booking  
No unnecessary intermediaries  
Premium but accessible  
Fast response  
Clear prices or “from” prices  
Activities, nightlife, boats, private services and event requests  
---

# **2\. Privacy and Public Information Rules**

Toda la información privada debe eliminarse o no mostrarse en la web.

## **Do NOT show**

Internal commissions  
Supplier prices  
Profit margins  
Private agreements  
Who earns what  
Commission percentages  
Internal notes from Fernando or partners  
Cost breakdowns not meant for the client

## **Public information allowed**

Final client price  
From price  
Deposit to reserve  
Remaining payment at venue if relevant  
Duration  
Location  
What is included  
Availability note  
Booking conditions  
Group size  
Meeting point or zone  
Public ticket links  
WhatsApp booking link  
Google Maps link

Example correct public format:

BCM Nightlife  
Total price: 35 EUR  
Reserve your spot: 10 EUR deposit  
Remaining payment: 25 EUR at the venue  
Includes free BCM tee  
Location: Magaluf  
Book online or ask by WhatsApp

Example forbidden format:

We earn X EUR  
Supplier gets X EUR  
Commission is X%  
Fernando price is X  
Our margin is X  
---

# **3\. Global Website Structure**

Rebuild the page with this section order:

1\. Header / Navigation  
2\. Home Hero  
3\. Trust Bar  
4\. Featured Experiences  
5\. Book Section  
6\. Private Services Section  
7\. World Cup Section  
8\. Curated Collections  
9\. Mallorca Moments Gallery  
10\. Pricing Preview  
11\. Partners / Trusted Network  
12\. Inquiries / Contact Section  
13\. Footer  
14\. Floating WhatsApp CTA  
15\. Booking Modal  
16\. Experience Detail Modal  
17\. Jet Ski Modal  
18\. Itinerary Dock  
---

# **4\. Header / Navigation Instructions**

The header must include:

Logo: MallorcasLocal  
Navigation links:  
\- Home  
\- Book  
\- Private Services  
\- World Cup  
\- Contact

Actions:  
\- Search icon  
\- Favorites icon  
\- Language selector  
\- Light/dark mode toggle

Design rules:

Fixed top navigation  
Glass blur background  
Dark premium style  
Compact on mobile  
Smooth scroll to sections  
Keep the current language selector system  
Keep light/dark mode  
---

# **5\. Home Section**

The Home section must introduce the brand clearly.

## **Home hero content**

Headline:  
Book Mallorca like a local

Subheadline:  
Boats, jet skis, nightlife, beaches, private services and curated island experiences. Direct booking through WhatsApp.

Primary CTA:  
Book now

Secondary CTA:  
Explore experiences

Hero must include:

Large background image  
Premium dark gradient overlay  
Gold accent  
Short trust badge  
Clear CTA buttons  
Mobile-first layout

Keep the current visual style:

Black background  
Gold accent  
Playfair Display for headline  
DM Sans for interface text  
Rounded buttons  
Soft animation  
Luxury but not overloaded  
---

# **6\. Trust Bar**

Keep or improve the current trust bar.

Recommended metrics:

44+ Experiences  
4.8 Rating  
\<1h WhatsApp Reply  
Direct Booking

Avoid saying “0 EUR commissions” if it can create confusion. Better use:

Direct Booking  
No hidden platform fees  
Fast WhatsApp reply  
Local recommendations  
---

# **7\. Book Section**

This is the main commercial section.

It should include all public bookable experiences organized by categories:

Water  
Beach  
Nightlife  
Food  
Culture  
Mountain  
Viewpoints

The Book section must include:

Category tabs  
Search bar  
Sort by featured  
Sort by price low to high  
Sort by price high to low  
Experience cards  
Add to plan  
Book via WhatsApp  
View details modal  
Favorites

Each card should show:

Image  
Badge  
Title  
Location  
Public price  
Short tags  
Short description on hover  
Book button  
Add to plan button  
Map button if available  
---

# **8\. Public Activities Database**

Use the current HTML data as base, but clean and restructure it into a public database format.

Each activity should follow this model:

{  
  id: "jet-ski",  
  slug: "jet-ski-tour-mallorca",  
  section: "book",  
  category: "water",  
  featured: true,  
  bookable: true,  
  premium: false,

  title: {  
    en: "Jet Ski Tour",  
    es: "Jet Ski Tour"  
  },

  location: {  
    en: "Santa Ponca",  
    es: "Santa Ponca"  
  },

  price: {  
    label: {  
      en: "From 99 EUR",  
      es: "Desde 99 EUR"  
    },  
    from: 99,  
    currency: "EUR",  
    type: "from"  
  },

  badge: {  
    type: "open",  
    label: {  
      en: "Open",  
      es: "Abierto"  
    }  
  },

  tags: {  
    en: \["5 tours", "1-2 pax"\],  
    es: \["5 tours", "1-2 personas"\]  
  },

  description: {  
    en: "5 routes from 30 min to 2h. Transport included.",  
    es: "5 rutas de 30 min a 2h. Transporte incluido."  
  },

  image: "IMAGE\_URL",  
  gallery: \[\],  
  mapUrl: null,

  booking: {  
    type: "whatsapp",  
    whatsappMessageType: "activity"  
  }  
}  
---

# **9\. Core Bookable Experiences**

The Book section should prioritize these activities:

Jet Ski Tour  
Boat Rental / Barco sin licencia  
EOLO 830  
Saver 330  
Absolute 62 FLY  
V420 Platform  
Sunset Heatwave Boat Party  
BCM Nightlife  
MCP Club Pass  
Social Club  
Red Lion  
Panama Jack  
Gringos Bingos  
Tabana  
Shisha Lounge  
Barbuda Beach  
Beach Club Folies  
Bottle Delivery  
Shisha Delivery

Free and guide-style experiences can remain, but should be marked as:

Free local guide  
Ask local tips  
Add to plan

Not as direct paid booking unless there is a real paid offer.

---

# **10\. Private Services Section**

Create a separate section called:

Private Services

Purpose:

This section is for clients who want something more exclusive, private or custom.

Suggested cards:

Private Yacht Day  
Luxury Concierge  
VIP Nightlife  
Private Driver  
Private Boat Party  
Birthday Planning  
Bachelor / Bachelorette Groups  
Bottle Service  
Shisha Service  
Restaurant Booking  
Custom Mallorca Day Plan

Each card should have:

Title  
Short description  
Starting price or “On request”  
WhatsApp CTA  
Premium image

Example:

Private Yacht Day  
A fully arranged private day at sea with boat, route, drinks and extras.  
Price: On request  
CTA: Request private plan

WhatsApp message:

Hi MallorcasLocal, I am interested in a private service.

Service: \[Private Service\]  
Date:  
Group size:  
Budget:  
Special requests:

Please suggest the best option.  
---

# **11\. World Cup Section**

Create a dedicated section called:

World Cup Mallorca

Purpose:

A landing section for groups visiting Mallorca during the World Cup or football-related travel/events.

This section should feel like a special campaign page.

Include:

Group bookings  
Nightlife packages  
Boat parties  
Private villas or accommodation inquiries  
Transport  
Match-day plans  
Bar reservations  
VIP tables  
Boat rental  
Custom group itinerary

Suggested headline:

World Cup in Mallorca

Suggested subheadline:

Coming to Mallorca for the World Cup? We organize group plans, nightlife, boats, private services and custom island experiences.

CTA buttons:

Plan my group trip  
Ask on WhatsApp

World Cup inquiry form fields:

Name  
Phone  
Dates in Mallorca  
Group size  
Type of group  
Budget  
Interested in:  
\- Boats  
\- Nightlife  
\- Private services  
\- Transport  
\- Restaurants  
\- Match-day plans  
\- Full itinerary  
Notes

WhatsApp message:

Hi MallorcasLocal, I want help planning a World Cup trip in Mallorca.

Name:  
Dates:  
Group size:  
Interested in:  
Budget:  
Notes:

Please suggest the best plan.  
---

# **12\. Inquiries / Contact Section**

Create a final section called:

Inquiries / Contact

Purpose:

For users who do not know exactly what they want.

It should include:

Simple contact form  
WhatsApp CTA  
Quick inquiry categories  
Fast response message

Inquiry types:

Boat rental  
Jet ski  
Nightlife  
Private services  
World Cup group  
Birthday / event  
Custom plan  
Other

Form fields:

Name  
Phone or WhatsApp  
Date  
Number of people  
Inquiry type  
Budget  
Message

CTA text:

Send inquiry through WhatsApp

WhatsApp message:

Hi MallorcasLocal, I have an inquiry.

Name:  
Date:  
Guests:  
Inquiry type:  
Budget:  
Message:

Please contact me with options.  
---

# **13\. WhatsApp Link System**

Keep the main WhatsApp number:

const WA \= "34644075065";

Use dynamic WhatsApp messages depending on context.

## **General activity**

Hi MallorcasLocal, I am interested in this experience:

Experience:  
Location:  
Price shown:

Please confirm availability, final price, meeting point and the best option.

## **Booking form**

Hi MallorcasLocal, I want to make a booking:

Name:  
Activities:  
Date:  
Guests:  
Budget:  
Notes:

Please confirm availability, final price, access or transport details and the best option.

## **Private service**

Hi MallorcasLocal, I am interested in a private service:

Service:  
Date:  
Group size:  
Budget:  
Special requests:

Please suggest the best option.

## **World Cup**

Hi MallorcasLocal, I want help planning a World Cup trip in Mallorca:

Dates:  
Group size:  
Interested in:  
Budget:  
Notes:

Please suggest the best plan.

## **Contact / inquiry**

Hi MallorcasLocal, I have an inquiry:

Name:  
Date:  
Guests:  
Inquiry type:  
Budget:  
Message:

Please contact me with options.  
---

# **14\. External Links to Preserve**

Keep these links and organize them clearly.

Main WhatsApp:  
https://wa.me/34644075065

Main WhatsApp with intro:  
https://wa.me/34644075065?text=Hola%20MallorcasLocal

BCM ticket:  
https://top-3-prs-brand.sumupstore.com/product/bcm-pre-sale-ticket

Sunset Heatwave Boat Party deposit:  
https://top-3-prs-brand.sumupstore.com/product/sunset-heatwave-boat-party-deposit

For map links, preserve all current Google Maps links from the HTML.

For Cloudinary images, preserve all current image URLs and optimize them using Cloudinary transformations where possible:

w\_640,h\_800,c\_fill,q\_auto,f\_auto  
w\_120,h\_120,c\_fit,q\_auto,f\_auto  
w\_1400,q\_auto,f\_auto  
---

# **15\. Design System to Preserve**

Keep the current design identity.

\--bg: \#050505;  
\--bg2: \#111;  
\--bg3: \#191919;  
\--card: \#0e0e0e;  
\--card2: \#141414;  
\--text: \#eee;  
\--gold: \#c9a96e;  
\--wa: \#25d366;  
\--ff: 'DM Sans', sans-serif;  
\--fs: 'Playfair Display', serif;

Design principles:

Silent luxury  
Premium dark interface  
Editorial typography  
Gold accent only for premium emphasis  
Clean cards  
Rounded corners  
Glassmorphism  
Subtle motion  
Mobile-first  
High contrast  
No emojis  
No loud colors  
No cheap tourist look  
---

# **16\. Components to Maintain or Rebuild**

The new page should keep or rebuild these components:

Topbar  
Language selector  
Theme toggle  
Search button  
Favorites system  
Hero section  
Trust bar  
Featured carousel  
Category tabs  
Search bar  
Sort buttons  
Experience grid  
Experience card  
Image hover overlay  
Image gallery thumbnails  
Detail modal  
Booking modal  
Jet Ski modal  
Jet Ski tour selector  
Itinerary dock  
Visual gallery  
Collections section  
Pricing cards  
Partners logos  
Footer  
Floating WhatsApp button  
Toast notifications  
Lightbox gallery  
---

# **17\. Functional Requirements**

The final page must include:

Responsive design  
Mobile-first layout  
Smooth scrolling  
Language support  
RTL support for Arabic  
Light and dark mode  
Search  
Category filtering  
Favorites  
Add to plan  
Send plan to WhatsApp  
Dynamic WhatsApp messages  
Booking modal  
Private service modal or form  
World Cup inquiry form  
Contact form  
External ticket buttons  
Image lightbox  
Accessible buttons  
Keyboard support  
Reduced motion support  
Lazy loading images  
Safe external links with rel="noopener noreferrer"  
---

# **18\. Technical Cleanup Instructions**

The current HTML has useful data but too much duplicated logic.

Clean the code by doing this:

Separate data from rendering logic  
Remove duplicated functions  
Avoid patching functions twice  
Fix broken references like fA  
Avoid inline styles where possible  
Use reusable render functions  
Keep one source of truth for activities  
Keep one source of truth for translations  
Keep one source of truth for links  
Keep one source of truth for WhatsApp messages

Avoid:

Duplicated scripts  
Duplicated CSS patch blocks  
Multiple definitions of openBooking  
Multiple definitions of openDetail  
Multiple definitions of populateActivitySelect  
Hardcoded repeated text  
Private data inside public JS  
---

# **19\. Recommended Internal Data Structure**

Use these main data groups:

const LINKS \= {  
  whatsapp: "https://wa.me/34644075065",  
  bcmTicket: "https://top-3-prs-brand.sumupstore.com/product/bcm-pre-sale-ticket",  
  boatPartyDeposit: "https://top-3-prs-brand.sumupstore.com/product/sunset-heatwave-boat-party-deposit"  
};

const EXPERIENCES \= \[\];

const PRIVATE\_SERVICES \= \[\];

const WORLD\_CUP\_PACKAGES \= \[\];

const COLLECTIONS \= \[\];

const PARTNERS \= \[\];

const TRANSLATIONS \= {};  
---

# **20\. Private Services Data Example**

const PRIVATE\_SERVICES \= \[  
  {  
    id: "private-yacht-day",  
    title: {  
      en: "Private Yacht Day",  
      es: "Día privado en yate"  
    },  
    priceLabel: {  
      en: "On request",  
      es: "Consultar"  
    },  
    description: {  
      en: "A fully arranged private day at sea with boat, route, drinks and extras.",  
      es: "Un día privado en el mar con barco, ruta, bebidas y extras organizados."  
    },  
    image: "IMAGE\_URL",  
    whatsappType: "private-service"  
  },  
  {  
    id: "vip-nightlife",  
    title: {  
      en: "VIP Nightlife",  
      es: "VIP Nightlife"  
    },  
    priceLabel: {  
      en: "On request",  
      es: "Consultar"  
    },  
    description: {  
      en: "VIP tables, club access, bottle service and group planning.",  
      es: "Mesas VIP, acceso a clubs, botellas y planificación para grupos."  
    },  
    image: "IMAGE\_URL",  
    whatsappType: "private-service"  
  }  
\];  
---

# **21\. World Cup Data Example**

const WORLD\_CUP\_PACKAGES \= \[  
  {  
    id: "world-cup-group-plan",  
    title: {  
      en: "World Cup Group Plan",  
      es: "Plan de grupo World Cup"  
    },  
    priceLabel: {  
      en: "Custom plan",  
      es: "Plan personalizado"  
    },  
    description: {  
      en: "Group plans with nightlife, boats, private services, transport and match-day experiences.",  
      es: "Planes para grupos con nightlife, barcos, servicios privados, transporte y experiencias para días de partido."  
    },  
    tags: {  
      en: \["Groups", "Nightlife", "Boats", "Transport"\],  
      es: \["Grupos", "Nightlife", "Barcos", "Transporte"\]  
    },  
    whatsappType: "world-cup"  
  }  
\];  
---

# **22\. Final Page Sections Content**

## **Home**

Hero  
Trust bar  
Featured experiences

## **Book**

All bookable experiences  
Filters  
Search  
Cards  
Booking modal

## **Private Services**

Premium custom services  
Private inquiry CTA  
WhatsApp request

## **World Cup**

Special group campaign  
World Cup inquiry form  
Group packages

## **Inquiries / Contact**

General form  
WhatsApp CTA  
Contact explanation  
---

# **23\. Final CTA Strategy**

Use clear CTAs:

Book now  
Ask availability  
Reserve your spot  
Request private plan  
Plan my World Cup trip  
Send inquiry  
Add to plan  
Send plan on WhatsApp

Avoid weak CTAs:

Learn more  
Submit  
Click here  
More info  
---

# **24\. Final Instruction to the AI / Developer**

Using the HTML provided after this instruction block, rebuild the page into a complete multi-section MallorcasLocal website.

Preserve all useful public activity information, public links, Cloudinary images, booking logic and visual identity.

Remove all private business information, internal commissions, margins and supplier/private notes.

Create a clean, production-ready single HTML file unless otherwise requested.

The final result must include Home, Book, Private Services, World Cup and Inquiries / Contact sections.

Keep the current premium dark design, multi-language system, WhatsApp booking flow, activity cards, modals, gallery, favorites, add-to-plan and responsive behavior.

Clean duplicated code, fix broken functions, improve structure and make the page easier to maintain.  
---

# **25\. Paste Order**

Usa este orden cuando lo envíes a Cursor, Claude, Codex, Antigravity o cualquier IA de código:

1\. MASTER INSTRUCTION BLOCK  
2\. Privacy and public information rules  
3\. Website structure  
4\. Design system  
5\. Component requirements  
6\. Functional requirements  
7\. Data structure rules  
8\. WhatsApp message rules  
9\. External links to preserve  
10\. Current HTML  
11\. Final instruction: rebuild as clean production-ready page  
---

# **Copy-Paste Final Prompt**

You are transforming the current MallorcasLocal HTML into a complete premium multi-section website.

Create a clean, production-ready single HTML page with the following sections:

1\. Home  
2\. Book  
3\. Private Services  
4\. World Cup  
5\. Inquiries / Contact

Preserve the existing MallorcasLocal identity:  
\- Premium dark “silent luxury” design  
\- Gold accent  
\- DM Sans and Playfair Display  
\- Mobile-first responsive layout  
\- WhatsApp-first booking flow  
\- Multi-language support  
\- Light/dark mode  
\- Activity cards  
\- Favorites  
\- Add to plan  
\- Booking modals  
\- Jet Ski modal  
\- Gallery and lightbox  
\- Partner logos  
\- Floating WhatsApp button

Use the current HTML as the source of truth for public activities, images, links and existing design components.

Remove all private/internal information:  
\- commissions  
\- profit margins  
\- supplier costs  
\- private partner agreements  
\- internal notes  
\- anything that should not be visible to the client

Only show client-facing information:  
\- final price  
\- from price  
\- deposit to reserve  
\- remaining payment if useful  
\- duration  
\- location  
\- what is included  
\- group size  
\- public booking links  
\- WhatsApp booking links  
\- Google Maps links  
\- useful notes for the client

Create a separate “Private Services” section for:  
\- Private Yacht Day  
\- VIP Nightlife  
\- Private Driver  
\- Private Boat Party  
\- Birthday Planning  
\- Bachelor / Bachelorette Groups  
\- Bottle Service  
\- Shisha Service  
\- Restaurant Booking  
\- Custom Mallorca Day Plan

Create a dedicated “World Cup” section for:  
\- group bookings  
\- nightlife packages  
\- boat parties  
\- transport  
\- restaurants  
\- VIP tables  
\- custom island plans  
\- match-day plans

Create an “Inquiries / Contact” section with a simple WhatsApp-based form.

Keep these links:  
\- Main WhatsApp: https://wa.me/34644075065  
\- BCM ticket: https://top-3-prs-brand.sumupstore.com/product/bcm-pre-sale-ticket  
\- Boat Party deposit: https://top-3-prs-brand.sumupstore.com/product/sunset-heatwave-boat-party-deposit

Use dynamic WhatsApp messages depending on the action:  
\- General activity booking  
\- Jet Ski booking  
\- Private service inquiry  
\- World Cup inquiry  
\- General contact inquiry  
\- Send itinerary / selected plan

Clean the code:  
\- remove duplicated scripts  
\- remove duplicated CSS patches  
\- fix broken references  
\- separate data from rendering logic  
\- keep one source of truth for activities  
\- keep one source of truth for links  
\- keep one source of truth for WhatsApp messages  
\- preserve useful current features but make the code easier to maintain

Final output:  
A complete, clean, production-ready single HTML file.

# PROMT INSTRUCTION

Aquí tienes un **prompt instruction completo** para pegar en Antigravity. Está pensado para transformar tu HTML actual de una sola página en una **web app multipágina**, manteniendo diseño, datos, idiomas, estilo visual y flujos de WhatsApp.

---

# **PROMPT INSTRUCTION**

## **Transformación de MallorcasLocal de single page HTML a web app multipágina responsive**

Actúa como un desarrollador senior frontend, especialista en arquitectura de producto, UX móvil, performance, diseño premium y conversión por WhatsApp.

Tu tarea es transformar la página actual de **MallorcasLocal** desde un único archivo `index.html` monolítico hacia una **web app multipágina sólida, fluida, estable, escalable y optimizada para móviles**, manteniendo la identidad visual, estructura de diseño, datos existentes, idiomas, imágenes, filtros, animaciones y lógica comercial actual.

No debes rediseñar la marca desde cero. Debes **preservar la estética existente** y expandirla en una arquitectura más profesional, modular y preparada para futuras versiones.

---

## **1\. Objetivo principal**

Convertir la página actual de MallorcasLocal en una plataforma web completa con varias páginas, manteniendo:

* Diseño dark premium / silent luxury.  
* Fondo oscuro, tipografía elegante, detalles gold, UI minimalista.  
* Modo claro / modo oscuro.  
* Todos los idiomas existentes:  
  * Español  
  * Inglés  
  * Alemán  
  * Francés  
  * Italiano  
  * Árabe con soporte RTL  
  * Ruso  
* Toda la base de datos actual de experiencias, categorías, precios, descripciones, imágenes, tags y links.  
* El sistema de favoritos.  
* El sistema de “Add to plan”.  
* El quick booking form.  
* El itinerary / plan form.  
* La conexión principal con WhatsApp.  
* Las reservas directas por WhatsApp.  
* Los links externos específicos para tickets cuando existan.  
* El flujo específico de Jet Ski.  
* La estructura mobile-first.  
* Animaciones suaves, premium y no invasivas.  
* Máxima eficiencia de carga y navegación.

La idea no es crear otra web, sino transformar la interfaz actual de una página en una **web app completa, modular y escalable**.

---

## **2\. Contexto del producto**

El proyecto se llama:

**MallorcasLocal**

Tagline:

**Book Mallorca like a local**

Concepto:

Plataforma visual y comercial para descubrir, planificar y reservar experiencias en Mallorca mediante WhatsApp, sin intermediarios y con enfoque local.

Oferta principal:

* Boats  
* Jet Skis  
* Boat parties  
* Beach clubs  
* Nightlife  
* Hidden beaches  
* Viewpoints  
* Culture  
* Mountain routes  
* Food  
* Local itineraries

Modelo de conversión:

La web no debe intentar cerrar todo internamente. El objetivo es generar confianza, mostrar experiencias de forma visual y enviar al usuario a WhatsApp con un mensaje prellenado de calidad.

La venta principal ocurre en WhatsApp.

---

## **3\. Número de WhatsApp y reglas de contacto**

Usar como número central de WhatsApp:

`34644075065`

Todos los CTA generales deben conectar con:

`https://wa.me/34644075065`

Los mensajes deben ir prellenados y personalizados según el contexto.

Ejemplos de flujos:

### **CTA general “Book now”**

Debe abrir WhatsApp con un mensaje tipo:

“Hi MallorcasLocal, I want to book an experience in Mallorca. Can you help me choose the best option?”

### **CTA desde experiencia individual**

Debe incluir:

* Nombre de la experiencia  
* Localización  
* Precio mostrado  
* Categoría  
* Fecha si el usuario la seleccionó  
* Número de personas si aplica  
* Fuente: MallorcasLocal

### **CTA desde itinerary / plan**

Debe incluir:

* Lista de experiencias añadidas  
* Fechas  
* Número de personas  
* Presupuesto si existe  
* Notas del usuario  
* Solicitud de confirmación de disponibilidad, precio final y logística

### **CTA desde Jet Ski form**

Debe incluir:

* Nombre del tour  
* Duración  
* Precio desde  
* Número de personas  
* Número de jet skis  
* Hotel o zona de pickup  
* Fecha  
* Hora  
* Notas

---

## **4\. Links externos obligatorios**

Mantener estos links externos y usarlos solo donde corresponda:

### **BCM tickets**

`https://top-3-prs-brand.sumupstore.com/product/bcm-pre-sale-ticket`

Debe usarse en las experiencias relacionadas con BCM, como botón externo de compra o ticket.

### **Sunset Heatwave Boat Party deposit**

`https://top-3-prs-brand.sumupstore.com/product/sunset-heatwave-boat-party-deposit`

Debe usarse en la experiencia Sunset Heatwave Boat / Boat Party como botón externo de depósito o ticket.

El resto de experiencias debe ir a WhatsApp, no a checkout externo.

---

## **5\. Arquitectura multipágina requerida**

Transformar la single page actual en una estructura multipágina clara.

Crear como mínimo estas páginas:

### **5.1 Home**

Ruta sugerida:

`/`

Objetivo:

Presentar MallorcasLocal, destacar experiencias principales y llevar al usuario a explorar o reservar.

Debe incluir:

* Hero principal con imagen premium de mar / yate.  
* Claim: “Book Mallorca like a local”.  
* Subclaim sobre boats, jet skis, exclusive experiences y WhatsApp booking.  
* CTA principal: Book now.  
* CTA secundario: Browse experiences.  
* Trust stats:  
  * 44+ o 50+ experiencias según dataset final.  
  * 4.8 rating si se mantiene como claim interno.  
  * \<1h WhatsApp reply.  
  * 0 EUR fees.  
* Most booked section.  
* Colecciones principales.  
* Visual gallery.  
* Pricing preview.  
* Footer.  
* WhatsApp floating button.

Home debe ser visual, ligera y muy enfocada a conversión.

---

### **5.2 Experiences / Book**

Ruta sugerida:

`/experiences` o `/book`

Objetivo:

Mostrar todas las experiencias con filtros, búsqueda, ordenación y cards.

Debe incluir:

* Categorías:  
  * All  
  * Water  
  * Beach  
  * Mountain  
  * Nightlife  
  * Culture  
  * Food  
  * Viewpoints  
* Search bar.  
* Sort:  
  * Featured  
  * Price \+  
  * Price \-  
* Grid responsive.  
* Cards con:  
  * Imagen  
  * Badge  
  * Nombre  
  * Ubicación  
  * Precio  
  * Tags  
  * CTA Book  
  * CTA Add to plan  
  * CTA Map si existe  
  * Favorito  
* Modal o página de detalle al hacer click.  
* Estado vacío si no hay resultados.  
* Sistema de favoritos persistente.  
* Sistema de plan persistente.  
* Cart dock / itinerary dock móvil.

Esta página debe ser la más funcional y debe soportar bien más de 50 experiencias.

---

### **5.3 Experience detail**

Ruta sugerida:

`/experiences/[slug]`

Objetivo:

Crear una página individual por experiencia, aunque también se puede mantener modal rápido en móvil.

Cada experiencia debe tener una página de detalle generada desde el dataset.

Debe incluir:

* Hero visual de la experiencia.  
* Galería si existe.  
* Nombre.  
* Ubicación.  
* Categoría.  
* Precio.  
* Descripción.  
* Tags.  
* Notas importantes de acceso, temporada o restricciones.  
* CTA WhatsApp.  
* CTA Add to plan.  
* CTA Map si existe.  
* Experiencias relacionadas.  
* Breadcrumbs.  
* SEO metadata dinámico.

En móvil, puede abrir como bottom sheet o página completa, pero debe ser accesible por URL.

---

### **5.4 Collections**

Ruta sugerida:

`/collections`

Objetivo:

Agrupar experiencias por intención del usuario.

Colecciones obligatorias:

* Hidden Beaches  
* Boats & Yachts  
* Sunset Spots  
* Mountain & Trails  
* Palma City  
* Nightlife

Cada colección debe tener:

* Hero visual.  
* Descripción.  
* Grid de experiencias filtradas.  
* CTA a WhatsApp para pedir plan personalizado.  
* CTA para añadir varias experiencias al plan.

---

### **5.5 Collection detail**

Ruta sugerida:

`/collections/[slug]`

Ejemplos:

* `/collections/hidden-beaches`  
* `/collections/boats-yachts`  
* `/collections/sunset-spots`  
* `/collections/mountain-trails`  
* `/collections/palma-city`  
* `/collections/nightlife`

Debe mostrar solo las experiencias de esa colección y mantener el mismo diseño.

---

### **5.6 Itinerary / Plan**

Ruta sugerida:

`/plan`

Objetivo:

Gestionar las experiencias añadidas por el usuario.

Debe incluir:

* Lista de experiencias añadidas.  
* Posibilidad de quitar experiencias.  
* Precio estimado si existe.  
* Formulario:  
  * Nombre  
  * Fecha de entrada  
  * Fecha de salida opcional  
  * Número de personas  
  * Presupuesto  
  * Notas  
* CTA principal: Send plan via WhatsApp.  
* Mensaje WhatsApp prellenado con todo el itinerario.

El plan debe persistir en localStorage.

En móvil debe ser extremadamente fácil de usar.

---

### **5.7 Jet Ski booking**

Ruta sugerida:

`/jet-ski`

Objetivo:

Página específica para Jet Ski Tours, porque tiene un flujo propio.

Debe incluir:

* Hero específico Jet Ski.  
* Tours:  
  * GoJet Tour 30 min desde 99 EUR  
  * Sunset Tour 60 min desde 169 EUR  
  * Cala en Basset & Cave S’Argilau 60 min desde 159 EUR  
  * Sa Dragonera Natural Park 1h30 desde 199 EUR  
  * VIP Tramuntana Jobe 2h desde 279 EUR  
* Selector de tour.  
* Formulario:  
  * Nombre completo  
  * Teléfono  
  * Tour  
  * Personas  
  * Número de jet skis  
  * Hotel o pickup area  
  * Fecha  
  * Hora  
  * Notas  
* CTA WhatsApp.

Debe conservar el enfoque actual, pero hacerlo más claro y visual.

---

### **5.8 Nightlife**

Ruta sugerida:

`/nightlife`

Objetivo:

Página dedicada a Magaluf / Palma nightlife.

Debe incluir:

* BCM.  
* MCP.  
* Social Club.  
* Red Lion.  
* Panama Jack.  
* Gringos Bingos.  
* Tabana.  
* Shisha Lounge.  
* Boat party si encaja.

Reglas importantes:

* BCM usa link externo de ticket.  
* Boat Party usa link externo de depósito.  
* MCP debe presentarse como pass variable / consultar por WhatsApp o link si se añade después.  
* El resto debe ir a WhatsApp.

Evitar claims demasiado fijos si el precio cambia por fecha. Usar “from”, “deposit”, “on request” cuando sea necesario.

---

### **5.9 Boats / Water**

Ruta sugerida:

`/boats`

Objetivo:

Página dedicada a experiencias acuáticas.

Debe incluir:

* Boat Rental no license.  
* EOLO 830\.  
* Saver 330\.  
* Absolute 62 FLY.  
* V420 Platform.  
* Jet Ski.  
* Bottle Delivery.  
* Shisha Delivery.  
* Boat Party.

Debe mantener un look especialmente premium, visual y comercial.

---

### **5.10 Contact**

Ruta sugerida:

`/contact`

Objetivo:

Página simple para contactar por WhatsApp.

Debe incluir:

* Texto directo.  
* CTA WhatsApp.  
* Formulario simple que genere mensaje WhatsApp.  
* FAQ corto:  
  * How does booking work?  
  * Do I pay fees?  
  * Can you plan my day?  
  * Are prices final?  
  * How fast do you reply?  
  * Can you help with groups?  
* Footer.

---

## **6\. Sistema de datos**

Extraer toda la información hardcoded del HTML actual y reorganizarla en un sistema de datos centralizado.

Crear una estructura clara para:

### **Experience object**

Cada experiencia debe tener como mínimo:

* id  
* slug  
* category  
* collectionIds  
* featured  
* paid  
* premium  
* externalTicketUrl opcional  
* whatsappMode  
* badge  
* badgeText por idioma  
* name por idioma  
* location por idioma  
* area  
* image  
* gallery  
* priceLabel por idioma  
* priceFromNumber  
* tags por idioma  
* shortDescription por idioma  
* longDescription por idioma  
* mapUrl  
* season  
* accessNotes  
* disclaimer  
* bookingType  
* sortPriority  
* relatedIds

### **Categories**

Crear un objeto de categorías:

* all  
* water  
* beach  
* mountain  
* night  
* culture  
* food  
* free / viewpoints

Cada categoría debe tener:

* id  
* label por idioma  
* icon opcional  
* description por idioma  
* route

### **Collections**

Crear un objeto de colecciones:

* hidden-beaches  
* fleet / boats-yachts  
* sunset  
* mountain  
* palma  
* nightlife

Cada colección debe tener:

* id  
* slug  
* target categories  
* image  
* eyebrow  
* name  
* description  
* route  
* related experiences

### **Pricing data**

Mantener pricing cards en una estructura separada.

Ejemplos:

* Boat Rental no license  
* Jet Ski Tours

Cada bloque debe tener:

* title por idioma  
* subtitle por idioma  
* rows  
* note por idioma

---

## **7\. Idiomas e internacionalización**

Mantener todos los idiomas actuales.

La app debe tener un sistema i18n claro y centralizado.

Idiomas:

* `es`  
* `en`  
* `de`  
* `fr`  
* `it`  
* `ar`  
* `ru`

Reglas:

* El idioma seleccionado debe persistir en localStorage.  
* Si el navegador usa uno de los idiomas soportados, puede seleccionarse automáticamente.  
* Si no, usar inglés por defecto.  
* El árabe debe activar `dir="rtl"`.  
* La navegación, filtros, botones, formularios, mensajes y páginas deben traducirse.  
* No perder ningún texto traducido existente.  
* Si falta una traducción, usar inglés como fallback.  
* No mezclar idiomas dentro de la misma página salvo nombres propios.

---

## **8\. Diseño visual que se debe mantener**

Mantener el sistema visual actual:

### **Colores base**

* Fondo principal: `#050505`  
* Fondo secundario: `#111`  
* Cards: `#0e0e0e`  
* Texto principal claro  
* Texto secundario con opacidad  
* Gold accent: `#c9a96e`  
* WhatsApp green: `#25d366`

### **Estilo**

* Premium oscuro.  
* Minimalista.  
* Elegante.  
* Visual.  
* Con mucho espacio.  
* Cards con bordes suaves.  
* Bordes con baja opacidad.  
* Sombras suaves.  
* Imágenes grandes.  
* Gradientes oscuros sobre imágenes.  
* Botones redondeados.  
* Microinteracciones suaves.

### **Tipografías**

Mantener:

* DM Sans para UI y textos.  
* Playfair Display para títulos premium.

### **Modo claro**

Mantener el modo light actual, sin romper contraste ni botones.

---

## **9\. Mobile-first obligatorio**

La app debe estar especialmente optimizada para móvil.

Reglas móviles:

* Menú claro y usable con una mano.  
* Bottom navigation o mobile navigation sticky.  
* WhatsApp floating button visible pero no invasivo.  
* Itinerary dock visible cuando hay experiencias añadidas.  
* Cards fáciles de tocar.  
* Botones mínimo 44px de alto.  
* Filtros horizontales scrollables.  
* Búsqueda visible o fácilmente desplegable.  
* Detail pages o modals adaptados a bottom sheet.  
* Formularios con inputs grandes.  
* Evitar layouts de dos columnas en pantallas pequeñas.  
* Evitar hover-only interactions en móvil.  
* Todo debe funcionar sin depender de hover.  
* Evitar textos cortados.  
* Mantener safe-area para iPhone.  
* Usar `100dvh` o soluciones compatibles para hero móvil.  
* No bloquear scroll.  
* No romper el teclado móvil en formularios.

---

## **10\. Navegación recomendada**

### **Desktop navigation**

Header fijo con:

* Logo MallorcasLocal  
* Home  
* Experiences  
* Boats  
* Nightlife  
* Collections  
* Plan  
* Contact  
* Language selector  
* Theme toggle  
* Favorites icon

### **Mobile navigation**

Usar una navegación inferior o header compacto con menú.

Opciones recomendadas:

* Home  
* Explore  
* Plan  
* WhatsApp

Además:

* Language selector accesible.  
* Theme toggle accesible.  
* Search accesible.

La navegación móvil debe ser clara, rápida y no saturada.

---

## **11\. Animaciones**

Mantener y mejorar las animaciones actuales, pero sin afectar performance.

Usar:

* Reveal on scroll.  
* Fade in.  
* Slight translateY.  
* Smooth card hover en desktop.  
* Image scale suave en hover.  
* Hero entrance.  
* Sticky dock animation.  
* Modal / bottom sheet transition.  
* Toasts suaves.

Reglas:

* Respetar `prefers-reduced-motion`.  
* No usar animaciones pesadas.  
* No animar grandes cantidades de elementos al mismo tiempo.  
* Evitar layout shift.  
* Evitar animaciones que rompan scroll móvil.

---

## **12\. Performance y eficiencia**

La app debe estar optimizada para máxima eficiencia.

Reglas:

* Optimizar imágenes Cloudinary con:  
  * `q_auto`  
  * `f_auto`  
  * `c_fill`  
  * tamaños adecuados por breakpoint  
* Lazy load en imágenes no críticas.  
* Hero image con prioridad alta.  
* Evitar cargar todas las galerías full-size al inicio.  
* Usar thumbnails para previews.  
* Cargar detalle completo solo cuando se necesite.  
* Separar datos, componentes y páginas.  
* Evitar JavaScript duplicado.  
* Evitar estilos repetidos.  
* Mantener CSS limpio y modular.  
* Prevenir errores de localStorage.  
* Prevenir errores si una imagen falla.  
* Prevenir errores si una experiencia no tiene galería.  
* Prevenir errores si falta traducción.  
* Prevenir errores si falta mapUrl.  
* Prevenir errores si falta precio.

---

## **13\. Accesibilidad**

La app debe mejorar accesibilidad sin cambiar estética.

Requisitos:

* Botones con `aria-label` cuando sea necesario.  
* Cards navegables con teclado.  
* Modales con cierre por Escape.  
* Focus visible.  
* Contraste suficiente.  
* No usar texto solo dentro de imágenes.  
* Inputs con labels.  
* Links externos con `rel="noopener noreferrer"`.  
* Idioma y dirección correctos por idioma.  
* Estados vacíos claros.  
* Formularios con validación visible.  
* Toasts no deben ser la única forma de comunicar errores importantes.

---

## **14\. SEO y metadata**

Cada página debe tener metadata propia.

### **Home**

Title:

`MallorcasLocal — Book Mallorca like a local`

Description:

`Boats, jet skis, beaches, nightlife and exclusive experiences in Mallorca. Direct WhatsApp booking, no middlemen.`

### **Experiences**

Title:

`Experiences in Mallorca — MallorcasLocal`

Description:

`Browse curated Mallorca experiences: boats, jet skis, hidden beaches, nightlife, culture and viewpoints.`

### **Boats**

Title:

`Boat Rental and Jet Ski Mallorca — MallorcasLocal`

Description:

`Book boats, jet skis, yacht experiences and sea activities in Mallorca directly by WhatsApp.`

### **Nightlife**

Title:

`Magaluf and Palma Nightlife — MallorcasLocal`

Description:

`Discover BCM, MCP, boat parties, clubs and premium nightlife experiences in Mallorca.`

### **Contact**

Title:

`Contact MallorcasLocal`

Description:

`Plan and book your Mallorca experience directly by WhatsApp.`

Cada experiencia individual debe generar:

* title dinámico  
* description dinámica  
* Open Graph image  
* canonical URL  
* structured data básico si es posible

---

## **15\. Reglas comerciales importantes**

No presentar todos los precios como definitivos.

Usar etiquetas como:

* From  
* Deposit  
* On request  
* Estimated from-price  
* Final price confirmed by WhatsApp  
* Availability depends on date  
* Sea conditions may affect boat experiences  
* Access rules may affect natural spots

Especialmente para:

* BCM  
* MCP  
* Boat Party  
* Yachts  
* Boat rental  
* Formentor  
* Cala Varques  
* Cala Màrmols  
* Hidden beaches  
* Premium beach clubs

El objetivo es vender, pero sin crear expectativas falsas.

---

## **16\. Correcciones de contenido que deben aplicarse**

Aplicar estas correcciones al transformar la plataforma:

### **Barbuda Beach**

No presentarlo simplemente como Magaluf.

Usar:

`Palmanova, near Magaluf`

Mantenerlo como producto relevante para el público de Magaluf.

### **BCM**

No usar precio fijo universal.

Usar:

`From 35 EUR / date-dependent`

Mantener link externo de tickets.

### **MCP**

Actualizar concepto:

No presentarlo como solo “3 clubs / 2 drinks”.

Presentarlo como:

`Magaluf Club Pass with access to multiple MCP clubs. Price and included credit may vary by date and pass type.`

Preferir WhatsApp o futura integración de ticket.

### **Sunset Heatwave Boat**

Usar:

`Deposit available / from-price`

Mantener link externo de depósito.

### **Jet Ski**

Mantener precios desde:

* 99 EUR  
* 159 EUR  
* 169 EUR  
* 199 EUR  
* 279 EUR

Pero aclarar:

`Departure point, pickup and final availability confirmed by WhatsApp.`

### **No-license boat rental**

No hardcodear precios como definitivos.

Usar:

`From-price. Deposit and fuel conditions may vary.`

### **Cap de Formentor**

Añadir access note:

`Seasonal traffic restrictions apply. In summer, access to the lighthouse may require shuttle bus or authorized transport.`

### **Cala Varques**

Añadir access note:

`Access and parking restrictions apply. Walking route may be longer depending on current restrictions.`

### **Cala Màrmols**

No decir solo 45-60 min si no está confirmado.

Usar:

`Remote cove accessible by long hike or boat. Bring enough water and check conditions before going.`

### **Caló des Moro / Santanyí hidden cove**

Añadir:

`Extremely crowded in peak season. Arrive very early or ask for alternatives.`

---

## **17\. Componentes requeridos**

Crear o mantener componentes equivalentes a:

### **Layout components**

* AppShell  
* Header  
* MobileNav  
* Footer  
* LanguageSwitcher  
* ThemeToggle  
* WhatsAppFloatingButton  
* ToastProvider  
* ModalProvider

### **Experience components**

* ExperienceCard  
* FeaturedExperienceCard  
* ExperienceGrid  
* ExperienceFilters  
* ExperienceSearch  
* ExperienceSort  
* ExperienceDetailHero  
* ExperienceGallery  
* RelatedExperiences

### **Booking components**

* QuickBookingForm  
* JetSkiBookingForm  
* ItineraryDock  
* PlanBuilder  
* WhatsAppCTA  
* ExternalTicketButton

### **Collection components**

* CollectionCard  
* CollectionGrid  
* CollectionHero

### **Visual components**

* Hero  
* TrustStats  
* SectionTitle  
* VisualGallery  
* PricingCard  
* PartnerLogoRow

---

## **18\. Estado y persistencia**

Mantener persistencia local para:

* Idioma seleccionado.  
* Tema seleccionado.  
* Favoritos.  
* Plan / itinerary.  
* Última categoría vista si tiene sentido.

Usar localStorage de forma segura:

* Proteger con try/catch.  
* No romper la app si localStorage no está disponible.  
* Validar que los IDs guardados existen en el dataset actual.

---

## **19\. Reglas para favoritos**

Favoritos deben funcionar en:

* Grid de experiencias.  
* Página de detalle.  
* Página de favoritos si se crea.  
* Estado persistente.

Si el usuario activa “favorites only”, mostrar solo favoritos.

Si no hay favoritos, mostrar estado vacío con CTA a explorar experiencias.

---

## **20\. Reglas para plan / itinerary**

El plan debe funcionar como mini-cart, pero no debe parecer ecommerce completo.

Debe sentirse como:

“Build your Mallorca plan and send it to WhatsApp.”

Cada experiencia añadida debe guardar:

* id  
* name  
* price label  
* price numeric si existe  
* category  
* location

El plan debe permitir:

* Añadir  
* Quitar  
* Ver total estimado  
* Enviar a WhatsApp  
* Limpiar plan

El total debe mostrarse como estimado:

`Estimated from-price total`

No debe prometer precio final.

---

## **21\. Formularios**

### **Quick booking form**

Campos:

* Name  
* Activities multi-select  
* Date  
* Optional checkout date  
* Guests  
* Budget  
* Notes

Validación:

* Name requerido  
* Date requerida  
* Al menos una actividad requerida  
* Guests mínimo 1

Output:

Abrir WhatsApp con mensaje estructurado.

### **Jet Ski form**

Campos:

* Full name  
* Phone  
* Tour  
* Guests  
* Number of jet skis  
* Hotel / pickup area  
* Date  
* Time  
* Notes

Validación:

* Full name requerido  
* Phone requerido  
* Tour requerido  
* Pickup requerido  
* Date requerida  
* Time requerida

Output:

Abrir WhatsApp con mensaje estructurado.

### **Contact form**

Campos:

* Name  
* WhatsApp / phone  
* Travel dates  
* What are you looking for?  
* Guests  
* Notes

Output:

WhatsApp.

No crear backend en esta fase si no se solicita.

---

## **22\. Páginas futuras preparadas**

Dejar arquitectura preparada para añadir en próximas versiones:

* Blog / local guides  
* World Cup landing  
* Group bookings  
* VIP concierge  
* Affiliate links  
* Supplier dashboard  
* Admin panel  
* CMS integration  
* More Cloudinary images  
* More components  
* Booking calendar  
* Stripe / SumUp integration  
* Analytics

No implementarlo todo ahora, pero la arquitectura debe permitirlo.

---

## **23\. Calidad técnica esperada**

La entrega debe ser:

* Sin errores de consola.  
* Sin botones muertos.  
* Sin links rotos internos.  
* Sin datos duplicados innecesariamente.  
* Sin estilos globales descontrolados.  
* Sin layout shift importante.  
* Sin overflow horizontal en móvil.  
* Sin problemas en Safari iOS.  
* Sin problemas en Chrome móvil.  
* Sin problemas de scroll en modales.  
* Sin imágenes deformadas.  
* Sin textos cortados de forma fea.  
* Sin filtros que rompan el conteo.  
* Sin errores si el usuario cambia idioma dentro de una página detalle.  
* Sin errores si el usuario cambia tema.  
* Sin perder estado al navegar.

---

## **24\. Estilo de implementación**

No convertir todo en una web genérica.

Mantener la personalidad:

* Premium  
* Local  
* Directa  
* Visual  
* Aspiracional  
* Simple  
* Comercial  
* Mobile-first  
* WhatsApp-first

Evitar:

* Diseño turístico barato.  
* Demasiados colores.  
* Iconos infantiles.  
* Emojis excesivos.  
* Lenguaje demasiado corporativo.  
* Páginas vacías.  
* Animaciones exageradas.  
* Checkout complejo.  
* Formularios largos innecesarios.  
* Popups agresivos.

---

## **25\. Prioridad de construcción**

Construir en este orden:

### **Fase 1**

* Extraer datos a estructura central.  
* Crear layout base.  
* Crear navegación multipágina.  
* Crear Home.  
* Crear Experiences / Book.  
* Crear ExperienceCard.  
* Crear filtros.  
* Crear WhatsApp CTA.  
* Crear Plan / itinerary básico.

### **Fase 2**

* Crear páginas detalle.  
* Crear Collections.  
* Crear Boats.  
* Crear Nightlife.  
* Crear Jet Ski page.  
* Crear Contact.

### **Fase 3**

* Optimización móvil.  
* Animaciones.  
* SEO.  
* Accesibilidad.  
* Performance.  
* Revisión de errores.  
* Pulido visual.

### **Fase 4**

* Preparar espacio para nuevas imágenes.  
* Preparar espacio para nuevos componentes.  
* Preparar futuras correcciones de contenido.  
* Preparar integración futura con CMS o admin.

---

## **26\. Output esperado**

Entregar una web app multipágina funcional, manteniendo el diseño actual y transformando la experiencia en una plataforma más completa.

La app debe sentirse como una evolución natural del HTML actual, no como una reconstrucción sin relación.

Debe poder usarse en producción como primera versión sólida de MallorcasLocal.

---

## **27\. Criterio final de aceptación**

La transformación estará correcta si:

* El usuario puede entrar desde móvil y entender la propuesta en menos de 5 segundos.  
* Puede explorar experiencias fácilmente.  
* Puede filtrar por categoría.  
* Puede abrir detalle de una experiencia.  
* Puede añadir experiencias a un plan.  
* Puede enviar el plan a WhatsApp.  
* Puede reservar Jet Ski con formulario específico.  
* Puede comprar BCM o Boat Party usando los links externos correctos.  
* Puede cambiar idioma sin romper la app.  
* Puede cambiar modo claro / oscuro.  
* Puede navegar entre páginas sin perder el estilo.  
* La web carga rápido.  
* No hay errores visibles.  
* El diseño sigue pareciendo MallorcasLocal.

---

## **28\. Instrucción final para Antigravity**

Usa el HTML actual como fuente principal de diseño, datos y comportamiento. No elimines información útil. No simplifiques el proyecto hasta convertirlo en una landing básica.

Transforma la página en una web app multipágina, modular, responsive, mobile-first y WhatsApp-first. Mantén todos los bloques de información existentes, pero reorganízalos en páginas y componentes claros. Aplica las correcciones comerciales necesarias, especialmente en precios variables, access notes, ubicación de Barbuda, BCM, MCP, Boat Party, Jet Ski, Formentor, Cala Varques y Cala Màrmols.

Construye una base limpia y escalable para que en próximas versiones se puedan añadir más componentes, imágenes, experiencias, correcciones y nuevas páginas sin rehacer la arquitectura.

# información pública para cliente

Aquí tienes la base limpia **solo con información pública para cliente**, 

---

# **MallorcasLocal**

## **Base pública de actividades para cliente**

const publicClientActivities \= \[  
  {  
    id: "bcm",  
    slug: "bcm-mallorca",  
    category: "nightlife",  
    name: "BCM Mallorca",  
    location: "Magaluf",  
    status: "ready\_to\_publish",

    price: {  
      totalLabel: "35 EUR total",  
      depositLabel: "10 EUR online reservation",  
      remainingLabel: "25 EUR at authorized point",  
      total: 35,  
      deposit: 10,  
      remaining: 25  
    },

    badge: "18+",  
    tags: \[  
      "Magaluf",  
      "Nightclub",  
      "Official ticket",  
      "T-shirt or hat included"  
    \],

    shortDescription:  
      "General admission to BCM Mallorca with online reservation and official BCM T-shirt or hat depending on availability.",

    longDescription:  
      "Reserve your BCM Mallorca ticket online with a 10 EUR deposit. The remaining 25 EUR is paid at an authorized point. The ticket includes general admission to BCM Mallorca and an official BCM T-shirt or hat depending on availability.",

    includes: \[  
      "General admission to BCM Mallorca",  
      "Official BCM T-shirt or hat depending on availability",  
      "Valid for 1 person"  
    \],

    importantNotes: \[  
      "18+ only",  
      "No re-entry",  
      "Entry after 12:00 AM may be subject to a 10 EUR supplement",  
      "Smart / casual / elegant dress code required",  
      "No ripped jeans, sportswear, flip flops, beach clothes, tank tops, fancy dress or stag paraphernalia"  
    \],

    booking: {  
      type: "external\_ticket",  
      ctaLabel: "Reserve ticket",  
      externalUrl: "https://top-3-prs-brand.sumupstore.com/product/bcm-pre-sale-ticket",  
      whatsappFallback: true  
    },

    pageUse: \[  
      "Nightlife",  
      "Magaluf",  
      "Featured"  
    \]  
  },

  {  
    id: "mcp",  
    slug: "mcp-club-pass",  
    category: "nightlife",  
    name: "MCP Club Pass",  
    location: "Magaluf",  
    status: "ready\_to\_publish",

    price: {  
      totalLabel: "30 EUR total",  
      depositLabel: "20 EUR reservation",  
      remainingLabel: "10 EUR at the door",  
      total: 30,  
      deposit: 20,  
      remaining: 10  
    },

    badge: "Club Pass",  
    tags: \[  
      "3 clubs",  
      "2 drinks",  
      "Magaluf",  
      "11PM-6AM"  
    \],

    shortDescription:  
      "Magaluf club pass with access to Bananas, Tokio and Soho, including 2 drinks.",

    longDescription:  
      "The MCP Club Pass gives access to Bananas, Tokio and Soho. The total price is 30 EUR: 20 EUR to reserve your place and 10 EUR paid at the door. Includes 2 drinks. A gift or shot may be included if you arrive before 1:00 AM, depending on availability.",

    includes: \[  
      "Access to Bananas",  
      "Access to Tokio",  
      "Access to Soho",  
      "2 drinks included",  
      "Gift or shot before 1:00 AM depending on availability"  
    \],

    importantNotes: \[  
      "Valid for 1 person",  
      "Arrival before 1:00 AM may include an extra gift or shot",  
      "Final access may depend on club conditions and date"  
    \],

    booking: {  
      type: "whatsapp",  
      ctaLabel: "Reserve via WhatsApp",  
      externalUrl: null,  
      whatsappFallback: true  
    },

    pageUse: \[  
      "Nightlife",  
      "Magaluf",  
      "Club Pass"  
    \]  
  },

  {  
    id: "red-lion",  
    slug: "red-lion-magaluf",  
    category: "nightlife",  
    name: "Red Lion",  
    location: "Magaluf",  
    status: "ready\_to\_publish",

    price: {  
      totalLabel: "30-40 EUR total",  
      depositLabel: "Reservation by WhatsApp",  
      remainingLabel: "Final price confirmed before booking",  
      total: null,  
      deposit: null,  
      remaining: null  
    },

    badge: "4 drinks",  
    tags: \[  
      "Magaluf",  
      "Bar",  
      "4 drinks",  
      "Late night"  
    \],

    shortDescription:  
      "Magaluf nightlife option with entry and 4 drinks included.",

    longDescription:  
      "Red Lion is a Magaluf nightlife option with entry and 4 drinks included. The usual price range is between 30 and 40 EUR depending on date and conditions.",

    includes: \[  
      "Entry",  
      "4 drinks included"  
    \],

    importantNotes: \[  
      "Price may vary between 30 and 40 EUR",  
      "Final price and availability confirmed by WhatsApp"  
    \],

    booking: {  
      type: "whatsapp",  
      ctaLabel: "Ask availability",  
      externalUrl: null,  
      whatsappFallback: true  
    },

    pageUse: \[  
      "Nightlife",  
      "Magaluf",  
      "Bars"  
    \]  
  },

  {  
    id: "panama-jack",  
    slug: "panama-jack-magaluf",  
    category: "nightlife",  
    name: "Panama Jack",  
    location: "Magaluf",  
    status: "ready\_to\_publish",

    price: {  
      totalLabel: "15-20 EUR total",  
      depositLabel: "Reservation by WhatsApp",  
      remainingLabel: "Final price confirmed before booking",  
      total: null,  
      deposit: null,  
      remaining: null  
    },

    badge: "Entry \+ drink",  
    tags: \[  
      "Magaluf",  
      "Bar",  
      "1 drink",  
      "10PM-6AM"  
    \],

    shortDescription:  
      "Entry plus one drink in Magaluf.",

    longDescription:  
      "Panama Jack is a Magaluf nightlife option with entry and one drink included. Price usually ranges between 15 and 20 EUR depending on date and conditions.",

    includes: \[  
      "Entry",  
      "1 drink included"  
    \],

    importantNotes: \[  
      "Price may vary between 15 and 20 EUR",  
      "Final price and availability confirmed by WhatsApp"  
    \],

    booking: {  
      type: "whatsapp",  
      ctaLabel: "Ask availability",  
      externalUrl: null,  
      whatsappFallback: true  
    },

    pageUse: \[  
      "Nightlife",  
      "Magaluf",  
      "Bars"  
    \]  
  },

  {  
    id: "gringos",  
    slug: "gringos-reloaded",  
    category: "nightlife",  
    name: "Gringos / Reloaded",  
    location: "Magaluf",  
    status: "ready\_to\_publish",

    price: {  
      totalLabel: "35-45 EUR total",  
      depositLabel: "Reservation by WhatsApp",  
      remainingLabel: "Final price confirmed before booking",  
      total: null,  
      deposit: null,  
      remaining: null  
    },

    badge: "Table included",  
    tags: \[  
      "Magaluf",  
      "Show",  
      "Group plan",  
      "Table included"  
    \],

    shortDescription:  
      "Group nightlife show experience with table included.",

    longDescription:  
      "Gringos / Reloaded is a group nightlife show experience in Magaluf. The usual price range is between 35 and 45 EUR and includes a table. It is a strong option for groups before going out later at night.",

    includes: \[  
      "Entry",  
      "Table included",  
      "Show / group experience"  
    \],

    importantNotes: \[  
      "Price may vary between 35 and 45 EUR",  
      "Schedule and availability must be confirmed before booking"  
    \],

    booking: {  
      type: "whatsapp",  
      ctaLabel: "Ask availability",  
      externalUrl: null,  
      whatsappFallback: true  
    },

    pageUse: \[  
      "Nightlife",  
      "Magaluf",  
      "Groups"  
    \]  
  },

  {  
    id: "social-club",  
    slug: "social-club-palma",  
    category: "nightlife",  
    name: "Social Club",  
    location: "Palma",  
    status: "ready\_to\_publish",

    price: {  
      totalLabel: "25 EUR total",  
      depositLabel: "Reservation by WhatsApp",  
      remainingLabel: "Final payment details confirmed by WhatsApp",  
      total: 25,  
      deposit: null,  
      remaining: null  
    },

    badge: "2 drinks",  
    tags: \[  
      "Palma",  
      "Club",  
      "2 drinks",  
      "11PM-6AM"  
    \],

    shortDescription:  
      "Palma nightlife ticket with 2 drinks included.",

    longDescription:  
      "Social Club is a Palma nightlife option with entry and 2 drinks included. The ticket price is 25 EUR and the usual schedule is approximately 11:00 PM to 6:00 AM.",

    includes: \[  
      "Entry",  
      "2 drinks included"  
    \],

    importantNotes: \[  
      "Schedule approximately 11:00 PM to 6:00 AM",  
      "Final availability confirmed by WhatsApp"  
    \],

    booking: {  
      type: "whatsapp",  
      ctaLabel: "Reserve via WhatsApp",  
      externalUrl: null,  
      whatsappFallback: true  
    },

    pageUse: \[  
      "Nightlife",  
      "Palma",  
      "Clubs"  
    \]  
  },

  {  
    id: "jetski-andratx",  
    slug: "jet-ski-andratx",  
    category: "water",  
    name: "Jet Ski Tour Andratx",  
    location: "Port d’Andratx",  
    status: "ready\_to\_publish",

    price: {  
      totalLabel: "159 EUR total",  
      depositLabel: "40 EUR reservation",  
      remainingLabel: "119 EUR at location",  
      total: 159,  
      deposit: 40,  
      remaining: 119  
    },

    badge: "Transport included",  
    tags: \[  
      "Jet Ski",  
      "1 hour",  
      "1-2 people",  
      "Transport included"  
    \],

    shortDescription:  
      "1-hour Jet Ski tour from Port d’Andratx with transport included.",

    longDescription:  
      "Book a 1-hour Jet Ski tour from Port d’Andratx. The total price is 159 EUR: 40 EUR to reserve your place and 119 EUR paid at location. The experience is valid for 1 or 2 people per jet ski and includes transport from the Magaluf area and return.",

    includes: \[  
      "1-hour Jet Ski tour",  
      "1 or 2 people per jet ski",  
      "Transport included",  
      "Pickup and return from Magaluf area"  
    \],

    importantNotes: \[  
      "Availability usually confirmed by WhatsApp",  
      "Pickup point must be confirmed before the activity",  
      "Weather and sea conditions may affect the experience"  
    \],

    booking: {  
      type: "jetski\_form",  
      ctaLabel: "Reserve Jet Ski",  
      externalUrl: null,  
      whatsappFallback: true  
    },

    pageUse: \[  
      "Jet Ski",  
      "Water",  
      "Featured"  
    \]  
  },

  {  
    id: "jetski-paguera",  
    slug: "jet-ski-paguera",  
    category: "water",  
    name: "Jet Ski Paguera",  
    location: "Paguera",  
    status: "ask\_availability",

    price: {  
      totalLabel: "Approx. 140-150 EUR total",  
      depositLabel: "Reservation by WhatsApp",  
      remainingLabel: "Final price confirmed before booking",  
      total: null,  
      deposit: null,  
      remaining: null  
    },

    badge: "Ask availability",  
    tags: \[  
      "Jet Ski",  
      "Paguera",  
      "Sea activity",  
      "Ask availability"  
    \],

    shortDescription:  
      "Jet Ski option in Paguera. Availability and final price confirmed by WhatsApp.",

    longDescription:  
      "Jet Ski experience in Paguera. The usual price range mentioned is around 140-150 EUR, but final duration, availability and exact price must be confirmed before booking.",

    includes: \[  
      "Jet Ski experience"  
    \],

    importantNotes: \[  
      "Exact duration to be confirmed",  
      "Final price confirmed before booking",  
      "Weather and sea conditions may affect availability"  
    \],

    booking: {  
      type: "whatsapp",  
      ctaLabel: "Ask availability",  
      externalUrl: null,  
      whatsappFallback: true  
    },

    pageUse: \[  
      "Jet Ski",  
      "Water"  
    \]  
  },

  {  
    id: "jetski-circuit",  
    slug: "jet-ski-circuit",  
    category: "water",  
    name: "Jet Ski Circuit",  
    location: "To confirm",  
    status: "ask\_availability",

    price: {  
      totalLabel: "From 85 EUR",  
      depositLabel: "Reservation by WhatsApp",  
      remainingLabel: "Final details confirmed before booking",  
      total: 85,  
      deposit: null,  
      remaining: null  
    },

    badge: "Circuit",  
    tags: \[  
      "Jet Ski",  
      "Circuit",  
      "Budget option",  
      "Ask availability"  
    \],

    shortDescription:  
      "Jet Ski circuit option from 85 EUR. Final details confirmed by WhatsApp.",

    longDescription:  
      "Jet Ski circuit option from 85 EUR. Exact location, duration and availability must be confirmed before booking.",

    includes: \[  
      "Jet Ski circuit"  
    \],

    importantNotes: \[  
      "Exact location to be confirmed",  
      "Tour option not yet confirmed",  
      "Availability depends on provider and sea conditions"  
    \],

    booking: {  
      type: "whatsapp",  
      ctaLabel: "Ask availability",  
      externalUrl: null,  
      whatsappFallback: true  
    },

    pageUse: \[  
      "Jet Ski",  
      "Water"  
    \]  
  },

  {  
    id: "sunset-heatwave-boat-party",  
    slug: "sunset-heatwave-boat-party",  
    category: "water",  
    name: "Sunset Heatwave Boat Party",  
    location: "Magaluf",  
    status: "ready\_to\_publish",

    price: {  
      totalLabel: "69 EUR total",  
      depositLabel: "Deposit available online",  
      remainingLabel: "Final booking details confirmed after reservation",  
      total: 69,  
      deposit: null,  
      remaining: null  
    },

    badge: "Boat Party",  
    tags: \[  
      "3h cruise",  
      "Live DJs",  
      "Swim stop",  
      "After party"  
    \],

    shortDescription:  
      "3-hour double tier boat party with DJs, swim stop, paella, fruit and after party included.",

    longDescription:  
      "Sunset Heatwave Boat Party includes a 3-hour cruise on a double tier super boat with live DJs, bongo player, swim stop, paella, fruit, transfer to the boat and Shipwrecked after party. The experience also includes a free Magaluf T-shirt and free shots at Alex’s Lounge around 9:30 / 10:00 PM.",

    includes: \[  
      "3-hour cruise",  
      "Double tier super boat",  
      "Live DJs onboard",  
      "Bongo player",  
      "Swim stop",  
      "Paella included",  
      "Fruit included",  
      "Transfer to the boat included",  
      "Shipwrecked after party included",  
      "Free Magaluf T-shirt",  
      "Free shots at Alex’s Lounge"  
    \],

    importantNotes: \[  
      "Boat parties depend on season and local regulations",  
      "Final date availability must be confirmed",  
      "After party details may depend on the event date"  
    \],

    booking: {  
      type: "external\_deposit",  
      ctaLabel: "Reserve deposit",  
      externalUrl: "https://top-3-prs-brand.sumupstore.com/product/sunset-heatwave-boat-party-deposit",  
      whatsappFallback: true  
    },

    pageUse: \[  
      "Boat Party",  
      "Water",  
      "Nightlife",  
      "Featured"  
    \]  
  },

  {  
    id: "boat-rental-no-license",  
    slug: "boat-rental-no-license",  
    category: "water",  
    name: "Boat Rental No License",  
    location: "Mallorca",  
    status: "ask\_availability",

    price: {  
      totalLabel: "On request",  
      depositLabel: "Reservation details confirmed by WhatsApp",  
      remainingLabel: "Final price depends on boat, duration and date",  
      total: null,  
      deposit: null,  
      remaining: null  
    },

    badge: "No license",  
    tags: \[  
      "Boat rental",  
      "No license",  
      "Small groups",  
      "Sea day"  
    \],

    shortDescription:  
      "Boat rental option for small groups without a boat license.",

    longDescription:  
      "Boat rental without license for small groups. Final price depends on the boat, duration, date and availability. Send your preferred date and group size to receive the best available option.",

    includes: \[  
      "Boat rental without license",  
      "Small group option",  
      "Duration and availability confirmed before booking"  
    \],

    importantNotes: \[  
      "Final price depends on duration and date",  
      "Availability confirmed by WhatsApp",  
      "Deposit may be required depending on boat"  
    \],

    booking: {  
      type: "whatsapp",  
      ctaLabel: "Ask availability",  
      externalUrl: null,  
      whatsappFallback: true  
    },

    pageUse: \[  
      "Boats",  
      "Water"  
    \]  
  },

  {  
    id: "private-transfer",  
    slug: "private-transfer-mallorca",  
    category: "transport",  
    name: "Private Transfer / Minibus",  
    location: "Mallorca",  
    status: "ready\_to\_publish",

    price: {  
      totalLabel: "On request",  
      depositLabel: "Quote by WhatsApp",  
      remainingLabel: "Final price depends on route, time and passengers",  
      total: null,  
      deposit: null,  
      remaining: null  
    },

    badge: "Groups",  
    tags: \[  
      "Private transfer",  
      "Minibus",  
      "Mercedes Vito",  
      "Group transport"  
    \],

    shortDescription:  
      "Private transfer options for groups, nightlife, events and custom routes.",

    longDescription:  
      "Private transfer and group transport options in Mallorca. Available options include minibus, Mercedes Vito and custom group transfers depending on route, time and number of passengers.",

    includes: \[  
      "Private transfer quote",  
      "Minibus option",  
      "Mercedes Vito option",  
      "Custom route planning"  
    \],

    importantNotes: \[  
      "Final price depends on route, time and number of passengers",  
      "Availability must be confirmed before booking"  
    \],

    booking: {  
      type: "whatsapp",  
      ctaLabel: "Request transfer",  
      externalUrl: null,  
      whatsappFallback: true  
    },

    pageUse: \[  
      "Transport",  
      "Group bookings",  
      "Nightlife add-on"  
    \]  
  },

  {  
    id: "barbuda-brunch",  
    slug: "barbuda-beach-brunch",  
    category: "beachclub",  
    name: "Barbuda Beach Brunch",  
    location: "Palmanova, near Magaluf",  
    status: "ask\_availability",

    price: {  
      totalLabel: "On request",  
      depositLabel: "Reservation by WhatsApp",  
      remainingLabel: "Final price confirmed before booking",  
      total: null,  
      deposit: null,  
      remaining: null  
    },

    badge: "Beach brunch",  
    tags: \[  
      "Beach club",  
      "Brunch",  
      "Palmanova",  
      "Near Magaluf"  
    \],

    shortDescription:  
      "Beach brunch experience in Palmanova, close to Magaluf.",

    longDescription:  
      "Barbuda Beach Brunch is a beach club style brunch experience in Palmanova, close to Magaluf. Final menu, price and availability must be confirmed before booking.",

    includes: \[  
      "Beach brunch experience",  
      "Beach club atmosphere"  
    \],

    importantNotes: \[  
      "Final price and menu to be confirmed",  
      "Availability depends on date"  
    \],

    booking: {  
      type: "whatsapp",  
      ctaLabel: "Ask availability",  
      externalUrl: null,  
      whatsappFallback: true  
    },

    pageUse: \[  
      "Beach Clubs",  
      "Food",  
      "Magaluf area"  
    \]  
  },

  {  
    id: "western-park",  
    slug: "western-park",  
    category: "attractions",  
    name: "Western Park",  
    location: "Magaluf area",  
    status: "info\_only",

    price: {  
      totalLabel: "To confirm",  
      depositLabel: "Ask info",  
      remainingLabel: "Final price confirmed before booking",  
      total: null,  
      deposit: null,  
      remaining: null  
    },

    badge: "Attraction",  
    tags: \[  
      "Water park",  
      "Family",  
      "Magaluf area",  
      "Day plan"  
    \],

    shortDescription:  
      "Water park attraction near Magaluf. Ask for current ticket options.",

    longDescription:  
      "Western Park can be included as an extra activity or day plan near Magaluf. Current ticket options and availability should be confirmed before booking.",

    includes: \[  
      "Water park information",  
      "Ticket guidance"  
    \],

    importantNotes: \[  
      "Ticket price must be confirmed",  
      "Opening dates and times may vary by season"  
    \],

    booking: {  
      type: "whatsapp",  
      ctaLabel: "Ask info",  
      externalUrl: null,  
      whatsappFallback: true  
    },

    pageUse: \[  
      "Attractions",  
      "Family",  
      "Extra activities"  
    \]  
  },

  {  
    id: "aqualand",  
    slug: "aqualand-mallorca",  
    category: "attractions",  
    name: "Aqualand",  
    location: "Mallorca",  
    status: "info\_only",

    price: {  
      totalLabel: "To confirm",  
      depositLabel: "Ask info",  
      remainingLabel: "Final price confirmed before booking",  
      total: null,  
      deposit: null,  
      remaining: null  
    },

    badge: "Attraction",  
    tags: \[  
      "Water park",  
      "Family",  
      "Day plan",  
      "Seasonal"  
    \],

    shortDescription:  
      "Water park activity in Mallorca. Ask for current ticket options.",

    longDescription:  
      "Aqualand can be included as an extra activity or family day plan in Mallorca. Current ticket options, opening dates and availability should be confirmed before booking.",

    includes: \[  
      "Water park information",  
      "Ticket guidance"  
    \],

    importantNotes: \[  
      "Ticket price must be confirmed",  
      "Opening dates and times may vary by season"  
    \],

    booking: {  
      type: "whatsapp",  
      ctaLabel: "Ask info",  
      externalUrl: null,  
      whatsappFallback: true  
    },

    pageUse: \[  
      "Attractions",  
      "Family",  
      "Extra activities"  
    \]  
  }  
\];  
---

# **Versión resumida para cards**

Esta es mejor para usar en cards de la web:

const publicActivityCards \= \[  
  {  
    id: "bcm",  
    name: "BCM Mallorca",  
    category: "Nightlife",  
    location: "Magaluf",  
    price: "35 EUR total",  
    paymentSplit: "10 EUR reservation \+ 25 EUR at authorized point",  
    badge: "18+",  
    tags: \["Nightclub", "Official ticket", "T-shirt / hat"\],  
    cta: "Reserve ticket",  
    link: "https://top-3-prs-brand.sumupstore.com/product/bcm-pre-sale-ticket"  
  },  
  {  
    id: "mcp",  
    name: "MCP Club Pass",  
    category: "Nightlife",  
    location: "Magaluf",  
    price: "30 EUR total",  
    paymentSplit: "20 EUR reservation \+ 10 EUR at the door",  
    badge: "3 clubs",  
    tags: \["Bananas", "Tokio", "Soho", "2 drinks"\],  
    cta: "Reserve via WhatsApp",  
    link: "whatsapp"  
  },  
  {  
    id: "red-lion",  
    name: "Red Lion",  
    category: "Nightlife",  
    location: "Magaluf",  
    price: "30-40 EUR total",  
    paymentSplit: "Final price confirmed before booking",  
    badge: "4 drinks",  
    tags: \["Entry", "4 drinks", "Late night"\],  
    cta: "Ask availability",  
    link: "whatsapp"  
  },  
  {  
    id: "panama-jack",  
    name: "Panama Jack",  
    category: "Nightlife",  
    location: "Magaluf",  
    price: "15-20 EUR total",  
    paymentSplit: "Final price confirmed before booking",  
    badge: "Entry \+ drink",  
    tags: \["Entry", "1 drink", "10PM-6AM"\],  
    cta: "Ask availability",  
    link: "whatsapp"  
  },  
  {  
    id: "gringos",  
    name: "Gringos / Reloaded",  
    category: "Nightlife",  
    location: "Magaluf",  
    price: "35-45 EUR total",  
    paymentSplit: "Final price confirmed before booking",  
    badge: "Table included",  
    tags: \["Show", "Groups", "Table"\],  
    cta: "Ask availability",  
    link: "whatsapp"  
  },  
  {  
    id: "social-club",  
    name: "Social Club",  
    category: "Nightlife",  
    location: "Palma",  
    price: "25 EUR total",  
    paymentSplit: "Final payment details confirmed by WhatsApp",  
    badge: "2 drinks",  
    tags: \["Club", "Palma", "2 drinks"\],  
    cta: "Reserve via WhatsApp",  
    link: "whatsapp"  
  },  
  {  
    id: "jetski-andratx",  
    name: "Jet Ski Tour Andratx",  
    category: "Water",  
    location: "Port d’Andratx",  
    price: "159 EUR total",  
    paymentSplit: "40 EUR reservation \+ 119 EUR at location",  
    badge: "Transport included",  
    tags: \["1 hour", "1-2 people", "Pickup included"\],  
    cta: "Reserve Jet Ski",  
    link: "whatsapp"  
  },  
  {  
    id: "sunset-heatwave-boat-party",  
    name: "Sunset Heatwave Boat Party",  
    category: "Water / Nightlife",  
    location: "Magaluf",  
    price: "69 EUR total",  
    paymentSplit: "Deposit available online",  
    badge: "3h boat party",  
    tags: \["DJs", "Swim stop", "Paella", "After party"\],  
    cta: "Reserve deposit",  
    link: "https://top-3-prs-brand.sumupstore.com/product/sunset-heatwave-boat-party-deposit"  
  },  
  {  
    id: "boat-rental-no-license",  
    name: "Boat Rental No License",  
    category: "Water",  
    location: "Mallorca",  
    price: "On request",  
    paymentSplit: "Final price depends on boat, duration and date",  
    badge: "No license",  
    tags: \["Boat rental", "Small groups", "Sea day"\],  
    cta: "Ask availability",  
    link: "whatsapp"  
  },  
  {  
    id: "private-transfer",  
    name: "Private Transfer / Minibus",  
    category: "Transport",  
    location: "Mallorca",  
    price: "On request",  
    paymentSplit: "Quote depends on route, time and passengers",  
    badge: "Groups",  
    tags: \["Minibus", "Mercedes Vito", "Group transport"\],  
    cta: "Request transfer",  
    link: "whatsapp"  
  }  
\];  
---

# **Texto público para explicar pagos**

Puedes poner esto en la web cerca del pricing o booking form:

To reserve some experiences, you only pay a small reservation amount online or by confirmation link. The remaining amount is paid at the venue, authorized point or activity location.

Final availability, meeting point and payment details are always confirmed before booking.

En español:

Para reservar algunas experiencias, solo pagas una pequeña cantidad de reserva online o mediante link de confirmación. El resto se paga en el local, punto autorizado o lugar de la actividad.

La disponibilidad final, punto de encuentro y detalles de pago siempre se confirman antes de reservar.  
---

# **Campos recomendados para mostrar en cada card**

const publicCardFields \= {  
  required: \[  
    "name",  
    "location",  
    "price.totalLabel",  
    "price.depositLabel",  
    "price.remainingLabel",  
    "badge",  
    "tags",  
    "shortDescription",  
    "ctaLabel"  
  \],  
  hiddenFromClient: \[  
    "internalCommission",  
    "supplierContact",  
    "profitMargin",  
    "supplierNetPrice",  
    "privateNotes",  
    "negotiationNotes"  
  \]  
};  
---

# **Información eliminada por privacidad**

No debe aparecer en la página:

const privateFieldsToRemove \= \[  
  "commission",  
  "internalCommission",  
  "whatWeEarn",  
  "supplierNetPrice",  
  "profit",  
  "margin",  
  "ownerContact",  
  "supplierPhone",  
  "privateWhatsApp",  
  "Fernando internal notes",  
  "commissionType",  
  "business strategy",  
  "supplier negotiation",  
  "how much we add on top"  
\];  
---

# **Recomendación final**

Para la web, muestra siempre este formato:

Total: 159 EUR  
Reserve your place: 40 EUR  
Pay at location: 119 EUR

O cuando no esté cerrado:

Total: from 30 EUR  
Reservation: confirmed by WhatsApp  
Final price: confirmed before booking

Así el cliente entiende el pago sin ver ninguna información privada.

# COMPLEMENTARY SPECIFICATION BLOCK

Aquí tienes un **prompt complementario** para añadir después del anterior. Está pensado para reforzar especificaciones, mejorar UX, ordenar mejor la base de datos y evitar que la IA te devuelva una página bonita pero poco funcional.

---

# **COMPLEMENTARY SPECIFICATION BLOCK**

## **MallorcasLocal Multi-Section Upgrade v2**

Use this block as an additional layer of instructions. It complements the previous master prompt and should not replace it.

---

## **1\. Main Improvement Goal**

Improve the current MallorcasLocal HTML beyond a simple redesign.

The final page must behave like a real booking platform, not just a visual landing page.

The priority is:

1\. Clear user journey  
2\. Higher WhatsApp conversion  
3\. Clean public activity database  
4\. Better mobile experience  
5\. Better separation between bookable activities, private services, World Cup groups and general inquiries  
6\. More professional trust and pricing presentation  
7\. Easier future migration to Next.js or Vercel  
---

## **2\. User Journey Requirements**

The page should support 5 main visitor intentions:

1\. “I know what I want”  
   → User goes to Book, filters activity, books by WhatsApp.

2\. “I want ideas”  
   → User browses Featured, Collections and Gallery.

3\. “I want something private”  
   → User goes to Private Services and requests a custom plan.

4\. “I am coming with a group”  
   → User goes to World Cup or group inquiry.

5\. “I am not sure”  
   → User sends a general inquiry/contact form.

Every section must have a clear next step.

No section should end without a CTA.

---

## **3\. Conversion Rules**

Every commercial card or section must include at least one of these CTAs:

Book via WhatsApp  
Ask availability  
Reserve your spot  
Request private plan  
Plan my group trip  
Send inquiry  
Add to plan

Avoid passive CTAs like:

Learn more  
Discover  
Read more  
See details

Unless they are secondary actions.

Primary CTAs must always push to WhatsApp or to a booking modal.

---

## **4\. Page Navigation Logic**

The header navigation must scroll to the correct sections:

Home → \#home  
Book → \#book  
Private Services → \#private-services  
World Cup → \#world-cup  
Contact → \#contact

The page should also support direct URL anchors.

Example:

site.com/\#world-cup  
site.com/\#private-services  
site.com/\#book

The sticky header must not cover the section title when scrolling.

Use:

scroll-margin-top: 80px;

on all major sections.

---

## **5\. Section ID Requirements**

Use clear section IDs:

\<section id="home"\>  
\<section id="book"\>  
\<section id="private-services"\>  
\<section id="world-cup"\>  
\<section id="collections"\>  
\<section id="gallery"\>  
\<section id="pricing"\>  
\<section id="partners"\>  
\<section id="contact"\>  
---

## **6\. Improved Activity Data Model**

Every activity should have a cleaner data structure.

Use this structure where possible:

{  
  id: "string",  
  slug: "string",  
  status: "active",  
  visibility: "public",

  section: "book",  
  category: "water",

  featured: true,  
  premium: false,  
  bookable: true,  
  freeGuide: false,

  title: {  
    en: "",  
    es: "",  
    de: "",  
    fr: "",  
    it: ""  
  },

  shortTitle: {  
    en: "",  
    es: ""  
  },

  location: {  
    area: "",  
    town: "",  
    island: "Mallorca",  
    mapUrl: ""  
  },

  price: {  
    publicLabel: {  
      en: "From 99 EUR",  
      es: "Desde 99 EUR"  
    },  
    from: 99,  
    deposit: null,  
    remaining: null,  
    currency: "EUR",  
    priceType: "from"  
  },

  booking: {  
    method: "whatsapp",  
    externalUrl: null,  
    whatsappTemplate: "activity",  
    requiresConfirmation: true  
  },

  logistics: {  
    duration: "",  
    capacity: "",  
    season: "",  
    included: \[\],  
    notIncluded: \[\],  
    requirements: \[\],  
    meetingPoint: ""  
  },

  content: {  
    description: {  
      en: "",  
      es: ""  
    },  
    highlights: {  
      en: \[\],  
      es: \[\]  
    },  
    clientNotes: {  
      en: \[\],  
      es: \[\]  
    }  
  },

  media: {  
    cover: "",  
    gallery: \[\],  
    logo: ""  
  },

  tags: {  
    en: \[\],  
    es: \[\]  
  }  
}

Do not include internal supplier data.

---

## **7\. Pricing Display Rules**

Use consistent pricing labels.

Allowed price types:

Fixed price  
From price  
Deposit \+ remaining payment  
On request  
Free guide

Examples:

35 EUR  
From 99 EUR  
10 EUR deposit \+ 25 EUR at venue  
On request  
Free local guide

Do not display unclear pricing like:

EUR  
Premium  
Ask  
Variable

Unless “Premium” is used as a badge, not as the price.

---

## **8\. Deposit Display Rules**

When an activity uses a deposit, show it clearly to the client:

Total: 35 EUR  
Reserve now: 10 EUR  
Pay at venue: 25 EUR

For the card, use a short version:

35 EUR total  
10 EUR deposit

For the detail modal, use the full version.

---

## **9\. Activity Card Improvement**

Each activity card should include:

Badge  
Image  
Title  
Location  
Price label  
2 to 4 tags  
One sentence description  
Primary CTA  
Secondary CTA  
Optional map button

Card CTA logic:

External ticket activity → “Buy ticket”  
WhatsApp activity → “Ask availability”  
Free guide → “Ask local tips”  
Private service → “Request plan”  
World Cup item → “Plan group trip”  
---

## **10\. Detail Modal Improvement**

The detail modal should include:

Large image  
Title  
Location  
Price  
Short description  
Highlights  
Included  
Important notes  
Gallery thumbnails  
Primary CTA  
Add to plan  
Map link if available

For ticketed activities, include:

Reserve / Buy Ticket button  
Ask by WhatsApp button

For WhatsApp-only activities:

Ask availability on WhatsApp  
Add to plan  
---

## **11\. Book Section Layout**

The Book section should be structured like this:

Section title  
Short explanation  
Category filter bar  
Search input  
Sort controls  
Grid count  
Activity grid

Recommended title:

Book Mallorca experiences

Recommended subtitle:

Choose your plan, add experiences to your itinerary or ask availability directly on WhatsApp.  
---

## **12\. Private Services UX**

Private Services should feel more exclusive than the general Book grid.

Use larger cards or horizontal premium blocks.

Suggested services:

Private Yacht Day  
VIP Nightlife Plan  
Private Driver  
Airport Transfer  
Private Boat Party  
Birthday or Celebration Plan  
Bachelor / Bachelorette Group  
Bottle Service  
Shisha Service  
Restaurant Booking  
Full-Day Custom Mallorca Plan  
Luxury Concierge

Each private service card must include:

Title  
Short description  
Best for  
Price: On request  
CTA: Request private plan

Example structure:

{  
  id: "private-yacht-day",  
  title: "Private Yacht Day",  
  bestFor: "Couples, families and premium groups",  
  priceLabel: "On request",  
  description: "A private sea day arranged around your group, route, timing and extras.",  
  cta: "Request private plan"  
}  
---

## **13\. World Cup Section Improvements**

The World Cup section should not feel like a generic sports page. It should feel like a group travel and experience planner.

Add these blocks:

Hero block  
Group packages  
Inquiry form  
Popular combinations  
FAQ

Popular combinations:

Boat day \+ nightlife  
Match day bar booking \+ VIP table  
Airport transfer \+ villa arrival plan  
Bachelor group \+ boat party  
Full weekend itinerary

World Cup card examples:

Group Nightlife Package  
Boat Day for Groups  
VIP Table Planning  
Transport and Driver  
Full Weekend Plan

Suggested copy:

Coming to Mallorca with a group? We help organize the plan around your dates, group size and budget.  
---

## **14\. Inquiry Form Improvements**

The inquiry form should not be too long.

Use progressive logic:

Visible fields:

Name  
WhatsApp  
Date  
Guests  
Inquiry type  
Message

Optional hidden/advanced fields:

Budget  
Preferred area  
Special request

Inquiry type options:

Boat rental  
Jet ski  
Nightlife  
Private service  
World Cup group  
Birthday / event  
Restaurant  
Transport  
Custom plan  
Other  
---

## **15\. WhatsApp Message Formatting**

WhatsApp messages must be clean, readable and structured.

Use line breaks.

Do not create one long paragraph.

Example:

Hi MallorcasLocal, I want to make a booking:

Name: \[name\]  
Activity: \[activity\]  
Date: \[date\]  
Guests: \[guests\]  
Budget: \[budget\]  
Notes: \[notes\]

Please confirm availability, final price and the best option.

Every WhatsApp message should include:

Source: MallorcasLocal

This helps track where the lead came from.

---

## **16\. Trust and Safety Copy**

Add short client-facing trust notes without overexplaining.

Suggested copy:

Direct WhatsApp confirmation  
Prices shown as final, from-price or deposit depending on the activity  
Availability depends on date, weather and supplier confirmation  
No unnecessary platform steps  
Local recommendations before you book

Do not mention internal operations.

---

## **17\. Mobile Improvements**

Mobile must be treated as the primary experience.

Requirements:

Sticky bottom WhatsApp or itinerary dock  
Large tap areas  
No tiny text on cards  
Filters scroll horizontally  
Cards should be easy to tap  
Modals must be scrollable  
CTA must remain visible on mobile  
Images must load optimized  
No horizontal overflow

Important mobile rule:

The user should be able to book or send inquiry within 2 taps after finding an activity.  
---

## **18\. Performance Improvements**

Apply these improvements:

Lazy-load non-critical images  
Use decoding="async"  
Use fetchpriority="high" only for hero image  
Use Cloudinary transformations  
Avoid loading unnecessarily large images  
Reduce duplicate JS  
Reduce duplicate CSS  
Avoid massive repeated inline SVGs where possible  
Avoid unnecessary re-renders  
---

## **19\. SEO Improvements**

Add better SEO structure.

Include:

\<title\>MallorcasLocal — Book Mallorca like a local\</title\>  
\<meta name="description" content="Book Mallorca experiences like a local. Boats, jet skis, nightlife, private services, World Cup groups and custom plans through WhatsApp."\>

Add section headings with real text, not only JS-rendered text where possible.

Use semantic structure:

\<header\>  
\<main\>  
\<section\>  
\<footer\>

Add alt text for important images.

---

## **20\. Accessibility Improvements**

The page should include:

Keyboard-accessible cards  
Visible focus states  
Button labels  
aria-labels for icons  
Esc to close modals  
Click outside to close modals  
Proper contrast  
Reduced motion support  
No important information only on hover

For cards, hover descriptions should also be visible in the detail modal.

---

## **21\. Content Quality Rules**

Keep copy short and useful.

Avoid:

Overly poetic text  
Fake luxury language  
Too much marketing fluff  
Long paragraphs  
Repeated phrases  
Unclear claims

Prefer:

Direct  
Useful  
Specific  
Premium  
Trustworthy  
Local

Example rewrite:

Bad:

Experience the magical dream of Mallorca in unforgettable luxury.

Good:

Private yacht day with route, timing and extras arranged around your group.  
---

## **22\. Language System Improvements**

Keep the existing languages if possible:

ES  
EN  
DE  
FR  
IT  
AR  
RU

But make English and Spanish the priority.

If not all new Private Services and World Cup content can be translated immediately, use English fallback.

Do not break the language system.

---

## **23\. Public Link Organization**

Create a central link object:

const LINKS \= {  
  whatsappBase: "https://wa.me/34644075065",  
  whatsappNumber: "34644075065",  
  bcmTicket: "https://top-3-prs-brand.sumupstore.com/product/bcm-pre-sale-ticket",  
  boatPartyDeposit: "https://top-3-prs-brand.sumupstore.com/product/sunset-heatwave-boat-party-deposit"  
};

All WhatsApp links must be generated from this object.

Do not hardcode the WhatsApp number in multiple places.

---

## **24\. Data Cleaning Rules**

Clean current data issues:

Replace price “EUR” with a real label or “On request”  
Replace “Premium” as price with “On request” or a real from-price  
Standardize “Todo el ano” to “Todo el año” in Spanish if accents are supported  
Fix “Geoeffnet” if German accents are supported, or keep ASCII consistently  
Fix inconsistent “pax”, “persons”, “guests”  
Fix “Dep.” wording for client-facing copy  
Use “Deposit” instead of unclear abbreviations  
---

## **25\. Recommended Priority Order for Activities**

When rendering featured or default order, use this priority:

1\. Jet Ski Tour  
2\. Boat Rental  
3\. EOLO 830  
4\. Absolute 62 FLY  
5\. Sunset Heatwave Boat Party  
6\. BCM Nightlife  
7\. MCP Club Pass  
8\. Beach Club / premium beach experiences  
9\. Private Services  
10\. Free local guides  
---

## **26\. Suggested New Section Copy**

### **Private Services**

Private services

For groups, celebrations and clients who want everything arranged privately. Tell us your date, group size and budget, and we will suggest the best option.

### **World Cup**

World Cup Mallorca

Coming to Mallorca with a group? We organize boats, nightlife, private services, transport, restaurants and custom plans around your dates.

### **Contact**

Not sure what to book?

Send us your dates, group size and idea. We will reply on WhatsApp with the best options.  
---

## **27\. Itinerary Dock Improvement**

The “Add to plan” feature should feel useful.

When users add items, the dock should show:

Number of selected experiences  
Estimated from-price total  
Button: Send plan  
Secondary: Clear plan

When user clicks Send plan, WhatsApp message:

Hi MallorcasLocal, I want help planning this itinerary:

Selected experiences:  
1\. \[Experience\]  
2\. \[Experience\]  
3\. \[Experience\]

Estimated from-price total:  
Dates:  
Guests:  
Notes:

Please suggest the best order, timing and availability.  
Source: MallorcasLocal itinerary  
---

## **28\. Form Validation**

All forms should validate:

Name required  
Date required  
Guests required  
At least one activity or inquiry type required  
Phone required only for private/contact forms

If validation fails, show a small toast:

Please complete the required fields.  
---

## **29\. Error Prevention**

Make sure:

No undefined variables  
No duplicate const names  
No broken onclick references  
No reference to missing element IDs  
No mixed button/a tag closing errors  
No duplicated id="ml-enhancement-patch"  
No duplicate function definitions  
No console errors on first load  
---

## **30\. Final Developer Instruction**

Do not simply paste patches on top of the current HTML.

Refactor the HTML into a cleaner final version.

Preserve the existing look and the useful public data, but rebuild the structure so it is maintainable.

The final result must be one complete HTML file with clean CSS, clean JS, structured data, sections, modals and working WhatsApp flows.

No private commission, margin or supplier information should appear in the code or UI.  
---

# **Final Complementary Prompt to Paste**

Additional requirements:

Improve the HTML as a real booking platform, not just a visual landing.

Create a clear user journey for:  
1\. users who know what they want,  
2\. users looking for ideas,  
3\. users requesting private services,  
4\. World Cup or group visitors,  
5\. users who need a custom inquiry.

Every section must have a strong CTA connected to WhatsApp or a booking/inquiry modal.

Use section IDs:  
\#home  
\#book  
\#private-services  
\#world-cup  
\#collections  
\#gallery  
\#pricing  
\#partners  
\#contact

Refactor the activity database into a cleaner public data model with:  
id, slug, category, featured, premium, bookable, title, location, public price, booking method, logistics, description, highlights, included, requirements, media, tags and map URL.

Do not include any internal supplier price, commission, margin or private partner note.

Improve pricing labels:  
\- Fixed price  
\- From price  
\- Deposit \+ remaining payment  
\- On request  
\- Free local guide

For deposit-based activities, show:  
Total price  
Reserve now / deposit  
Pay at venue

Improve activity cards with:  
badge, image, title, location, public price, tags, short description, primary CTA, secondary CTA and optional map button.

Improve detail modals with:  
large image, title, location, price, description, highlights, included, important notes, gallery, CTA, add to plan and map link.

Create a premium Private Services section with:  
Private Yacht Day, VIP Nightlife, Private Driver, Airport Transfer, Private Boat Party, Birthday Planning, Bachelor / Bachelorette Groups, Bottle Service, Shisha Service, Restaurant Booking, Full-Day Custom Mallorca Plan and Luxury Concierge.

Create a dedicated World Cup Mallorca section focused on group planning:  
group bookings, nightlife packages, boat days, VIP tables, transport, restaurants, match-day plans and full weekend itineraries.

Improve the inquiry/contact form with:  
Name, WhatsApp, Date, Guests, Inquiry Type, Budget and Message.

All WhatsApp messages must be structured with line breaks and include:  
Source: MallorcasLocal

Improve mobile UX:  
large tap areas, sticky CTA, scrollable filters, scrollable modals, no horizontal overflow and two-tap booking flow.

Improve performance:  
lazy-load images, use Cloudinary transformations, reduce duplicated JS/CSS, use one source of truth for links, data and WhatsApp messages.

Improve SEO:  
semantic HTML, proper title, meta description, alt text and visible section headings.

Improve accessibility:  
keyboard navigation, aria-labels, visible focus states, Esc to close modals, reduced motion support and proper contrast.

Clean the code:  
remove duplicated scripts, duplicated CSS patches, broken references, inline styles where possible, and all duplicate function definitions.

Final output must be a complete, clean, production-ready single HTML file.

# COMPLEMENTARY IMAGE / GALLERY SPECIFICATION BLOCK

Aquí tienes un **bloque complementario específico para imágenes, galería y relleno de cards existentes**. Puedes pegarlo junto al HTML actual y las instrucciones anteriores.

---

# **COMPLEMENTARY IMAGE / GALLERY SPECIFICATION BLOCK**

## **MallorcasLocal Media Expansion v1**

Use this block to expand the current MallorcasLocal page with the new Cloudinary image assets.

The goal is to improve:

1\. Activity cards  
2\. Detail modals  
3\. Gallery section  
4\. Private Services visuals  
5\. Beach and viewpoint collections  
6\. Shisha and bottle service presentation  
7\. Mallorca lifestyle / local guide feeling

Do not replace the full design system. Keep the current premium dark style, gold accent, image cards, rounded corners, gallery grid, lightbox and mobile-first layout.

---

## **1\. Main Instruction**

Add the following images into the current page using the existing image logic:

\- Use them as gallery images where they are general lifestyle or landscape assets.  
\- Use them as cover images where they clearly match an existing card.  
\- Use them as detail modal gallery images for specific activities.  
\- Do not expose internal supplier information.  
\- Do not add private commission or partner margin information.  
\- Keep only client-facing useful content.  
---

## **2\. New Media Data Object**

Create a central media object like this:

const MEDIA \= {  
  shishaService: \[  
    "https://res.cloudinary.com/dmm8bz2gj/image/upload/v1777577854/IMG\_7148\_lznhtu.jpg",  
    "https://res.cloudinary.com/dmm8bz2gj/image/upload/v1777577854/IMG\_7147\_lwi4yw.jpg",  
    "https://res.cloudinary.com/dmm8bz2gj/image/upload/v1777577854/IMG\_7139\_wgykdn.jpg",  
    "https://res.cloudinary.com/dmm8bz2gj/image/upload/v1777577855/IMG\_7141\_mzaegr.jpg"  
  \],

  bottleService: \[  
    "https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018088/IMG\_4812\_be5wig.jpg",  
    "https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018087/IMG\_5714\_rka3f8.jpg"  
  \],

  viewpoints: {  
    saForadada: \[  
      "https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018088/IMG\_7149\_ps5dkd.jpg"  
    \],  
    serraTramuntanaRoads: \[  
      "https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018087/IMG\_0865\_2\_knhmby.jpg"  
    \]  
  },

  palma: {  
    downtown: \[  
      "https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018087/IMG\_4569\_bhdu2t.jpg"  
    \]  
  },

  beaches: {  
    puntaNegra: \[  
      "https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018777/IMG\_7746\_yiavnq.jpg",  
      "https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018777/IMG\_0047\_nsc1nw.jpg"  
    \],

    portalsVells: \[  
      "https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018777/7E36ADC6-9DBA-4991-9299-5AA46B900EA5\_fnquwo.jpg"  
    \],

    elMago: \[  
      "https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018776/IMG\_8253\_fygjqz.jpg"  
    \],

    santElm: \[  
      "https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018769/IMG\_9221\_y6op7h.jpg",  
      "https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018773/IMG\_2021\_sum8y5.jpg",  
      "https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018776/IMG\_2026\_teizxh.jpg"  
    \],

    calaVinas: \[  
      "https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018775/IMG\_0686\_spye1e.jpg"  
    \],

    calaBeltran: \[  
      "https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018774/IMG\_7733\_lutkvz.jpg",  
      "https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018773/IMG\_9007\_lzeomb.jpg"  
    \],

    magaluf: \[  
      "https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018772/IMG\_4720\_oju6em.jpg"  
    \],

    calaMalgrats: \[  
      "https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018774/IMG\_4870\_iqqkns.jpg"  
    \],

    playaSonMatias: \[  
      "https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018769/IMG\_6759\_gbrpd0.jpg"  
    \]  
  },

  lifestyleGallery: \[  
    "https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018775/IMG\_8746\_stksoi.jpg",  
    "https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018778/IMG\_9209\_h1zy27.jpg",  
    "https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018773/IMG\_0372\_jtwvag.jpg",  
    "https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018772/IMG\_0380\_t9dkjw.jpg",  
    "https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018770/IMG\_9353\_v5xiwp.jpg",  
    "https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018769/IMG\_0943\_sbybfl.jpg",  
    "https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018770/91DDE83A-7633-4A37-AE90-230FE230D8B4-1860073F-D3E2-47FE-B43B-BA587606BC03\_asyza9.jpg",  
    "https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018770/IMG\_3190\_bdesd9.jpg",  
    "https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018768/IMG\_9416\_ppoeur.jpg",  
    "https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018768/C856CF2C-6315-4786-A5F9-7EB52C4FEB09\_vmzlyd.jpg",  
    "https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018768/IMG\_9811\_zu8xbm.jpg",  
    "https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018769/IMG\_3804\_z3t6zs.jpg"  
  \],

  venues: {  
    baobabCocktailBar: {  
      instagram: "https://www.instagram.com/baobabcocktailbar?igsh=M2piY2ZxOXd4amQ1",  
      images: \[  
        "https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018769/IMG\_6759\_gbrpd0.jpg"  
      \]  
    }  
  }  
};  
---

## **3\. Important Correction**

The same image was provided for:

Playa Son Matias  
Bao Bab Cocktail Bar

URL:

https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018769/IMG\_6759\_gbrpd0.jpg

Use it carefully.

If it visually shows a beach, assign it to Playa Son Matias.

If it visually shows the bar, assign it to Bao Bab Cocktail Bar.

If uncertain, keep it in the general gallery and do not use it as a main cover until manually verified.

---

## **4\. Existing Activities to Update**

### **Shisha Service**

Update the existing `shisha-delivery` or `shisha` card with these images.

Use one as cover:

img: MEDIA.shishaService\[0\]

Use all as gallery:

gallery: MEDIA.shishaService

Suggested public card copy:

Title: Shisha Service  
Location: Mallorca  
Price: From 100 EUR  
Tags: Delivery, Premium, Events  
Description: Premium shisha service for villas, boats, private events and selected locations.  
CTA: Request service

Client-facing detail notes:

Available for private plans, villas, boats and events.  
Final availability depends on location, timing and service setup.

Do not overexplain operational details.

---

### **Bottle Service**

Create or update the Bottle Service card.

Use:

img: MEDIA.bottleService\[0\]  
gallery: MEDIA.bottleService

Suggested public card copy:

Title: Bottle Service  
Location: Mallorca  
Price: From 50 EUR  
Tags: Boats, Events, Premium  
Description: Bottle and ice service arranged for boats, private plans and selected events.  
CTA: Request service

Use this inside Private Services as well.

---

## **5\. New Beach Cards to Add**

Add these beach guide cards if they are not already present.

These are public guide items, not paid activities.

### **Punta Negra**

{  
  id: "punta-negra",  
  slug: "punta-negra",  
  category: "beach",  
  bookable: false,  
  freeGuide: true,  
  title: {  
    en: "Punta Negra",  
    es: "Punta Negra"  
  },  
  location: {  
    area: "Calvià",  
    town: "Costa d'en Blanes",  
    island: "Mallorca"  
  },  
  price: {  
    publicLabel: {  
      en: "Free local guide",  
      es: "Guía local gratis"  
    },  
    from: 0,  
    currency: "EUR",  
    priceType: "free"  
  },  
  content: {  
    description: {  
      en: "Quiet rocky beach area with clear water, close to Portals and Palmanova.",  
      es: "Zona de playa rocosa y tranquila con agua clara, cerca de Portals y Palmanova."  
    },  
    highlights: {  
      en: \["Clear water", "Quiet spot", "Good for a short swim"\],  
      es: \["Agua clara", "Lugar tranquilo", "Buena para un baño rápido"\]  
    }  
  },  
  media: {  
    cover: MEDIA.beaches.puntaNegra\[0\],  
    gallery: MEDIA.beaches.puntaNegra  
  },  
  tags: {  
    en: \["Quiet", "Rocky", "Local"\],  
    es: \["Tranquila", "Rocosa", "Local"\]  
  }  
}  
---

### **Portals Vells**

{  
  id: "portals-vells",  
  slug: "portals-vells",  
  category: "beach",  
  bookable: false,  
  freeGuide: true,  
  title: {  
    en: "Portals Vells",  
    es: "Portals Vells"  
  },  
  location: {  
    area: "Calvià",  
    town: "Portals Vells",  
    island: "Mallorca"  
  },  
  price: {  
    publicLabel: {  
      en: "Free local guide",  
      es: "Guía local gratis"  
    },  
    from: 0,  
    currency: "EUR",  
    priceType: "free"  
  },  
  content: {  
    description: {  
      en: "Small cove with turquoise water, popular for boats, swimming and relaxed beach days.",  
      es: "Cala pequeña con agua turquesa, muy usada para barcos, baño y días de playa tranquilos."  
    },  
    highlights: {  
      en: \["Turquoise water", "Boat-friendly", "Relaxed beach day"\],  
      es: \["Agua turquesa", "Zona de barcos", "Día de playa tranquilo"\]  
    }  
  },  
  media: {  
    cover: MEDIA.beaches.portalsVells\[0\],  
    gallery: MEDIA.beaches.portalsVells  
  },  
  tags: {  
    en: \["Cove", "Boats", "Swim"\],  
    es: \["Cala", "Barcos", "Baño"\]  
  }  
}  
---

### **El Mago**

{  
  id: "el-mago",  
  slug: "el-mago",  
  category: "beach",  
  bookable: false,  
  freeGuide: true,  
  title: {  
    en: "El Mago",  
    es: "El Mago"  
  },  
  location: {  
    area: "Calvià",  
    town: "Portals Vells",  
    island: "Mallorca"  
  },  
  price: {  
    publicLabel: {  
      en: "Free local guide",  
      es: "Guía local gratis"  
    },  
    from: 0,  
    currency: "EUR",  
    priceType: "free"  
  },  
  content: {  
    description: {  
      en: "Small natural cove near Portals Vells, known for clear water and a more hidden feeling.",  
      es: "Pequeña cala natural cerca de Portals Vells, conocida por su agua clara y ambiente más escondido."  
    },  
    highlights: {  
      en: \["Natural cove", "Clear water", "Hidden feel"\],  
      es: \["Cala natural", "Agua clara", "Ambiente escondido"\]  
    }  
  },  
  media: {  
    cover: MEDIA.beaches.elMago\[0\],  
    gallery: MEDIA.beaches.elMago  
  },  
  tags: {  
    en: \["Hidden", "Natural", "Clear water"\],  
    es: \["Escondida", "Natural", "Agua clara"\]  
  }  
}  
---

### **Cala Beltrán**

{  
  id: "cala-beltran",  
  slug: "cala-beltran",  
  category: "beach",  
  bookable: false,  
  freeGuide: true,  
  title: {  
    en: "Cala Beltrán",  
    es: "Cala Beltrán"  
  },  
  location: {  
    area: "South Mallorca",  
    town: "Llucmajor",  
    island: "Mallorca"  
  },  
  price: {  
    publicLabel: {  
      en: "Free local guide",  
      es: "Guía local gratis"  
    },  
    from: 0,  
    currency: "EUR",  
    priceType: "free"  
  },  
  content: {  
    description: {  
      en: "Narrow turquoise inlet close to Cala Pi. Best for scenic views, hiking and quiet water.",  
      es: "Entrada de agua turquesa cerca de Cala Pi. Ideal para vistas, paseo y agua tranquila."  
    },  
    highlights: {  
      en: \["Turquoise inlet", "Near Cala Pi", "Scenic walk"\],  
      es: \["Entrada turquesa", "Cerca de Cala Pi", "Paseo con vistas"\]  
    }  
  },  
  media: {  
    cover: MEDIA.beaches.calaBeltran\[0\],  
    gallery: MEDIA.beaches.calaBeltran  
  },  
  tags: {  
    en: \["Hidden", "South", "Scenic"\],  
    es: \["Escondida", "Sur", "Vistas"\]  
  }  
}  
---

### **Cala Malgrats**

{  
  id: "cala-malgrats",  
  slug: "cala-malgrats",  
  category: "beach",  
  bookable: false,  
  freeGuide: true,  
  title: {  
    en: "Cala Malgrats",  
    es: "Cala Malgrats"  
  },  
  location: {  
    area: "Calvià",  
    town: "Santa Ponça",  
    island: "Mallorca"  
  },  
  price: {  
    publicLabel: {  
      en: "Free local guide",  
      es: "Guía local gratis"  
    },  
    from: 0,  
    currency: "EUR",  
    priceType: "free"  
  },  
  content: {  
    description: {  
      en: "Coastal spot with views towards the Malgrats islands, good for sunset and local walks.",  
      es: "Zona de costa con vistas hacia las Islas Malgrats, buena para atardecer y paseo local."  
    },  
    highlights: {  
      en: \["Malgrats views", "Sunset", "Local walk"\],  
      es: \["Vistas a Malgrats", "Atardecer", "Paseo local"\]  
    }  
  },  
  media: {  
    cover: MEDIA.beaches.calaMalgrats\[0\],  
    gallery: MEDIA.beaches.calaMalgrats  
  },  
  tags: {  
    en: \["Sunset", "Views", "Local"\],  
    es: \["Atardecer", "Vistas", "Local"\]  
  }  
}  
---

## **6\. Existing Beach Cards to Improve**

Update existing cards with these new images.

### **Sant Elm**

Use:

img: MEDIA.beaches.santElm\[0\],  
gallery: MEDIA.beaches.santElm

Keep existing description but improve it:

Sant Elm with views over Dragonera Natural Park. Good for sunset, calm walks and relaxed seaside restaurants.  
---

### **Cala Viñas**

Use:

img: MEDIA.beaches.calaVinas\[0\],  
gallery: MEDIA.beaches.calaVinas

Improved copy:

Quiet cove near Magaluf with clear water, soft sand and easy access.  
---

### **Magaluf Beach**

Use:

img: MEDIA.beaches.magaluf\[0\],  
gallery: MEDIA.beaches.magaluf

Suggested copy:

Wide beach with beach clubs, bars, restaurants and easy access to nightlife.  
---

### **Playa Son Matias**

Create if not existing:

{  
  id: "playa-son-matias",  
  slug: "playa-son-matias",  
  category: "beach",  
  bookable: false,  
  freeGuide: true,  
  title: {  
    en: "Playa Son Matias",  
    es: "Playa Son Matias"  
  },  
  location: {  
    area: "Calvià",  
    town: "Palmanova",  
    island: "Mallorca"  
  },  
  price: {  
    publicLabel: {  
      en: "Free local guide",  
      es: "Guía local gratis"  
    },  
    from: 0,  
    currency: "EUR",  
    priceType: "free"  
  },  
  content: {  
    description: {  
      en: "Easy beach between Palmanova and Magaluf, with restaurants, hotels and calm access.",  
      es: "Playa fácil entre Palmanova y Magaluf, con restaurantes, hoteles y acceso cómodo."  
    }  
  },  
  media: {  
    cover: MEDIA.beaches.playaSonMatias\[0\],  
    gallery: MEDIA.beaches.playaSonMatias  
  },  
  tags: {  
    en: \["Easy access", "Family", "Restaurants"\],  
    es: \["Acceso fácil", "Familiar", "Restaurantes"\]  
  }  
}  
---

## **7\. Viewpoint and Mountain Updates**

### **Sa Foradada**

Update existing `sa-foradada` card:

img: MEDIA.viewpoints.saForadada\[0\],  
gallery: MEDIA.viewpoints.saForadada

Improved copy:

Iconic viewpoint near Deià. Best before sunset, with dramatic Tramuntana coastline views.  
---

### **Serra de Tramuntana Mountain Roads**

Update existing `tramuntana-roads` card:

img: MEDIA.viewpoints.serraTramuntanaRoads\[0\],  
gallery: MEDIA.viewpoints.serraTramuntanaRoads

Improved copy:

Mountain road route through the Serra de Tramuntana with curves, stone villages, viewpoints and sea views.  
---

## **8\. Palma Downtown Update**

Create or improve a Palma Downtown / Old Town card.

Use:

img: MEDIA.palma.downtown\[0\],  
gallery: MEDIA.palma.downtown

Suggested card:

{  
  id: "palma-downtown",  
  slug: "palma-downtown",  
  category: "culture",  
  bookable: false,  
  freeGuide: true,  
  title: {  
    en: "Palma Downtown",  
    es: "Centro de Palma"  
  },  
  location: {  
    area: "Palma",  
    town: "Palma",  
    island: "Mallorca"  
  },  
  price: {  
    publicLabel: {  
      en: "Free local guide",  
      es: "Guía local gratis"  
    },  
    from: 0,  
    currency: "EUR",  
    priceType: "free"  
  },  
  content: {  
    description: {  
      en: "Walk through Palma’s old streets, cafés, shops, terraces and local city corners.",  
      es: "Paseo por las calles antiguas de Palma, cafés, tiendas, terrazas y rincones locales."  
    }  
  },  
  media: {  
    cover: MEDIA.palma.downtown\[0\],  
    gallery: MEDIA.palma.downtown  
  },  
  tags: {  
    en: \["City walk", "Shops", "Cafés"\],  
    es: \["Paseo urbano", "Tiendas", "Cafés"\]  
  }  
}  
---

## **9\. Bao Bab Cocktail Bar**

Add this as a food/nightlife card only if the image is confirmed to match the venue.

Instagram:

https://www.instagram.com/baobabcocktailbar?igsh=M2piY2ZxOXd4amQ1

Suggested card:

{  
  id: "baobab-cocktail-bar",  
  slug: "baobab-cocktail-bar",  
  category: "food",  
  bookable: false,  
  freeGuide: false,  
  title: {  
    en: "Bao Bab Cocktail Bar",  
    es: "Bao Bab Cocktail Bar"  
  },  
  location: {  
    area: "Mallorca",  
    town: "To confirm",  
    island: "Mallorca"  
  },  
  price: {  
    publicLabel: {  
      en: "On request",  
      es: "Consultar"  
    },  
    from: null,  
    currency: "EUR",  
    priceType: "on\_request"  
  },  
  booking: {  
    method: "external",  
    externalUrl: "https://www.instagram.com/baobabcocktailbar?igsh=M2piY2ZxOXd4amQ1"  
  },  
  content: {  
    description: {  
      en: "Cocktail bar option to include in a local nightlife or evening plan.",  
      es: "Opción de cocktail bar para incluir en un plan de noche o tardeo local."  
    }  
  },  
  media: {  
    cover: MEDIA.venues.baobabCocktailBar.images\[0\],  
    gallery: MEDIA.venues.baobabCocktailBar.images  
  },  
  tags: {  
    en: \["Cocktails", "Evening", "Local"\],  
    es: \["Cócteles", "Tardeo", "Local"\]  
  }  
}

Important:

Do not use this card as a confirmed partner unless partnership is confirmed.  
Use “local suggestion” or “cocktail bar option” instead.  
---

## **10\. Gallery Pool Update**

Replace or extend the current `galleryPool` with a merged version:

const galleryPool \= \[  
  ...MEDIA.shishaService,  
  ...MEDIA.bottleService,  
  ...MEDIA.viewpoints.saForadada,  
  ...MEDIA.viewpoints.serraTramuntanaRoads,  
  ...MEDIA.palma.downtown,  
  ...MEDIA.beaches.puntaNegra,  
  ...MEDIA.beaches.portalsVells,  
  ...MEDIA.beaches.elMago,  
  ...MEDIA.beaches.santElm,  
  ...MEDIA.beaches.calaVinas,  
  ...MEDIA.beaches.calaBeltran,  
  ...MEDIA.beaches.magaluf,  
  ...MEDIA.beaches.calaMalgrats,  
  ...MEDIA.beaches.playaSonMatias,  
  ...MEDIA.lifestyleGallery  
\];

Before rendering, remove duplicates:

const uniqueGalleryPool \= \[...new Set(galleryPool)\];

Use `uniqueGalleryPool` in the gallery renderer.

---

## **11\. Cloudinary Optimization Rule**

Every Cloudinary image should be rendered with transformations.

For cards:

w\_640,h\_800,c\_fill,q\_auto,f\_auto

For square gallery:

w\_600,h\_600,c\_fill,q\_auto,f\_auto

For thumbnails:

w\_120,h\_120,c\_fill,q\_auto,f\_auto

Create a helper function:

function cld(url, transform \= "w\_640,h\_800,c\_fill,q\_auto,f\_auto") {  
  if (\!url || \!url.includes("res.cloudinary.com")) return url;  
  if (url.includes("/upload/")) {  
    return url.replace("/upload/", \`/upload/${transform}/\`);  
  }  
  return url;  
}

Use it like:

\<img src="${cld(imageUrl)}" loading="lazy" decoding="async"\>  
---

## **12\. Gallery Section UX Improvement**

The gallery section should not be random only. Add filters:

All  
Boats  
Shisha  
Bottle service  
Beaches  
Viewpoints  
Palma  
Lifestyle

Each image should optionally include:

{  
  url: "",  
  group: "beaches",  
  title: "Punta Negra",  
  alt: "Punta Negra beach in Mallorca"  
}

Better gallery model:

const GALLERY\_ITEMS \= \[  
  {  
    url: MEDIA.shishaService\[0\],  
    group: "shisha",  
    title: "Shisha Service",  
    alt: "Premium shisha service in Mallorca"  
  },  
  {  
    url: MEDIA.bottleService\[0\],  
    group: "bottle",  
    title: "Bottle Service",  
    alt: "Bottle service for private plans in Mallorca"  
  },  
  {  
    url: MEDIA.beaches.puntaNegra\[0\],  
    group: "beaches",  
    title: "Punta Negra",  
    alt: "Punta Negra beach in Mallorca"  
  },  
  {  
    url: MEDIA.viewpoints.saForadada\[0\],  
    group: "viewpoints",  
    title: "Sa Foradada",  
    alt: "Sa Foradada viewpoint in Mallorca"  
  }  
\];  
---

## **13\. Design Instructions for New Gallery**

Keep the same current design language:

Dark background  
Gold accent  
Large first image  
Masonry or square grid  
Hover zoom  
Lightbox  
Mobile 2-column grid  
No heavy captions over every image  
Subtle caption only on hover or detail

Mobile rule:

On mobile, avoid tiny images. Use 2 columns maximum.

Desktop rule:

Use a stronger visual rhythm: one large featured image \+ smaller supporting images.  
---

## **14\. Recommended Image Assignment Summary**

Use this practical assignment:

Shisha Service card:  
\- IMG\_7148 as cover  
\- IMG\_7147, IMG\_7139, IMG\_7141 as gallery

Bottle Service card:  
\- IMG\_4812 as cover  
\- IMG\_5714 as gallery

Sa Foradada card:  
\- IMG\_7149 as cover

Palma Downtown / Old Town card:  
\- IMG\_4569 as cover

Serra de Tramuntana Roads card:  
\- IMG\_0865\_2 as cover

Punta Negra card:  
\- IMG\_7746 as cover  
\- IMG\_0047 as gallery

Portals Vells card:  
\- 7E36ADC6... as cover

El Mago card:  
\- IMG\_8253 as cover

Sant Elm card:  
\- IMG\_9221 as cover  
\- IMG\_2021 and IMG\_2026 as gallery

Cala Viñas card:  
\- IMG\_0686 as cover

Cala Beltrán card:  
\- IMG\_7733 as cover  
\- IMG\_9007 as gallery

Magaluf beach card:  
\- IMG\_4720 as cover

Cala Malgrats card:  
\- IMG\_4870 as cover

Other gallery images:  
\- Add to general lifestyle gallery  
---

## **15\. Final Prompt to Paste**

Additional image and gallery requirements:

Use the provided Cloudinary links to expand the MallorcasLocal media system.

Create a central MEDIA object grouped by:  
shishaService,  
bottleService,  
viewpoints,  
palma,  
beaches,  
lifestyleGallery,  
venues.

Use Shisha images to update the Shisha Service card and detail gallery.  
Use Bottle Service images to update or create the Bottle Service card and detail gallery.  
Use Sa Foradada, Serra de Tramuntana and Palma Downtown images to update those guide cards.  
Create or update beach cards for Punta Negra, Portals Vells, El Mago, Sant Elm, Cala Viñas, Cala Beltrán, Magaluf, Cala Malgrats and Playa Son Matias.  
Add all remaining images to the general gallery.

Do not include any private commission, margin or supplier information.  
Only show client-facing useful content: title, location, public price label, short description, highlights, tags, CTA and gallery.

Use Cloudinary transformations for performance:  
cards: w\_640,h\_800,c\_fill,q\_auto,f\_auto  
gallery: w\_600,h\_600,c\_fill,q\_auto,f\_auto  
thumbnails: w\_120,h\_120,c\_fill,q\_auto,f\_auto

Create a helper function cld(url, transform) and use it for all Cloudinary images.

Remove duplicate image URLs before rendering the gallery.

Improve the gallery with filters:  
All, Shisha, Bottle Service, Beaches, Viewpoints, Palma, Lifestyle.

Keep the current dark premium design, gold accent, hover zoom, rounded cards, lightbox and mobile-first layout.

On mobile, use maximum 2 gallery columns.  
On desktop, use one large featured image with smaller supporting images.

If the same image appears assigned to Playa Son Matias and Bao Bab Cocktail Bar, do not use it as Bao Bab cover unless visually verified. Keep Bao Bab as optional venue card with Instagram link only.

Final output must integrate these media assets into the existing complete HTML cleanly, without duplicated scripts, duplicated CSS patches or broken references.

# MASTER INSTRUCTION — Website Transformation

Aquí tienes la **respuesta final lista para copiar y enviar junto al HTML actual y todos los componentes**.

---

# **MASTER INSTRUCTION — MallorcasLocal Full Website Transformation**

You are transforming the current MallorcasLocal single HTML page into a complete premium multi-section / multi-page platform.

The current HTML already contains the correct brand base: dark luxury style, champagne gold accent, WhatsApp booking flow, multilingual support, light/dark mode, categories, venue cards, gallery, pricing blocks, partners, modals, cart dock, favorites, and optimized Cloudinary image handling. Keep this foundation and upgrade it into a more complete platform.

The final result must feel like a **premium Mallorca concierge platform**, not a generic activity listing.

Core identity:

Brand: MallorcasLocal  
Tagline: Book Mallorca like a local  
Business model: WhatsApp-based booking marketplace for Mallorca experiences  
Main CTA: WhatsApp booking  
WhatsApp number: 34644075065  
Tone: premium, direct, trustworthy, local, no exaggerated luxury language  
Style: silent luxury, dark UI, cinematic images, champagne gold accent

Use the current design system as the visual foundation. The existing spec defines the “silent luxury” system with dark backgrounds, translucent borders, champagne gold, DM Sans for UI text, Playfair Display for headings, glassy cards, light mode override, RTL support, and restrained motion. Keep those rules as the base visual language.  

---

# **1\. Final Page Structure**

Transform the current site into this structure:

/  
Home

/book  
Book Experiences

/private-services  
Private Services

/world-cup  
World Cup Mallorca

/contact  
Contact / Inquiries

/about  
Optional About page

/faq  
Optional FAQ page

If the project remains a single HTML file, simulate the pages with sections and hash routes:

\#home  
\#book  
\#private-services  
\#world-cup  
\#contact  
\#about  
\#faq

If the project is moved to Next.js, use real routes:

app/page.tsx  
app/book/page.tsx  
app/private-services/page.tsx  
app/world-cup/page.tsx  
app/contact/page.tsx  
app/about/page.tsx  
app/faq/page.tsx

The uploaded component library is React/Next.js oriented and expects React, Tailwind, Motion, `clsx`, `tailwind-merge`, and a `cn()` helper when using the Aceternity-style components.  

---

# **2\. Global Rules**

## **Keep**

Keep the dark premium design.  
Keep the champagne gold accent.  
Keep the current Cloudinary image system.  
Keep WhatsApp as the main conversion flow.  
Keep multilingual support.  
Keep light/dark mode.  
Keep favorites.  
Keep add-to-plan/cart dock.  
Keep search.  
Keep activity filters.  
Keep detail modals.  
Keep the image lightbox.  
Keep mobile-first layout.  
Keep performance optimization.

## **Improve**

Improve navigation.  
Improve page hierarchy.  
Improve content structure.  
Improve booking clarity.  
Improve private service presentation.  
Improve gallery organization.  
Improve trust and conversion sections.  
Improve contact/inquiry forms.  
Improve World Cup landing page.  
Improve component reuse.  
Improve responsiveness.  
Improve accessibility.  
Improve image consistency.

## **Remove or avoid**

Do not show private commission information.  
Do not show internal supplier margins.  
Do not show “we earn” or “commission” language.  
Do not expose partner-side financial logic.  
Do not overuse animations.  
Do not add emojis.  
Do not make it look like a nightclub flyer.  
Do not use bright yellow gold.  
Do not mix too many component styles.  
Do not break WhatsApp booking flow.

Client-facing prices may show:

Total price  
From price  
Deposit to reserve  
Remaining amount at venue  
What is included  
What is not included  
Availability subject to confirmation

Private information must stay out of the page.

---

# **3\. Main Navigation**

Create a premium fixed or floating navigation with these items:

Home  
Book  
Private Services  
World Cup  
Gallery  
Contact

Desktop:

Logo left  
Navigation center or right  
Language selector  
Theme toggle  
WhatsApp CTA

Mobile:

Logo left  
Menu button right  
Bottom sticky CTA or WhatsApp floating button  
Language and theme inside menu

Recommended component use:

Resizable Navbar or Floating Navbar for the main header.  
Sticky Banner only for temporary announcements.  
Night/day component for theme toggle.

The Aceternity inventory specifically includes navigation components like Resizable Navbar, Sticky Banner, and form-related components that fit this type of premium marketing site.  

---

# **4\. Home Page**

The Home page must sell the whole concept quickly.

## **Sections**

Hero  
Trust bar  
Featured experiences  
How it works  
Top categories  
Gallery preview  
Why book with us  
Final WhatsApp CTA

## **Hero**

Use the current yacht/sea visual style but make it more cinematic.

Content:

Headline:  
Book Mallorca like a local.

Subheadline:  
Boats, jet skis, beach clubs, nightlife, private services and hidden spots. Direct WhatsApp booking, curated local recommendations and no unnecessary steps.

Primary CTA:  
Book now

Secondary CTA:  
Explore experiences

Recommended components:

Aurora Background or Spotlight for subtle premium atmosphere.  
Parallax Hero Images only if image count is optimized.  
Hero Highlight for the word “local”.  
Text Generate Effect or Encrypted Text only for a short phrase, not full paragraphs.

Use animation carefully. The component inventory warns that heavy effects such as camera, WebGL, particles, and constant animated backgrounds should be avoided on performance-critical pages or used sparingly.  

## **Trust bar**

Use:

44+ experiences  
4.8 rating  
\<1h WhatsApp reply  
Direct booking

Do not use:

0 EUR commissions

Replace with:

No hidden platform fees  
---

# **5\. Book Page**

The Book page is the main conversion page.

## **Purpose**

A full booking marketplace where users can filter and select experiences.

## **Must include**

Category tabs  
Search  
Sort by featured / price low / price high  
Experience cards  
Add to plan  
Favorites  
Detail modal  
WhatsApp booking  
Gallery images per activity  
Price clarity

## **Categories**

Water  
Boat Rentals  
Jet Ski  
Beach Clubs  
Nightlife  
Food & Drinks  
Viewpoints  
Culture  
Mountain Routes  
Private Add-ons

## **Card structure**

Each card must show:

Image  
Badge  
Title  
Location  
Short description  
Price  
Duration or key info  
Tags  
Book button  
Add to plan button  
Map button if available

## **Price display rules**

Use:

From 99 EUR  
Deposit 10 EUR \+ remaining at venue  
Total 35 EUR  
On request  
Included: transport / fuel / snorkel / drinks / etc.

Never show internal commission or supplier margin.

## **Booking modal**

The booking modal must collect:

Name  
Phone  
Activity  
Date  
Number of guests  
Hotel / pickup point if relevant  
Budget optional  
Notes

WhatsApp message must include:

Activity selected  
Date  
Guests  
Pickup  
Price shown  
Request to confirm availability and final price  
---

# **6\. Private Services Page**

This page should look more exclusive and less marketplace-like.

## **Purpose**

For add-ons and personalized requests.

## **Services to include**

Shisha delivery  
Bottle service  
Private boat add-ons  
Private transport  
VIP table help  
Event planning  
Birthday planning  
Private group experiences  
Custom itinerary

## **Shisha service**

Use the new gallery images:

https://res.cloudinary.com/dmm8bz2gj/image/upload/v1777577854/IMG\_7148\_lznhtu.jpg  
https://res.cloudinary.com/dmm8bz2gj/image/upload/v1777577854/IMG\_7147\_lwi4yw.jpg  
https://res.cloudinary.com/dmm8bz2gj/image/upload/v1777577854/IMG\_7139\_wgykdn.jpg  
https://res.cloudinary.com/dmm8bz2gj/image/upload/v1777577855/IMG\_7141\_mzaegr.jpg

Client-facing info:

Premium shisha delivery in Mallorca  
Rental from 100 EUR / 24h  
Specialist service from 150 EUR / 6h  
Catering from 100 EUR  
Flavours available on request  
One-week rental discount available

## **Bottle service**

Use:

https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018088/IMG\_4812\_be5wig.jpg  
https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018087/IMG\_5714\_rka3f8.jpg

Client-facing info:

Bottle and ice service for boats, villas or private events  
From 50 EUR  
Availability depends on location and date

## **Recommended components**

Bento Grid for service categories.  
Card Hover Effect or Glare Card for private service cards.  
Animated Modal for inquiry forms.  
Multi Step Loader for booking status: request received, checking availability, preparing WhatsApp, opening conversation.

The MultiStepLoader file already provides a modal-style loader structure with loading states, duration, and a close button pattern. Replace the demo texts with booking-specific steps.  

Example loader states:

Checking selected service  
Preparing your request  
Confirming required details  
Opening WhatsApp  
---

# **7\. World Cup Page**

Create a dedicated World Cup landing page.

## **Purpose**

A high-conversion landing page for visitors coming to Mallorca during World Cup periods or football-related travel/events.

## **Sections**

Hero  
Why Mallorca during World Cup  
Group experiences  
Boat day packages  
Nightlife packages  
Private viewing / table requests  
Transport and logistics  
Inquiry form  
WhatsApp CTA  
FAQ

## **Tone**

Premium group planning  
No generic tourism copy  
Direct, useful, booking-focused

## **Possible packages**

Boat day before match night  
Private group itinerary  
VIP nightlife plan  
Beach club day  
Shisha and bottle service  
Transport coordination  
Restaurant and table inquiry

## **CTA**

Plan my World Cup trip  
Request group availability  
Talk to MallorcasLocal  
---

# **8\. Contact / Inquiries Page**

This page must be simple and conversion-focused.

## **Include**

Contact hero  
Inquiry form  
WhatsApp direct CTA  
FAQ preview  
Response time promise  
Type of request selector

## **Form fields**

Name  
Phone / WhatsApp  
Email optional  
Type of request  
Date  
Group size  
Budget  
Message  
Preferred language

## **Request types**

Boat rental  
Jet ski  
Nightlife  
Private service  
World Cup group  
Custom itinerary  
Partnership  
Other

## **WhatsApp output message**

Hi MallorcasLocal, I want to make an inquiry.

Name:  
Request type:  
Date:  
Group size:  
Budget:  
Message:  
Preferred language:

Please confirm the best option and availability.

Use the existing ContactPage.tsx and FAQPage.tsx/FAQSection.tsx uploads as structural references if moving to Next.js.

---

# **9\. About Page**

Optional but recommended.

## **Purpose**

Build trust.

## **Sections**

Who we are  
Why MallorcasLocal exists  
How direct booking works  
Our local categories  
Partner approach  
Safety and transparency  
CTA to book

## **Copy direction**

We curate Mallorca experiences through local knowledge and direct WhatsApp booking.  
We help visitors avoid confusion, scattered links and unclear offers.  
We organize clear options for boats, jet skis, nightlife, private services, beach spots and local plans.

Do not overpromise. Do not say everything is guaranteed. Use “subject to availability”.

---

# **10\. FAQ Page / FAQ Section**

Add FAQ globally and on relevant pages.

## **Core FAQs**

How do I book?  
Do I pay online or at the venue?  
Is the price final?  
Can I reserve with a deposit?  
Do you arrange transport?  
Can I book for groups?  
Can I request a private service?  
What languages do you support?  
What happens after I send a WhatsApp request?  
Can I change the date?

## **Answer style**

Short, direct, client-friendly.

Example:

Most experiences can be requested directly through WhatsApp. Some activities require a deposit to reserve your place, while others are confirmed manually depending on date, weather, group size and availability.  
---

# **11\. Gallery System**

Use the new images to improve both:

Main visual gallery  
Individual cards  
Collection pages  
Private services page  
Beach/detail modals

## **Add image categories**

gallery.privateServices  
gallery.shisha  
gallery.bottleService  
gallery.viewpoints  
gallery.palma  
gallery.tramuntana  
gallery.beaches  
gallery.santElm  
gallery.calaVinas  
gallery.calaBeltran  
gallery.magaluf  
gallery.sonMatias  
gallery.cocktailBars

## **New gallery image mapping**

### **Shisha**

https://res.cloudinary.com/dmm8bz2gj/image/upload/v1777577854/IMG\_7148\_lznhtu.jpg  
https://res.cloudinary.com/dmm8bz2gj/image/upload/v1777577854/IMG\_7147\_lwi4yw.jpg  
https://res.cloudinary.com/dmm8bz2gj/image/upload/v1777577854/IMG\_7139\_wgykdn.jpg  
https://res.cloudinary.com/dmm8bz2gj/image/upload/v1777577855/IMG\_7141\_mzaegr.jpg

### **Bottle Service**

https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018088/IMG\_4812\_be5wig.jpg  
https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018087/IMG\_5714\_rka3f8.jpg

### **Sa Foradada / Viewpoint**

https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018088/IMG\_7149\_ps5dkd.jpg

### **Palma Downtown**

https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018087/IMG\_4569\_bhdu2t.jpg

### **Serra de Tramuntana**

https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018087/IMG\_0865\_2\_knhmby.jpg

### **Beaches**

Punta Negra:  
https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018777/IMG\_7746\_yiavnq.jpg  
https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018777/IMG\_0047\_nsc1nw.jpg

Portals Vells:  
https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018777/7E36ADC6-9DBA-4991-9299-5AA46B900EA5\_fnquwo.jpg

El Mago:  
https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018776/IMG\_8253\_fygjqz.jpg

Sant Elm:  
https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018769/IMG\_9221\_y6op7h.jpg  
https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018773/IMG\_2021\_sum8y5.jpg  
https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018776/IMG\_2026\_teizxh.jpg

Cala Viñas:  
https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018775/IMG\_0686\_spye1e.jpg

Cala Beltran:  
https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018774/IMG\_7733\_lutkvz.jpg  
https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018773/IMG\_9007\_lzeomb.jpg

Magaluf:  
https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018772/IMG\_4720\_oju6em.jpg

Cala Malgrats:  
https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018774/IMG\_4870\_iqqkns.jpg

Playa Son Matias:  
https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018769/IMG\_6759\_gbrpd0.jpg

### **Other Gallery Images**

https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018775/IMG\_8746\_stksoi.jpg  
https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018778/IMG\_9209\_h1zy27.jpg  
https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018773/IMG\_0372\_jtwvag.jpg  
https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018772/IMG\_0380\_t9dkjw.jpg  
https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018770/IMG\_9353\_v5xiwp.jpg  
https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018769/IMG\_0943\_sbybfl.jpg  
https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018770/91DDE83A-7633-4A37-AE90-230FE230D8B4-1860073F-D3E2-47FE-B43B-BA587606BC03\_asyza9.jpg  
https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018770/IMG\_3190\_bdesd9.jpg  
https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018768/IMG\_9416\_ppoeur.jpg  
https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018768/C856CF2C-6315-4786-A5F9-7EB52C4FEB09\_vmzlyd.jpg  
https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018768/IMG\_9811\_zu8xbm.jpg  
https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018769/IMG\_3804\_z3t6zs.jpg

### **Baobab Cocktail Bar**

Instagram:  
https://www.instagram.com/baobabcocktailbar?igsh=M2piY2ZxOXd4amQ1

Image currently provided:  
https://res.cloudinary.com/dmm8bz2gj/image/upload/v1778018769/IMG\_6759\_gbrpd0.jpg

Important: verify whether the Baobab image is correct, because the same image was also marked as Playa Son Matias.

---

# **12\. Component Integration Instructions**

Use components as **supporting design blocks**, not as random decorations.

## **Recommended core components**

Bento Grid  
Apple Cards Carousel  
Expandable Cards  
Direction Aware Hover  
Card Hover Effect  
Glare Card  
Animated Modal  
Multi Step Loader  
Night/Day Toggle  
Text Hover Effect  
Encrypted Text  
Container Scroll Animation  
CTA Section  
Feature Section  
FAQ Section  
Pricing Section  
Testimonial Section  
Logo Cloud

The Aceternity component inventory specifically recommends a core premium set including structure/navigation, hero atmosphere, premium cards, storytelling widgets, social proof, and product UX basics.  

## **Home page component mapping**

Hero:  
Current hero \+ subtle Spotlight/Aurora background.  
Do not use too many animations.

Featured experiences:  
Current horizontal scroll or Apple Cards Carousel.

How it works:  
Bento Grid or Feature Section.

Top categories:  
Product Category components.

Gallery preview:  
Direction Aware Hover or Layout Grid.

Testimonials:  
Testimonial component or Infinite Moving Cards.

Final CTA:  
CTA Section with WhatsApp button.

## **Book page component mapping**

Category filters:  
Current sticky category nav.

Experience cards:  
Current v-card system upgraded with Card Hover / Glare / Direction Aware Hover.

Detail view:  
Expandable Cards or Animated Modal.

Booking process:  
Multi Step Loader before opening WhatsApp.

Pricing:  
Pricing Section, but only client-facing prices.

## **Private Services component mapping**

Hero:  
Dark premium hero with private service positioning.

Services grid:  
Bento Grid.

Service cards:  
Card Hover Effect or Direction Aware Hover.

Inquiry:  
Animated Modal or Contact form.

Loader:  
Multi Step Loader with custom steps.

## **World Cup component mapping**

Hero:  
Container Scroll Animation or simple cinematic hero.

Packages:  
Bento Grid or Pricing Cards.

Group itinerary:  
Apple Cards Carousel.

FAQ:  
FAQSection.

Contact:  
ContactPage form structure.

## **Contact page component mapping**

ContactPage.tsx base  
FAQSection.tsx below form  
Animated Modal if form is used globally  
Stateful Button for submit  
WhatsApp CTA always visible  
---

# **13\. Data Structure Upgrade**

Move the data into organized objects.

## **Suggested structure**

const siteConfig \= {  
  brand: "MallorcasLocal",  
  tagline: "Book Mallorca like a local",  
  whatsapp: "34644075065",  
  links: {  
    bcm: "https://top-3-prs-brand.sumupstore.com/product/bcm-pre-sale-ticket",  
    boatParty: "https://top-3-prs-brand.sumupstore.com/product/sunset-heatwave-boat-party-deposit",  
    baobab: "https://www.instagram.com/baobabcocktailbar?igsh=M2piY2ZxOXd4amQ1"  
  }  
};

const categories \= \[  
  "water",  
  "boat-rental",  
  "jet-ski",  
  "beach",  
  "beach-club",  
  "nightlife",  
  "private-services",  
  "food-drinks",  
  "viewpoints",  
  "culture",  
  "mountain",  
  "world-cup"  
\];

const experiences \= \[\];

const privateServices \= \[\];

const gallery \= {};

const faqs \= \[\];

const pages \= {  
  home: {},  
  book: {},  
  privateServices: {},  
  worldCup: {},  
  contact: {},  
  about: {},  
  faq: {}  
};

## **Every activity should include**

{  
  id: "",  
  slug: "",  
  category: "",  
  title: "",  
  location: "",  
  shortDescription: "",  
  longDescription: "",  
  priceDisplay: "",  
  reserveDisplay: "",  
  included: \[\],  
  notIncluded: \[\],  
  tags: \[\],  
  images: \[\],  
  mapUrl: "",  
  bookingType: "whatsapp | external-link | inquiry",  
  externalUrl: "",  
  whatsappTemplate: "",  
  visibility: "public",  
  clientFacing: true  
}  
---

# **14\. Cloudinary Rules**

Use Cloudinary transforms consistently.

The existing spec requires optimized image ratios for product cards, hero images, gallery grid, thumbnails, lightbox images and partner logos. It also requires lazy loading for all images except hero and preconnect to Cloudinary.  

Use:

Cards:  
w\_640,h\_800,c\_fill,q\_auto,f\_auto

Hero:  
c\_fill,ar\_16:9,w\_1400,q\_auto,f\_auto

Gallery:  
w\_600,h\_600,c\_fill,q\_auto,f\_auto

Thumbnails:  
w\_80,h\_80,c\_fill,q\_auto,f\_auto

Lightbox:  
w\_1200,q\_auto,f\_auto

Logos:  
w\_120,h\_120,c\_fit,q\_auto

If a URL does not include transformations, add them when rendering.

---

# **15\. WhatsApp Conversion Rules**

Every paid or inquiry-based item must produce a clean WhatsApp message.

## **Generic activity message**

Hi MallorcasLocal, I am interested in this experience:

Experience:  
Location:  
Date:  
Guests:  
Price shown:  
Pickup / hotel:  
Notes:

Please confirm availability, final price, meeting point and the best option.  
Source: MallorcasLocal

## **Private service message**

Hi MallorcasLocal, I want to request a private service:

Service:  
Date:  
Location:  
Group size:  
Budget:  
Notes:

Please confirm availability, final price and logistics.

## **World Cup message**

Hi MallorcasLocal, I want help planning a World Cup group experience:

Dates:  
Group size:  
Type of plan:  
Budget:  
Accommodation area:  
Preferred activities:  
Notes:

Please suggest the best available options.

## **Cart / plan message**

Hi MallorcasLocal, I want help planning this itinerary:

Selected experiences:  
Estimated from-price total:  
Dates:  
Guests:  
Hotel / area:  
Notes:

Please suggest the best order, timing, availability and transport/access details.  
---

# **16\. Multilingual Rules**

Keep all existing seven languages:

Spanish  
English  
German  
French  
Italian  
Arabic  
Russian

Use English as source of truth, then translate.

Every public string must exist in all languages:

Page titles  
Buttons  
Forms  
Cards  
Descriptions  
Badges  
Price labels  
FAQ  
Error messages  
Toast messages  
Navigation

Arabic must use RTL.

---

# **17\. Styling Rules**

Use this hierarchy:

Background:  
\#050505 / \#111 / \#191919

Cards:  
\#0e0e0e / \#141414

Text:  
\#eee primary  
rgba(255,255,255,.48) secondary  
rgba(255,255,255,.24) muted

Accent:  
\#c9a96e champagne gold

WhatsApp:  
\#25d366 only for WhatsApp-specific actions

## **Typography**

Headings:  
Playfair Display

Body/UI:  
DM Sans

## **Motion**

Keep motion subtle.  
Use opacity, transform, blur and scale.  
Do not animate too many things at once.  
Respect prefers-reduced-motion.

The existing HTML already includes reduced-motion behavior, responsive adjustments, sticky nav, card animations, and mobile fixes. Preserve these patterns when upgrading.  

---

# **18\. Performance Rules**

Lazy load all non-hero images.  
Use fetchpriority="high" only for hero image.  
Avoid more than one heavy animation per page.  
Avoid WebGL unless absolutely necessary.  
Avoid particle effects on mobile.  
Compress and transform all Cloudinary images.  
Use CSS transitions instead of JavaScript animations where possible.

For React/Next.js:

Use next/image where possible.  
Use dynamic imports for heavy components.  
Use client components only when interaction is needed.  
Keep static content server-rendered.

For HTML:

No external JS libraries.  
All CSS inline.  
All JS inline.  
Vanilla JS only.  
---

# **19\. Privacy and Commercial Safety**

Before finalizing content, remove:

Commission data  
Supplier margin  
Internal prices  
Private chat notes  
Partner-side deal structure  
Unconfirmed claims  
Anything that sounds like internal negotiation

Client-facing information may include:

Public price  
Deposit required to reserve  
Remaining balance at venue  
What is included  
Duration  
Location  
Availability status  
Booking conditions  
Cancellation note if known  
---

# **20\. Final Developer Task**

Use the current HTML as the base. Do not restart from zero.

Transform it into a complete premium platform with:

Home  
Book  
Private Services  
World Cup  
Contact  
About  
FAQ  
Gallery

Integrate the uploaded components only where they improve clarity, trust, conversion or visual hierarchy.

Keep the current MallorcasLocal feeling:

Dark  
Premium  
Local  
Fast  
Direct  
WhatsApp-first  
Image-led  
Mobile-first  
Multilingual

Final output must be clean, organized, production-ready, and easy to deploy on Vercel or use as a single HTML file depending on the chosen build path.

