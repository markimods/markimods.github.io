# markyzx97.ia — Generador de Ideas de Video con IA

Una plataforma privada para crear contenido audiovisual completo: **guiones, prompts visuales, estilos y exportación a MP4**.

**🔗 Sitio Web:** https://markyzx97.github.io/

**Última actualización:** 2026-09-05

---

## 🎯 ¿Qué es markyzx97.ia?

markyzx97.ia es un **generador inteligente de ideas para videos** que transforma una descripción simple en un pack productivo completo:

✅ **Guiones cinematográficos** — 5 escenas con narrativa y ritmo visual  
✅ **Prompts para imagen** — Referencias visuales detalladas  
✅ **Prompts para video** — Movimiento, cámara, estilo y duración  
✅ **Estilos visuales** — Paletas, atmósfera y estética  
✅ **Exportación a MP4** — Video listo para difusión  

---

## 🚀 Características

### 1. **Guiones Inteligentes**
Genera narrativas estructuradas con escenas, beats visuales y dirección cinematográfica basada en tu idea.

### 2. **Prompts Visuales Optimizados**
Crea referencias detalladas para generar imágenes y videos con herramientas de IA (DALL-E, Midjourney, Runway, etc.).

### 3. **Control de Duración**
Adapta automáticamente la narrativa a la duración deseada (1-10 minutos).

### 4. **Flujo Rápido**
**Describe → Configura → Genera → Exporta**

---

## 💻 Tecnología

| Stack | Detalles |
|-------|---------|
| **Frontend** | HTML5 + CSS3 + JavaScript vanilla |
| **Diseño** | Glassmorphism, gradientes, dark mode |
| **Interactividad** | Scripts modulares y responsive |
| **Hosting** | GitHub Pages |

---

## 📋 Estructura del Proyecto

```
starxven.github.io/
├── index.html          # Landing page principal
├── login.html          # Página de acceso privado
├── dashboard.html      # Panel de control
├── script.js           # Lógica de interactividad
├── style.css           # Estilos globales (CSS adicional)
├── config.yml          # Configuración de Jekyll
├── buildozer.spec      # Especificaciones de compilación
├── requirements.txt    # Dependencias Python
└── README.md          # Este archivo
```

---

## 🎨 Secciones de la Página

### **Header (Navegación)**
- Logo y marca th3dr4k3r.ia
- Links: Características, Flujo, Acceso privado
- Diseño sticky con blur effect

### **Hero Section**
- Headline principal con gradient text
- Descripción del producto
- CTA buttons (Entrar al panel, Ver funciones)
- Stats: 5 escenas/idea, ∞ conceptos, MP4 exportación
- Mockup de interfaz glassmorphic

### **Features Section**
- 🎬 Guiones inteligentes
- 🖼️ Prompts para imagen
- 🎞️ Prompts de video

### **Workflow Section**
- 1. Describe la idea
- 2. Configura la duración
- 3. Genera y exporta

### **CTA Section**
- Call-to-action para acceso privado
- Link a login.html

### **Footer**
- Copyright y año

---

## 🎨 Paleta de Colores

```css
--bg: #060b14              /* Background principal */
--cyan: #65d9ff            /* Accent primario */
--blue: #4f7cff            /* Secondary */
--purple: #8c6dff          /* Accent */
--green: #42f5b4           /* Success/Highlight */
--orange: #ffb454          /* Warning */
--red: #ff6666             /* Error */
--text: #edf6ff            /* Texto principal */
--muted: #9bb0ca           /* Texto secundario */
```

---

## 🖥️ Responsive Design

✅ Desktop (1200px+)  
✅ Tablet (900px - 1199px)  
✅ Mobile (< 900px)  

Breakpoints ajustados para experiencia óptima en cualquier dispositivo.

---

## 🔐 Acceso Privado

La plataforma incluye:
- **Autenticación** via `login.html`
- **Dashboard** exclusivo en `dashboard.html`
- **Control de sesión** con JavaScript

---

## 📦 Dependencias

### Frontend (Sin dependencias externas)
El sitio usa **vanilla JavaScript y CSS puro** — no requiere frameworks adicionales.

### Backend (Opcional)
Si quieres compilar a app móvil:
```
pip install -r requirements.txt
# Buildozer + Kivy para compilar a APK/iOS
```

---

## 🚀 Cómo Usar

### **Ver la página web**
Simplemente abre: https://starxven.github.io/

### **Acceder al panel privado**
1. Click en "Entrar al panel" o "Acceso privado"
2. Auténticate en `login.html`
3. Acceso a `dashboard.html` para generar ideas

### **Desarrollar localmente**
```bash
# Clonar repo
git clone https://github.com/starxven/starxven.github.io.git
cd starxven.github.io

# Abrir en navegador
open index.html
# o
python -m http.server 8000
```

---

## 🔧 Customización

### Cambiar colores
Edita las variables CSS en `index.html`:
```css
:root {
  --bg: #060b14;
  --cyan: #65d9ff;
  /* ... */
}
```

### Modificar contenido
- **Texto principal:** `index.html` (líneas 430-576)
- **Estilos:** `index.html` (líneas 11-411) o `style.css`
- **Scripts:** `script.js`

---

## 📈 Performance

- ⚡ Carga rápida (optimizado para GitHub Pages)
- 🎨 CSS-in-head para mejor rendimiento
- 📱 Mobile-first responsive design
- ✨ Animaciones GPU-aceleradas (transform, opacity)

---

## 📄 Licencia

Este proyecto es de uso privado. © 2026 th3dr4k3r.ia

---

## 👤 Autor

**markyzx97** — Desarrollo y diseño  
GitHub: https://github.com/starxven

---

## 💬 Contacto & Feedback

Para reportar bugs o sugerencias, abre un issue en el repositorio.

**¡Gracias por usar bymarkiro.ia!** 🚀✨
