# 03 - Dietas al Día

## Descripción

Este espacio contiene los artefactos relacionados con el caso de estudio
"Dietas al Día", específicamente el flujo de asignación de tratamiento
nutricional.

## Artefactos

- Prototipo funcional de alta fidelidad
- Matriz de trazabilidad
- Enlace al prototipo en Figma
- Documentación de requisitos y validación

## Requisitos funcionales

- **RF01:** El sistema debe mostrar las dietas asociadas a la enfermedad
  registrada del paciente en un único paso.
- **RF02:** El sistema debe señalar de forma inequívoca las dietas que
  contienen alimentos alérgenos o incompatibles con el paciente antes de
  confirmar.
- **RF03:** El sistema debe permitir consultar la ficha técnica completa de
  una dieta sin perder el contexto del paciente.
- **RF04:** El sistema debe permitir seleccionar una dieta segura en menos de
  90 segundos sin pasar por alto ninguna alerta.

## Herramienta

**Figma**

Prototipo:
https://www.figma.com/proto/MSVn6LQddP3iaarTq6elVz/Sin-t%C3%ADtulo?node-id=1-110&t=WJRIwEnOINeSvbnx-1

## Flujo principal

**Inicio de sesión → Mis pacientes → Historia clínica → Dietas compatibles
→ Ficha técnica → Confirmación → Asignación completada**

## Metadatos

| Campo | Información |
|---|---|
| ID único | DA-ART-001 |
| Versión | 1.0 |
| Estado final | Cerrado |
| Autor / Revisor | Estudiante |
| Fecha de cierre | 22/09/2026 |
| Artefactos relacionados | PROTOTIPADO.pdf, PROTOTIPADO.docx, Figma y Matriz de trazabilidad |

## Trazabilidad

La relación de los artefactos permite seguir el flujo:

**EPC28 → RF01–RF04 → CA1–CA4 → Prototipo → Validación → Matriz de trazabilidad**

## Control de versiones

**Versión:** 1.0

Los artefactos se gestionan mediante GitHub como sistema de control de
versiones para conservar el historial de cambios y facilitar la trazabilidad.

## Validación

Los criterios de aceptación CA1–CA4 fueron validados mediante el prototipo.

En la prueba de usuario documentada, se completó el recorrido en **50 segundos**,
cumpliendo el tiempo establecido para CA4.

## Observaciones

La matriz de trazabilidad identifica como brecha la ausencia de código fuente
disponible entre los artefactos consultados. No se incorpora código inventado.
