# ⚙️ Configuración de Netlify - Información Técnica

## Requisitos Previos

Para que el panel de administración funcione correctamente, necesitas:

1. ✅ Sitio desplegado en **Netlify** (no en otro hosting)
2. ✅ Git conectado (GitHub, GitLab o Bitbucket)
3. ✅ Rama principal llamada **main** en Git
4. ✅ Netlify Identity habilitado
5. ✅ Git Gateway configurado

## Pasos de Configuración en Netlify

### 1. Habilitar Netlify Identity

```
En tu dashboard de Netlify:
1. Ve a "Site settings"
2. Busca "Identity"
3. Haz clic en "Enable Identity"
4. Completa la configuración
```

### 2. Configurar Git Gateway

```
En tu dashboard de Netlify:
1. Ve a "Identity" → "Services"
2. Busca "Git Gateway"
3. Haz clic en "Enable Git Gateway"
4. Selecciona tu proveedor de Git (GitHub, GitLab, etc)
5. Autoriza a Netlify
```

### 3. Invitar a Usuarios

```
En tu dashboard de Netlify:
1. Ve a "Identity"
2. Haz clic en "Invite users"
3. Ingresa el email del usuario
4. El usuario recibirá un email de invitación
5. Acepta la invitación y crea contraseña
```

## Archivo de Configuración: config.yml

El archivo `public/admin/config.yml` contiene toda la configuración del CMS:

### Backend (Autenticación)
```yaml
backend:
  name: git-gateway          # Usar Git Gateway para autenticación
  branch: main              # Rama principal
  squash_merges: true       # Comprimir cambios en un commit
```

### Media (Imágenes)
```yaml
media_folder: "public/Productos"    # Dónde se guardan las imágenes
public_folder: "/Productos"          # URL pública de las imágenes
```

### Collections (Colecciones de Contenido)
```yaml
collections:
  - name: "productos"               # Identificador único
    label: "📦 Gestión de Productos" # Etiqueta en el panel
    file: "src/data/products.json"   # Archivo JSON a editar
```

## Estructura de Datos: products.json

Cada producto tiene esta estructura:

```json
{
  "id": 1,
  "name": "Nombre del Producto",
  "price": 20,
  "category": "alimentos|electronicos|aseo",
  "tag": "Etiqueta",
  "top": true,
  "description": "Descripción breve",
  "image": "/Productos/nombre.jpg"
}
```

### Campos Explicados:

| Campo | Tipo | Rango | Ejemplo |
|-------|------|-------|---------|
| id | number | 1-999 | 1 |
| name | string | 1-100 caracteres | "Aceite (5 pomos)" |
| price | number | 0.01-9999 | 20 |
| category | enum | alimentos, electronicos, aseo | "alimentos" |
| tag | string | 0-50 caracteres | "Bebidas" |
| top | boolean | true, false | true |
| description | string | 1-150 caracteres | "Aceite de calidad, pack..." |
| image | string | URL de imagen | "/Productos/aceite.jpg" |

## Variables de Entorno

Si necesitas variables de entorno, créalas en Netlify:

```
En tu dashboard de Netlify:
1. Site settings → Build & deploy
2. Environment
3. Edit variables
```

**Variables usadas actualmente:** Ninguna (el proyecto no las necesita)

## Build y Deploy

### Configuración de Build (netlify.toml):

```toml
[build]
  command = "npm run build"    # Comando para compilar
  publish = "dist"            # Carpeta con el sitio compilado

[build.environment]
  NODE_VERSION = "18"         # Versión de Node.js
```

### Redirects Configurados:

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"          # SPA redirection
  status = 200
```

Esta configuración es **importante** para que Astro funcione correctamente como SPA.

## Flujo de Cambios

### Cuando haces cambios en el panel:

```
1. Haces cambios en el panel (/admin)
2. Netlify CMS crea un commit en Git
3. Netlify detecta el cambio
4. Ejecuta: npm run build
5. Genera el sitio en la carpeta dist/
6. Deploy automático
7. El sitio se actualiza en línea
```

### Tiempo de Deploy: 1-3 minutos

## Revisiones y Workflows

Netlify CMS puede configurarse con workflows de revisión:

```yaml
publish_mode: editorial_workflow
```

Con esto:
- Los cambios se guardan como **Draft**
- Requieren aprobación antes de publicar
- Útil para equipos grandes

**Actualmente:** Deshabilitado (deploy automático)

## URLs Importantes

- **Sitio principal:** `https://tudominio.netlify.com`
- **Panel de admin:** `https://tudominio.netlify.com/admin`
- **Dashboard:** `https://app.netlify.com`
- **Git repository:** Tu repositorio en GitHub/GitLab

## Solución de Problemas Técnicos

### CMS no carga
- Verifica que Netlify Identity esté habilitado
- Revisa que Git Gateway esté activo
- Borra caché y cookies

### Cambios no se publican
- Verifica el build log en Netlify
- Comprueba que el rama es `main`
- Revisa que el commit sea válido JSON

### Imágenes no cargan
- Verifica que `media_folder` sea `public/Productos`
- Comprueba que `public_folder` sea `/Productos`
- Las imágenes deben estar en `public/Productos/`

### Error de autenticación
- Reinvita al usuario
- Borra cookies del navegador
- Intenta en navegador privado/incógnito

## Seguridad

⚠️ **Importante:**

- ✅ Las credenciales están protegidas por Netlify
- ✅ Solo usuarios invitados pueden acceder
- ✅ Los cambios se registran en Git (historial completo)
- ✅ Se pueden revertir cambios usando Git

### Recomendaciones:

1. Mantén tus credenciales de Netlify privadas
2. Usa contraseñas fuertes
3. Habilita 2FA en tu cuenta de Netlify
4. Revisa el historial de cambios regularmente

## Escalabilidad

### El proyecto actualmente:
- Soporta hasta 500 productos sin problemas
- 10 usuarios simultáneos
- Imagenes de hasta 5MB cada una

### Si necesitas más:
- Aumentar límites de almacenamiento
- Usar un CDN adicional
- Considerar una base de datos externa

## Monitoreo

Para monitorear el sitio:

1. **Deploy Previews:** Automatizados en pull requests
2. **Logs:** Disponibles en Netlify Dashboard
3. **Analytics:** Integración disponible
4. **Monitoreo de performance:** Herramientas externas

---

**Documentación oficial:**
- [Netlify Docs](https://docs.netlify.com)
- [Decap CMS Docs](https://decapcms.org/docs/)
- [Astro Docs](https://docs.astro.build)

**Última actualización:** Junio 2026
