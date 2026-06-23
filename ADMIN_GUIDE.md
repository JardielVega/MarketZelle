# 📦 Guía del Panel de Administración - Market Zelle

## Acceso al Panel

1. Ve a tu sitio en línea (desplegado en Netlify)
2. Agrega `/admin` al final de la URL
   - Ejemplo: `https://tudominio.com/admin`
3. Inicia sesión con tu cuenta de Netlify

## Características del Panel de Administración

### ✅ Gestión de Productos

En el panel puedes:
- **Agregar nuevos productos** - Haz clic en "Nuevo" en la colección "Productos"
- **Editar productos existentes** - Haz clic en el nombre del producto
- **Eliminar productos** - Usa el botón de eliminar (papelera) en la tarjeta del producto
- **Cambiar el orden** - Arrastra los productos para reorganizarlos

### 📝 Campos del Producto

Cuando crees o edites un producto, completa estos campos:

| Campo | Tipo | Descripción | Obligatorio |
|-------|------|-------------|------------|
| **ID** | Número | Identificador único del producto | ✓ |
| **Nombre** | Texto | Nombre descriptivo (ej: "Aceite 5 pomos") | ✓ |
| **Precio** | Número | Precio en USD (ej: 20) | ✓ |
| **Categoría** | Selección | Alimentos, Electrónicos o Aseo | ✓ |
| **Etiqueta** | Texto | Tag corto (ej: "Frescos", "Premium", "Bebidas") | Opcional |
| **¿Destacado?** | Sí/No | Mostrar en la sección "Más Vendidos" | - |
| **Descripción** | Texto | Descripción breve (máx 150 caracteres) | ✓ |
| **Imagen** | Imagen | Foto del producto (JPG, PNG) | ✓ |

### 🎯 Categorías Disponibles

- 🥘 **Alimentos** - Productos alimenticios en general
- 💻 **Electrónicos** - Dispositivos y aparatos electrónicos
- 🧼 **Aseo** - Productos de limpieza y aseo personal

### 🏷️ Ejemplos de Etiquetas

Sugerencias de etiquetas que ya usamos:
- Bebidas
- Carnes
- Frescos
- Snacks
- Granos
- Endulzantes
- Lácteos
- Pasta
- Favorito
- Promoción
- Premium

## Proceso de Publicación

### Cuando agregas o editas un producto:

1. **Completa todos los campos obligatorios**
2. **Sube la imagen del producto**
3. **Haz clic en "Guardar"**
4. **El cambio se crea como "borrador"**
5. **Haz clic en "Publicar"** para que se vea en el sitio

### Estados del Producto:

- 📋 **Borrador** - El producto está guardado pero no visible en el sitio
- ✅ **Publicado** - El producto es visible en el sitio web

## Funcionalidad de WhatsApp

### Cómo funciona:

Cuando un cliente hace clic en el botón **"Comprar"** en un producto, se abre WhatsApp con un mensaje automático que incluye:

- El nombre exacto del producto
- El precio exacto en USD
- Un mensaje predefinido: "¡Hola! Me interesa comprar: [PRODUCTO] ([PRECIO]). ¿Está disponible?"

### Número de WhatsApp:

El número configurado es: **+1-535-257-2028** (número de EE.UU. para conectar con Cuba)

### Si necesitas cambiar el número:

1. Ve a [src/pages/index.astro](../src/pages/index.astro)
2. Busca la línea: `const whatsappNumber = '5352572028';`
3. Reemplaza con tu número (sin símbolos especiales, solo dígitos)
4. Guarda el archivo y redeploya el sitio

## Sugerencias Importantes

### Para Imágenes de Productos:

- ✅ **Tamaño recomendado**: 500x500px a 1000x1000px
- ✅ **Formato**: JPG o PNG
- ✅ **Peso**: Menos de 2MB para carga rápida
- ✅ **Calidad**: Foto clara y bien iluminada del producto
- ✅ **Fondo**: Fondo blanco o uniforme si es posible

### Para Descripciones:

- ✅ Sé conciso (máximo 150 caracteres)
- ✅ Incluye detalles clave (cantidad, tamaño, características)
- ✅ Ejemplo: "Aceite vegetal de alta calidad, pack de 5 pomos"

### Para Precios:

- ✅ Usa solo números (ej: 20, no 20$)
- ✅ Sin decimales a menos que sea necesario (ej: 10.99)
- ✅ Dólar USD

## Solución de Problemas

### ❌ "No puedo acceder al panel"
- Verifica que el sitio esté desplegado en Netlify
- Asegúrate de que tienes acceso como propietario del sitio
- Intenta incógnito (ctrl+shift+p)

### ❌ "Los cambios no aparecen en el sitio"
- Asegúrate de haber hecho clic en "Publicar"
- Espera 1-2 minutos para que se actualice
- Haz refresh en el navegador (Ctrl+F5)

### ❌ "No puedo cargar la imagen"
- Verifica que el archivo sea JPG o PNG
- Comprueba que sea menor a 5MB
- Intenta cambiar el nombre de la imagen

### ❌ "Accidentalmente eliminé un producto"
- Los cambios se guardan automáticamente
- Si ocurre un error, contacta al soporte de Netlify
- Por seguridad, siempre revisa antes de publicar

## Flujo de Trabajo Recomendado

```
1. Abre /admin en tu navegador
2. Haz clic en "Gestión de Productos"
3. Para un nuevo producto: "Nuevo"
4. Para editar: Haz clic en el producto
5. Completa todos los campos
6. Sube la imagen
7. Haz clic en "Guardar"
8. Haz clic en "Publicar"
9. Espera 1-2 minutos
10. Verifica en tu sitio web
```

## Contacto y Soporte

Si tienes problemas con el panel de administración:
- Revisa esta guía
- Intenta en un navegador diferente
- Borra el caché del navegador
- Si persiste, contacta a tu desarrollador web

---

**Última actualización:** Junio 2026
**Versión del Panel:** Netlify CMS v3.7+
