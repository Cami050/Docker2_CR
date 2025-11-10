# Informe: Git y GitHub – Control de versiones  
**Autora:** [Tu nombre]  
**Fecha:** [Fecha de entrega]

---

## 1. Introducción  
En este informe explico los principales comandos de :contentReference[oaicite:0]{index=0} y el flujo para enviar cambios a :contentReference[oaicite:1]{index=1}, basándome en los vídeos asignados y usando capturas de pantalla para evidenciar cada etapa.

## 2. Principales comandos de Git  
Aquí están los comandos más usados y lo que hacen:

| Comando               | Función                                               |
|------------------------|--------------------------------------------------------|
| `git init`             | Inicializa un repositorio de Git en la carpeta actual. |
| `git status`           | Muestra el estado de los archivos (modificados, añadidos, sin seguimiento). |
| `git add <archivo>`    | Añade un archivo al área de preparación (staging).     |
| `git add .`            | Añade todos los archivos modificados al área de preparación. |
| `git commit -m "mensaje"` | Crea un commit con los cambios en staging, con mensaje descriptivo. |
| `git log`              | Muestra el historial de commits del repositorio.       |
| `git branch <rama>`    | Crea una nueva rama en el repositorio.                |
| `git checkout <rama>`  | Cambia a otra rama existente.                         |
| `git merge <rama>`     | Fusiona los cambios de otra rama en la rama actual.   |
| `git remote add origin <url>` | Vincula el repositorio local con un repositorio remoto en GitHub. |
| `git push origin <rama>` | Envía los commits locales al repositorio remoto en GitHub. |
| `git pull origin <rama>` | Trae los cambios del repositorio remoto a la rama local. |

## 3. Proceso paso a paso para enviar cambios a GitHub  
A continuación se describe el flujo más habitual para crear un repositorio, hacer cambios y subirlos:

1. Crear o clonar el repositorio:  
   ```bash
   git init

**Practica Git**
![Comandos](imagenes/git1.jpg)

**Practica Git**
![Comandos](imagenes/git.jpg)
