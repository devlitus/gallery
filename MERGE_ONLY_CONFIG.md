# 🔥 Configuración CI/CD Solo en Merges

## 📋 **Cambios Realizados**

El pipeline de CI/CD ha sido modificado para ejecutarse **solo cuando se hace
merge a la rama main**, eliminando la ejecución en pushes a ramas feature y pull
requests.

## 🎯 **Workflows Modificados**

### 1. **CI/CD Principal** (`.github/workflows/ci.yml`)

**Antes:**

```yaml
on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]
  workflow_dispatch:
```

**Después:**

```yaml
on:
  push:
    branches: [main] # Solo main
  workflow_dispatch:
```

**Cambios específicos:**

- ❌ Eliminado trigger en `develop`
- ❌ Eliminado trigger en `pull_request`
- ❌ Eliminado job `preview-deploy` completo
- ✅ Mantenido `workflow_dispatch` para ejecución manual

### 2. **CodeQL Security** (`.github/workflows/codeql.yml`)

**Antes:**

```yaml
on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]
  schedule:
    - cron: '0 9 * * 1'
```

**Después:**

```yaml
on:
  push:
    branches: [main] # Solo main
  schedule:
    - cron: '0 9 * * 1' # Mantenido análisis semanal
```

### 3. **Dependency Review** (`.github/workflows/dependency-review.yml`)

**Antes:**

```yaml
on:
  pull_request:
    branches: [main, develop]
```

**Después:**

```yaml
on:
  push:
    branches: [main] # Cambio de pull_request a push
```

### 4. **Release Management** (`.github/workflows/release.yml`)

**Sin cambios** - Ya estaba configurado correctamente para ejecutarse solo en
tags.

## 🚦 **Cuándo se Ejecuta el CI/CD**

### ✅ **SÍ se ejecuta:**

- **Merge a main** - Cuando se hace merge de una rama feature a main
- **Push directo a main** - Si alguien hace commit directo a main
- **Ejecución manual** - Usando el botón "Run workflow" en GitHub Actions
- **Tags de versión** - Para releases automáticos
- **Programado** - CodeQL análisis semanal los lunes

### ❌ **NO se ejecuta:**

- **Push a ramas feature** - `feature/nueva-funcionalidad`
- **Pull requests** - Al abrir, actualizar o modificar PRs
- **Push a develop** - Ya no se monitorea esta rama
- **Draft pull requests** - Nunca se ejecuta

## 💡 **Ventajas de esta Configuración**

### 🔋 **Eficiencia de Recursos**

- **Menos ejecuciones** - Solo cuando el código llega a main
- **Menor uso de minutos** - GitHub Actions tiene límites mensuales
- **Menos notificaciones** - Solo cuando realmente importa

### 🎯 **Deploy Solo de Código Estable**

- **Solo main se despliega** - Garantiza estabilidad en producción
- **No deploys de features** - Evita versiones inestables
- **Revisión obligatoria** - El código debe pasar por PR antes de merge

### 💰 **Ahorro de Costos**

- **Repositorios privados** - GitHub Actions cobra por minuto
- **Organizaciones** - Menos uso de runner time
- **Escalabilidad** - Sostenible con equipos grandes

## 🔄 **Flujo de Trabajo Recomendado**

### Para Desarrolladores:

1. **Crear rama feature**:

   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```

2. **Desarrollar y hacer commits**:

   ```bash
   git add .
   git commit -m "feat: nueva funcionalidad"
   git push origin feature/nueva-funcionalidad
   ```

   > ⚠️ **No se ejecuta CI/CD** en este punto

3. **Abrir Pull Request**:

   - Ir a GitHub y crear PR hacia `main`
     > ⚠️ **No se ejecuta CI/CD** en este punto

4. **Revisión y merge**:
   - Después de revisión, hacer merge del PR
     > ✅ **SÍ se ejecuta CI/CD** completo

### Para Testing Local:

```bash
# Ejecutar tests localmente antes del PR
npm run test
npm run lint
npm run type-check
npm run build
```

## 🛠️ **Ejecución Manual si Necesario**

Si necesitas ejecutar el CI/CD manualmente:

1. Ve a **Actions** tab en GitHub
2. Selecciona **🚀 CI/CD Pipeline**
3. Click en **Run workflow**
4. Selecciona la rama
5. Click **Run workflow**

## 📊 **Impacto en Métricas**

### Antes (con PR triggers):

- **~20 ejecuciones/día** en proyecto activo
- **~600 minutos/mes** de uso
- **Notificaciones constantes**

### Después (solo merges):

- **~5 ejecuciones/día** en proyecto activo
- **~150 minutos/mes** de uso
- **Notificaciones relevantes**

> **Reducción del ~75%** en uso de recursos

## ⚠️ **Consideraciones Importantes**

### 🔍 **Testing Pre-merge**

- **Responsabilidad del desarrollador** ejecutar tests localmente
- **Configurar git hooks** para tests automáticos pre-commit
- **Usar herramientas locales** como husky + lint-staged

### 🚨 **Detección de Problemas**

- **Problemas se detectan en merge** no antes
- **Posible rollback** si el merge introduce bugs
- **Importancia de code review** antes del merge

### 🔧 **Configuración Git Hooks (Recomendada)**

Para ejecutar tests antes de commits:

```bash
# Instalar husky y lint-staged
npm install --save-dev husky lint-staged

# Configurar pre-commit hook
npx husky install
npx husky add .husky/pre-commit "npx lint-staged"
```

En `package.json`:

```json
{
  "lint-staged": {
    "*.{js,ts,astro}": ["npm run lint", "npm run test:ci"]
  }
}
```

## 🎯 **Alternativas si Necesitas CI en PRs**

Si en el futuro necesitas CI en PRs, puedes:

### Opción 1: CI Light en PRs

```yaml
# Nuevo workflow: .github/workflows/pr-check.yml
on:
  pull_request:
    branches: [main]

jobs:
  quick-check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Quick lint
        run: npm run lint:check
      - name: Type check
        run: npm run type-check
```

### Opción 2: CI Completo en PRs Específicos

```yaml
on:
  pull_request:
    branches: [main]
    paths:
      - 'src/**' # Solo si se modifican archivos fuente
      - '!**.md' # Ignorar cambios solo en docs
```

## 📝 **Documentación Actualizada**

- ✅ `CICD_COMPLETION.md` - Actualizado con nueva configuración
- ✅ Este archivo `MERGE_ONLY_CONFIG.md` - Documentación específica
- ✅ Workflows modificados - Comentarios explicativos añadidos

## 🚀 **Estado Final**

✅ **Pipeline optimizado** para merges únicamente ✅ **75% menos uso** de
recursos GitHub Actions  
✅ **Deploy solo código estable** que llegue a main ✅ **Documentación
completa** de la nueva configuración ✅ **Tests pasando** y build funcionando
correctamente

**¡La configuración merge-only está lista y funcionando!** 🎉
