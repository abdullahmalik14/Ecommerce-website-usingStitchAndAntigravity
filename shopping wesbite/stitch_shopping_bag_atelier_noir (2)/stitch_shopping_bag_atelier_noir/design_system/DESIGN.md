# Design System Document: The Editorial Archive (Enhanced)

## 1. Overview & Creative North Star
**Creative North Star: "The Digital Atelier"**
Treat the screen like a high-end fashion editorial. Prioritize intentional asymmetry, expansive whitespace, and a high-contrast typographic hierarchy.

**Interaction Principle: "Fluent Motion"**
Every interaction must feel purposeful. Movement is not decorative; it provides depth and weight to the "Digital Atelier." Elements should feel like they are being unveiled, not just appearing.

---

## 2. Colors & Surface Philosophy
The palette is rooted in a monochromatic foundation of deep charcoals and whites, with a muted gold (`tertiary`) for craft.
- **Glassmorphic Overlays:** Use `surface` at 70% opacity with a `backdrop-blur` of 30px for all floating menus, navigation, and summary sidebars.
- **Premium Depth:** Leverage `surface-container-lowest` (#ffffff) for active panels to create a soft, natural lift.

---

## 3. Typography: The Editorial Voice
- **The Serif (Noto Serif):** Display and headline levels.
- **The Sans-Serif (Manrope):** Title, body, and label levels. Use `label-sm` (0.6875rem) with wide spacing for details.

---

## 4. Animation & Motion Guidelines (NEW)
**Strict Mandate:** All page loads and major UI transitions must use staggered reveal logic to emphasize the "Editorial" feel.

- **Staggered Entrances:** Product grids and list items must fade and slide up sequentially (0.1s delay per item).
- **Parallax Reveal:** Hero images and large editorial sections should implement a smooth vertical parallax effect (scroll ratio 0.15).
- **Micro-interactions:**
- **Buttons:** On hover, a subtle scale (1.02x) and a background-color shift to `primary-fixed-dim` with a 0.3s ease-out transition.
- **Product Cards:** On hover, the image should slightly zoom (1.05x) within its sharp-edged container.
- **Reveal-on-Scroll:** Text blocks for "About Us" or "Story" sections must fade in with a slight horizontal slide (left-to-right) as they enter the viewport.
- **Glass Sliding Panels:** Cart sidebars or mobile menus must slide into view with a high-friction ease-out (`cubic-bezier(0.22, 1, 0.36, 1)`).

---

## 5. Components
### Navigation & Overlays
- **Floating Header:** Glassmorphic navigation (70% opacity, 30px blur).
- **Summary Sidebar:** Used in checkout/cart. Semi-transparent glass with elevated tonal text for total price.

### Interactive Buttons
- **Primary:** High-weight black background. Smooth scale-up interaction on hover.
- **Tertiary:** For "Discover" actions. Animated underline reveal on hover.

---

## 6. Do’s and Don’ts
### Do:
- **Use staggered reveal** for all product listings.
- **Use glassmorphism** for layered UI (cart summary, headers).
- **Maintain sharp 0px corners** to reflect precision.

### Don’t:
- **No static, "jumpy" transitions.**
- **No heavy shadows.** Use tonal layering and glass blur instead.
- **No standard grids.** Use asymmetrical editorial spreads with parallax imagery.