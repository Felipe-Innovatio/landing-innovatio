@AGENTS.md

# Innovatio-IT — Reglas del proyecto

## Flujo de trabajo Git (obligatorio)

Cada tarea o feature sigue este flujo sin excepciones.

### Ramas principales

- `main` → producción, solo código listo para publicar
- `develop` → base de desarrollo, de acá parten todas las features

### Flujo para cada tarea

```bash
# 1. Actualizá develop antes de arrancar
git checkout develop
git pull origin develop

# 2. Creá tu rama desde develop
git checkout -b feature/nombre-descriptivo

# 3. Trabajá y commiteá con el formato correcto (ver abajo)
git add .
git commit -m "feat: descripción corta"

# 4. Subí tu rama
git push origin feature/nombre-descriptivo

# 5. Abrí un Pull Request en GitHub → base: develop
# 6. Otro del equipo revisa y aprueba
# 7. Se mergea y se elimina la rama
```

**Nunca commitear directo a `main` ni a `develop`.**

### Convención de commits

```
feat:      nueva funcionalidad
fix:       corrección de bug
style:     cambios visuales/CSS sin lógica
refactor:  refactorización sin cambiar comportamiento
docs:      documentación
chore:     configuración, dependencias, scripts
```

Ejemplos válidos:
```
feat: agregar sección Hero con CTA
fix: corregir responsive del navbar en mobile
style: ajustar paleta de colores a brand guidelines
chore: agregar eslint rule para imports
```

### Naming de ramas

```
feature/hero-section
feature/contact-form
fix/navbar-mobile
chore/setup-husky
```

### Antes de abrir un PR

- El código corre sin errores (`npm run dev`)
- No hay errores de lint (`npm run lint`)
- El PR describe qué se hizo y por qué
